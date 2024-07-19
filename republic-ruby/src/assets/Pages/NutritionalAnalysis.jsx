import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
// import { firestoreInstance } from "../../config/firebase";
// import { authMain } from "../../config/firebase";
import { firestoreInstance ,authMain} from "../config/firebase";


import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

export const NutritionalAnalysis = () => {
  const [mealLogs, setMealLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealLogs = async () => {
      const user = authMain.currentUser;

      if (user) {
        const q = query(
          collection(firestoreInstance, "mealLogs"),
          where("userId", "==", user.uid)
        );

        try {
          const querySnapshot = await getDocs(q);
          const logs = [];
          querySnapshot.forEach((doc) => {
            logs.push(doc.data());
          });

          setMealLogs(logs);
        } catch (error) {
          console.error("Error fetching meal logs: ", error);
          setError("Error fetching meal logs. Please try again later.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMealLogs();
  }, []);

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
            Nutritional Analysis
          </Heading>
          <Box bg="white" p={6} borderRadius="lg">
            <Heading as="h3" size="md" mb={4}>
              Your Meal Logs
            </Heading>
            {mealLogs.length > 0 ? (
              mealLogs.map((log, index) => (
                <Box key={index} mb={4}>
                  <Text><strong>Meal Type:</strong> {log.mealType}</Text>
                  <Text><strong>Food Items:</strong> {log.foodItems}</Text>
                  <Text><strong>Date:</strong> {new Date(log.date.seconds * 1000).toLocaleDateString()}</Text>
                </Box>
              ))
            ) : (
              <Text>No meal logs found.</Text>
            )}
          </Box>
          <Box bg="white" p={6} borderRadius="lg">
            <Heading as="h3" size="md" mb={4}>
              Daily Intake Recommendations
            </Heading>
            <Text>
              Based on your meal logs, here are some recommendations for your daily intake.
              (Add your nutritional analysis logic here)
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};


