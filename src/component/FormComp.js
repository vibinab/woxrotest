import React, { useEffect, useState } from 'react'
import "./Form.css"
import axios from "axios"
import  Form from 'react-bootstrap/Form'
import office from "../../src/assets/office.jpg"


export const FormComp = () => {

  const[propss, setprop]=useState("");

  useEffect(()=> {
    axios.get('https://api.xentice.com/api/postadSelect')
        .then((res)=>{
            console.log("form",res.data)
            setprop(res.data)
           
        }
        )
        .catch((err)=>console.log(err))
    
        
       },[])

  //  const f=propss.filter((p)=> {
  //   return p.pr
  //  })
  return (
    <>
    <section className='formsection'>
    <img src={office} alt="office"></img>
    <div className='formbg'>
        <div className='formsub'>
            <h1>Choose from 25,00+ Spaces for your Business </h1>
        </div>
        <p>Get inspired and find your perfect place</p>
        <div>
        <form>
          <div>
          <Form.Select size="lg">
          <option>
            Looking for
          </option>
            <option>
               Commerical Shop
            </option>
            <option>
            Commerical Office
            </option>
            <option>
               Commerical Land
              </option>
              <option>
               Commerical Building
              </option>
              <option>
                Industrial Building
              </option>
              <option>
                Industrial Land
              </option>
              <option>
                Co-working Space 
              </option>
              <option>
                Private Office
              </option>
              <option>
                Meeting Room
              </option>
          </Form.Select>


          </div>
          <div>
          <Form.Select size="lg" className='mt-2'>
          <option>
            Select City
          </option>
            <option>
              Delhi
            </option>
            <option>
           Noida
            </option>
            <option>
             Hyderabad
              </option>
              <option>
               Mumbai
              </option>
              <option>
               Banglore
              </option>
              <option>
              Cochin
              </option>
              <option>
                Chennai
              </option>
              
          </Form.Select>


          </div>
          <div>
            <button className='searchbtn'>Search</button>
          </div>
          </form>
        </div>
    </div>
</section>
    </>
  )
}
