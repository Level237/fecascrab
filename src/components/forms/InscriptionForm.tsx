import { useState } from 'react'
import { Input } from '../ui/input'
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
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Checkbox } from '../ui/checkbox'
import useForm from '../../hooks/use-form'
export default function InscriptionForm() {
  const [phone, setPhone] = useState('');
    const [birth]=useState("")

    const {
      value:enterName,
      hasError:NameError,
      valueHandler:enteredNameHandler,
      blurHandler:blurNameHandler,
      reset:resetName,
      valueIsValid:nameIsvalid
    }=useForm((value:any)=>value.trim()!=="")
    console.log(birth)

    const submitFormHandler=(event:any)=>{
      event.preventDefault()
      if(!nameIsvalid){
          return;
      }
    }
    const validClassName=NameError ? "border border-red-400" : ""
  return (
    <section className='mb-20'>
        <div className='mb-5'>
        <h2 className='font-bold text-3xl max-sm:text-xl'>INFORMATIONS PERSONNELLES</h2>
        </div>

        <form action="">
        <div className='mb-6'>
            <Input placeholder='Nom et Prénom' 
              value={enterName}
              onChange={enteredNameHandler}
              onBlur={blurNameHandler}
            className={`py-8 rounded-xl px-6 placeholder:text-xl max-sm:placeholder:text-lg text-xl bg-gray-100 h-12 ${validClassName}`}/>
            
        </div>
        {NameError && <p className="text-xs mt-[-10px] text-red-600">Ne peut pas etre vide</p>}
        <div className='mb-5 mt-3'>
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
            <Input 
            type='email'   
            placeholder='E-mail'
          
            className='py-8 rounded-xl max-sm:placeholder:text-lg px-6 placeholder:text-xl text-xl bg-gray-100 h-12'/>
        </div>
        <Separator className='text-black w-full bg-black mt-12'/>
        <section className='flex flex-col pt-8'>
          <div>
          <h2 className='font-bold text-3xl max-sm:text-xl'>PARTICIPATION AU TOURNOI</h2>
          </div>
          <div>
            <h2 className='mx-5 max-sm:mt-6 text-xl max-sm:text-md italic'>Catégorie d'inscription(cochez une option):</h2>
          </div>
          <div>
          <RadioGroup defaultValue="comfortable" className='w-full mx-12 max-sm:mx-2 max-sm:mt-6 mt-4'>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="Joueur étranger" id="r1" />
        <Label htmlFor="r1"><h2 className='text-xl max-sm:text-lg font-bold '>Joueur étranger <span className='font-light'>-150€ (Repas et hébergement inclus)</span> </h2></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="Joueur local" id="r2" />
        <Label htmlFor="r2"><h2 className='text-xl max-sm:text-lg font-bold'>Joueur local (Cameroun) <span className='font-light'>-75€(Repas et hébergement inclus)</span> </h2></Label>
      </div>
    
    </RadioGroup>
          </div>
        </section>
        <Separator className='text-black w-full bg-black mt-12'/>
        <section className='flex flex-col pt-8'>
          <div>
          <h2 className='font-bold max-sm:text-xl text-3xl'>COMPÉTITION</h2>
          </div>
          <div>
            <h2 className='mx-5 max-sm:text-md text-xl italic'>Type de compétition choisie(cochez une ou plusieurs option):</h2>
          </div>
          <div className='w-full mx-12 max-sm:mx-2 max-sm:mt-8 mt-4'>
          <div className="flex items-center space-x-2">
      <Checkbox id="terms2" className='bg-gray-200 '/>
      <label
        htmlFor="terms2"
        className="text-xl max-sm:text-lg font-bold leading-none peer-disabled:opacity-70"
      >
       Duplicate Mix
      </label>
    </div>
    <div>
    <RadioGroup  className='w-full mx-12 max-sm:mx-2 mt-4'>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="3 Manches d'Elite" id="r1" />
        <Label htmlFor="r1"><h2 className='text-xl max-sm:text-lg font-light '>3 Manches d'Elite (Semi Blitz 2 minutes)</h2></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="2 Manches Blitz" id="r2" />
        <Label htmlFor="r1"><h2 className='text-xl max-sm:text-lg font-light '>2 Manches Blitz (1 minute)</h2></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="1 Partie Originale Joker" id="r2" />
        <Label htmlFor="r1"><h2 className='text-xl max-sm:text-lg font-light '>1 Partie Originale Joker</h2></Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="1 Partie Originale" id="r2" />
        <Label htmlFor="r1"><h2 className='text-xl max-sm:text-lg font-light '>1 Partie Originale</h2></Label>
      </div>
    </RadioGroup>
    </div>
          </div>
          <div className='w-full mx-12 max-sm:mx-2 mt-4'>
          <div className="flex items-center space-x-2">
      <Checkbox id="terms2" className='bg-gray-200 '/>
      <label
        htmlFor="terms2"
        className="text-xl max-sm:text-lg font-bold leading-none peer-disabled:opacity-70"
      >
      Classique
      </label>
    </div>
    <div>
    <RadioGroup  className='w-full mx-12 max-sm:mx-3 mt-4'>
      <div className="flex items-center space-x-2">
        <RadioGroupItem className='' value="17 Rounds + Demi-finale (2 Manches gagnantes) + Finale (3 manches gagnantes)" id="r1" />
        <Label htmlFor="r1"><h2 className='text-xl max-sm:text-lg font-light '>17 Rounds + Demi-finale (2 Manches gagnantes) + Finale (3 manches gagnantes)</h2></Label>
      </div>
    </RadioGroup>
    </div>
          </div>
        </section>
        <Separator className='text-black w-full bg-black mt-12'/>
        <section className='flex flex-col pt-8'>
            <h2 className='font-bold max-sm:text-xl text-3xl'>CONDITIONS</h2>
            <div className='w-full mx-12 max-sm:mx-2 mt-4'>
          <div className="flex items-start space-x-2">
      <Checkbox id="terms2" className='bg-gray-200 '/>
      <label
        htmlFor="terms2"
        className="text-xl max-sm:text-lg leading-8 font-light peer-disabled:opacity-70"
      >
      Je déclare avoir pris connaissance des conditions de participation et des frais d’inscription?<br></br>

et m’engage à respecter le règlement des Super Masters de Scrabble 2025.
      </label>
    </div>
  
          </div>
        </section>
        <Separator className='text-black w-full bg-black mt-12'/>
        <section className='flex flex-col pt-8'>
            <h2 className='font-bold max-sm:text-xl text-3xl'>INFORMATIONS DE CONTACT DE L'ORGANISATION</h2>
            <div className='w-full mx-12 max-sm:mx-2 mt-4'>
                <h2 className='mx-5 text-xl font-light'>Pour toute
question ou précision, veuillez contacter l’équipe de la FECASCRAB</h2>
            </div>
            <div className='w-full flex flex-col gap-3 mx-24 max-sm:mx-3 mt-6'>
              <div className='flex items-center justify-start gap-2'>&#9711; <h2 className='text-xl font-bold '>Téléphone : <span className='font-light'>(+33) 758 641 042 / (+237) 699 804 338</span> </h2></div>
              <div className='flex items-center justify-start gap-2'>&#9711; <h2 className='text-xl font-bold '>Email : <span className='font-light'>assomo.scrabble@gmail.com</span> </h2></div>
              <div className='flex items-center justify-start gap-2'>&#9711; <h2 className='text-xl font-bold '>Adresse : <span className='font-light'>Bureau de la FECASCRAB, Douala, Cameroun</span> </h2></div>
            </div>
        </section>
        <section className='flex mt-10 justify-center items-center'>
                <Button className='bg-red-600 text-white px-24 py-6 rounded-2xl'>VALIDER</Button>
        </section>
        </form>
        

       
    </section>
  )
}
