import { useEffect, useState } from "react"
import ReactHtmlParser from "react-html-parser"
import { CalendarDays, Clock, User } from "lucide-react"
import Loader from "../../components/ui/loader"
import { useParams } from "react-router-dom"

import NavMobile from "../../components/NavMobile"
import HeaderSection from "../../components/headerSection"
import {Helmet} from "react-helmet-async"
import logoIcon from "../../assets/logo.png"
import Footer from "../../components/Footer"
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

//type Comment = {
//    author_name: string;
//    content: {
//        rendered: string;
//    };
//    date: string;
//    id: number;
//}

export default function PostDetail() {
    const { postUrl } = useParams()
    const [post, setPost] = useState<Post | null>(null)
    const [author, setAuthor] = useState<Author | null>(null)
    const [featuredImageUrl, setFeaturedImageUrl] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    //const [comments, setComments] = useState<Comment[]>([])
    //const [newComment, setNewComment] = useState({
    //    author_name: '',
    //    author_email: '',
    //    content: ''
    //})

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

    //useEffect(() => {
    //    const fetchComments = async () => {
    //        try {
    //            const response = await fetch(`https://blog.fecascrab.com/wp-json/wp/v2/comments?post=${post?.id}`);
    //            const data = await response.json();
    //            setComments(data);
    //            } catch (error) {
    //                console.error("Error fetching comments:", error);
    //        }
    //    };

    //    if (post?.id) {
    //        fetchComments();
    //    }
    //}, [postUrl, post?.id]);

    //const handleSubmitComment = async (e: React.FormEvent) => {
    //    e.preventDefault();
    //    try {
    //        const response = await fetch('https://blog.fecascrab.com/wp-json/wp/v2/comments', {
    //            method: 'POST',
    //            headers: {
    //                'Content-Type': 'application/json',
    //            },
    //            body: JSON.stringify({
    //                post: post?.id,
    //                ...newComment
    //            }),
    //        });

    //        if (response.ok) {
    //            setNewComment({
    //                author_name: '',
    //                author_email: '',
    //                content: ''
    //            });
    //            const updatedComments = await response.json();
    //              setComments([...comments, updatedComments]);
    //        }
    //    } catch (error) {
    //        console.error("Error posting comment:", error);
    //    }
    //};

    if (loading) return <Loader />

    return (
        <>
        <Helmet>
      <title>FecaScrab - Féderation Camerounaise de Scrabble</title>
      <link rel="icon" type="image/svg+xml" href={logoIcon} />
      <meta name="robots" content="index, follow" />
      <link rel='canonical' href={ window.location.href } />
      <meta name='description' content='Féderation Camerounaise de Scrabble'/>
      <meta name='keywords' content='scrabble,cameroun,féderation camerounaise,cameroon,compétition scrabble,scraper,jeu de société,mot' />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="FecaScrab - Féderation Camerounaise de Scrabble" />
      <meta property="og:url" content="fecascrab.com" />
      <meta property="og:image" content={featuredImageUrl || ""} />
      <meta property="og:image:secure_url" content={featuredImageUrl || ""} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`Logo site`} />
            <meta name="twitter:creator" content="fecascrab" />
            <meta name="twitter:card" content="Féderation Camerounaise de Scrabble" />
            <meta name="twitter:title" content="Féderation Camerounaise de Scrabble" />
            <meta name="twitter:site" content="https://fecascrab.com" />
            <meta name="twitter:image" content={featuredImageUrl || ""} />
            <meta name="twitter:description" content='scrabble,cameroun,féderation camerounaise,cameroon,compétition scrabble,scraper,jeu de société,mot' />
    </Helmet>
        
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
        <Footer/>
        </>
    )
} 