

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  Image,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Box bgGradient={'linear-gradient(324deg, rgba(255,255,255,1) 68%, rgba(255,79,0,1) 100%)'}>
      <Container maxW={'3xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          className=' animate__animated animate__flipInX'
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          About {' '}
          <Text as={'span'} color={'#ff3a00'}>
            Us
          </Text>
        </Heading>
        {/* <Text color={'gray.500'} maxW={'3xl'}>
        In the modern era, maintaining a healthy lifestyle is increasingly important. With the rise of sedentary jobs and busy schedules, many individuals struggle to manage their health and wellness effectively. This challenge inspired us to create a platform that not only addresses these concerns but also elevates the user experience by offering comprehensive integration and personalization.
        </Text> */}
        <Text color={'gray.500'} maxW={'3xl'}>
        We are a team of ambitious and passionate individuals dedicated to transforming the way people approach their health and wellness. Our mission is to empower everyone to live healthier, happier lives by providing an all-in-one solution that seamlessly integrates fitness tracking, diet planning, and wellness tips tailored to individual needs.
        </Text>
        
      </Stack>
      </Container>
      </Box>
    </>
  )
}
