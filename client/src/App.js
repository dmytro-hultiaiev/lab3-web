import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Header, Footer } from "./components";
import {
  SignInPage,
  SignUpPage,
  AboutPage,
  ProfilePage,
  CreateModulePage,
  TestPage,
  ModulePage,
  RepetitionPage,
  MemorizationPage,
  MainPage,
} from "./pages";

import "./style.css";

const privateRoutes = [
  { path: "/", element: <MainPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/create-module", element: <CreateModulePage /> },
  { path: "/test/:id", element: <TestPage /> },
  { path: "/module/:id", element: <ModulePage /> },
  { path: "/repetition/:id", element: <RepetitionPage /> },
  { path: "/memorization/:id", element: <MemorizationPage /> },
  { path: "/about", element: <AboutPage /> },
];

const publicRoutes = [
  { path: "/", element: <MainPage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/about", element: <AboutPage /> },
];

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="wrap">
      <Router>
        <Header />
        <Routes>
          {!token &&
            publicRoutes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          {token &&
            privateRoutes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
