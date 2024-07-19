
import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AuthRoute = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setLoading(false);
      } else {
        console.log("navigate to register");
        navigate("/register");
        console.log(navigate);
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  if (loading) return <p>Loading</p>;
  else return <>{children}</>;
};
