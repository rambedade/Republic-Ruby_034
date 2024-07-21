'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'


const Testimonial = (props) => {
  const { children } = props
  return <Box>{children}</Box>
}

const TestimonialContent = (props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
              Enhance teamwork with real-time collaboration tools, seamless communication, and integrated project management features.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://performanceoptimalhealth.com/wp-content/uploads/profile-gld-payden-houser-03.jpg'
              }
              name={'Garrett Rasmussen '}
              title={'Certified  Trainer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
              Experience a user-friendly interface with easy navigation, responsive layouts, and a clean, modern aesthetic.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'data:image/jpeg;base64,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'
              }
              name={'Rishi Mandal'}
              title={'Stay Lift CEO'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
              Enjoy exceptional customer service with 24/7 support, personalized assistance, and a commitment to exceeding your expectations.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}