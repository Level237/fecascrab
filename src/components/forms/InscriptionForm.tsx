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

  const [pictureVaccination, setPictureVaccination] = useState<File | null>(null);
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



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPicture(e.target.files[0]);
    }
  }

  const handleChangeVaccination = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPictureVaccination(e.target.files[0]);
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

  const submitFormHandler = async (e: React.FormEvent) => {
    e.preventDefault()

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

    setLoading(true)

    try {
      const formData = new FormData();
      formData.append("name", enterName);
      formData.append("email", enterEmail);
      formData.append("birth", enterBirth);
      formData.append("phone", phone);
      formData.append("category", category);
      formData.append("checkedItems", checkedItems.join(", "));
      formData.append("from", enterEmail);
      formData.append("nationality", value);
      formData.append("widthShirt", widthShirt);

      if (picture) {
        formData.append("passport", picture);
      }
      if (pictureVaccination) {
        formData.append("vaccination", pictureVaccination);
      }

      const res = await axios.post('https://api.fecascrab.com/test/email', formData, {
        headers: {
          "Accept": "application/json"
        }
      });

      console.log(res)
      setLoading(false)
      navigate('/confirm')
    } catch (error) {
      console.error("Error sending email:", error)
      setLoading(false)
      alert("Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.");
    }
  }

  const validClassName = NameError ? "border border-red-400" : ""
  const validClassEmail = emailError ? "border border-red-400" : ""

  const inputBaseStyles = "w-full bg-white border border-gray-200 text-gray-900 text-lg rounded-xl focus:ring-2 focus:ring-[#02abee]/20 focus:border-[#02abee] block p-4 placeholder:text-gray-400 transition-all duration-200 shadow-sm hover:border-gray-300";

  return (
    <section className='mb-20 max-w-4xl mx-auto'>
      <div className='mb-8 text-center'>
        <h2 className='font-bold title-font text-4xl max-sm:text-3xl text-[#00723e]'>INFORMATIONS PERSONNELLES <span className='text-[#f00] title-font'>[*]</span></h2>
        <p className="mt-2 text-gray-600">Veuillez remplir vos informations avec précision</p>
      </div>

      <form encType="multipart/form-data" onSubmit={submitFormHandler} action="POST" className="space-y-6">

        <div className='group'>
          <label className="block mb-2 text-sm font-medium text-gray-700">Nom complet</label>
          <Input placeholder='Ex: John Doe'
            required
            name='name'
            value={enterName}
            onChange={enteredNameHandler}
            onBlur={blurNameHandler}
            className={`${inputBaseStyles} h-14 ${validClassName}`} />

        </div>
        {NameError && <p className="text-xs title-second mt-[-10px] text-red-600">Ne peut pas etre vide</p>}
        <div className='group'>
          <label className="block mb-2 text-sm font-medium text-gray-700">Date de naissance</label>
          <Input
            required
            name='birth'
            type='date'
            min="1970-01-01"
            max="2002-01-01"
            value={enterBirth}
            onChange={enteredBirthHandler}
            onBlur={blurBirthHandler}
            className={`${inputBaseStyles} h-14`} />
        </div>

        <div className='group'>
          <label className="block mb-2 text-sm font-medium text-gray-700">Nationalité</label>
          <div className="relative">
            <select
              name='nationality'
              onChange={(e) => setValue(e.target.value)}
              className={`${inputBaseStyles} h-14 appearance-none cursor-pointer`}
            >
              <option className='text-gray-500' value="" selected>Sélectionnez votre nationalité</option>
              {countriesSort.map((country: any) => (
                <option key={country.name} value={country.name}>{country.name} {country.emoji}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
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

        <div className='group'>
          <label className="block mb-2 text-sm font-medium text-gray-700">Adresse Email</label>
          <Input
            required
            name='email'
            type='email'
            placeholder='exemple@email.com'
            value={enterEmail}
            onChange={enteredEmailHandler}
            onBlur={blurEmailHandler}
            className={`${inputBaseStyles} h-14 ${validClassEmail}`} />
        </div>
        {emailError && <p className="text-xs mt-1 text-red-600">L'email est requis</p>}

        <div className='group'>
          <label className="block mb-2 text-sm font-medium text-gray-700">Taille de T-shirt</label>
          <div className="relative">
            <select
              required
              name='width_shirt'
              value={widthShirt}
              onChange={(e) => setWidthShirt(e.target.value)}
              className={`${inputBaseStyles} h-14 appearance-none cursor-pointer`}
            >
              <option value="" disabled>Sélectionnez votre taille</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
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
            <RadioGroup name='category' onValueChange={enteredCategoryHandler} defaultValue="comfortable" className='w-full grid md:grid-cols-2 gap-4 mt-4'>
              <div className={`relative flex items-center space-x-2 border rounded-xl p-4 transition-all cursor-pointer ${category === 'Joueur étranger' ? 'border-[#02abee] bg-blue-50 ring-1 ring-[#02abee]' : 'border-gray-200 hover:border-gray-300'}`}>
                <RadioGroupItem value="Joueur étranger" id="r1" className="text-[#02abee]" />
                <Label htmlFor="r1" className="flex-1 cursor-pointer">
                  <div className='text-lg font-bold text-gray-900'>Joueur étranger</div>
                  <div className='text-sm text-gray-500'>150€ (Repas et hébergement inclus)</div>
                </Label>
              </div>

              <div className={`relative flex items-center space-x-2 border rounded-xl p-4 transition-all cursor-pointer ${category === 'Joueur local' ? 'border-[#02abee] bg-blue-50 ring-1 ring-[#02abee]' : 'border-gray-200 hover:border-gray-300'}`}>
                <RadioGroupItem value="Joueur local" id="r2" className="text-[#02abee]" />
                <Label htmlFor="r2" className="flex-1 cursor-pointer">
                  <div className='text-lg font-bold text-gray-900'>Joueur local (Cameroun)</div>
                  <div className='text-sm text-gray-500'>75€ (Repas et hébergement inclus)</div>
                </Label>
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
          <div className='w-full mt-6 space-y-4'>
            {options.map(option => (
              <div key={option.id} className="space-y-3">
                <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <Checkbox
                    name="checkedItems"
                    value={option.label}
                    id={option.label}
                    onCheckedChange={() => handleCheckboxChange(option.label)}
                    className="h-5 w-5 data-[state=checked]:bg-red-600 border-gray-400"
                  />
                  <label className="text-xl font-bold text-gray-900 cursor-pointer" htmlFor={option.label}>{option.label}</label>
                </div>
              </div>
            ))}
          </div>

        </section>

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
