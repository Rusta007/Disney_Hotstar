import React from "react";
import "./header.css"

function Header() {
  return (
    <>
      <div className="header">
        <div className="nav-container">
          <div className="hamburger">
            <div className="icon-wrapper">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <div className="subMenu">
              <div className="menuContainer">
                <div className="subMenuOne">
                  <div className="Channel"></div>
                  <div className="channelName">Channels</div>
                </div>
                <div className="subMenuTwo">
                  <div className="Languages"></div>
                  <div className="channelName">Languages</div>
                </div>
                <div className="subMenuThree">
                  <div className="Generes"></div>
                  <div className="channelName">Generes</div>
                </div>
              </div>
            </div>
            <div className="sideBar">
              <p className="sideLogin">Log in</p>
              <span className="btter">For a better experience</span>
              <hr />
              <p className="watchlist">Watchlist</p>
              <hr />
              <p className="kidsImg">
                <img
                  src="https://www.hotstar.com/assets/233af5238f6cc83a9ba34b7ad6f39bf9.svg"
                  alt=""
                />
              </p>
              <div className="chann">
                <div className="channImg"></div>
                <div className="sideText">Channels</div>
              </div>
              <div className="lang">
                <div className="langImg"></div>
                <div className="sideText">Languages</div>
              </div>
              <div className="genre">
                <div className="genreImg"></div>
                <div className="sideText">Genres</div>
              </div>
            </div>
          </div>
          <div className="logo">
            <img
              src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
              alt="hotstar"
            />
          </div>
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
                <div className="linkMenu kids"></div>
              </li>
            </ul>
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
      </div>
    </>
  );
}

export default Header;
