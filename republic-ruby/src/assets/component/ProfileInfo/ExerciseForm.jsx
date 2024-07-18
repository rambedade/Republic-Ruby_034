import { useState, useEffect } from "react";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { firestoreInstance } from "../../config/firebase";
import { authMain } from "../../config/firebase";
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
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To handle errors

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
    const currentIndex = selectedExercises.indexOf(exercise);
    const newSelectedExercises = [...selectedExercises];

    if (currentIndex === -1) {
      newSelectedExercises.push(exercise);
    } else {
      newSelectedExercises.splice(currentIndex, 1);
    }

    setSelectedExercises(newSelectedExercises);
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box>
      <Container maxW="xl" py={12}>
        <Stack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center">
            Plan Details
          </Heading>
          <Box bg="white" p={6} borderRadius="lg">
            <Heading as="h3" size="md" mb={4}>
              Selected Exercise Routines
            </Heading>
            <Stack spacing={2}>
              {selectedExercises.map((exercise, index) => (
                <Text key={index}>{exercise}</Text>
              ))}
            </Stack>
          </Box>
          <Box bg="white" p={6} borderRadius="lg">
            <Heading as="h3" size="md" mb={4}>
              Selected Goal
            </Heading>
            <Text>{goal}</Text>
          </Box>
          <Box bg="white" p={6} borderRadius="lg">
            <Heading as="h2" size="xl" mb={4}>
              Update Plan
            </Heading>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Exercise Routines</FormLabel>
                  <Stack spacing={2}>
                    <Checkbox
                      isChecked={selectedExercises.includes("Swimming Workout")}
                      onChange={() => handleExerciseChange("Swimming Workout")}
                    >
                      Swimming Workout
                    </Checkbox>
                    <Checkbox
                      isChecked={selectedExercises.includes(
                        "Interval Training"
                      )}
                      onChange={() => handleExerciseChange("Interval Training")}
                    >
                      Interval Training
                    </Checkbox>
                    <Checkbox
                      isChecked={selectedExercises.includes("Yoga Session")}
                      onChange={() => handleExerciseChange("Yoga Session")}
                    >
                      Yoga Session
                    </Checkbox>
                    <Checkbox
                      isChecked={selectedExercises.includes(
                        "Strength Training"
                      )}
                      onChange={() => handleExerciseChange("Strength Training")}
                    >
                      Strength Training
                    </Checkbox>
                    <Checkbox
                      isChecked={selectedExercises.includes("Cardio Workout")}
                      onChange={() => handleExerciseChange("Cardio Workout")}
                    >
                      Cardio Workout
                    </Checkbox>
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel>Goal</FormLabel>
                  <Select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  >
                    <option value="">Select Goal</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="General Fitness">General Fitness</option>
                    <option value="Endurance Improvement">
                      Endurance Improvement
                    </option>
                    <option value="Stress Relief and Mental Health">
                      Stress Relief and Mental Health
                    </option>
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  px={6}
                  colorScheme={"orange"}
                  bg={"#ff3a00"}
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
