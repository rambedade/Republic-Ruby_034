import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { AboutPage } from "../Pages/AboutPage";
import { PagenotFound } from "../component/LandingPage/PagenotFound";
import { ArticlesPage } from "../Pages/ArticlesPage";
import { AuthRoute } from "../component/firebase/AuthRoute";
import { ProfilePage } from "../Pages/ProfilePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/articles"
        element={
          <AuthRoute>
            <ArticlesPage />
          </AuthRoute>
        }
      />
      <Route path="*" element={<PagenotFound />} />
    </Routes>
  );
};
