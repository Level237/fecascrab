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

export default function InscriptionFormFeminine() {

    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false)




    const [isParticipate, setIsParticipate] = useState("")
    const [isLicensed, setIsLicensed] = useState("")

    const navigate = useNavigate()



    const {
        value: enterName,
        hasError: NameError,
        valueHandler: enteredNameHandler,
        blurHandler: blurNameHandler,
    } = useForm((value: any) => value.trim() !== "")

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

    const {
        value: city,
        hasError: cityError,
        valueHandler: enteredCityHandler,
        blurHandler: blurCityHandler,
    } = useForm((value: any) => value.trim() !== "")
    const enteredParticipateHandler = (value: string) => {
        setIsParticipate(value)
    }
    const enteredLicensedHandler = (value: string) => {

        setIsLicensed(value)
    }

    const submitFormHandler = async (e: React.FormEvent) => {
        e.preventDefault()

        if (phone.length <= 4) {
            alert("Veuillez entrer un numéro de téléphone valide")
            return;
        }
        if (isParticipate.length === 0) {
            alert("Veuillez selectionnez une categorie")
            return;
        }
        if (isLicensed.length === 0) {
            alert("Veuillez selectionnez le type de compétition")
            return;
        }

        setLoading(true)

        try {
            const formData = new FormData();
            formData.append("name", enterName);
            formData.append("from", enterEmail);
            formData.append("birth", enterBirth);
            formData.append("phone", phone);
            formData.append("isParticipate", isParticipate);
            formData.append("isLicensed", isLicensed);
            formData.append("city", city);



            const res = await axios.post('https://api.fecascrab.com/inscription/feminine', formData, {
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

    const validClassCity = cityError ? "border border-red-400" : ""

    const inputBaseStyles = "w-full bg-white border border-gray-200 text-gray-900 text-lg rounded-xl focus:ring-2 focus:ring-[#02abee]/20 focus:border-[#02abee] block p-4 placeholder:text-gray-400 transition-all duration-200 shadow-sm hover:border-gray-300";

    return (
        <section className='mb-20 max-w-4xl mx-auto'>
            <div className='mb-8 text-center'>
                <h2 className='font-bold title-font text-4xl max-sm:text-3xl text-[#00723e]'>INFORMATIONS PERSONNELLES <span className='text-[#f00] title-font'>[*]</span></h2>
                <p className="mt-2 text-gray-600">Veuillez remplir vos informations avec précision</p>
            </div>

            <form encType="multipart/form-data" onSubmit={submitFormHandler} action="POST" className="space-y-6">

                <div className='group'>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Nom et Prénom</label>
                    <Input placeholder='Entrez votre nom et prénom'
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


                <div className='mb-3'>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Numéro de Téléphone(Whatsapp de préférence)</label>
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
                    <label className="block mb-2 text-sm font-medium text-gray-700">Ville de Résidence</label>
                    <Input
                        required
                        name='city'
                        type='text'
                        placeholder='Entrez votre ville de résidence'
                        value={city}
                        onChange={enteredCityHandler}
                        onBlur={blurCityHandler}
                        className={`${inputBaseStyles} h-14 ${validClassCity}`} />
                </div>
                {cityError && <p className="text-xs mt-1 text-red-600">La ville est requise</p>}

                <Separator className='text-black w-full bg-black mt-12' />
                <section className='flex flex-col pt-8'>
                    <div>
                        <h2 className='font-bold title-font text-4xl max-sm:text-2xl'>Information Scrabble <span className='text-[#f00]'>[*]</span></h2>
                    </div>

                    <section className="mt-12">
                        <div>
                            <h2 className='mx-5  mt-12max-sm:mt-6 text-xl max-sm:text-md italic title-italic'>Avez-vous déjà participé à un tournoi de scrabble?</h2>
                        </div>
                        <div>
                            <RadioGroup name='isParticipate' onValueChange={enteredParticipateHandler} defaultValue="comfortable" className='w-1/2 grid md:grid-cols-2 gap-4 mt-4'>
                                <div className={`relative flex items-center space-x-2 border rounded-xl p-4 transition-all cursor-pointer ${isParticipate === 'Oui' ? 'border-[#02abee] bg-blue-50 ring-1 ring-[#02abee]' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <RadioGroupItem value="Oui" id="r1" className="text-[#02abee]" />
                                    <Label htmlFor="r1" className="flex-1 cursor-pointer">
                                        <div className='text-lg font-bold text-gray-900'>Oui</div>
                                    </Label>
                                </div>

                                <div className={`relative flex items-center space-x-2 border rounded-xl p-4 transition-all cursor-pointer ${isParticipate === 'Non' ? 'border-[#02abee] bg-blue-50 ring-1 ring-[#02abee]' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <RadioGroupItem value="Non" id="r2" className="text-[#02abee]" />
                                    <Label htmlFor="r2" className="flex-1 cursor-pointer">
                                        <div className='text-lg font-bold text-gray-900'>Non</div>
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </section>
                    <section className="mt-12">
                        <div>
                            <h2 className='mx-5  mt-12max-sm:mt-6 text-xl max-sm:text-md italic title-italic'>Etes-vous déja licencié à la FECASCRAB?</h2>
                        </div>
                        <div>
                            <RadioGroup name='isLicensed' onValueChange={enteredLicensedHandler} defaultValue="comfortable" className='w-1/2 grid md:grid-cols-2 gap-4 mt-4'>
                                <div className={`relative flex items-center space-x-2 border rounded-xl p-4 transition-all cursor-pointer ${isLicensed === 'Oui' ? 'border-[#02abee] bg-blue-50 ring-1 ring-[#02abee]' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <RadioGroupItem value="Oui" id="r3" className="text-[#02abee]" />
                                    <Label htmlFor="r3" className="flex-1 cursor-pointer">
                                        <div className='text-lg font-bold text-gray-900'>Oui</div>
                                    </Label>
                                </div>

                                <div className={`relative flex items-center space-x-2 border rounded-xl p-4 transition-all cursor-pointer ${isLicensed === 'Non' ? 'border-[#02abee] bg-blue-50 ring-1 ring-[#02abee]' : 'border-gray-200 hover:border-gray-300'}`}>
                                    <RadioGroupItem value="Non" id="r2" className="text-[#02abee]" />
                                    <Label htmlFor="r2" className="flex-1 cursor-pointer">
                                        <div className='text-lg font-bold text-gray-900'>Non</div>
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </section>


                </section>


                <Separator className='text-black w-full bg-black mt-4' />


                <Separator className='text-black w-full bg-black mt-12' />
                <section className='flex flex-col pt-8'>
                    <h2 className='font-bold title-font max-sm:text-2xl text-4xl mb-6'>Participation & Paiement <span className='text-[#f00]'>[*]</span></h2>

                    <div className='w-full px-4 sm:px-12 space-y-8'>
                        {/* Participation Conditions */}
                        <div className="space-y-4">

                            <ul className="list-disc pl-5 space-y-3 text-lg title-medium font-light text-gray-800">
                                <li>
                                    <span className="font-bold">Frais de participation :</span> 30 000 FCFA (Inclut la licence nationale annuelle + Déjeuner)
                                </li>
                                <li>
                                    <span className="font-bold">Modalités de paiement :</span> Le paiement se fait directement auprès du trésorier Monsieur BIDOLE FRANCOIS.
                                </li>
                                <li>
                                    <span className="font-bold">Date  de paiement :</span> (A renseigner après règlement)
                                </li>
                            </ul>
                        </div>

                        {/* Payment Conditions */}


                        {/* Acceptance Checkbox */}
                        <div className="flex items-start space-x-3 mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                            <Checkbox required id="terms2" className='mb-1 data-[state=checked]:bg-[#02abee] border-gray-400' />
                            <label
                                htmlFor="terms2"
                                className="text-lg title-medium font-medium cursor-pointer leading-tight"
                            >
                                Je Confirme ma participation  au tournoi Féminin de Scrabble <br /> du 07 Mars 2026
                            </label>
                        </div>
                        <div className="flex items-start space-x-3 mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                            <Checkbox required id="terms2" className='mb-1 data-[state=checked]:bg-[#02abee] border-gray-400' />
                            <label
                                htmlFor="terms2"
                                className="text-lg title-medium font-medium cursor-pointer leading-tight"
                            >
                                Je Valide les conditions de participation définies <br />par la FECASCRAB
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
