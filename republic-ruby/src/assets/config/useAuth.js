import { authMain } from "./firebase";
import React, { useEffect, useState } from "react";

export const adminEmails = [
  "admin@g.com", //adminadmin
  "admin1@g.com",
  // Add other admin emails here
];

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const unsubscribe = authMain.onAuthStateChanged((user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        setRole(adminEmails.includes(user.email) ? "admin" : "user");
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, role, loading };
};
