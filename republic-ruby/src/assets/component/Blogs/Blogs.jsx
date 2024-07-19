'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import { blogPosts } from './Data'


const BlogTags = (props) => {
  const { marginTop = 0, tags } = props
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}



const Blogs = () => {
  return (
    <Container maxW={'5xl'} p="12">
      {blogPosts.map((post, index) => (
        <Box  key={index} marginTop={{ base: '5', sm: '10' }}>
          <Box display={{ base: 'block', sm: 'flex' }} justifyContent="space-between">
            <Box as={NavLink} to={`/blog/${post.id}`} display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: '3', sm: '0' }}>
              <BlogTags tags={post.tags} />
              <Heading marginTop="1">
                <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  {post.title}
                </Text>
              </Heading>
              <Text as="p" marginTop="2" color={useColorModeValue('gray.700', 'gray.200')} fontSize="lg">
                {post.content}
              </Text>
              <BlogAuthor name={post.author} date={post.date} />
            </Box>
          </Box>
          <Divider mt={10} mb={10} />
        </Box>
      ))}
    </Container>
  )
}

export default Blogs
