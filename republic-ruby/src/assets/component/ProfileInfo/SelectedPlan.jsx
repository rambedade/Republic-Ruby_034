import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestoreInstance, authMain } from "../../config/firebase";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

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
    return <Box textAlign="center">Loading...</Box>;
  }

  if (error) {
    return (
      <Box textAlign="center" color="red.500">
        Error: {error}
      </Box>
    );
  }

  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
      <Stack spacing={4}>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Selected Exercise Routines
          </Heading>
          <Stack spacing={2}>
            {selectedExercises.map((exercise, index) => (
              <Text key={index}>{exercise}</Text>
            ))}
          </Stack>
        </Box>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Selected Goal
          </Heading>
          <Text>{goal}</Text>
        </Box>
      </Stack>
    </Box>
  );
};
