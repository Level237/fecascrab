
import HeaderSection from '../../components/headerSection'
import slide from "../../assets/Slide02.jpg"
import slideResponsive from "../../assets/responsive_ScrabbleJunior.jpg"
import NavMobile from '../../components/NavMobile'
import { useEffect, useState } from 'react'
import Loader from '../../components/ui/loader'
import Footer from '../../components/Footer'
import { Separator } from '../../components/ui/separator'
import CtaScolaire from '../../components/Cta-scolaire'
export default function ScrabbleJunior() {


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
            {!loading && <section>
                <HeaderSection />
                <NavMobile />
                <div className='mt-12 flex flex-col items-center gap-4 justify-center max-sm:mx-4'>
                    <h2 className='font-bold title-font text-center text-6xl text-red-500 max-sm:text-3xl'>Le Scrabble Scolaire
                        <br />

                        Une Formation pour l’Avenir</h2>

                </div>
                <div style={{ background: `url(${slide})`, backgroundPosition: "top", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                    className=' max-sm:hidden z-10 relative mt-12 max-sm:mt-7 h-[100vh] mx-24 max-sm:mx-0   bg-[#02abee]'>
                </div>
                <div style={{ background: `url(${slideResponsive})`, backgroundPosition: "top", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                    className=' max-sm:flex hidden z-10 relative mt-12 max-sm:mt-7 h-[100vh] mx-24 max-sm:mx-0   bg-[#02abee]'>
                </div>

                <section>
                    <div className='flex mx-24 mt-12 title-second  flex-col items-start gap-4 justify-center max-sm:mx-2'>

                        <div>
                            <p className='text-2xl max-sm:text-lg'>Le Scrabble scolaire au Cameroun est bien plus qu’un simple jeu. Il est un puissant outil
                                éducatif qui développe les compétences linguistiques, mathématiques, stratégiques et
                                sociales des jeunes. La Fédération Camerounaise de Scrabble (FECASCRAB) s’engage à
                                promouvoir le Scrabble dans les établissements scolaires pour former une génération de
                                champions et de penseurs critiques.

                            </p>
                        </div>

                        <Separator className='bg-[#00723e] mt-7' />
                    </div>
                    <div className='flex mx-24 title-second mt-12  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                        <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>L'importance du Scrabble Junior</h2>
                        <div>
                            <p className='text-2xl max-sm:text-lg'>Le Scrabble Junior :
                            </p>
                            <div className='mt-6 mx-4'>

                                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Améliore les compétences linguistiques : </span> enrichissement du vocabulaire, amélioration
                                    de l’orthographe et maîtrise des règles grammaticales.</li>
                                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Développe les capacités stratégiques et logiques : </span> réflexion, gestion du temps et prise
                                    de décision.</li>
                                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Renforce les valeurs humaines : </span> Unfair-play, discipline, concentration et esprit d'équipe

                                </li>
                                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Prépare les jeunes aux compétitions internationales : </span> en intégrant des clubs et en
                                    participant à des tournois.
                                </li>
                            </div>

                        </div>

                        <Separator className='bg-[#00723e] mt-7' />
                    </div>

                    <div className='flex mx-24 mt-12 title-second  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                        <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Notre vision</h2>
                        <div>
                            <p className='text-2xl max-sm:text-lg'>La FECASCRAB souhaite :
                            </p>
                            <div className='mt-6 mx-4'>

                                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Étendre le Scrabble dans plus d’écoles et lycées </span> pour atteindre toutes les régions du
                                    Cameroun</li>
                                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Identifier et former les talents prometteurs </span> dès leur plus jeune âge
                                </li>
                                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Créer un réseau national solide </span>pour les compétitions scolaires</li>
                                <li className='text-2xl max-sm:text-lg mb-4 text-justify'><span className='font-bold'> Faire du Cameroun un vivier de champions internationaux </span> dans la catégorie junior.
                                </li>
                            </div>

                        </div>

                        <Separator className='bg-[#00723e] mt-7' />
                    </div>
                    <div className='flex mx-24 mt-12 title-second  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                        <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Les établissements enregistrés</h2>
                        <p className='text-2xl max-sm:text-lg'>Nos établissements partenaires et leurs encadreurs dévoués :
                        </p>

                        <div className='flex flex-col mt-6 mx-4'>
                            <div className='flex flex-col justify-center gap-2'>
                                <span className='font-bold text-2xl max-sm:text-lg'>Yaoundé</span>
                                <div className=''><p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>1.Centre éducatif Montessori</span> – Encadreur : Sendjeu Iva</p></div>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>2.Collège international La Gaieté</span>– Encadreur : D jamen Juliot Aro</p></div>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>3.Collège Saint Benoît</span> – Encadreur : Menanga Joël</p></div>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>4.Lycée d'Anguissa</span>– Encadreur : Ndongo Patrick</p></div>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>5.Lycée de Biyem-Assi</span>– Encadreur : Essama Brangers Thierry</p></div>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>6.Lycée Général Leclerc</span>– Encadreur : Tessongang K. Jean Lin</p></div>
                                <div className=''><p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>7.Lycée de Mendong</span> – Encadreur : Ela Alo'o Guy Maxime</p></div>
                            </div>

                        </div>
                        <div className='flex flex-col mt-6 mx-4'>
                            <div className='flex flex-col justify-center gap-2'>
                                <span className='font-bold text-2xl max-sm:text-lg'>Bagangté</span>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>8.Fondation Gacha</span>– Encadreur : Ngounou Steve Yannick</p></div>

                            </div>

                        </div>

                        <div className='flex flex-col mt-6 mx-4'>
                            <div className='flex flex-col justify-center gap-2'>
                                <span className='font-bold text-2xl max-sm:text-lg'>Monatélé</span>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>9.Lycée de Monatélé</span>– Encadreur : Nkouete Chewa Josaphat</p></div>

                            </div>

                        </div>
                        <div className='flex flex-col mt-6 mx-4'>
                            <div className='flex flex-col justify-center gap-2'>
                                <span className='font-bold text-2xl max-sm:text-lg'>Simbock et Efok</span>
                                <div className=''><span className='font-bold text-2xl max-sm:text-lg'>10.Collège Jésus-Marie</span> </div>

                                <div className=''><span className="font-bold text-2xl max-sm:text-lg">11.Ntondobe College
                                </span> </div>


                            </div>

                        </div>
                        <div className='flex flex-col mt-6 mx-4'>
                            <div className='flex flex-col justify-center gap-2'>
                                <span className='font-bold text-2xl max-sm:text-lg'>Douala</span>
                                <div className=''><p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>12.Lycée de la Cité des Palmiers</span> – Encadreur : Yommouth Dimitri</p></div>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>13.Collège Duvaal</span>– Encadreur : Yommouth Dimitri</p></div>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>14.Lycée bilingue de Bonabéri</span>– Encadreur : Kingue Alain</p></div>
                                <div className=''><p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>15.Olive School</span> – Encadreur : Kingue Alain</p></div>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>16.Lycée de Ndog-Hem PK12</span>– Encadreur : Njonji Alexandre Parfait</p></div>
                                <div className=''><span className='font-bold text-2xl max-sm:text-lg'>17.Club Azep</span> </div>
                                <div className=''> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>18.Collège Liberman</span>– Encadreur : Théo Faboum</p></div>
                                <div className=''><span className='font-bold text-2xl max-sm:text-lg'>19. DSC Jeunes</span> </div>

                            </div>

                        </div>
                        <Separator className='bg-[#00723e] mt-7' />
                    </div>
                    <div className='flex mx-24 mt-12 title-second  flex-col items-start gap-4 justify-center max-sm:mx-2'>
                        <h2 className='font-bold title-font text-5xl text-red-500 max-sm:text-3xl'>Le Programme du Championnat Scolaire</h2>
                        <p className='text-2xl max-sm:text-lg'>Le championnat scolaire se déroule en plusieurs étapes :
                        </p>

                        <div className='flex flex-col mt-6 mx-4'>
                            <div className='flex flex-col justify-center gap-2'>

                                <div className='flex gap-2'><p className='text-2xl max-sm:text-lg'> <span className='font-bold text-2xl max-sm:text-lg'>1.Phase d'élimination régionale :</span> Sélections dans chaque établissement partenaire pour
                                    identifier les meilleurs talents</p></div>
                                <div className='flex gap-2'> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>2.Phase nationale :</span>Compétition regroupant les jeunes champions régionaux pour une
                                    grande finale nationale</p></div>
                                <div className='flex gap-2'> <p className='text-2xl max-sm:text-lg'><span className='font-bold text-2xl max-sm:text-lg'>3.Finale lors des Super Masters :</span>La phase ultime se tiendra en mars, avec des prix et
                                    distinctions pour les jeunes talents.</p></div>
                            </div>

                        </div>


                    </div>
                </section>
                <CtaScolaire />
                <Footer />
            </section>
            }

            {loading && <Loader />}
        </>

    )
}
