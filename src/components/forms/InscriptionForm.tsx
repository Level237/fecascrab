import React from 'react'
import { Input } from '../ui/input'

export default function InscriptionForm() {
  return (
    <section>
        <div className='mb-5'>
        <h2 className='font-bold text-3xl'>informations personnelles</h2>
        </div>
        <div className='mb-3'>
            <Input placeholder='Nom et Prénom' className='py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 h-12'/>
        </div>
        <div className='mb-2'>
            <Input placeholder='Date de naissance' className='py-8 rounded-xl px-6 placeholder:text-xl text-xl bg-gray-100 h-12'/>
        </div>
    </section>
  )
}
