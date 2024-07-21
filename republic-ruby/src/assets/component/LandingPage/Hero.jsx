
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
    <Box maxWidth={'100%'} ml={'auto'} mr={'auto'} alignSelf={'center'} position="relative" width="100%" height="auto">
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1, // Ensure the video is behind the content
        }}
      >
        <source src={'videoplayback.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear-gradient(324deg, rgba(1,1,1,1) 68%, rgba(255,79,0,1) 100%)"
        opacity="0.6"
        zIndex="0" // Ensure the gradient is above the video but below the content
      ></Box>
      <Container maxW={'5xl'} position="relative" zIndex="1">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            mt={100}
            className=' animate__animated animate__flipInX'
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'} color={'#FFFFFF'}>
            Your Health {' '}
            <Text as={'span'} color={'#ff3a00'}>
              Perfectly Planned
            </Text>
          </Heading>
          <Text color={'#FFFFF1'} maxW={'3xl'}>
            Never miss a health goal. Never be late for a meal. Keep track of your diet and daily health activities with smart reminders. Start your day with a personalized "Daily Health Agenda" to stay on top of your wellness journey.
          </Text>
          <Stack mb={100} spacing={6} direction={'row'}>
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
          {/* <Flex w={'full'}>
            <Image src="./logo.png" ml={'auto'} mr={'auto'}  height={{ base: '5rem', lg: '10rem' }} mt={{ base: 12, sm: 16 }} />
          </Flex> */}
        </Stack>
      </Container>
    </Box>
  )
}
