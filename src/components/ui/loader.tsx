import './loader.css'

export default function Loader() {
  return (
    <div className="flex items-center bg-[#02abee] justify-center h-screen">
  <div className="flex space-x-2">
    <div className="h-4 w-4 bg-green-800 rounded-full animate-bounce"></div>
    <div className="h-4 w-4 bg-red-600 rounded-full animate-bounce200"></div>
    <div className="h-4 w-4 bg-yellow-400 rounded-full animate-bounce400"></div>
  </div>
</div>
  


  )
}
