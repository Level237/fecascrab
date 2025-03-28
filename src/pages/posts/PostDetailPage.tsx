import { useEffect, useState } from "react"
import ReactHtmlParser from "react-html-parser"
import { CalendarDays, Clock, User } from "lucide-react"
import Loader from "../../components/ui/loader"
import { useParams } from "react-router-dom"

import NavMobile from "../../components/NavMobile"
import HeaderSection from "../../components/headerSection"

type Post = {
    id: number;
    title: {
        rendered: string
    }
    content: {
        rendered: string
    }
    date: string
    author: number
    featured_media: number
}

type Author = {
    name: string
    avatar_urls: {
        [key: string]: string
    }
}

type Comment = {
    author_name: string;
    content: {
        rendered: string;
    };
    date: string;
    id: number;
}

export default function PostDetail() {
    const { postUrl } = useParams()
    const [post, setPost] = useState<Post | null>(null)
    const [author, setAuthor] = useState<Author | null>(null)
    const [featuredImageUrl, setFeaturedImageUrl] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState<Comment[]>([])
    const [newComment, setNewComment] = useState({
        author_name: '',
        author_email: '',
        content: ''
    })

    const getImageUrl = async (id: number) => {
        const response = await fetch(`https://blog.fecascrab.com/wp-json/wp/v2/media/${id}`)
        const data = await response.json()
        return data.link
    }

    const getAuthor = async (id: number) => {
        const response = await fetch(`https://blog.fecascrab.com/wp-json/wp/v2/users/${id}`)
        const data = await response.json()
        return data
    }

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://blog.fecascrab.com/wp-json/wp/v2/posts?slug=${postUrl}`)
                const data = await response.json()
                setPost(data[0])
                
                const [imageUrl, authorData] = await Promise.all([
                    getImageUrl(data[0].featured_media),
                    getAuthor(data[0].author)
                ])
                console.log(imageUrl)
                setFeaturedImageUrl(imageUrl)
                setAuthor(authorData)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching post:", error)
                setLoading(false)
            }
        }
        fetchPost()
    }, [postUrl])

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`https://blog.fecascrab.com/wp-json/wp/v2/comments?post=${post?.id}`);
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        if (post?.id) {
            fetchComments();
        }
    }, [postUrl, post?.id]);

    const handleSubmitComment = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://blog.fecascrab.com/wp-json/wp/v2/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post: post?.id,
                    ...newComment
                }),
            });

            if (response.ok) {
                setNewComment({
                    author_name: '',
                    author_email: '',
                    content: ''
                });
                const updatedComments = await response.json();
                setComments([...comments, updatedComments]);
            }
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };

    if (loading) return <Loader />

    return (
        <section>
              <HeaderSection />
              <NavMobile/>
        <article className="max-w-4xl mx-auto px-4 py-8">
           
            <div className="relative h-[400px] mb-8">
                <img
                    src={featuredImageUrl || ""}
                    alt={post?.title.rendered || ""}
                    className="rounded-2xl object-cover w-full h-full"
                />
            </div>

            {/* Article Header */}
            <div className="space-y-4 mb-8">
                <h1 className="text-4xl font-bold text-[#00723e]">
                    {post?.title.rendered && ReactHtmlParser(post.title.rendered)}
                </h1>

                {/* Meta Information */}
                <div className="flex items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                        <User size={20} />
                        <span>{author?.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarDays size={20} />
                        <span>{new Date(post?.date || "").toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={20} />
                        <span>5 min read</span>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div dangerouslySetInnerHTML={{ __html: post?.content.rendered || "" }} className=" max-w-none">
                
            </div>

          
        </article>
        </section>
    )
} 