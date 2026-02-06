import { useState } from 'react'
import { Input } from '../ui/input'

// @ts-ignore
import { useCountries } from 'use-react-countries'
import axios from 'axios'
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Checkbox } from '../ui/checkbox'
import useForm from '../../hooks/use-form'

import { useNavigate } from 'react-router-dom'
import { Card } from '../ui/card'
import { FileText, Upload } from 'lucide-react'
export default function InscriptionForm() {
  const { countries } = useCountries()
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState("")
  const [widthShirt, setWidthShirt] = useState("")
  const [picture, setPicture] = useState<File | null>(null);
  const [pictureBase64, setPictureBase64] = useState("");

  const [pictureVaccination, setPictureVaccination] = useState<File | null>(null);
  const [pictureBase64Vaccination, setPictureBase64Vaccination] = useState("");
  const countriesSort = countries.sort((a: any, b: any) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  const [category, setCategory] = useState("")
  const [checkedItems, setCheckedItems] = useState([]);
  const navigate = useNavigate()
  const options = [
    {
      id: 1, label: 'Duplicate Mix',
      subChoice: [{ id: 5, choice: "3 Manches d'Elite (Semi Blitz 2 minutes)" }, { id: 6, choice: "2 Manches Blitz (1 minute)" }, { id: 7, choice: "1 Partie Originale Joker" }, { id: 8, choice: "1 Partie Originale" }]
    },
    { id: 2, label: 'Classique', subChoice: [{ id: 10, choice: "17 Rounds + Demi-finale (2 Manches gagnantes) + Finale (3 manches gagnantes)" }] },

  ];



  const handleChange = async (e: any) => {
    setPicture(e.target.files[0]);
    if (e.target.files[0]) {
      const base64 = await convertToBase64(e.target.files[0]);

      setPictureBase64(base64)
      console.log(base64)
    }

  }

  const handleChangeVaccination = async (e: any) => {
    setPictureVaccination(e.target.files[0]);
    if (e.target.files[0]) {
      const base64 = await convertToBase64(e.target.files[0]);

      setPictureBase64Vaccination(base64)
      console.log(base64)
    }

  }
  const {
    value: enterName,
    hasError: NameError,
    valueHandler: enteredNameHandler,
    blurHandler: blurNameHandler,
  } = useForm((value: any) => value.trim() !== "")
  const handleCheckboxChange = (label: any) => {
    setCheckedItems((prev: any) => {
      if (prev.includes(label)) {
        return prev.filter((item: any) => item !== label); // Décocher
      } else {
        return [...prev, label]; // Cocher
        console.log(category, value, confirm)
      }
    });
  };
  const {
    value: enterBirth,
    valueHandler: enteredBirthHandler,
    blurHandler: blurBirthHandler,
  } = useForm((value: any) => value.trim() !== "")

  const {
    value: enterEmail,
    hasError: emailError,
    valueHandler: enteredEmailHandler,
    blurHandler: blurEmailHandler,
  } = useForm((value: any) => value.trim() !== "")

  const enteredCategoryHandler = (value: string) => {
    setCategory(value)
    console.log(value)
  }

  console.log(widthShirt)
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const submitFormHandler = (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {


      axios.post('https://api.fecascrab.com/test/email', {
        "name": enterName,
        "email": enterEmail,
        "birth": enterBirth,
        "phone": phone,
        "category": category,
        "checkedItems": checkedItems,
        "passport": picture,
        "vaccination": pictureVaccination,
        "from": enterEmail,
        "nationality": value,
        "widthShirt": widthShirt
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json"
        }
      }).then((res) => {

        console.log(res)
        setLoading(false)
        navigate('/confirm')
      }).catch((err) => {
        console.error(err)
        setLoading(false)
      })
    }
    catch (error) {
      console.error("Error sending email:", error);
    }

    if (phone.length <= 4) {
      alert("Veuillez entrer un numéro de téléphone valide")
      return;
    }
    if (category.length === 0) {
      alert("Veuillez selectionnez une categorie")
      return;
    }
    if (checkedItems.length === 0) {
      alert("Veuillez selectionnez le type de compétition")
      return;
    }




  }

  const validClassName = NameError ? "border border-red-400" : ""
  const validClassEmail = emailError ? "border border-red-400" : ""

  return (
    <section className='mb-20'>
      <div className='mb-5'>
        <h2 className='font-bold title-font text-4xl max-sm:text-2xl'>INFORMATIONS PERSONNELLES <span className='text-[#f00] title-font'>[*]</span></h2>
      </div>

      <form encType="multipart/form-data" onSubmit={submitFormHandler} action="POST">

        <div className='mb-6'>
          <Input placeholder='Nom et Prénom'
            required
            name='name'
            value={enterName}
            onChange={enteredNameHandler}
            onBlur={blurNameHandler}
            className={`py-8 rounded-xl title-second px-6 placeholder:text-xl  placeholder:title-second max-sm:placeholder:text-md text-xl bg-gray-100 h-12 ${validClassName}`} />

        </div>
        {NameError && <p className="text-xs title-second mt-[-10px] text-red-600">Ne peut pas etre vide</p>}
        <div className='mb-5 mt-3'>
          <Input
            required
            name='birth'
            type='date'
            min="1970-01-01"
            max="2002-01-01"
            value={enterBirth}
            onChange={enteredBirthHandler}
            onBlur={blurBirthHandler}
            placeholder='Date de naissance' className='py-8 title-second rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 h-12' />
        </div>
        <div className='mb-3'>
          <div className="flex">
            <label className="sr-only title-second">Nationalité</label>
            <select name='nationality' onChange={(e) => setValue(e.target.value)} id="states" className="bg-gray-100 h-12 py-2 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option className='title-second ' selected>Nationalité</option>
              {countriesSort.map((country: any) => (
                <option className='title-second max:sm:text-2xl' value={country.name}>{country.name} {country.emoji}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='mb-3'>
          <PhoneInput
            required
            name='phone'
            defaultCountry="cm"
            placeholder='Phone number'
            countrySelectorStyleProps={{
              className: "flex title-second justify-center items-center py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 mr-2 border-transparent h-12"
            }}
            value={phone}

            inputProps={{
              required: true,
              className: " w-full text-second focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring flex justify-center items-center py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 h-12"
            }}

            onChange={(phone) => {

              setPhone(phone)
            }}
          />
        </div>
        <div className='mb-3'>
          <Input
            required
            name='email'
            type='email'
            placeholder='E-mail'
            value={enterEmail}
            onChange={enteredEmailHandler}
            onBlur={blurEmailHandler}
            className={`py-8 rounded-xl title-second ${validClassEmail} max-sm:placeholder:text-lg px-6 placeholder:text-xl text-xl bg-gray-100 h-12`} />

        </div>
        {emailError && <p className="text-xs title-second mt-[10px] text-red-600">Ne peut pas etre vide</p>}

        <div className='mb-3'>
          <select
            required
            name='width_shirt'
            value={widthShirt}
            onChange={(e) => setWidthShirt(e.target.value)}
            className={`w-full rounded-xl title-second px-6 text-xl bg-gray-100 h-16 focus:outline-none`}
          >
            <option value="" disabled>Taille de votre T-shirt</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
          </select>

        </div>

        <Card className="p-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="space-y-3">
            <Label htmlFor="idCardFront" className="text-sm font-medium text-gray-700">
              Document scanné de votre passport <span className="text-red-500">*</span>
            </Label>
            <div className="flex flex-col items-center gap-4">
              <div className="h-24 w-full rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 
                flex flex-col items-center justify-center overflow-hidden hover:border-[#02abee]
                transition-colors duration-200">
                {picture ? (
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FileText className="w-5 h-5 text-[#02abee]" />
                    {picture.name}
                  </div>
                ) : (
                  <div className="text-center p-2">
                    <Upload className="mx-auto h-6 w-6 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Scan de votre passport</p>
                  </div>
                )}
              </div>
              <Input
                type="file"
                id="idCardFront"
                accept=".pdf"
                name="passport"
                onChange={handleChange}
                className="w-full text-sm"
              />
            </div>
          </div>
        </Card>

        <Card className="p-4 mt-12 bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="space-y-3">
            <Label htmlFor="idCardFront" className="text-sm font-medium text-gray-700">
              Carnet de vaccination à jour
            </Label>
            <div className="flex flex-col items-center gap-4">
              <div className="h-24 w-full rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 
                flex flex-col items-center justify-center overflow-hidden hover:border-[#02abee]
                transition-colors duration-200">
                {pictureVaccination ? (
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FileText className="w-5 h-5 text-[#02abee]" />
                    {pictureVaccination.name}
                  </div>
                ) : (
                  <div className="text-center p-2">
                    <Upload className="mx-auto h-6 w-6 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Scan de votre carnet de vaccination</p>
                  </div>
                )}
              </div>
              <Input
                type="file"
                id="idCardFront"
                accept=".pdf"
                name="vaccination"
                onChange={handleChangeVaccination}
                className="w-full text-sm"
              />
            </div>
          </div>
        </Card>
        <Separator className='text-black w-full bg-black mt-12' />
        <section className='flex flex-col pt-8'>
          <div>
            <h2 className='font-bold title-font text-4xl max-sm:text-2xl'>PARTICIPATION AU TOURNOI <span className='text-[#f00]'>[*]</span></h2>
          </div>
          <div>
            <h2 className='mx-5  max-sm:mt-6 text-xl max-sm:text-md italic title-italic'>Catégorie d'inscription(cochez une option):</h2>
          </div>
          <div>
            <RadioGroup name='category' onValueChange={enteredCategoryHandler} defaultValue="comfortable" className='w-full mx-12 max-sm:mx-2 max-sm:mt-6 mt-4'>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className='' value="Joueur étranger" id="r1" />
                <Label htmlFor="r1"><h2 className='text-xl title-bold max-sm:text-lg font-bold '>Joueur étranger <span className='font-light title-medium'>-150€ (Repas et hébergement inclus)</span> </h2></Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className='' value="Joueur local" id="r2" />
                <Label htmlFor="r2"><h2 className='text-xl title-bold max-sm:text-lg font-bold'>Joueur local (Cameroun) <span className='font-light title-medium'>-75€(Repas et hébergement inclus)</span> </h2></Label>
              </div>

            </RadioGroup>
          </div>
          <div className='mt-5'>
            <h2 className='mx-5  max-sm:mt-6 text-lg max-sm:text-md max-sm:mx-2 italic title-italic'>NB:Les paiements sont collectés par la fédération dont vous dépendez.</h2>
          </div>
        </section>
        <Separator className='text-black w-full bg-black mt-4' />
        <section className='flex flex-col pt-8'>
          <div>
            <h2 className='font-bold title-font max-sm:text-2xl text-4xl'>COMPÉTITION <span className='text-[#f00]'>[*]</span></h2>
          </div>
          <div>
            <h2 className='mx-5 title-italic max-sm:text-md max-sm:w-full text-xl italic'>Type de compétition choisie(cochez une ou plusieurs option):</h2>
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



                      <label className="text-xl title-bold max-sm:text-lg font-bold leading-none peer-disabled:opacity-70" htmlFor={option.label}>{option.label}</label>
                    </div>


                  </div>


                ))}

              </div>
            </div>

          </div>

        </section>
        <input type="hidden" name="passportFull" value={pictureBase64} />
        <Separator className='text-black w-full bg-black mt-12' />
        <section className='flex flex-col pt-8'>
          <h2 className='font-bold title-font max-sm:text-2xl text-4xl mb-6'>Conditions de participation <span className='text-[#f00]'>[*]</span></h2>

          <div className='w-full px-4 sm:px-12 space-y-8'>
            {/* Participation Conditions */}
            <div className="space-y-4">

              <ul className="list-disc pl-5 space-y-3 text-lg title-medium font-light text-gray-800">
                <li>
                  <span className="font-bold">Respect du règlement :</span> Tout participant doit se conformer aux règles de la FECASCRAB et au code de conduite de l’événement.
                </li>
                <li>
                  <span className="font-bold">Engagement personnel :</span> En vous inscrivant, vous acceptez de participer aux séances et matchs programmés et d’adopter un comportement respectueux envers les autres joueurs et le personnel de l’organisation.
                </li>
                <li>
                  <span className="font-bold">Assurance personnelle :</span> Chaque participant est responsable de sa propre assurance médicale et accident durant toute la durée de l’événement.
                </li>
              </ul>
            </div>

            {/* Payment Conditions */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold title-font">Conditions de paiement</h3>
              <p className="text-lg title-medium font-light text-gray-800">
                Merci de vous rapprocher de votre <span className="font-bold">fédération d’origine</span> pour le paiement. Chaque fédération centralise tous les paiements.
              </p>
            </div>

            {/* Acceptance Checkbox */}
            <div className="flex items-start space-x-3 mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <Checkbox required id="terms2" className='mt-1 data-[state=checked]:bg-[#02abee] border-gray-400' />
              <label
                htmlFor="terms2"
                className="text-lg title-medium font-medium cursor-pointer leading-tight"
              >
                Je déclare avoir pris connaissance des conditions de participation et des frais d’inscription, et m’engage à respecter le règlement des Super Masters de Scrabble 2026.
              </label>
            </div>

          </div>
        </section>
        <Separator className='text-black w-full bg-black mt-12' />
        <section className='flex flex-col pt-8'>
          <h2 className='font-bold title-font max-sm:text-2xl text-4xl'>INFORMATIONS DE CONTACT DE L'ORGANISATION</h2>
          <div className='w-full max-sm:text-md mx-12 max-sm:mx-2 mt-4'>
            <h2 className='mx-5 title-medium max-sm:text-md text-xl'>Pour toute
              question ou précision, veuillez contacter l’équipe de la FECASCRAB :</h2>
          </div>
          <div className='w-full flex flex-col gap-3 mx-24 max-sm:mx-3 mt-6'>
            <div className='flex items-center justify-start gap-2'>
              &#9711;
              <h2 className='text-xl max-sm:text-md title-bold font-bold '>
                Téléphone : <a href="https://wa.me/237655767806" target="_blank" rel="noopener noreferrer" className='font-light title-medium text-blue-600 underline hover:text-blue-800 transition-colors'>WhatsApp: +237 655 767 806</a>
              </h2>
            </div>
            <div className='flex items-center justify-start gap-2'>
              &#9711;
              <h2 className='text-xl title-bold font-bold '>
                Adresse : <span className='font-light title-medium'>Bureau de la FECASCRAB, Douala, Cameroun</span>
              </h2>
            </div>
          </div>
        </section>
        <section className='flex mt-10 justify-center items-center'>
          <Button disabled={loading} type='submit' className='bg-red-600 title-bold text-white px-24 py-6 rounded-2xl'>VALIDER {loading && <div role="status">
            <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>}</Button>
        </section>
      </form>



    </section>
  )
}
