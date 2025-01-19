"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Separator } from "../ui/separator"

const formSchema = z.object({
    nomEtablissement: z.string().min(2, "Le nom est requis"),
    autresInformations: z.string().optional(),
    typeEtablissement: z.string().min(1, "Le type est requis"),
    adresse: z.string().min(5, "L'adresse est requise"),
    ville: z.string().min(1, "La ville est requise"),
    region: z.string().min(2, "La région est requise"),
    telephone: z.string().min(8, "Le numéro de téléphone est requis"),
    email: z.string().email("Email invalide"),
    nomContact: z.string().min(2, "Le nom du représentant est requis"),
    fonction: z.string().min(2, "La fonction est requise"),
    telephoneContact: z.string().min(8, "Le numéro de téléphone est requis"),
    emailContact: z.string().email("Email invalide"),
    motivation: z.string().min(10, "La motivation est requise"),
    nombreEleves: z.string().min(1, "Ce champ est requis"),
    espaceDedieOui: z.boolean().default(false),
    espaceDetails: z.string().optional(),
    frequenceActivites: z.string().min(1, "La fréquence est requise"),
    materielOui: z.boolean().default(false),
    besoinMateriel: z.boolean().default(false),
    interetFormations: z.boolean().default(false),
    nomEncadreur: z.string().min(2, "Le nom de l'encadreur est requis"),
    fonctionEncadreur: z.string().min(2, "La fonction est requise"),
    telephoneEncadreur: z.string().min(8, "Le numéro de téléphone est requis"),
    emailEncadreur: z.string().email("Email invalide"),
    autresEncadreursOui: z.boolean().default(false),
    autresEncadreursDetails: z.string().optional(),
    participationCompetitions: z.boolean().default(false),
  })

export default function ClubForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          nomEtablissement: "",
          autresInformations: "",
          typeEtablissement: "",
          adresse: "",
          ville: "",
          region: "",
          interetFormations: false,
          telephone: "",
          email: "",
          nomContact: "",
          fonction: "",
          telephoneContact: "",
          emailContact: "",
          motivation: "",
          nombreEleves: "",
          participationCompetitions: false,
          espaceDedieOui: false,
          espaceDetails: "",
          frequenceActivites: "",
          materielOui: false,
          besoinMateriel: false,
          nomEncadreur: "",
          fonctionEncadreur: "",
          telephoneEncadreur: "",
          emailEncadreur: "",
          autresEncadreursOui: false,
          autresEncadreursDetails: "",
        },
      })
    

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <div className="space-y-6">
          <h2 className="text-4xl max-sm:text-3xl title-font  font-bold text-red-600">1. INFORMATIONS GÉNÉRALES SUR L'ÉTABLISSEMENT</h2>
          
          <FormField
            control={form.control}
            name="nomEtablissement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de l'établissement</FormLabel>
                <FormControl>
                  <Input className="py-6" placeholder="Nom de l'établissement" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="typeEtablissement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type d'établissement</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white py-6">
                        <SelectValue placeholder="Sélectionner le type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white py-6">
                      <SelectItem value="ecole">École</SelectItem>
                      <SelectItem value="college">Collège</SelectItem>
                      <SelectItem value="lycee">Lycée</SelectItem>
                      <SelectItem value="universite">Université</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
 <FormField
            control={form.control}
            name="adresse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse complète</FormLabel>
                <FormControl>
                  <Input className="py-6" placeholder="Adresse" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
              control={form.control}
              name="ville"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ville</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white py-6">
                        <SelectValue placeholder="Sélectionner la ville" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white py-6">
                      <SelectItem value="douala">Douala</SelectItem>
                      <SelectItem value="yaounde">Yaoundé</SelectItem>
                      <SelectItem value="garoua">Garoua</SelectItem>
                      <SelectItem value="bamenda">Bamenda</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Région</FormLabel>
                <FormControl>
                  <Input className="py-6" placeholder="Région" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>

         

          

          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone de l'établissement</FormLabel>
                <FormControl>
                  <Input className="py-6" placeholder="Téléphone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse email de l'établissement</FormLabel>
                <FormControl>
                  <Input className="py-6" placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator className='bg-[#00723e]'/>
        <div className="space-y-6">
          <h2 className="text-4xl max-sm:text-3xl title-font font-bold text-red-600">2. PERSONNE DE CONTACT</h2>
          
          <FormField
            control={form.control}
            name="nomContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom complet du représentant</FormLabel>
                <FormControl>
                  <Input className="py-6" placeholder="Nom complet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fonction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fonction</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="py-6">
                        <SelectValue placeholder="Sélectionner la fonction" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white ">
                      <SelectItem value="directeur">Directeur</SelectItem>
                      <SelectItem value="enseignant">Enseignant</SelectItem>
                      <SelectItem value="administrateur">Responsable pedagogique</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telephoneContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input className="py-6" placeholder="Téléphone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="emailContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse email</FormLabel>
                <FormControl>
                  <Input className="py-6" placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
        <Separator className='bg-[#00723e]'/>
          <h2 className="text-4xl max-sm:text-3xl title-font font-bold text-red-600">3. INTÉRÊT POUR LE SCRABBLE</h2>
          
          <FormField
            control={form.control}
            name="motivation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pourquoi souhaitez-vous créer un club de Scrabble dans votre établissement ?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Expliquez votre motivation..." 
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          control={form.control}
          name="nombreEleves"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Combien d'élèves sont intéressés par le Scrabble ?</FormLabel>
              <FormControl>
                <Input placeholder="Nombre d'élèves" {...field} />
              </FormControl>
              <FormMessage />
              <p className="text-sm text-gray-500">Estimation si un recensement n'a pas encore été fait</p>
            </FormItem>
          )}
        />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl max-sm:text-3xl title-font font-bold text-red-600">4. DISPONIBILITÉS ET INFRASTRUCTURE</h2>

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="espaceDedieOui"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Disposez-vous d'un espace dédié pour les activités du club ?</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <span>Oui</span>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {form.watch("espaceDedieOui") && (
              <FormField
                control={form.control}
                name="espaceDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Précisez (Ex: bibliothèque, salle de classe, espace polyvalent, etc.)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="frequenceActivites"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quelle fréquence prévoyez-vous pour les activités du club ?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="py-6">
                        <SelectValue placeholder="Sélectionner la fréquence" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="1-semaine">1 fois par semaine</SelectItem>
                      <SelectItem value="2-semaine">2 fois par semaine</SelectItem>
                      <SelectItem value="1-mois">1 fois par mois</SelectItem>
                      <SelectItem value="2-mois">2 fois par mois</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="materielOui"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Avez-vous du matériel de Scrabble (plateaux, dictionnaires, etc.) ?</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <span>Oui</span>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="besoinMateriel"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Auriez-vous besoin d'un accompagnement matériel ?</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <span>Oui</span>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl max-sm:text-3xl title-font font-bold text-red-600">5. ENCADREMENT</h2>

          <FormField
            control={form.control}
            name="nomEncadreur"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de l'encadreur principal</FormLabel>
                <FormControl>
                  <Input placeholder="Nom complet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fonctionEncadreur"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fonction</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="py-6">
                        <SelectValue placeholder="Sélectionner la fonction" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="professeur">Professeur</SelectItem>
                      <SelectItem value="surveillant">Surveillant</SelectItem>
                      <SelectItem value="animateur">Animateur</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telephoneEncadreur"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone de l'encadreur</FormLabel>
                  <FormControl>
                    <Input className="py-6" placeholder="Téléphone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="emailEncadreur"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail de l'encadreur</FormLabel>
                <FormControl>
                  <Input className="py-6" placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="autresEncadreursOui"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Disposez-vous d'autres personnes prêtes à encadrer les activités ?</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <span>Oui</span>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {form.watch("autresEncadreursOui") && (
              <FormField
                control={form.control}
                name="autresEncadreursDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Précisez (Nom et fonction)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <Separator className='bg-[#00723e]'/>
          <div className="space-y-6">
    <h2 className="text-4xl max-sm:text-3xl title-font font-bold text-red-600">6. PARTICIPATION AUX COMPÉTITIONS</h2>

    <div className="space-y-4">
      <FormField
        control={form.control}
        name="participationCompetitions"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel>Souhaitez-vous intégrer vos élèves aux compétitions scolaires organisées par la FECASCRAB ?</FormLabel>
            <FormControl>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span>Oui</span>
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="interetFormations"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel>Êtes-vous intéressé par des formations pour les encadreurs ou des ateliers pour les élèves ?</FormLabel>
            <FormControl>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span>Oui</span>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  </div>
        <Separator className='bg-[#00723e]'/>
  <div className="space-y-6">
    <h2 className="text-4xl max-sm:text-3xl title-font font-bold text-red-600">7. AUTRES INFORMATIONS OU DEMANDES</h2>

    <FormField
      control={form.control}
      name="autresInformations"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Ajoutez ici toute information ou demande spécifique que vous jugez utile</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Vos informations complémentaires..."
              className="min-h-[150px]"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
        </div>
        <div className="flex items-center justify-center">
        <Button type="submit" className="py-8 px-8 text-2xl max-sm:text-xl title-font bg-red-600 hover:bg-red-700 text-white">
          Soumettre la demande
        </Button>
        </div>
        
      </form>
    </Form>
  )
}

