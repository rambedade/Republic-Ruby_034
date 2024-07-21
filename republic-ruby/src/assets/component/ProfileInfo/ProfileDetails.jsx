import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestoreInstance, authMain } from "../../config/firebase";
import { Box, Heading, Text, Spinner } from "@chakra-ui/react";

export const ProfileDetails = () => {
  const [profile, setProfile] = useState({ firstName: "", lastName: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetch profile details");
    const fetchProfile = async () => {
      try {
        const user = authMain.currentUser;
        console.log(user);
        if (user) {
          const profileRef = doc(firestoreInstance, "users", user.uid);
          const profileSnap = await getDoc(profileRef);
          if (profileSnap.exists()) {
            setProfile(profileSnap.data());
          }
        }
      } catch (error) {
        console.error("Error fetching profile details:", error);
        setError("Error fetching profile details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" color="red.500" py={10}>
        Error: {error}
      </Box>
    );
  }

  return (
    <Box
    bg="#a493ef"
    p={6}
    borderRadius="lg"
    boxShadow="md"
    maxW="400px"
    mx="auto"
    color="black"
    textAlign="center" // Center-aligns all text within the box
  >
    <Heading as="h2" size="lg" mb={4}>
      Profile Details
    </Heading>
    <Text fontSize="lg" mb={2}>
      <strong>Name:</strong> {`${profile.firstName} ${profile.lastName}`}
    </Text>
    <Text fontSize="lg">
      <strong>Email:</strong> {profile.email}
    </Text>
  </Box>
  
  );
};
