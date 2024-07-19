import { useState } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
// import { firestoreInstance } from "../../config/firebase";
// import { authMain } from "../../config/firebase";
import { firestoreInstance,authMain } from "../config/firebase";
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  useToast,
} from "@chakra-ui/react";

export const NutritionManagement = () => {
  const [mealType, setMealType] = useState("");
  const [foodItems, setFoodItems] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = authMain.currentUser;

      if (user) {
        await addDoc(collection(firestoreInstance, "mealLogs"), {
          userId: user.uid,
          mealType,
          foodItems,
          date: new Date(),
        });

        toast({
          title: "Meal log added.",
          description: "Your meal log has been successfully added.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setMealType("");
        setFoodItems("");
      } else {
        console.error("No user is currently logged in.");
      }
    } catch (error) {
      console.error("Error adding meal log: ", error);
      toast({
        title: "Error",
        description: "There was an error adding your meal log.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Container maxW="xl" py={12}>
        <Stack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center">
            Nutrition Management
          </Heading>
          <Box bg="white" p={6} borderRadius="lg">
            <Heading as="h3" size="md" mb={4}>
              Log Your Meal
            </Heading>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Meal Type</FormLabel>
                  <Select
                    value={mealType}
                    onChange={(e) => setMealType(e.target.value)}
                  >
                    <option value="">Select Meal Type</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Food Items</FormLabel>
                  <Input
                    type="text"
                    value={foodItems}
                    onChange={(e) => setFoodItems(e.target.value)}
                    placeholder="Enter food items"
                  />
                </FormControl>
                <Button
                  type="submit"
                  px={6}
                  colorScheme={"orange"}
                  bg={"#ff3a00"}
                  _hover={{ bg: "#ff3b10" }}
                  isLoading={loading}
                >
                  Log Meal
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};


