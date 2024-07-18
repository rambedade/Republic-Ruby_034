import React from 'react'
import { Avatar, Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
export const Dashboard = () => {
  return (
    <>
    <Box pt={5} pb={3} bgGradient={[
    'linear(to-b, orange.100, purple.300)',
  ]}>
    <Container  maxW={'5xl'} py={12} >
    <Box mb={4}>
      <Avatar size='xl'  src='https://bit.ly/code-beast' />
      <br/>
      <Text as={'b'}>Deepak Maurya</Text>
    </Box>
      <Tabs colorScheme={'red'} variant='enclosed' isLazy>
        <TabList >
          <Tab as={'b'}>Stats</Tab>
          <Tab as={'b'}>My Schedule</Tab>
          <Tab as={'b'}>Profile</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
    </Box>
    </>
  )
}
