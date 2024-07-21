import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Heading,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ProfileDetails } from "../component/ProfileInfo/ProfileDetails";
import { SelectedPlan } from "../component/ProfileInfo/SelectedPlan";
import { ExerciseCalendar } from "../component/ProfileInfo/ExerciseCalender";
import { FoodDetails } from "../component/ProfileInfo/FoodDetails";
import { ChangePlan } from "../component/ProfileInfo/ChangePlan";
import { onAuthStateChanged } from "firebase/auth";
import { authMain } from "../config/firebase";

export const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authMain, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Box py={12} bg={"gray.50"}>
        <Container maxW="container.lg" textAlign="center">
          <Spinner size="xl" />
          <Text mt={4}>Loading...</Text>
        </Container>
      </Box>
    );
  }

  if (!user) {
    return (
      <Box py={12} bg={"gray.50"}>
        <Container maxW="container.lg" textAlign="center">
          <Text fontSize="xl">Please log in to view your profile.</Text>
        </Container>
      </Box>
    );
  }

  return (
    <Box py={12} bg={"gray.50"}>
      <Container maxW="container.lg">
        <Stack spacing={8}>
          <Box>
            <Flex
              direction={{ base: "column", md: "row" }}
              wrap="wrap"
              spacing={4}
            >
              <Box flex="1" minW="300px" display="flex" flexDirection="column">
                <ProfileDetails />
              </Box>
              <Box flex="1" minW="300px" display="flex" flexDirection="column">
                <SelectedPlan />
              </Box>
            </Flex>
          </Box>

          <ExerciseCalendar />

          <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="xl" textAlign="center" mb={4}>
              Food Diary
            </Heading>
            <FoodDetails />
          </Box>

          <ChangePlan />
        </Stack>
      </Container>
    </Box>
  );
};
