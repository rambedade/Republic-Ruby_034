import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { ReactElement } from "react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} aListItemgn={"center"}>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Goals() {
  return (
    <Box bg={''} py={30}>
        <Container maxW={"5xl"} mt={20} mb={20}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Explore Goal Based Program</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Set you goal, we Help you to Achieve it.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Accordion allowToggle>
              {/* Weight Loss */}
              <AccordionItem>
                <Heading>
                  <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                    <Box as="span" flex="1" textAListItemgn="left">
                      Weight Loss
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel>
                  <Heading mt={3} as='h5' size='s'>Cardio Workouts:</Heading>
                  <UnorderedList>
                    <ListItem>
                      High-Intensity Interval Training (HIIT): Short bursts of
                      intense activity followed by rest or low-intensity
                      exercise.
                    </ListItem>
                    <ListItem>
                      Example: 30 seconds sprinting, 30 seconds walking; repeat
                      for 20-30 minutes.
                    </ListItem>
                    <ListItem>
                      Steady-State Cardio: Longer duration, moderate-intensity
                      exercise.
                    </ListItem>
                    <ListItem>
                      Example: 45-60 minutes of jogging, cycListItemng, or swimming at
                      a steady pace.
                    </ListItem>
                    <ListItem>
                      Circuit Training: Combines strength training and cardio in
                      a circuit format.
                    </ListItem>
                    <ListItem>
                      Example: 10-12 exercises targeting different muscle
                      groups, performed one after another with minimal rest.
                    </ListItem>
                  </UnorderedList>
                  <Heading mt={3} as='h5' size='s'>Strength Training:</Heading>
                  <UnorderedList>
                    <ListItem>
                      FUnorderedListl-Body Workouts: Engages mUnorderedListtiple muscle groups to
                      maximize calorie burn.
                    </ListItem>
                    <ListItem>
                      Example: Squats, deadListItemfts, bench presses, rows, and
                      overhead presses.
                    </ListItem>
                    <ListItem>
                      Compound Movements: Exercises that work mUnorderedListtiple joints
                      and muscle groups simUnorderedListtaneously.
                    </ListItem>
                    <ListItem>
                      Example: Lunges, pUnorderedListl-ups, push-ups, and kettlebell
                      swings.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              {/* Muscle Gain */}
              <AccordionItem>
                <Heading>
                  <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                    <Box as="span" flex="1" textAListItemgn="left">
                      Muscle Gain
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel>
                  <Heading mt={3} as='h5' size='s'>Strength Training:</Heading>
                  <UnorderedList>
                    <ListItem>
                      SpListItemt Routine: Focuses on different muscle groups on
                      different days.
                    </ListItem>
                    <ListItem>Example:</ListItem>
                    <UnorderedList>
                      <ListItem>Day 1: Chest and Triceps</ListItem>
                      <ListItem>Day 2: Back and Biceps</ListItem>
                      <ListItem>Day 3: Legs and ShoUnorderedListders</ListItem>
                    </UnorderedList>
                    <ListItem>
                      Progressive Overload: Gradually increase the weight and
                      intensity of your workouts.
                    </ListItem>
                    <ListItem>
                      Example: Increase weights or repetitions every week.
                    </ListItem>
                    <ListItem>
                      Compound Movements: Essential for building overall
                      strength and muscle.
                    </ListItem>
                    <ListItem>
                      Example: Squats, deadListItemfts, bench presses, and miListItemtary
                      presses.
                    </ListItem>
                    <ListItem>
                      Isolation Exercises: Target specific muscles to enhance
                      muscle definition.
                    </ListItem>
                    <ListItem>
                      Example: Bicep curls, tricep extensions, and calf raises.
                    </ListItem>
                  </UnorderedList>
                  <Heading mt={3} as='h5' size='s'>Cardio:</Heading>
                  <UnorderedList>
                    <ListItem>
                      Low-Intensity Cardio: Helps with recovery and fat control
                      without hampering muscle gains.
                    </ListItem>
                    <ListItem>
                      Example: 20-30 minutes of brisk walking, ListItemght jogging, or
                      cycListItemng a few times a week.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              {/* General Fitness and Health */}
              <AccordionItem>
                <Heading>
                  <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                    <Box as="span" flex="1" textAListItemgn="left">
                      General Fitness and Health
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel>
                  <Heading mt={3} as='h5' size='s'>Balanced Routine:</Heading>
                  <UnorderedList>
                    <ListItem>
                      Cardio: 150 minutes of moderate-intensity or 75 minutes of
                      high-intensity exercise per week.
                    </ListItem>
                    <ListItem>
                      Example: Brisk walking, running, swimming, or cycListItemng.
                    </ListItem>
                    <ListItem>
                      Strength Training: 2-3 days per week, targeting all major
                      muscle groups.
                    </ListItem>
                    <ListItem>
                      Example: FUnorderedListl-body workouts with exercises ListItemke squats,
                      push-ups, rows, and planks.
                    </ListItem>
                    <ListItem>
                      FlexibiListItemty and MobiListItemty: Incorporate stretching and
                      mobiListItemty exercises.
                    </ListItem>
                    <ListItem>
                      Example: Yoga, Pilates, or dedicated stretching sessions
                      2-3 times per week.
                    </ListItem>
                  </UnorderedList>
                  <Heading mt={3} as='h5' size='s'>Additional Tips:</Heading>
                  <UnorderedList>
                    <ListItem>Consistency: Stick to a regUnorderedListar workout schedUnorderedListe.</ListItem>
                    <ListItem>
                      Diet: Complement workouts with a balanced diet appropriate
                      for your goals (e.g., caloric deficit for weight loss,
                      caloric surplus for muscle gain).
                    </ListItem>
                    <ListItem>
                      Rest and Recovery: Ensure adequate sleep and rest days to
                      allow your body to recover and grow stronger.
                    </ListItem>
                    <ListItem>
                      Hydration: Drink plenty of water before, during, and after
                      workouts.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Stack>
        <Flex>
          <Box>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"undraw_Shared_goals.png"}
              objectFit={"cover"}
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
    </Box>
  );
}
