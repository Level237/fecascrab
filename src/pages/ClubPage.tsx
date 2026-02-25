
import HeaderSection from '../components/headerSection'
import slide from "../assets/club.jpeg"
import NavMobile from '../components/NavMobile'
import { useEffect, useState } from 'react'
import Loader from '../components/ui/loader'
import logo from "../assets/logo-1.png"
import logoIcon from "../assets/logo.png"
import { Helmet } from "react-helmet-async"
import Footer from '../components/Footer'
import CtaInscription from '../components/Cta-inscription'
export default function ClubPage() {

        const [loading, setLoading] = useState(true);

        useEffect(() => {

                const fetchData = async () => {

                        await new Promise(resolve => setTimeout(resolve, 1500));
                        setLoading(false);
                };

                fetchData();
        }, []);
        return (
                <>
                        <Helmet>
                                <title>FecaScrab - Féderation Camerounaise de Scrabble</title>
                                <link rel="icon" type="image/svg+xml" href={logoIcon} />
                                <meta name="robots" content="index, follow" />
                                <link rel='canonical' href={window.location.href} />
                                <meta name='description' content='Féderation Camerounaise de Scrabble' />
                                <meta name='keywords' content='scrabble,cameroun,féderation camerounaise,cameroon,compétition scrabble,scraper,jeu de société,mot' />
                                <meta property="og:url" content={window.location.href} />
                                <meta property="og:type" content="website" />
                                <meta property="og:title" content="FecaScrab - Féderation Camerounaise de Scrabble" />
                                <meta property="og:url" content="fecascrab.com" />
                                <meta property="og:image" content={logo} />

                                <meta property="og:image:type" content="image/jpeg" />
                                <meta property="og:image:width" content="1200" />
                                <meta property="og:image:height" content="630" />
                                <meta property="og:image:alt" content={`Logo site`} />
                                <meta name="twitter:creator" content="fecascrab" />
                                <meta name="twitter:card" content="Féderation Camerounaise de Scrabble" />
                                <meta name="twitter:title" content="Féderation Camerounaise de Scrabble" />
                                <meta name="twitter:site" content="https://fecascrab.com" />
                                <meta name="twitter:description" content='scrabble,cameroun,féderation camerounaise,cameroon,compétition scrabble,scraper,jeu de société,mot' />
                        </Helmet>
                        {!loading && <section>
                                <HeaderSection />
                                <NavMobile />
                                <div style={{ background: `url(${slide})`, backgroundPosition: "top", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                                        className=' z-10 relative mt-12 max-sm:mt-7 h-96 mx-24 max-sm:mx-0   bg-[#02abee]'>
                                        <div className='absolute bottom-[-30px] px-4 pt-24 pb-5 left-12 max-sm:left-12 bg-red-600'>
                                                <h2 className='text-4xl max-sm:text-3xl title-font text-white font-bold '>Les Clubs</h2>
                                        </div>
                                </div>

                                <section className='mx-32 mt-24 max-sm:mx-4'>
                                        <p className='text-xl title-second max-sm:text-lg'>Actuellement, la FECASCRAB regroupe une vingtaine de clubs répartis sur
                                                l’ensemble du territoire camerounais, chacun jouant un rôle clé dans la promotion
                                                et le développement régional de cette discipline intellectuelle.
                                        </p>
                                        <h2 className="text-2xl mt-7 max-sm:text-xl title-bold  font-bold text-red-600">LISTE DES CLUBS AFFILIES</h2>


                                        <div className='mx-4 max-sm:mx-6 mt-8'>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold max-sm:text-xl title-bold text-2xl'>1. DSC Douala :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Ibis douala Bonanjo</p>
                                                                <p>Mardi et jeudi : 18h30 - 21h30</p>
                                                                <p>Contact : Paco Bahanag |  (+237) 697 860 698</p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold max-sm:text-xl text-2xl'>2. DSA :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Douala</p>
                                                                <p>Tous les jours de 16h - 21h
                                                                </p>
                                                                <p>Contact : Michel Honoré Obi |
                                                                        (+237) 695 426 333
                                                                </p>
                                                                <p><span className='font-bold'>Abonnement annuel : 10.000 xaf</span></p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold max-sm:text-xl text-2xl'>3. Fin Goudron Scrabble Club (FGSC)
                                                                :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Douala - Bonaberi
                                                                </p>
                                                                <p>Tous les jours de 16h - 21h
                                                                </p>
                                                                <p>Contact: Aubin Kingue (+237) 699 307 796
                                                                </p>
                                                                <p><span className='font-bold'>Abonnement 5.000 xaf annuel / 2.000 xaf/ mois
                                                                </span></p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold max-sm:text-xl text-2xl'>4. AZEP
                                                                :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Douala - Bonaberi
                                                                </p>
                                                                <p>Contact : Reine Moby
                                                                        |
                                                                        (+237) 696 510 042

                                                                </p>
                                                                <p>Elouga : 65191850
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold text-2xl max-sm:text-xl'>5. Cradat Scrabble Club (CRASC)

                                                                :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Yaoundé

                                                                </p>
                                                                <p>Lundi - vendredi 16h-21h // samedi - dimanche 8h - 20h
                                                                </p>
                                                                <p>Contact :
                                                                        Bachirou Mohamadou
                                                                        (+237) 670 90 54 57 - 699 575 871


                                                                </p>
                                                                <p><span className='font-bold'>Abonnement 5.000 xaf annuel / 2.000 xaf/ mois
                                                                </span></p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold text-2xl max-sm:text-xl'>6. Scrabble Tennis Club (STC)


                                                                :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Yaoundé

                                                                </p>

                                                                <p>Contact : Iliassou Mana |
                                                                        (+237) 693 59 51 04


                                                                </p>
                                                                <p><span className='font-bold'>Abonnement 5.000 xaf annuel / 2.000 xaf/ mois
                                                                </span></p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold max-sm:text-xl text-2xl'>7. Sophia Soa Scrabble Club (SSSC)     :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Yaoundé

                                                                </p>
                                                                <p>mercredi 12h - 16h // samedi 12h - 16h
                                                                </p>
                                                                <p>Contact : Jean michel EBE BETAYENE |
                                                                        (+237) 676 60 53 43
                                                                </p>
                                                                <p><span className='font-bold'>Abonnement: 15.000 xaf/ an // 1.000 xaf/ mois
                                                                </span></p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold max-sm:text-xl text-2xl'>8. Harmony Scrabble Club (HSC)
                                                                :  </h2>

                                                        <div className='text-xl max-sm:text-lg title-second'>
                                                                <p>Yaoundé

                                                                </p>
                                                                <p>Mercredi et vendredi 16h - 20h
                                                                </p>
                                                                <p>Contact : Augustin Tchouling (+237) 690 463 755 / Gislain Yamga 699 217 606
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold max-sm:text-xl text-2xl'>9. Biyem-Assi Scrabble Club ( BSC)

                                                                :  </h2>

                                                        <div className='text-xl max-sm:text-lg title-second'>
                                                                <p>Yaoundé

                                                                </p>

                                                                <p>Contact : Rudolph Bakinien
                                                                        |
                                                                        (+237) 674 41 50 72
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold max-sm:text-xl text-2xl'>10. AMVOE Scrabble Club

                                                                :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Nkoldongo Yaoundé
                                                                </p>

                                                                <p>Contact : Vandelin Ndzana |
                                                                        (+237) 690813358
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold max-sm:text-xl text-2xl'>11. DSC Star Land Yaoundé
                                                                :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Contact : Ivan Seundjeu (+237) 698352543
                                                                </p>
                                                                <p><span className='font-bold'>Abonnement:
                                                                </span></p>
                                                                <p>
                                                                        <li className='font-bold mx-4 mt-3'>50000 xfa annuel + droit d’adhésion annuel + licence nationale + licence
                                                                                internationale + packs de logiciels d'entrainements</li>
                                                                        <li className='font-bold mx-4 mt-3'>20000 Xfa / mois: location salle avec boisson à chaque rencontre</li>
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold max-sm:text-xl text-2xl'>12. Club des amis du Scrabble de Bangangté


                                                                :  </h2>

                                                        <div className='text-xl max-sm:text-lg title-second'>
                                                                <p>Docteur Yannick Stève Ngounou : (+237) 697 70 43 33
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold max-sm:text-xl text-2xl'>13. Club des amis du Scrabble Maroua
                                                                :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Greng Omar (+237) 694 82 43 03
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className='mb-6'>
                                                        <h2 className='font-bold title-bold text-2xl max-sm:text-xl'>14. scrabble champions : club anglophone
                                                                :  </h2>

                                                        <div className='text-xl title-second max-sm:text-lg'>
                                                                <p>Mimboman Yaounde
                                                                </p>
                                                                <p>Friday 18h - 20h sunday 15h - 18h
                                                                </p>
                                                                <p>Contact : Christian shofola |
                                                                        (+237) 679 917 318

                                                                </p>
                                                                <p><span className='font-bold'>Fees: 10000 xaf per year
                                                                </span></p>
                                                        </div>
                                                </div>

                                        </div>




                                        <div>
                                                <p className='text-xl title-second max-sm:text-lg'>Grâce à cette présence nationale, la FECASCRAB continue de fédérer des
                                                        passionnés et de renforcer les bases du Scrabble dans toutes les régions du
                                                        Cameroun. Si vous souhaitez rejoindre un club, contactez celui de votre localité et
                                                        plongez dans l’univers captivant du Scrabble !
                                                </p>
                                                <p className='text-xl max-sm:text-lg'>Cette structure pourra évoluer avec de nouvelles nominations et l’expansion des
                                                        activités de la Fédération.
                                                </p>
                                        </div>




                                </section>
                                <CtaInscription />
                                <Footer />
                        </section>}


                        {loading && <Loader />}
                </>

        )
}
