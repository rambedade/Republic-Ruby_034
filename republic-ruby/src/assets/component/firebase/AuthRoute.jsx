import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../config/useAuth";

export const AuthRoute = (props) => {
  const { children } = props;
  const { user, role, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (user) {
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/profile");
        }
      } else {
        navigate("/register");
      }
    }
  }, [loading, user, role, navigate]);

  if (loading) return <p>Loading</p>;
  else return <>{children}</>;
};
