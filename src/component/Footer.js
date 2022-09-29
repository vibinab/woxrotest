import React from 'react'
import "./Footer.css"
import apple from "../assets/apple.png"
import google from "../assets/google.png"

export const Footer = () => {
  return (
    <>
    <div className='footerfull'>
        <section className="section1footer">
        <div className="sect1">
            <h4>ABOUT</h4>
            <p>How Xentice works</p>
            <p>Founders Letter</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Xentice Gold</p>
            <p>Xentice Platinum</p>
            <p>Startup Support</p>
            <p>Careers</p>
        </div>
        <div className="sect2">
            <h4>EXPLORE</h4>
            <p>Diversity & Discrimination</p>
            <p>Accessibility</p>
            <p>Xentice Associates</p>
            <p>Xentice Team</p>
            <p>Xentice Mall</p>
            <p>Xstudio</p>
            <p>Xmoney</p>
            <p>Entice Spaces</p>
        </div>
       
        <div className="sect4">
             <h4>SERVICES</h4>
            <p>Buttons & Badges</p>
            <p>Mobile Apps</p>
            <p>For Companies</p>
            <p>Mobile Apps</p>
            <p>Review Professionals</p>
            <p>Suggested Professionals</p>
            <p>Resource Centre</p>
            <p>Community Centre</p>
        </div>
        <div className="sect5">
            <h4>SUPPORT</h4>
            <p>Our COVID-19 Response</p>
            <p>Help Centre</p>
            <p>Cancellation options</p>
            <p>Neighbourhood Support</p>
            <p>Corporate contact</p>
            <p>Trust & Safety</p>
            <p>FAQ</p>
            <p>Payment gateway</p>
        </div>





        </section>

        <section className='section2footer'>
            <div className='section2content'>
            <h3>DISCLAIMER</h3>
                <p>Please do not share your xentice password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from xentice. We advise our customers to completely ignore such communications & report to us at support@xentice.com.</p>
            </div>
            <div className='section2signup'>
                <div className='google'>
                 <img src={apple} alt="apple"></img>
            
                </div>
                <div className='apple'>
                <img src={google} alt="apple"></img>
                </div>
            </div>
        </section>
        <hr style={{color:"white",height:"5px" }}></hr>
        <div className='lastfooter'>
<div>
@Xentice Group of Companies 2022. All Rights Reserved
</div>
<div className='signup'>
    <span>
        About us
    </span>
    <span>
        Contact us 
    </span>
    <span>
        Privacy Policy
    </span>
</div>
<div>

</div>
</div>


</div>
    </>
  )
}
