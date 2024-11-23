import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Calendar } from "../ui/calendar"
import { CalendarIcon } from "lucide-react"
import { cn } from "../../lib/utils"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "../ui/select"
  import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../ui/popover"
import { format } from "date-fns"
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
export default function InscriptionForm() {
  const [phone, setPhone] = useState('');
    const [birth,setBirth]=useState("")
    const onChangeDate=(e:any)=>{
        setBirth(format(e,'PPP'))
    }
    console.log(birth)
  return (
    <section className='mb-44'>
        <div className='mb-5'>
        <h2 className='font-bold text-3xl'>INFORMATIONS PERSONNELLES</h2>
        </div>
        <div className='mb-3'>
            <Input placeholder='Nom et Prénom' className='py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 h-12'/>
        </div>
        <div className='mb-3'>
            <Input type='date'  min="1970-01-01" max="2002-01-01" placeholder='Date de naissance' className='py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 h-12'/>
        </div>
        <div className='mb-3'>
        <Select>
      <SelectTrigger className='py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 h-12'>
        <SelectValue placeholder="Nationalité" />
      </SelectTrigger>
      <SelectContent className='bg-gray-50'>
        <SelectGroup>
          <SelectLabel>Nationalité</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <div className='mb-3'>
        <PhoneInput
        defaultCountry="cm"
        placeholder='Phone number'
        countrySelectorStyleProps={{ 
          className:"flex justify-center items-center py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 mr-2 border-transparent h-12"
         }}
        value={phone}
       
        inputProps={{ 
          required:true,
          className:" w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring flex justify-center items-center py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 h-12"
         }}
        
        onChange={(phone) => setPhone(phone)}
      />
        </div>
        <div className='mb-3'>
            <Input type='email'   placeholder='E-mail' className='py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 h-12'/>
        </div>
        <Separator className='text-black w-full bg-black mt-12'/>
        <section className='flex flex-col pt-8'>
          <div>
          <h2 className='font-bold text-3xl'>PARTICIPATION AU TOURNOI</h2>
          </div>
          <div>
            <h2 className='mx-5 text-xl italic'>Catégorie d'inscription(cochez une option):</h2>
          </div>
          <div>
          <RadioGroup defaultValue="comfortable" className='w-full mx-12 mt-4'>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="Joueur étranger" id="r1" />
        <Label htmlFor="r1"><h2 className='text-xl font-bold '>Joueur étranger <span className='font-light'>-150 e(Repas et hébergement inclus)</span> </h2></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="Joueur local" id="r2" />
        <Label htmlFor="r2"><h2 className='text-xl font-bold'>Joueur local (Cameroun) <span className='font-light'>-75 e(Repas et hébergement inclus)</span> </h2></Label>
      </div>
    
    </RadioGroup>
          </div>
        </section>
        <Separator className='text-black w-full bg-black mt-12'/>
        <section className='flex flex-col pt-8'>
          <div>
          <h2 className='font-bold text-3xl'>COMPÉTITION</h2>
          </div>
          <div>
            <h2 className='mx-5 text-xl italic'>Type de compétition choisie(cochez une ou plusieurs option):</h2>
          </div>
          <div>
          <RadioGroup defaultValue="comfortable" className='w-full mx-12 mt-4'>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="Joueur étranger" id="r1" />
        <Label htmlFor="r1"><h2 className='text-xl font-bold '>Joueur étranger <span className='font-light'>-150 e(Repas et hébergement inclus)</span> </h2></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="Joueur local" id="r2" />
        <Label htmlFor="r2"><h2 className='text-xl font-bold'>Joueur local (Cameroun) <span className='font-light'>-75 e(Repas et hébergement inclus)</span> </h2></Label>
      </div>
    
    </RadioGroup>
          </div>
        </section>
    </section>
  )
}
