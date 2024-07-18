'use client'

import { ReactNode } from 'react'
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react'

export default function Solutions() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'100%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'5xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'column' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 10 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Technology
              </Text>
              <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                21st century Personal Health App
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
              Join us on this journey to revolutionize health and wellness. Together, we can make healthy living not just a goal but a sustainable lifestyle
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
)

const stats = [
  {
    title: 'Integrated Health Solutions',
    content: (
      <>
        Our platform combines fitness tracking, diet planning, and wellness tips into a single, easy-to-use application. No more switching between multiple apps to manage different aspects of your health.
      </>
    ),
  },
  {
    title: 'Personalization',
    content: (
      <>
        We use advanced algorithms and user data to offer personalized recommendations. Whether it’s a workout plan tailored to your fitness level, a diet plan considering your dietary preferences, or wellness tips aligned with your lifestyle, our platform adapts to you.
      </>
    ),
  },
  {
    title: 'User-Friendly Experience',
    content: (
      <>
         Our intuitive design ensures that managing your health is not just effective but also enjoyable. With seamless navigation and engaging features, staying healthy becomes a rewarding experience.
      </>
    ),
  },
  {
    title: 'Expert Guidance',
    content: (
      <>
        We collaborate with health and wellness experts to provide credible, up-to-date information and advice. Users can access expert content and even schedule consultations for personalized guidance.
      </>
    ),
  },
]