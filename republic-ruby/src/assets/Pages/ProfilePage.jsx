import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { firestoreInstance, authMain } from "../config/firebase";
import { ExerciseForm } from "../component/ProfileInfo/ExerciseForm";
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Spinner,
} from "@chakra-ui/react";

export const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = authMain.currentUser;
      if (user) {
        const docRef = doc(firestoreInstance, "users", user.uid);
        try {
          const userDoc = await getDoc(docRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user is currently logged in.");
      }
      setLoading(false);
    };
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading...</Text>
      </Box>
    );
  }

  if (!userData) {
    return (
      <Box textAlign="center" py={10}>
        <Text>No user data found.</Text>
      </Box>
    );
  }

  return (
    <Box py={10} bg={"#00020e"}>
      <Container maxW="xl">
        <Stack spacing={8}>
          <Heading as="h1" size="xl" textAlign="center" color="#FFF5F5">
            Profile
          </Heading>
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
            <Text fontSize="lg">
              <strong>Name:</strong>{" "}
              {`${userData.firstName} ${userData.lastName}`}
            </Text>
            <Text fontSize="lg" mt={2}>
              <strong>Email:</strong> {userData.email}
            </Text>
          </Box>
          <ExerciseForm />
        </Stack>
      </Container>
    </Box>
  );
};
