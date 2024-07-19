// src/components/ExerciseRoutine.jsx
import React from 'react';
import { Box, Heading, Text, SimpleGrid, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const exerciseRoutine = [
  {
    category: "Cardio Workout",
    details: [
      { exercise: "Running", duration: "30 minutes", intensity: "High" },
    ],
    image: "https://images.herzindagi.info/image/2022/May/fun-cardio-workout.jpg",
  },
  {
    category: "Strength Training",
    details: [
      { exercise: "Squats", duration: "45 minutes", intensity: "Medium" },
      { exercise: "Bench Press", duration: "45 minutes", intensity: "Medium" },
      { exercise: "Deadlifts", duration: "45 minutes", intensity: "Medium" },
    ],
    image: "https://eastside-online.org/wp-content/uploads/2021/07/muscle-main-1518560715-900x450.jpg",
  },
  {
    category: "Yoga Session",
    details: [
      { exercise: "Sun Salutations", duration: "1 hour", intensity: "Low" },
      { exercise: "Warrior Poses", duration: "1 hour", intensity: "Low" },
      { exercise: "Downward Dog", duration: "1 hour", intensity: "Low" },
    ],
    image: "https://i.insider.com/6172edae4f281c001296a1e7?width=700",
  },
  {
    category: "Interval Training",
    details: [
      { exercise: "High-intensity Interval Training (HIIT) circuits", duration: "20 minutes", intensity: "High" },
    ],
    image: "https://experiencelife.lifetime.life/wp-content/uploads/2023/05/ja23-uyg-sit-1367872098.jpg",
  },
  {
    category: "Swimming Workout",
    details: [
      { exercise: "Freestyle", duration: "45 minutes", intensity: "Medium" },
      { exercise: "Breaststroke", duration: "45 minutes", intensity: "Medium" },
      { exercise: "Backstroke", duration: "45 minutes", intensity: "Medium" },
    ],
    image: "https://experiencelife.lifetime.life/wp-content/uploads/2017/06/pool-swimming.jpg",
  },
];

const goals = [
  {
    goal: "Weight Loss",
    details: [
      "Cardiovascular exercises (e.g., running, cycling, swimming)",
      "High-intensity interval training (HIIT)",
      "Circuit training",
      "Calorie-burning workouts",
    ],
    image: "https://www.eatthis.com/wp-content/uploads/sites/4/2023/09/weight-loss-measure-concept.jpeg?quality=82&strip=1",
  },
  {
    goal: "Muscle Gain",
    details: [
      "Strength training with weights (e.g., weightlifting, resistance training)",
      "Compound exercises (e.g., squats, deadlifts, bench press)",
      "Progressive overload workouts",
      "Protein-rich diet to support muscle growth",
    ],
    image: "https://www.bodybuilding.com/images/2019/april/9-killer-ways-to-gain-muscle-naturally-header-960x540.jpg",
  },
  {
    goal: "General Fitness",
    details: [
      "Balanced combination of cardio and strength training",
      "Functional training (e.g., bodyweight exercises, agility drills)",
      "Flexibility and mobility exercises (e.g., yoga, Pilates)",
    ],
    image: "https://img.uenicdn.com/image/upload/v1525966847/service_images/shutterstock_609082187.jpg",
  },
  {
    goal: "Endurance Improvement",
    details: [
      "Long-distance running or cycling",
      "Aerobic exercises (e.g., swimming, rowing)",
      "Endurance-focused circuit training",
    ],
    image: "https://qph.cf2.quoracdn.net/main-qimg-54ed7c487c377049436766f76bf4ed37-lq",
  },
  {
    goal: "Stress Relief and Mental Health",
    details: [
      "Yoga and meditation",
      "Pilates",
      "Mindful exercises like tai chi",
    ],
    image: "https://res.cloudinary.com/ekincare/image/upload/v1661780677/ac6yr6mfjsdc4d4yvetj.png",
  },
];

const MotionCard = motion(Card);

export const ServicePage = () => {
  return (
    <Box p={5} bg={'#00020e'}>
      <Heading mb={5} textAlign="center" color="#FFF5F5">Exercise Routine</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={3}>
        {exerciseRoutine.map((routine, index) => (
          <MotionCard
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="#adbfd0"
            overflow="hidden"
            minHeight="250px"
            bgImage={`url(${routine.image})`}
            bgSize="cover"
            bgPosition="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            _hover={{ transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CardHeader bg="rgba(0, 0, 0, 0.5)" color="white" textAlign="center" width="100%">
              <Heading size="md">{routine.category}</Heading>
            </CardHeader>
            <CardBody bg="rgba(0, 0, 0, 0.5)" color="white" width="100%">
              {routine.details.map((detail, idx) => (
                <Box key={idx} mb={2}>
                  <Text textAlign="center"><strong>Exercise:</strong> {detail.exercise}</Text>
                  <Text textAlign="center"><strong>Duration:</strong> {detail.duration}</Text>
                  <Text textAlign="center"><strong>Intensity:</strong> {detail.intensity}</Text>
                </Box>
              ))}
            </CardBody>
          </MotionCard>
        ))}
      </SimpleGrid>

      <Heading mt={10} mb={5} textAlign="center" color="#FFF5F5">Goals</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={3}>
        {goals.map((goal, index) => (
          <MotionCard
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            minHeight="250px"
            borderColor="#adbfd0"
            bgImage={`url(${goal.image})`}
            bgSize="cover"
            bgPosition="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            _hover={{ transform: "scale(1.05)", transition: "transform 0.3s ease-in-out" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CardHeader bg="rgba(0, 0, 0, 0.5)" color="white" textAlign="center" width="100%">
              <Heading size="md">{goal.goal}</Heading>
            </CardHeader>
            <CardBody bg="rgba(0, 0, 0, 0.5)" color="white" width="100%">
              {goal.details.map((detail, idx) => (
                <Text key={idx} mb={2} textAlign="center">- {detail}</Text>
              ))}
            </CardBody>
          </MotionCard>
        ))}
      </SimpleGrid>
    </Box>
  );
};
