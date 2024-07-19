import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Tag,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'
import { blogPosts } from './Data'




const BlogTags = ({ tags }) => {
  return (
    <HStack spacing={2} marginTop={2}>
      {tags.map((tag) => (
        <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
          {tag}
        </Tag>
      ))}
    </HStack>
  )
}

const BlogAuthor = ({ name, date }) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
        alt={`Avatar of ${name}`}
      />
      <Text fontWeight="medium">{name}</Text>
      <Text>—</Text>
      <Text>{new Date(date).toLocaleDateString()}</Text>
    </HStack>
  )
}

const BlogDetail = () => {
  const { blogId } = useParams()
  const blog = blogPosts.find((post) => post.id === parseInt(blogId))

  if (!blog) {
    return <Text>Blog post not found</Text>
  }

  return (
    <Container maxW={'5xl'} p="12">
      <Box>
        <Heading>{blog.title}</Heading>
        <BlogAuthor name={blog.author} date={blog.date} />
        <BlogTags tags={blog.tags} />
        <Image
          marginTop="5"
          borderRadius="lg"
          src={blog.imageUrl}
          alt="Blog post image"
          objectFit="contain"
          width="100%"
        />
        <Box
          as="div"
          marginTop="5"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
          dangerouslySetInnerHTML={{ __html: blog.details }}
        />
      </Box>
    </Container>
  )
}

export default BlogDetail
