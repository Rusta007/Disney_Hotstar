import React from 'react'
import Styled from 'styled-components'
import './show.css'

const Show = () => {
  return (
    <Container>
    <h4 className='latest-Head2'>Popular Shows</h4>
    <Content>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5" alt="" className='show1' />
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4253/1364253-v-17a2ff74143c" alt="" className='show2' />
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5421/1445421-v-06772ee1734c" alt="" className='show3'/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4267/1364267-v-59ed5cfdea3a" alt="" className='show4'/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/4255/1364255-v-7d13c9d136b5" alt="" className='show4' />
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4261/1364261-v-bc200a22b55b" alt="" className='show4' />
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4259/1364259-v-fe5f361f4eae" alt="" className='show4' />
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5573/1435573-v-53ed03591520" alt="" className='show4' />
        </Wrap>
    </Content>
</Container> 
    
  )
}

export default Show

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