"use client"
import React, { useState } from 'react'
import { Input } from '../reusable/Input'
import { inputControlLogin } from './configuration'

export const Login = () => {
    const [inputLogin,setInputLogin]=useState(inputControlLogin)
  return  <div className='mt-5 container-fluid'>
        {
            inputLogin.map((obj,ind)=>{
                return <Input key={ind} {...obj}/>

            })
        }
        <div className='row'>
        <div className='offset-5 col-7 mb-5'>
            <button className='btn btn-primary'>Login</button>
        </div>
        </div>
    </div>
  
}
