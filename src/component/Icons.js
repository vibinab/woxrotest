import React from 'react'
import icon1 from "../../src/assets/icon1.png"
import icon2 from "../../src/assets/icon2.png"
import icon3 from "../../src/assets/icon3.png"
import icon10 from "../../src/assets/logo10.png"
import icon7 from "../../src/assets/logo7.png"
import logo12 from "../../src/assets/logo12.png"
import logo20 from "../../src/assets/logo20.png"


import "./Icons.css"

import { FormComp } from './FormComp'

export const Icons = () => {
  return (
    <>
        
       
            <div className='icondisplay'>
            <div className='iconchild'>
            <div>
            <img src={icon1} alt="img"></img>
            </div>
            <p>Comerical shop</p>
            </div>
           
          
            
            <div className='iconchild'>
            <div>
            <img src={icon2} alt="img"></img>
            </div>
           
            <p>Comerical Office</p>
            </div>
            <div className='iconchild'>
            <div>
            <img src={icon3} alt="img"></img>
            </div>
            <p>Comerical Land</p>
            </div>
            <div className='iconchild'>
            <div>
            <img src={icon10} alt="img"></img>
            </div>
            
            <p>Commerical Building</p>
            </div>
            <div className='iconchild'>
            <div>
            <img src={icon7} alt="img"></img>
            </div>
           
            <p>Industrial land</p>
            </div>
            <div className='iconchild'>
            <div>
            <img src={logo12} alt="img"></img>
            </div>
           
            <p>Co-working Space</p>
            </div>
            <div className='iconchild'>
            <div>
            <img src={logo12} alt="img"></img>
            </div>
           
            <p>Co-working Space</p>
            </div>
            <div className='iconchild'>
            <div>
            <img src={logo20} alt="img"></img>
            </div>
           
            <p>Private Office</p>
            </div>
            <div className='iconchild'>
            <div>
            <img src={logo20} alt="img"></img>
            </div>
           
            <p>Private Office</p>
            </div>
                </div>

                <FormComp/>

            
        
    </>
  )
}
