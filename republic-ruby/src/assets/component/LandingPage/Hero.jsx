'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Image,
  Box,
} from '@chakra-ui/react'
import 'animate.css';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  return (
    <Box bgGradient={'linear-gradient(324deg, rgba(255,255,255,1) 68%, rgba(255,79,0,1) 100%)'}>
        <Container maxW={'5xl'}>
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
          Your Health {' '}
          <Text as={'span'} color={'#ff3a00'}>
            Perfectly Planned
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
        Never miss a health goal. Never be late for a meal. Keep track of your diet and daily health activities with smart reminders. Start your day with a personalized "Daily Health Agenda" to stay on top of your wellness journey.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'#ff3a00'}
            _hover={{ bg: '#ff3b10' }} as={NavLink} to={'/register'}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={'full'}>
          <Image src="./logo.png" ml={'auto'} mr={'auto'}  height={{ base: '5rem', lg: '10rem' }} mt={{ base: 12, sm: 16 }} />
        </Flex>
      </Stack>
    </Container>
    </Box>
  )
}