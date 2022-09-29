import React, { useEffect, useState } from 'react'
import axios from "axios"

export const Productlist = () => {
    const [data,setdata]=useState([])

   useEffect(()=> {
axios.get('https://api.xentice.com/api/postadSelect')
    .then((res)=>{
        console.log(res.data)
        setdata(res.data)
        // for (const key of res.data){
        //     console.log(key)
        // }
    }
    )
    .catch((err)=>console.log(err))

    
   },[])

//    const p= data.map((item)=> {
//     return item.propertyType
//    })
//    console.log(p)

  return (
    <>
   

    </>
  )
}
