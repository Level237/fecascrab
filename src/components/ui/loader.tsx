import './loader.css'

export default function Loader() {
  return (
    <div className="flex items-center bg-white justify-center h-screen">
  <div className="flex space-x-2">
    <div className="h-4 w-4  text-white font-bold bg-green-800 p-6 flex items-center justify-center rounded-full animate-bounce">F</div>
    <div className="h-4 w-4 text-white font-bold bg-red-600 p-6 flex items-center justify-center rounded-full animate-bounce200">C</div>
    <div className="h-4 w-4 text-white font-bold p-6 flex items-center justify-center bg-yellow-400 rounded-full animate-bounce400">S</div>
  </div>
</div>
  


  )
}
