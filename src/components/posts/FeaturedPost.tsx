import superLeagueResponsive from "../../assets/SuperLeagueScrabble_VisuelOfficiel_AllSmart2024.jpg"
import section2 from "../../assets/section2.jpg"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import ReactHtmlParser from "react-html-parser"
import { Cpu } from "lucide-react"

type Post = {
    title: {
        rendered: string
    }
    excerpt: {
        rendered: string
    }
}
export default function FeaturedPost() {
    const [post,setPost] = useState<Post | null>(null)
    const [featuredImage,setFeaturedImage] = useState<number | null>(null)
    const [featuredImageUrl,setFeaturedImageUrl] = useState<string | null>(null)

    const getImageUrl = async (id: number) => {
        const response = await fetch(`https://blog.fecascrab.com/wp-json/wp/v2/media/${id}`)
        const data = await response.json()
        return data.link
    }
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch("https://blog.fecascrab.com/wp-json/wp/v2/posts?categories=3")
            const data = await response.json()
            setPost(data[0])
            setFeaturedImage(data[0].featured_media)
            const imageUrl = await getImageUrl(data[0].featured_media)
            setFeaturedImageUrl(imageUrl)
            
        }
        fetchPost()
    }, [])
    return (
        <div> {/* News Section */}
        <div className="space-y-6">
          <h2 className="text-4xl title-font  font-bold max-sm:text-4xl text-red-600">À LA UNE</h2>
          
            
             
              <div className="relative max-sm:hidden h-[200px] md:h-[300px]">
                <img
                  src={featuredImageUrl || ""}
                  alt="Super Master 2024"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
              <div className="relative hidden max-sm:block h-[400px] md:h-[300px]">
                <img
                  src={featuredImageUrl || ""}
                  alt="Super Master 2024"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
    
              <div>
                <h2 className='text-3xl title-bold text-[#00723e] max-sm:text-2xl font-bold'>{post !== null && post.title.rendered}</h2>
                <p className='text-2xl title-second max-sm:text-xl mt-5'>{post !== null && ReactHtmlParser(post.excerpt.rendered)}</p>
                <div className='mt-3 max-sm:mt-6 max-sm:justify-start flex items-center justify-center'>
              <Link to={"/events/super-master-scrabble"}><Button className='bg-red-600  text-white px-8 py-6 text-3xl max-sm:text-2xl title-font'>Découvrir</Button></Link>
              
            </div>
              </div>
            </div>
        </div>
    )
}