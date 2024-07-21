import {
  Box,
  Heading,
  Text,
  Divider,
  HStack,
  Tag,
  Container,
  Spinner,
  Input,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { blogPosts } from './Data';
import { doc, getDoc } from 'firebase/firestore';
import { firestoreInstance, authMain } from '../../config/firebase';
import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

// BlogTags Component
const BlogTags = ({ marginTop = 0, tags }) => {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => (
        <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
          {tag}
        </Tag>
      ))}
    </HStack>
  );
};

// BlogAuthor Component
const BlogAuthor = ({ name, date }) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{name}</Text>
      <Text>—</Text>
      <Text>{new Date(date).toLocaleDateString()}</Text>
    </HStack>
  );
};

// Blogs Component
const Blogs = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState(blogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogPosts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = authMain.currentUser;
        if (user) {
          const docRef = doc(firestoreInstance, 'plan', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data(); 
            setSelectedExercises(data.exercises || []);
            setGoal(data.goal || '');
            setFilteredBlogs(blogPosts.filter((post) => post.tags.includes(data.goal)));
          }
        }
      } catch (error) {
        console.error('Error fetching exercise data:', error);
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Debounce search handler
  const handleSearch = useCallback(
    debounce((term) => {
      setFilteredBlogs(
        blogs.filter((post) =>
          post.title.toLowerCase().includes(term.toLowerCase()) ||
          post.content.toLowerCase().includes(term.toLowerCase())
        )
      );
    }, 300),
    [blogs]
  );

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <Container maxW={'5xl'} p="12">
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <Input
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={handleSearchChange}
            mb={4}
          />
          {filteredBlogs.length === 0 && searchTerm && (
            <Alert status="info" mb={4}>
              <AlertIcon />
              No records found.
            </Alert>
          )}
          {filteredBlogs.map((post, index) => (
            <Box key={index} marginTop={{ base: '5', sm: '10' }}>
              <Box display={{ base: 'block', sm: 'flex' }} justifyContent="space-between">
                <Box
                  as={NavLink}
                  to={`/blog/${post.id}`}
                  display="flex"
                  flex="1"
                  flexDirection="column"
                  justifyContent="center"
                  marginTop={{ base: '3', sm: '0' }}
                >
                  <BlogTags tags={post.tags} />
                  <Heading marginTop="1">
                    <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      {post.title}
                    </Text>
                  </Heading>
                  <Text as="p" marginTop="2" fontSize="lg">
                    {post.content}
                  </Text>
                  <BlogAuthor name={post.author} date={post.date} />
                </Box>
              </Box>
              <Divider mt={10} mb={10} />
            </Box>
          ))}
        </>
      )}
    </Container>
  );
};

export default Blogs;
