import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestoreInstance, authMain } from "../../config/firebase";
import { Box, Heading, Stack, Text, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, Icon } from "@chakra-ui/react";
import { FaDumbbell, FaBullseye } from "react-icons/fa";

export const SelectedPlan = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const user = authMain.currentUser;
        if (user) {
          const docRef = doc(firestoreInstance, "plan", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setSelectedExercises(data.exercises || []);
            setGoal(data.goal || "");
          }
        }
      } catch (error) {
        console.error("Error fetching plan details:", error);
        setError("Error fetching plan details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error" variant="left-accent" my={4}>
        <AlertIcon />
        <AlertTitle mr={2}>Error:</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Box bg="gray.50" p={6} borderRadius="lg" boxShadow="lg" maxW="md" mx="auto" my={8}>
      <Stack spacing={6} textAlign="center">
        <Box>
          <Heading as="h3" size="lg" mb={4} display="flex" justifyContent="center" alignItems="center" color="teal.500">
            <Icon as={FaDumbbell} w={6} h={6} mr={2} />
            Selected Exercise Routines
          </Heading>
          <Stack spacing={3}>
            {selectedExercises.map((exercise, index) => (
              <Text key={index} fontSize="lg" color="gray.700" bg="teal.100" p={2} borderRadius="md">
                {exercise}
              </Text>
            ))}
          </Stack>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4} display="flex" justifyContent="center" alignItems="center" color="purple.500">
            <Icon as={FaBullseye} w={6} h={6} mr={2} />
            Selected Goal
          </Heading>
          <Text fontSize="lg" color="gray.700" bg="purple.100" p={2} borderRadius="md">
            {goal}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
