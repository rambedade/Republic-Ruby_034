import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Heading,
  Flex,
  Spinner,
  Text,
  Divider,
  useColorModeValue,
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
      <Box py={12} bg={useColorModeValue("gray.50", "gray.900")}>
        <Container maxW="container.lg" textAlign="center">
          <Spinner size="xl" />
          <Text mt={4} color="teal.500">Loading...</Text>
        </Container>
      </Box>
    );
  }

  if (!user) {
    return (
      <Box py={12} bg={useColorModeValue("gray.50", "gray.900")}>
        <Container maxW="container.lg" textAlign="center">
          <Text fontSize="xl" color="red.500">Please log in to view your profile.</Text>
        </Container>
      </Box>
    );
  }

  return (
    <Box py={12} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.lg">
        <Stack spacing={8}>
          <Box
            bg={useColorModeValue("yellow.50", "gray.800")}
            p={6}
            borderRadius="lg"
            boxShadow="md"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              wrap="wrap"
              spacing={4}
              justifyContent="space-between"
            >
              <Box
                flex="1"
                minW="400px"
                minH='500px'
                mb={{ base: 4, md: 0 }}
                // bg={useColorModeValue("green.50", "gray.800")}
                bg={useColorModeValue("yellow.50", "gray.800")}
                p={4}
                borderRadius="lg"
                boxShadow="md"
                display='flex'
                placeItems='center'

              >
                <ProfileDetails />
              </Box>
              <Box
                flex="1"
                minW="300px"
                bg={useColorModeValue("yellow.50", "gray.800")}
                p={4}
                borderRadius="lg"
                boxShadow="md"
              >
                <SelectedPlan />
              </Box>
            </Flex>
          </Box>

          <Box
            bg={useColorModeValue("yellow.50", "gray.800")}
            p={6}
            borderRadius="lg"
            boxShadow="md"
          >
            <ExerciseCalendar />
          </Box>

          <Box
            bg={useColorModeValue("yellow.50", "gray.800")}
            p={6}
            borderRadius="lg"
            boxShadow="md"
          >
            <Heading as="h2" size="xl" textAlign="center" mb={4} color="black">
              Food Diary
            </Heading>
            <Divider mb={4} />
            <FoodDetails />
          </Box>

          <Box
            bg={useColorModeValue("yellow.50", "gray.800")}
            p={6}
            borderRadius="lg"
            boxShadow="md"
          >
            <ChangePlan />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
