import { useState } from 'react'
import { Input } from '../ui/input'
// @ts-ignore
  import { useCountries } from 'use-react-countries'
  import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Checkbox } from '../ui/checkbox'
import useForm from '../../hooks/use-form'
import emailjs from 'emailjs-com';

import { useNavigate } from 'react-router-dom'
export default function InscriptionForm() {
  const { countries } = useCountries()
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState("")
  const countriesSort=countries.sort((a:any, b:any) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  const [category,setCategory]=useState("")
  const [checkedItems, setCheckedItems] = useState([]);
  const [radioSelections,setRadioSelections] = useState("");
  const [radioSelections1, setRadioSelections1] = useState({});
  const navigate=useNavigate()
  const options = [
    { id: 1, label: 'Duplicate Mix',
    subChoice:[{id:5,choice:"3 Manches d'Elite (Semi Blitz 2 minutes)"},{id:6,choice:"2 Manches Blitz (1 minute)"},{id:7,choice:"1 Partie Originale Joker"},{id:8,choice:"1 Partie Originale"}]
  },
    { id: 2, label: 'Classique' },
  
  ];
    const [birth]=useState("")

    const {
      value:enterName,
      hasError:NameError,
      valueHandler:enteredNameHandler,
      blurHandler:blurNameHandler,
    }=useForm((value:any)=>value.trim()!=="")
    const handleCheckboxChange = (label:any) => {
      setCheckedItems((prev:any) => {
        if (prev.includes(label)) {
          return prev.filter((item:any) => item !== label); // Décocher
        } else {
          return [...prev, label]; // Cocher
          console.log(radioSelections,category,value,confirm)
        }
      });
    };
    const {
      value:enterBirth,
      valueHandler:enteredBirthHandler,
      blurHandler:blurBirthHandler,
    }=useForm((value:any)=>value.trim()!=="")
  
    const {
      value:enterEmail,
      hasError:emailError,
      valueHandler:enteredEmailHandler,
      blurHandler:blurEmailHandler,
    }=useForm((value:any)=>value.trim()!=="")

    
    const handleRadioChange = (value:string) => {
      setRadioSelections(value);
    };

    const handleRadioChange1 = (value:any) => {
      setRadioSelections1(value);
    };

    console.log(radioSelections1)
    console.log(checkedItems)
    const enteredCategoryHandler=(value:string)=>{
        setCategory(value)
        console.log(value)
    }
    console.log(birth)
    const SERVICE_ID = "service_9t071dd";
const TEMPLATE_ID = "template_2p8xoo8";
const PUBLIC_KEY = "QwNvfT3Vx-pl8jKkv";
    const submitFormHandler=(e:any)=>{
      e.preventDefault()
      
      
      setLoading(true)
      emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then((result:any) => {
        console.log(result.text);
        setLoading(false)

        navigate("/confirm")
        //alert('Message Sent Successfully')
      }, (error:any) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
      //sendEmail()
    }
    console.log(checkedItems)
    const validClassName=NameError ? "border border-red-400" : ""
    const validClassEmail=emailError ? "border border-red-400" : ""
  return (
    <section className='mb-20'>
        <div className='mb-5'>
        <h2 className='font-bold text-3xl max-sm:text-xl'>INFORMATIONS PERSONNELLES</h2>
        </div>

        <form  onSubmit={submitFormHandler} action="">
        <div className='mb-6'>
            <Input placeholder='Nom et Prénom'
            name='name' 
              value={enterName}
              onChange={enteredNameHandler}
              onBlur={blurNameHandler}
            className={`py-8 rounded-xl px-6 placeholder:text-xl max-sm:placeholder:text-lg text-xl bg-gray-100 h-12 ${validClassName}`}/>
            
        </div>
        {NameError && <p className="text-xs mt-[-10px] text-red-600">Ne peut pas etre vide</p>}
        <div className='mb-5 mt-3'>
            <Input 
             name='birth' 
            type='date'
            min="1970-01-01" 
            max="2002-01-01" 
            value={enterBirth}
            onChange={enteredBirthHandler}
            onBlur={blurBirthHandler}
            placeholder='Date de naissance' className='py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 h-12'/>
        </div>
        <div className='mb-3'>
        <div className="flex">
     <label  className="sr-only">Nationalité</label>
     <select name='nationality' onChange={(e)=>setValue(e.target.value)} id="states" className="bg-gray-100 h-12 py-2 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         <option selected>Nationalité</option>
         {countriesSort.map((country:any)=>(
               <option value={country.name}>{country.name} {country.emoji}</option>
         ))}
     </select>
 </div>
        </div>
        <div className='mb-3'>
        <PhoneInput
         name='phone' 
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
        
        onChange={(phone) => setPhone(phone) }
      />
        </div>
        <div className='mb-3'>
            <Input 
             name='email' 
            type='email'   
            placeholder='E-mail'
            value={enterEmail}
            onChange={enteredEmailHandler}
            onBlur={blurEmailHandler}
            className={`py-8 rounded-xl ${validClassEmail} max-sm:placeholder:text-lg px-6 placeholder:text-xl text-xl bg-gray-100 h-12`}/>
            
        </div>
        {emailError && <p className="text-xs mt-[10px] text-red-600">Ne peut pas etre vide</p>}
        <Separator className='text-black w-full bg-black mt-12'/>
        <section className='flex flex-col pt-8'>
          <div>
          <h2 className='font-bold text-3xl max-sm:text-xl'>PARTICIPATION AU TOURNOI</h2>
          </div>
          <div>
            <h2 className='mx-5 max-sm:mt-6 text-xl max-sm:text-md italic'>Catégorie d'inscription(cochez une option):</h2>
          </div>
          <div>
          <RadioGroup name='category' onValueChange={enteredCategoryHandler}   defaultValue="comfortable" className='w-full mx-12 max-sm:mx-2 max-sm:mt-6 mt-4'>
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
          <div className="flex items-center">
          <div className="flex flex-col gap-4 justify-center">
          {options.map(option => (

            <div className='flex flex-col'>
                     <div className='flex flex-row items-center gap-3'>
            
            <Checkbox
            name="checkedItems"
            value={option.label}
          key={option.id}
         
          onCheckedChange={() => handleCheckboxChange(option.label)}
          className="text-xl max-sm:text-lg font-bold leading-none peer-disabled:opacity-70"
        />
          
          
        
       <label  className="text-xl max-sm:text-lg font-bold leading-none peer-disabled:opacity-70" htmlFor={option.label}>{option.label}</label>
            </div>

            <div>
            <RadioGroup name='competitionType'  onValueChange={(value:any) => {
              
                handleRadioChange(value)
              
              
            }}   className='w-full mx-12 max-sm:mx-2 mt-4'>
              {option.subChoice &&  option?.subChoice.map((c:any)=>
              
              <div className="flex items-center space-x-2">
              <RadioGroupItem key={c.id} className='' value={c.choice}   id={c.id} />
              <Label htmlFor={c.id}><h2 className='text-xl max-sm:text-lg font-light '>{c.choice}</h2></Label>
            </div>
            
            )}
             
             </RadioGroup>
            </div>
            </div>
           
     
      ))}
      <div >
      <RadioGroup className='w-full mx-12 max-sm:mx-2 flex items-center mt-[-12px]' name='competitionType1' onValueChange={(value:any) => {
                handleRadioChange1(value)
            }}>
      <RadioGroupItem key="10" className='' value="17 Rounds + Demi-finale (2 Manches gagnantes) + Finale (3 manches gagnantes)"   id="10" />
                <Label htmlFor="10"><h2 className='text-xl max-sm:text-lg font-light '>17 Rounds + Demi-finale (2 Manches gagnantes) + Finale (3 manches gagnantes)</h2></Label>
                
                
                </RadioGroup>
      </div>
      
      </div>
    </div>

          </div>
        
        </section>
        <Separator className='text-black w-full bg-black mt-12'/>
        <section className='flex flex-col pt-8'>
            <h2 className='font-bold max-sm:text-xl text-3xl'>CONDITIONS</h2>
            <div className='w-full mx-12 max-sm:mx-2 mt-4'>
          <div className="flex items-start space-x-2">
      <Checkbox  className='bg-gray-200 '/>
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
                <Button disabled={loading} type='submit' className='bg-red-600 text-white px-24 py-6 rounded-2xl'>VALIDER {loading && <div role="status">
            <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>}</Button>
        </section>
        </form>
        

       
    </section>
  )
}
