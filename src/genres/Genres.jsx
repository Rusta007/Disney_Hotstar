import React from 'react'
import Styled from 'styled-components'
import './language.css';

const Genres = () => {
  return (
    <Container>
    <h4 className='latest-HeadNew'>Popular Genres</h4>
    
    <Content>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2168/1272168-h-0b9e56f3a569" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2164/1272164-h-a40109f63230" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2184/1272184-h-dc6d91e320bb" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2167/1272167-h-57b30637dc58" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2189/1272189-h-474580e995d8" alt="" />
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/2194/1272194-h-c7381829728b" alt="" />
        </Wrap>
    </Content>
    </Container>
    
  )
}

export default Genres

const Container = Styled.div`
`


const Content = Styled.div`
    display:flex;
    margin-left:50px;
    margin-top:-3%
`

const Wrap = Styled.div`
    cursor:pointer;
    overflow:hidden;

    img{
        width:220px;
        height:130px;
        padding:5px;
        border-radius:10px;
    }

    &:hover{
        transition: opacity 0.1s ease-in;
        transform:scale(1.05);
    }
`