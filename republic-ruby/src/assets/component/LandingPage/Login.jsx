
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Footer from './Footer'

export default function Login() {
  return (
    <Flex
      gap={10}
      align={{'base':'center','md':'flex-end'}}
      flexDirection={{'base':'column','md':'row'}}
      justify={'center'}
      wrap={'nowrap'}
      py={12}
      bg={useColorModeValue('gray.50', 'gray.800')}>
        <Box maxW={'md'} display={{'base':'none','md':'block'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} viewBox="0 0 788.67 600.83" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m0,544.59c0,.66.53,1.19,1.19,1.19h786.29c.66,0,1.19-.53,1.19-1.19s-.53-1.19-1.19-1.19H1.19c-.66,0-1.19.53-1.19,1.19Z" fill="#3f3d56"/><polygon points="432.06 207.9 440.18 157.19 385.41 134.88 377.3 211.95 432.06 207.9" fill="#a0616a"/><circle cx="418.22" cy="117.64" r="55.85" fill="#a0616a"/><path d="m413.77,42.56c1.62.94,3.78-.48,4.3-2.28s-.09-3.71-.68-5.48c-1-2.97-2.01-5.95-3.01-8.92-2.14-6.33-4.41-12.88-9.03-17.7-6.99-7.27-18.09-9.12-28.08-7.78-12.83,1.72-25.5,8.67-31.46,20.16-5.97,11.49-3.43,27.53,7.36,34.7-15.37,17.61-20.73,37.25-19.88,60.61.85,23.36,26.3,44.86,42.91,61.32,3.71-2.25,7.08-12.78,5.04-16.61-2.04-3.83.88-8.26-1.64-11.78-2.52-3.52-4.64,2.09-2.08-1.42,1.61-2.21-4.68-7.3-2.28-8.62,11.58-6.4,15.43-20.84,22.71-31.89,8.77-13.33,23.79-22.36,39.68-23.86,8.75-.83,18,.67,25.17,5.75s11.82,14.16,10.16,22.8c4.31-4.38,6.45-10.79,5.64-16.87s-4.55-11.72-9.86-14.81c3.22-10.66.46-22.92-7.02-31.17-7.48-8.25-37.84-6.84-48.76-4.67" fill="#2f2e41"/><path d="m412.07,83.32c-14.47,1.56-24.92,14.1-33.74,25.67-5.08,6.67-10.41,14.04-10.28,22.43.13,8.48,5.8,15.75,8.51,23.79,4.43,13.14.11,28.76-10.43,37.76,10.42,1.98,21.68-5.83,23.48-16.28,2.09-12.16-7.13-23.9-6.04-36.2.96-10.83,9.5-19.17,16.75-27.27s14.07-18.85,10.73-29.2" fill="#2f2e41"/><path d="m414.84,594.83s-121,12-130-2,122.79-28,122.79-28l7.21,30Z" fill="#a0616a"/><path d="m337.69,370.49l-2.5,13.27c6.81,10.05,7.46,20.67,3.5,31.73l138,1c-1.48-14.95-3.11-30.97,2.57-45.66l-141.57-.34Z" fill="#a0616a"/><path d="m563.73,469.16l-50.05-40.04c-6.65-5.32-10.96-13.23-11.81-21.7l-7.71-76.27,45.95-15.32,11.08,75.52,27.61,62.75-15.06,15.06h-.01Z" fill="#a0616a"/><polygon points="372.19 202.99 439.19 199.99 510.19 233.81 481.19 371.99 334.19 382.99 314.19 229.99 372.19 202.99" fill="#ff3a00"/><path d="m479.26,403.83c10.07,13.27,14.29,45.22,18.57,77,0,0-186-1-187-1s28.43-67,28.43-67l140-9h0Z" fill="#2f2e41"/><path d="m485.34,472.35l12.5,8.48s177-12,162,44-62,65-62,65l-190,11-2-31s-183,41-200-43,105-47,105-47l174.5-7.48h0Z" fill="#2f2e41"/><path d="m410.65,538.83s4.19-22,34.19-13,47,21,47,21l-72,18-9.19-26Z" fill="#a0616a"/><path d="m485.69,231.49s34-12,47,27c13,39,10,71,10,71l-50,16-7-114h0Z" fill="#ff3a00"/><path d="m252.54,475.25l-10.91-19.22,23.57-58.67,11.08-75.53,45.95,15.32-7.81,77.2c-.8,7.89-4.81,15.25-11,20.2l-50.88,40.71h0Z" fill="#a0616a"/><path d="m330.69,231.49s-34-12-47,27c-13,39-10,71-10,71l50,16,7-114h0Z" fill="#ff3a00"/><ellipse cx="578.19" cy="442.49" rx="24" ry="35.5" fill="#a0616a"/><ellipse cx="241.19" cy="448.49" rx="24" ry="35.5" fill="#a0616a"/><polyline points="332.84 507.83 419.84 532.83 436.84 562.83 404.33 569.83" fill="#2f2e41"/></svg>
        </Box>
      <Box maxW={'md'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox color={'ff4f00'}>Remember me</Checkbox>
                <Text color={'#ff3a00'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'#ff3a00'}
                color={'white'}
                _hover={{
                  bg: '#ff4f00',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      </Box>
    </Flex>
  )
}