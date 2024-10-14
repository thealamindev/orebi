import React from 'react'
import Product from './Product'
import Container from './Container'
import Flex from './Flex'

const Products = () => {
  return (
    <>
   <Container>
    <Flex className={'justify-between'}>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    </Flex>
   </Container>
    </>
  )
}

export default Products