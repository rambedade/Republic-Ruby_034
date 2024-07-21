
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcStatistics,
  FcTimeline,
  FcVoicePresentation,
} from 'react-icons/fc'



const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} alignItems={'center'} textAlign={'center'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  )
}

export default function Features() {
  return (
    <Box pt={20} pb={20} bg={'gray.800'} color={'white'}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Features
        </Heading>
        <Text color={'white.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        Log and monitor your daily workouts, visualize your fitness journey with graphs and charts, and receive customized workout plans tailored to your fitness level, goals, and preferences, all while staying motivated with personalized insights.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center" >
          <Card
            heading={'Smart Meal Reminders'}
            icon={<Icon as={FcVoicePresentation} w={10} h={10} />}
            description={'Get timely notifications for meals and snacks. Customize reminder times to fit your schedule, ensuring you never miss a meal and maintain a consistent, healthy eating routine.'}
            href={'#'}
          />
          <Card
            heading={'Personalized Daily Health Agenda'}
            icon={<Icon as={FcStatistics} w={10} h={10} />}
            description={'Receive a tailored daily agenda with diet plans, exercise routines, hydration goals, and wellness tips. Stay informed and motivated throughout the day with your personalized health guide.'}
            href={'#'}
          />
          <Card
            heading={'Nutritional Tracking and Insights'}
            icon={<Icon as={FcTimeline} w={10} h={10} />}
            description={'Easily log meals and track nutritional intake. Monitor calorie consumption, analyze eating habits, and receive personalized recommendations to meet your dietary goals with detailed insights and analytics.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}