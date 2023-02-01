import React from 'react'
import './footer.css';
import Image1 from '../Images/Snip20230114_1.png';
import image2 from '../Images/Snip20230114_3.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="left-footer">
            <div className='footer-icon'>
                <span>About Disney+Hotstar</span>
                <span>Terms Of Use</span>
                <span>Privacy Policy</span>
                <span>FAQ</span>
                <span>FeedBack</span>
                <span>Careers</span>
            </div>
            <p className='footer-Desc'>
                © 2023 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks <br/> 
                of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
            </p>
        </div>
        <div className='right-footer'>
            <div>
            <p className='connect'>Connect with us</p>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-facebook"></i>
            </div>
            <div>
                <p className='subsc'>Disney+ Hotstar App</p>
                <div className='ImageDiv-Footer'>
                <img src={Image1} alt=""  className='image1Footer'/>
                <img src={image2} alt="" className='image2Footer' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer