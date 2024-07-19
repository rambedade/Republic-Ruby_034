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
import { Dashboard } from "../Pages/Dashboard";
import { ForgetPasswordPage } from "../Pages/ForgetPasswordPage";
import BlogDetail from "../component/Blogs/BlogDetail";
import { ServicePage } from "../Pages/ServicePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/blog/:blogId" element={<BlogDetail />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/dashboard"
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/forget_password" element={<ForgetPasswordPage />} />
      <Route path="*" element={<PagenotFound />} />
    </Routes>
  );
};
