import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, User } from "lucide-react";
import ReactHtmlParser from "react-html-parser";
import Loader from "../../components/ui/loader";
import HeaderSection from "../../components/headerSection";
import NavMobile from "../../components/NavMobile";

type Post = {
    id: number;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    slug: string;
    date: string;
    featured_media: number;
    author: number;
};

type Author = {
    name: string;
    avatar_urls: {
        [key: string]: string;
    };
};

export default function ArticlesPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [authors, setAuthors] = useState<{ [key: number]: Author }>({});
    const [featuredImages, setFeaturedImages] = useState<{ [key: number]: string }>({});

    const getImageUrl = async (id: number) => {
        try {
            const response = await fetch(`https://blog.fecascrab.com/wp-json/wp/v2/media/${id}`);
            const data = await response.json();
            return data.link;
        } catch (error) {
            console.error("Error fetching image:", error);
            return null;
        }
    };

    const getAuthor = async (id: number) => {
        try {
            const response = await fetch(`https://blog.fecascrab.com/wp-json/wp/v2/users/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching author:", error);
            return null;
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://blog.fecascrab.com/wp-json/wp/v2/posts?per_page=100");
                const data = await response.json();
                setPosts(data);

                // Fetch images and authors for all posts
                const imagePromises = data.map((post: Post) => getImageUrl(post.featured_media));
                const authorPromises = data.map((post: Post) => getAuthor(post.author));

                const images = await Promise.all(imagePromises);
                const authorData = await Promise.all(authorPromises);

                const imageMap: { [key: number]: string } = {};
                const authorMap: { [key: number]: Author } = {};

                data.forEach((post: Post, index: number) => {
                    if (images[index]) imageMap[post.id] = images[index];
                    if (authorData[index]) authorMap[post.author] = authorData[index];
                });

                setFeaturedImages(imageMap);
                setAuthors(authorMap);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <Loader />;

    return (
        <section className="min-h-screen bg-gray-50">
            <HeaderSection />
            <NavMobile />
            
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-[#00723e] mb-8">Tous les Articles</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link 
                            to={`/articles/${post.slug}`} 
                            key={post.id}
                            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={featuredImages[post.id] || ""}
                                    alt={ReactHtmlParser(post.title.rendered)}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            
                            <div className="p-6 space-y-4">
                                <h2 className="text-xl font-semibold text-[#00723e] line-clamp-2 group-hover:text-[#005e33]">
                                    {ReactHtmlParser(post.title.rendered)}
                                </h2>
                                
                                <div className="text-gray-600 line-clamp-3">
                                    {ReactHtmlParser(post.excerpt.rendered)}
                                </div>
                                
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <User size={16} />
                                        <span>{authors[post.author]?.name}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CalendarDays size={16} />
                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span>5 min</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} 