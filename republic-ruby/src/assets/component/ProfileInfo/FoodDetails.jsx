import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Flex,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { authMain, firestoreInstance } from "../../config/firebase";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

export const FoodDetails = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [meals, setMeals] = useState({ breakfast: "", lunch: "", dinner: "" });
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const userId = authMain.currentUser?.uid;

  useEffect(() => {
    const fetchEntries = async () => {
      if (userId) {
        const diaryRef = collection(
          firestoreInstance,
          "users",
          userId,
          "foodDiary"
        );
        const querySnapshot = await getDocs(diaryRef);
        const fetchedEntries = querySnapshot.docs.map((doc) => doc.data());
        setEntries(fetchedEntries);
      }
    };

    fetchEntries();
  }, [userId]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeals((prevMeals) => ({
      ...prevMeals,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedDate = format(selectedDate, "yyyy-MM-dd");

    if (userId) {
      // Update or add the entry
      await setDoc(
        doc(firestoreInstance, "users", userId, "foodDiary", formattedDate),
        {
          date: formattedDate,
          ...meals,
        },
        { merge: true } // Use merge to update existing data or create new
      );
      setEntries((prevEntries) => {
        const updatedEntries = prevEntries.filter(
          (entry) => entry.date !== formattedDate
        );
        return [...updatedEntries, { date: formattedDate, ...meals }];
      });
      setMeals({ breakfast: "", lunch: "", dinner: "" });
      setError(null); // Clear error if submission is successful
    }
  };

  return (
    <Container maxW="container.md" bg="white" p={6}>
      <Box my={6}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          customInput={<Button>{format(selectedDate, "dd MMMM yyyy")}</Button>}
        />
      </Box>
      <Flex justifyContent={"space-between"} alignContent={"space-between"}>
        <VStack as="form" onSubmit={handleSubmit} spacing={4}>
          <FormControl>
            <FormLabel>Breakfast</FormLabel>
            <Input
              type="text"
              name="breakfast"
              value={meals.breakfast}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Lunch</FormLabel>
            <Input
              type="text"
              name="lunch"
              value={meals.lunch}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Dinner</FormLabel>
            <Input
              type="text"
              name="dinner"
              value={meals.dinner}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Save
          </Button>
          {error && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              {error}
            </Alert>
          )}
        </VStack>
        <Box my={6}>
          <Text fontSize="2xl" mb={4}>
            Entries for {format(selectedDate, "yyyy-MM-dd")}
          </Text>
          {entries
            .filter(
              (entry) => entry.date === format(selectedDate, "yyyy-MM-dd")
            )
            .map((entry, index) => (
              <Box key={index} p={4} shadow="md" borderWidth="1px" mb={4}>
                <Text>
                  <strong>Breakfast:</strong> {entry.breakfast}
                </Text>
                <Text>
                  <strong>Lunch:</strong> {entry.lunch}
                </Text>
                <Text>
                  <strong>Dinner:</strong> {entry.dinner}
                </Text>
              </Box>
            ))}
        </Box>
      </Flex>
    </Container>
  );
};
