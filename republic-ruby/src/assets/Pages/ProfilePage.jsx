import { useEffect, useState } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { firestoreInstance } from "../config/firebase";
import { authMain } from "../config/firebase";
import { ExerciseForm } from "../component/ProfileInfo/ExerciseForm";

export const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = authMain.currentUser;
      console.log("Current user:", user);

      if (user) {
        console.log("Current user ID:", user.uid);
        const docRef = doc(firestoreInstance, "users", user.uid);

        try {
          const userDoc = await getDoc(docRef);
          console.log("User document data:", userDoc);

          if (userDoc.exists()) {
            console.log("User document data:", userDoc.data());
            setUserData(userDoc.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user is currently logged in.");
      }

      setLoading(false);
    };
    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found.</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {`${userData.firstName} ${userData.lastName}`}</p>
      <p>Email: {userData.email}</p>
      <ExerciseForm />
    </div>
  );
};
