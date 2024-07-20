import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestoreInstance, authMain } from "../../config/firebase";
import { Box, Heading, Text } from "@chakra-ui/react";

export const ProfileDetails = () => {
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = authMain.currentUser;
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
    return <Box textAlign="center">Loading...</Box>;
  }

  if (error) {
    return (
      <Box textAlign="center" color="red.500">
        Error: {error}
      </Box>
    );
  }

  return (
    <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Profile Details
      </Heading>
      <Text>
        <strong>Name:</strong> {`${profile.firstName} ${profile.lastName}`}
      </Text>
      <Text>
        <strong>Email:</strong> {profile.email}
      </Text>
    </Box>
  );
};
