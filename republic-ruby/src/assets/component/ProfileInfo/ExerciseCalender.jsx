import React, { useEffect, useState } from "react";
import { authMain, firestoreInstance } from "../../config/firebase";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, isSameDay, parseISO, differenceInDays } from "date-fns";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

export const ExerciseCalendar = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [streak, setStreak] = useState(0);
  const [error, setError] = useState(null);
  const userId = authMain.currentUser?.uid;

  useEffect(() => {
    const fetchMarkedDates = async () => {
      if (userId) {
        const routineRef = collection(
          firestoreInstance,
          "users",
          userId,
          "routines"
        );
        const querySnapshot = await getDocs(routineRef);
        const markedDates = {};
        querySnapshot.forEach((doc) => {
          markedDates[doc.id] = true;
        });
        const datesArray = Object.keys(markedDates).map((date) => ({
          date,
          marked: markedDates[date],
        }));
        setDates(datesArray);
        calculateStreak(datesArray);
      }
    };

    fetchMarkedDates();
  }, [userId]);

  const calculateStreak = (datesArray) => {
    if (datesArray.length === 0) {
      setStreak(0);
      return;
    }

    // Sort dates in descending order
    const sortedDates = datesArray
      .map((d) => parseISO(d.date))
      .sort((a, b) => b - a);

    let currentStreak = 1;
    let previousDate = sortedDates[0];

    for (let i = 1; i < sortedDates.length; i++) {
      const currentDate = sortedDates[i];
      if (differenceInDays(previousDate, currentDate) === 1) {
        currentStreak += 1;
        previousDate = currentDate;
      } else {
        break;
      }
    }

    setStreak(currentStreak);
  };

  const handleMarkRoutine = async (date) => {
    const currentDate = new Date();
    const selectedDateString = format(date, "yyyy-MM-dd");
    const currentDateString = format(currentDate, "yyyy-MM-dd");

    if (isSameDay(date, currentDate)) {
      if (userId) {
        await setDoc(
          doc(
            firestoreInstance,
            "users",
            userId,
            "routines",
            selectedDateString
          ),
          {
            marked: true,
          }
        );
        setDates((prevDates) => [
          ...prevDates,
          { date: selectedDateString, marked: true },
        ]);
        setSelectedDate(selectedDateString);
        calculateStreak([...dates, { date: selectedDateString, marked: true }]);
        setError(null);
      }
    } else {
      setError("You can only mark the current date.");
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateString = format(date, "yyyy-MM-dd");
      const isMarked = dates.some((d) => d.date === dateString && d.marked);
      return isMarked ? (
        <Box
          as="span"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="white"
          bg="green.500"
          borderRadius="full"
          fontSize="lg"
          fontWeight="bold"
          p={1}
        >
          ✔
        </Box>
      ) : null;
    }
    return null;
  };

  const getGoalSuggestion = (streak) => {
    const nextGoal = (streak + 1) * 10; // Example goal: 10 days for each streak increment
    return streak >= 1
      ? `Great job! Keep it up for ${nextGoal} days for an even bigger reward!`
      : `Good start! Try to mark the calendar for ${nextGoal} days to set a new goal.`;
  };

  const dateSummary = dates.length
    ? `Marked ${dates.length} day${dates.length > 1 ? "s" : ""}`
    : "No days marked yet";

  const bg = useColorModeValue("white", "gray.800");
  const boxBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      direction={useBreakpointValue({ base: "column", md: "row" })}
      align="center"
      gap={8}
      p={6}
      bg={bg}
      borderRadius="lg"
      boxShadow="md"
      alignItems="center"
      justifyItems="center"
    >
      <Box flex="1" minW="300px" alignContent="center">
        <Calendar
          onClickDay={handleMarkRoutine}
          tileContent={tileContent}
          className="react-calendar"
        />
      </Box>
      <Box flex="1" minW="300px">
        <Heading as="h2" size="lg" mb={4} textAlign="center">
          Completed today’s exercise routine? Mark the calendar to track your
          progress.
        </Heading>
        {error && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <VStack align="stretch" spacing={6}>
          <Box bg={boxBg} p={4} borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="lg" mb={2}>
              Summary
            </Heading>
            <Text fontSize="lg">{dateSummary}</Text>
            <Text fontSize="lg" mt={4}>
              Current Streak: {streak} day{streak > 1 ? "s" : ""}
            </Text>
          </Box>
          <Box bg={boxBg} p={4} borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="lg" mb={2}>
              Goal Suggestion
            </Heading>
            <Text fontSize="lg">{getGoalSuggestion(streak)}</Text>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};
