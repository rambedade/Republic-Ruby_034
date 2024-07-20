import React from "react";
import { Box, Container, Stack, Heading, Flex } from "@chakra-ui/react";
import { ProfileDetails } from "../component/ProfileInfo/ProfileDetails";
import { SelectedPlan } from "../component/ProfileInfo/SelectedPlan";
import { ExerciseCalendar } from "../component/ProfileInfo/ExerciseCalender";
import { FoodDetails } from "../component/ProfileInfo/FoodDetails";
import { ChangePlan } from "../component/ProfileInfo/ChangePlan";

export const ProfilePage = () => {
  return (
    <Box py={12} bg={"gray.50"}>
      <Container maxW="container.lg">
        <Stack spacing={8}>
          {/* Flex container for side-by-side layout */}
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
