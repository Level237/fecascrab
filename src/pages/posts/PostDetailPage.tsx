import { useEffect, useState } from "react"
import ReactHtmlParser from "react-html-parser"
import { CalendarDays, Clock, User } from "lucide-react"
import Loader from "../../components/ui/loader"
import { useParams } from "react-router-dom"

import NavMobile from "../../components/NavMobile"
import HeaderSection from "../../components/headerSection"

type Post = {
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

            {/* Section Commentaires */}
            <div className="mt-16 space-y-8">
                <h2 className="text-2xl font-bold text-[#00723e]">Commentaires</h2>
                
                {/* Liste des commentaires */}
                <div className="space-y-6">
                    {comments.length === 0 ? (
                        <p className="text-gray-500 italic">Aucun commentaire disponible</p>
                    ) : (
                        comments.map((comment) => (
                            <div key={comment.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <User size={18} className="text-gray-600" />
                                    <span className="font-medium">{comment.author_name}</span>
                                    <span className="text-sm text-gray-500">
                                        {new Date(comment.date).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="text-gray-700">
                                    {ReactHtmlParser(comment.content.rendered)}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Formulaire de commentaire */}
                <form onSubmit={handleSubmitComment} className="mt-8 space-y-4 bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-[#00723e]">Laisser un commentaire</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="author_name" className="block text-sm font-medium text-gray-700">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="author_name"
                                value={newComment.author_name}
                                placeholder="Entrez votre nom"
                                onChange={(e) => setNewComment({...newComment, author_name: e.target.value})}
                                className="mt-1 block w-full rounded-md border-gray-300 border-2 h-10 px-4 shadow-sm focus:border-[#00723e] focus:ring-[#00723e]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="author_email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="author_email"
                                value={newComment.author_email}
                                placeholder="Entrez votre email"
                                onChange={(e) => setNewComment({...newComment, author_email: e.target.value})}
                                className="mt-1 block w-full h-10 px-4 rounded-md border-gray-300 border-2 shadow-sm focus:border-[#00723e] focus:ring-[#00723e]"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Commentaire
                        </label>
                        <textarea
                            id="content"
                            rows={4}
                            value={newComment.content}
                            onChange={(e) => setNewComment({...newComment, content: e.target.value})}
                            className="mt-1 block h-20 w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-[#00723e] focus:ring-[#00723e]"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#00723e] hover:bg-[#005e33] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00723e]"
                    >
                        Envoyer le commentaire
                    </button>
                </form>
            </div>
        </article>
        </section>
    )
} 