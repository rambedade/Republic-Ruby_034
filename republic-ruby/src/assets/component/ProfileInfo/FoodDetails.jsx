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
  Heading,
  useColorModeValue,
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
      await setDoc(
        doc(firestoreInstance, "users", userId, "foodDiary", formattedDate),
        {
          date: formattedDate,
          ...meals,
        },
        { merge: true }
      );
      setEntries((prevEntries) => {
        const updatedEntries = prevEntries.filter(
          (entry) => entry.date !== formattedDate
        );
        return [...updatedEntries, { date: formattedDate, ...meals }];
      });
      setMeals({ breakfast: "", lunch: "", dinner: "" });
      setError(null);
    }
  };

  const bg = useColorModeValue("gray.100", "gray.700");
  const boxBg = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="container.md" bg={bg} p={6} borderRadius="lg" shadow="lg">
      <Box my={6}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          customInput={
            <Button colorScheme="teal" size="lg" bg="#ff3a00">
              {format(selectedDate, "dd MMMM yyyy")}
            </Button>
          }
        />
      </Box>
      <Flex justifyContent={"space-between"} alignItems={"flex-start"} flexWrap="wrap">
        <VStack as="form" onSubmit={handleSubmit} spacing={6} w="48%">
          <FormControl>
            <FormLabel fontSize="lg">Breakfast</FormLabel>
            <Input
              type="text"
              name="breakfast"
              value={meals.breakfast}
              onChange={handleInputChange}
              variant="outline"
              size="lg"
              bg="white"
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="lg">Lunch</FormLabel>
            <Input
              type="text"
              name="lunch"
              value={meals.lunch}
              onChange={handleInputChange}
              variant="outline"
              size="lg"
              bg="white"
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="lg">Dinner</FormLabel>
            <Input
              type="text"
              name="dinner"
              value={meals.dinner}
              onChange={handleInputChange}
              variant="outline"
              size="lg"
              bg="white"
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" bg="#ff3a00">
            Save
          </Button>
          {error && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              {error}
            </Alert>
          )}
        </VStack>
        <Box w="48%" bg={boxBg} p={6} borderRadius="lg" shadow="md">
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Entries for {format(selectedDate, "yyyy-MM-dd")}
          </Heading>
          {entries
            .filter((entry) => entry.date === format(selectedDate, "yyyy-MM-dd"))
            .map((entry, index) => (
              <Box key={index} p={4} mb={4} borderWidth="1px" borderRadius="lg" shadow="sm" bg={bg}>
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
