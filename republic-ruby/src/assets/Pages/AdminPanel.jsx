import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  Box,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Text,
} from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const goals = [
  "Weight Loss",
  "Muscle Gain",
  "General Fitness",
  "Endurance Improvement",
  "Mental Health",
];

const exercises = [
  "Cardio Workout",
  "Strength Training",
  "Yoga Session",
  "Interval Training",
  "Swimming Workout",
];

const generateFakeUser = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  plan: faker.helpers.arrayElement(["Basic", "Standard", "Premium"]),
  exercises: faker.helpers
    .shuffle(exercises)
    .slice(0, faker.number.int({ min: 1, max: 5 })),
  goal: faker.helpers.arrayElement(goals),
});

export const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fakeUsers = Array.from({ length: 10 }, generateFakeUser);
    setUsers(fakeUsers);
  }, []);

  const goalData = goals.map((goal) => ({
    goal,
    count: users.filter((user) => user.goal === goal).length,
  }));

  const exerciseData = exercises.map((exercise) => ({
    exercise,
    count: users.filter((user) => user.exercises.includes(exercise)).length,
  }));

  return (
    <Container maxW="container.lg" py={6}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Admin Panel
        </Heading>
        <Box w="100%" p={4} bg="white" borderRadius="md" shadow="md">
          <Heading as="h2" size="lg" mb={4}>
            Goals Distribution
          </Heading>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={goalData}>
              <XAxis dataKey="goal" />
              <YAxis />
              <Legend />
              <Bar dataKey="count" fill="#002F6C" />{" "}
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box w="100%" p={4} bg="white" borderRadius="md" shadow="md">
          <Heading as="h2" size="lg" mb={4}>
            Exercise Routine Distribution
          </Heading>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={exerciseData}>
              <XAxis dataKey="exercise" />
              <YAxis />
              <Legend />
              <Bar dataKey="count" fill="#ff3a00" radius="md" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box w="100%" p={4} bg="white" borderRadius="md" shadow="md">
          <Heading as="h2" size="lg" mb={4}>
            User Data
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Exercise Routines</Th>
                <Th>Goal</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.exercises.join(", ")}</Td>
                  <Td>{user.goal}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};
