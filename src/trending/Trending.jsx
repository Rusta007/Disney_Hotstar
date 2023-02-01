import React from 'react'
import Styled  from 'styled-components'
import './trend.css';

const Trending = () => {
    return (
        <Container>
        <h4 className='latest-Head'>Latest & Trending</h4>
        <Content>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5421/1445421-v-06772ee1734c" alt="" className='Trend1'/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2034/1442034-v-276889630f7e" alt="" className='Trend2' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5362/1395362-v-f8d73be7dd01" alt="" className='Trend3' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1475/1441475-v-33d3428a9d16" alt="" className='Trend4' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9477/1429477-v-4c6f37f48b10" alt="" className='Trend4' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4856/1414856-v-fa398217196a" alt="" className='Trend4' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4787/1434787-v-b89e30762633" alt="" className='Trend4' />
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8254/1448254-v-423c38530432" alt="" className='Trend4' />
            </Wrap>
        </Content>
    </Container>
  )
}

export default Trending

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
        width:160px;
        height:230px;
        padding:5px;
        border-radius:10px;
    }

    &:hover{
        transition: opacity 0.1s ease-in;
        transform:scale(1.05);
    }
`

