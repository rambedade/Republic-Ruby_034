import React, { useState, useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { firestoreInstance, authMain } from "../../config/firebase";
import {
  Box,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

export const ChangePlan = () => {
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
    return (
      <Box textAlign="center" color="red.500">
        Error: {error}
      </Box>
    );
  }

  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        Update Plan
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Exercise Routines</FormLabel>
            <Stack spacing={2}>
              {[
                "Swimming Workout",
                "Interval Training",
                "Yoga Session",
                "Strength Training",
                "Cardio Workout",
              ].map((exercise) => (
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
            <Select value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="">Select Goal</option>
              {[
                "Weight Loss",
                "Muscle Gain",
                "General Fitness",
                "Endurance Improvement",
                "Stress Relief and Mental Health",
              ].map((goalOption) => (
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
  );
};
