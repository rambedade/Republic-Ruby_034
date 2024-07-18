import { getDocs, collection } from "firebase/firestore";
import { firestoreInstance } from "../../config/firebase";

/***
 * Component to fetch all document form users collection
 * prints in console
 * debugging purpose
 */
export const FetchAllData = () => {
  const fetchAllData = async () => {
    try {
      const usersCollectionRef = collection(firestoreInstance, "users");
      const usersSnapshot = await getDocs(usersCollectionRef);

      usersSnapshot.forEach((doc) => {
        console.log(`Document ID: ${doc.id}`, doc.data());
      });
    } catch (error) {
      console.error("Error fetching Firestore data:", error);
    }
  };

  fetchAllData();

  return <></>;
};
