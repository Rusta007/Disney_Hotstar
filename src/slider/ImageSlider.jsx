import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styled from "styled-components";
import "./slider.css";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow:1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <Carousel {...settings}>
      <div className="media">
        <div className="text">
          <span>Mukundan Unni Associates</span>
          <p>Crime . 2022</p>
          <h6>
            Fired from a law for unethical conduct,Mukundan Unni <br />
            Associates is a 2022 Indian Malayalam-language black comedy film
            directed <br /> by Abhinav Sunder Nayak
          </h6>
        </div>
        <div className="mediaImage">
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/8252/1448252-h-d1221044be92"
            alt=""
            className="media1"
          />
        </div>
      </div>
      <div className="media">
        <div className="text">
          <span>Paws of Fury: The Legend of Hank</span>
          <p>Hotstar Special. 2022</p>
          <h6>
          A hard-on-his-luck hound finds himself in a town full of cats in need of a hero <br/>  to defend them from a ruthless villain's wicked plot to wipe their village off the map. <br/>With help from a reluctant mento.
          </h6>
        </div>
        <div className="mediaImage">
          <img
            src="https://image.tmdb.org/t/p/original/wMDUDwAArpfGdtTTZ25SfwngGwt.jpg"
            alt=""
            className="media2"
          />
        </div>
      </div>
      <div className="media">
        <div className="text">
          <span>Tom and Jerry Cowboy Up!</span>
          <p>Children Special. 2023</p>
          <h6>
          This time, the rivals team up to help a cowgirl and her brother save their <br/> homestead from a greedy land-grabber, and they’re going to need some help! <br/> Jerry’s three precocious nephews.
          </h6>
        </div>
        <div className="mediaImage">
          <img
            src="https://image.tmdb.org/t/p/original/muIaHotSaSUQr0KZCIJOYQEe7y2.jpg"
            alt=""
            className="media2"
          />
        </div>
      </div>
      <div className="media">
        <div className="text">
          <span>Baakiyalakshmi</span>
          <p>Hotstar Special. 2023</p>
          <h6>
          Gopinath lashes out at Baakiyalakshmi for owning the house. Then, <br/> Eshwari and her family get astonished when Gopinath decides to sell that house.
          </h6>
        </div>
        <div className="mediaImage">
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/6063/1416063-h-1b62f283ba37"
            alt=""
            className="media2"
          />
        </div>
      </div>
      <div className="media">
        <div className="text">
          <span>Avatar</span>
          <p>Hotstar . Science Fiction</p>
          <h6>
          Former Marine Jake Sully is deployed as an avatar on a mission of Pandora<br/> but he ultimetly fnd himself torn between two worlds.
          </h6>
        </div>
        <div className="mediaImage">
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4294/754294-h"
            alt=""
            className="media3"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default ImageSlider;

const Carousel = Styled(Slider)`
    margin-top:0px;

    ul li button{
        &:before{
            font-size:10px;
            color:rgba(150,158,171)
        }
    }

    li.slick-active button:before{
        color:white
    }

    .slick-list{
        overflow:visisble;
        color:white
    }

    button{
        z-index:1
    }
`


