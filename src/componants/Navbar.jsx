import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import Logo from '../assets/logo.png'
import Menu from './Menu'


const Navbar = () => {
  return (
   <>
   <div className="py-4">
        <Container>
            <Flex>
                <div className="w-[10%]">
                    <Image imgSrc={Logo} imgAlt={'Logo'}/>
                </div>
                <div className="w-[90%] ">
                   <Flex className={'gap-x-7 justify-center'}>
                   <Menu menuName={'Home'}/>
                    <Menu menuName={'Shop'}/>
                    <Menu menuName={'About'}/>
                    <Menu menuName={'Contact'}/>
                    <Menu menuName={'Journal'}/>
                   </Flex>
                </div>
            </Flex>
        </Container>
   </div>
   </>
  )
}

export default Navbar