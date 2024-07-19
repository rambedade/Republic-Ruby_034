import React, { useState, useEffect } from "react";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { firestoreInstance, authMain } from "../../config/firebase";
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Flex,
  Checkbox,
  FormControl,
  FormLabel,
  Select,
  Button,
} from "@chakra-ui/react";

export const ExerciseForm = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = authMain.currentUser;
        if (user) {
          const docRef = doc(firestoreInstance, "plan", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log(data);
            setSelectedExercises(data.exercises || []);
            setGoal(data.goal || "");
          }
        }
      } catch (error) {
        console.error("Error fetching exercise data:", error);
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleExerciseChange = (exercise) => {
    setSelectedExercises((prevSelected) =>
      prevSelected.includes(exercise)
        ? prevSelected.filter((ex) => ex !== exercise)
        : [...prevSelected, exercise]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = authMain.currentUser;

      if (user) {
        const exerciseData = {
          exercises: selectedExercises,
          goal: goal,
          timestamp: new Date(),
        };

        const docRef = doc(firestoreInstance, "plan", user.uid);
        await setDoc(docRef, exerciseData);

        alert("Exercise routines updated successfully!");
      } else {
        console.error("No user is currently logged in.");
      }
    } catch (error) {
      console.error("Error updating exercise routines: ", error);
      setError("Error updating exercise routines. Please try again later.");
    }
  };

  if (loading) {
    return <Box textAlign="center">Loading...</Box>;
  }

  if (error) {
    return <Box textAlign="center" color="red.500">Error: {error}</Box>;
  }

  return (
    <Box py={12} bg={'#00020e'}>
      <Container maxW="xl">
        <Stack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center" color="#FFF5F5">
            Plan Details
          </Heading>
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>
              Selected Exercise Routines
            </Heading>
            <Stack spacing={2}>
              {selectedExercises.map((exercise, index) => (
                <Text key={index}>{exercise}</Text>
              ))}
            </Stack>
          </Box>
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>
              Selected Goal
            </Heading>
            <Text>{goal}</Text>
          </Box>
          <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="xl" mb={4}>
              Update Plan
            </Heading>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Exercise Routines</FormLabel>
                  <Stack spacing={2}>
                    {["Swimming Workout", "Interval Training", "Yoga Session", "Strength Training", "Cardio Workout"].map((exercise) => (
                      <Checkbox
                        key={exercise}
                        isChecked={selectedExercises.includes(exercise)}
                        onChange={() => handleExerciseChange(exercise)}
                      >
                        {exercise}
                      </Checkbox>
                    ))}
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel>Goal</FormLabel>
                  <Select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  >
                    <option value="">Select Goal</option>
                    {["Weight Loss", "Muscle Gain", "General Fitness", "Endurance Improvement", "Stress Relief and Mental Health"].map((goalOption) => (
                      <option key={goalOption} value={goalOption}>
                        {goalOption}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  px={6}
                  colorScheme="orange"
                  bg="#ff3a00"
                  _hover={{ bg: "#ff3b10" }}
                >
                  Update Plan
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
