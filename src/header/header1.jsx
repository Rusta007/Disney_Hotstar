import React from 'react'
import '../header/header1.css'
// import {Input} from '@material-ui/core'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <div className="left-header">
            <div className="icon-wrapper">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
                <img src='https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg' alt = " " />
                

        <div className="navigation">
            <ul>
              <li>
                <div className="linkMenu">TV</div>
                <div className="sublink tv">
                  <p>Mood Mix</p>
                  <p>Other Shows</p>
                  <p>Hotstar Specials</p>
                  <p>Quix</p>
                  <p>Star Jalsha</p>
                  <p>Star Plus</p>
                  <p>Star Vijay</p>
                  <p>Star Bharat</p>
                  <p>more...</p>
                </div>
              </li>
              <li>
                <div className="linkMenu">Movies</div>
                <div className="sublink">
                  <p>Odia</p>
                  <p>Hindi</p>
                  <p>Bengali</p>
                  <p>Telugu</p>
                  <p>Malayalam</p>
                  <p>Tamil</p>
                  <p>Marathi</p>
                  <p>English</p>
                  <p>Kannada</p>
                  <p>Korean</p>
                  <p>Japanese</p>
                </div>
              </li>
              <li>
                <div className="linkMenu">Sports</div>
                <div className="sublink sports">
                  <p>Cricket</p>
                  <p>Football</p>
                  <p>Hockey</p>
                  <p>Kabaddi</p>
                  <p>Martial Arts</p>
                  <p>American Football</p>
                  <p>Tennis</p>
                  <p>Khelo India</p>
                  <p>Formula E</p>
                  <p>Athletics</p>
                </div>
              </li>
              <li>
                <div className="linkMenu">Disney+</div>
              </li>
              <li>
                <div className="linkMenu kids">Kids</div>
              </li>
            </ul>
          </div>
            </div>
            <div className="search-container">
            <input type="text" placeholder="Search" />
            <div className="searchIcon">
              <div className="searchImg"></div>
            </div>
          </div>
          <button type="button" className="btnSubscribe">
            Subscribe
          </button>
          <div className="user-prof">
            <div className="signIn">LOGIN</div>
          </div>
          <div className="searchIcon"></div>
          </div>
               
            {/* </div> */}
        {/* </div>  */}
    </div>
  )
}

export default Header;