import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'
import { SelectValue } from '@radix-ui/react-select'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function JoinTeam({source}:{source:string}) {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [town, setTown] = useState("")
    const [phone, setPhone] = useState("")
    const [objet, setObjet] = useState("")
    const [message, setMessage] = useState("")
    const navigate=useNavigate()
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
    const handleObjetChange = (e: React.ChangeEvent<HTMLInputElement>) => setObjet(e.target.value)
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        console.log(email)
        try{
       
            axios.post('https://api.fecascrab.com/rejoindre/team',{
              "email":email,
              "source":source,
              "phone":phone,
              "objet":objet,
              "message":message,
              "town":town
            },{
              headers: {
                "Content-Type": "application/json",
              }
            }).then((res)=>{
              
              console.log(res)
              setLoading(false)
              navigate('/confirm')
            }).catch((err)=>{
              console.error(err)
              setLoading(false)
            })
    }catch(err){
        
    }
}
  return (
    <section className='flex title-second flex-col gap-4'>

        <form onSubmit={handleSubmit} action="POST">

        <div className='mb-3'>
            <Input
            required
             name='email'
             value={email}
            type='email'
            placeholder='E-mail'
            onChange={handleEmailChange}
            className={`py-6 rounded-xl title-second  max-sm:placeholder:text-lg px-6 placeholder:text-xl text-xl  h-12`}/>
            
        </div>
        <div className='flex max-sm:flex-col mb-4 max-sm:items-start gap-4 items-center'>
            <div className='w-[100%]'>
                <Select onValueChange={(value: string) => setTown(value)} name='town'  defaultValue="douala">
                        
                        <SelectTrigger className="py-6 ">
                        <SelectValue placeholder="Sélectionner la ville" />
                        </SelectTrigger>
                    
                    <SelectContent  className="bg-white py-6  ">
                        <SelectItem value="douala">Douala</SelectItem>
                        <SelectItem value="Yaoundé">Yaoundé</SelectItem>
                        <SelectItem value="bafoussam">Bafoussam</SelectItem>
                        <SelectItem value="bagangte">Bagangté</SelectItem>
                        <SelectItem value="autres">Autres</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='w-[100%]'>
            <Input
            required
             name='phone'
             value={phone}
            type='text'
            placeholder='Numéro de téléphone'
            onChange={handlePhoneChange}
            className={`py-6 rounded-xl title-second  max-sm:placeholder:text-lg px-6 placeholder:text-xl text-xl  h-12`}/>
            </div>
        </div>
        <div className='mb-3'>
            <Input
            required
             name='objet' 
             value={objet}
            type='text'
            placeholder='Objet'
            onChange={handleObjetChange}
            className={`py-6 rounded-xl title-second  max-sm:placeholder:text-lg px-6 placeholder:text-xl text-xl  h-12`}/>
            
        </div>
        <div className='mb-3'>
        <Textarea
        onChange={handleMessageChange}
        required
              value={message}
              placeholder="Votre message"
              className="min-h-[150px]"
              name='message'
            />
            
        </div>
        <div className='mt-4 flex justify-center'>
        <Button disabled={loading} type='submit' className='bg-red-600 title-font text-2xl text-white px-24 py-6 rounded-2xl title-font'>SOUMETTRE {loading && <div role="status">
            <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>}</Button>
        </div>
       
        </form>
           
    </section>
  )
}
