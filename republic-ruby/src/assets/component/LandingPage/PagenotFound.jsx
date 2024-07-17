import { Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'

export const PagenotFound = () => {
  return (
    <>
    <Box textAlign={'center'} borderBottom={'1px solid red'} p={5}>
        <Image w={{'base':"100%",'md':"60%",'lg':"50%"}} ml={'auto'} mr={'auto'} align={'center'} src='Page_not_found.png'/>
        <Heading mb={10}>Page not found</Heading>
    </Box>
    <Footer/>
    </>
  )
}
