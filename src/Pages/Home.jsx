import {useNavigate} from 'react-router-dom'
import React, { useState , useEffect} from "react"
import Header from '../Components/Header'
import Section from '../Components/Section'
import Categories from '../Components/Categories'
import Cards from '../Components/Cards'

export default function Home(){
    
    
    return  (
        
        <div>
            <Header></Header>
            <Section></Section>
            <Categories></Categories>
            <div className='w-full h-28 bg-orange-400 mb-5'>
              <h1 className='text-center text-5xl py-6 text-white font-bold uppercase font-open pt-6'>The Best Products</h1>
            </div>
            <Cards></Cards>
            
        </div>
      )
    }