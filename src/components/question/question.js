"use client"
import React, { useState } from 'react'
import {TextArea } from '../reusable/TextArea'
import { Input } from '../reusable/Input'
import { inputControls } from './configuration'
import { Select } from '../reusable/Select'
import { fnValidateForm, onChange,fnClearForm } from '@/includes/common/formVal'
import { ServerCall } from '@/includes/common/ServerCall'

export const Question = () => {
  const [input,setInput]=useState(inputControls)

  const fnChange=(eve)=>{
    const _input=onChange(eve,input)
      setInput(_input);
  }

  const fnSubmit=()=>{
    var [isInValid,_input,dataObj]=fnValidateForm(input)
    if(isInValid){
      setInput(_input);
      return;
    }
    ServerCall.sendPost("que/save",{data:dataObj})
    .then((res)=>{
      const {acknowledged,insertedId}=res.data;
      if(acknowledged && insertedId){
        alert("Success")
        fnClearForm(_input)
      }else{
        alert("Failed")
      }
    })
    .catch((res)=>{
      alert("Something went wrong")
    })
  }
  
  return <div className="mt-5 container-fluid">
      {
        input.map((obj,ind)=>{
          const attr={...obj,fnChange}
          switch(obj.tag){
            case 'input':
              return <Input key={"input_"+ind}{...attr}/>
            case 'textarea':
              return <TextArea key={"ta_"+ind}{...attr}/>
            case 'select':
              return <Select key={"select_"+ind} {...attr} />    
          }
        })
      }
      <div className='row'>
        <div className='offset-5 col-7'>
        <button onClick={fnSubmit} className='btn btn-primary'>Submit</button>
        </div>
      </div>
  </div>
}
