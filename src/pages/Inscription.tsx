import {  Navigate} from 'react-router-dom'

export default function Inscription() {


  window.location.href="programme-de-la-compétition"
  return (
    <Navigate to={"/programme-de-la-compétition"} state={{from:location}} replace />

    
  )
}
