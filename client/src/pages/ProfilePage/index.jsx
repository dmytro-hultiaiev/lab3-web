import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

import avatar from "../../assets/images/avatar.jpg";

import "./style.css";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/user/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, []);

  const clearToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <main className="main">
      <div className="container">
        <div className="profile__photo">
          <img src={avatar} alt="Photo" className="profile__photo__item" />
        </div>
        <div className="username" id="username">
          {userData?.login}
        </div>

        <div className="profile__container">
          <div className="profile__item">
            <p className="profile__item__header">Email:</p>
            <p className="profile__item__info" id="email">
              {userData?.email}
            </p>
          </div>
          <div className="profile__item">
            <p className="profile__item__header">Number of modules:</p>
            <p className="profile__item__info" id="numberModules">
              {userData && Object.keys(userData.modules).length}
            </p>
          </div>
          <div className="profile__item">
            <p className="profile__item__header">Registration date:</p>
            <p className="profile__item__info" id="date">
              {userData?.createdAt
                ? dayjs(userData.createdAt).format("DD-MM-YYYY")
                : ""}
            </p>
          </div>
        </div>

        <div className="profile__options">
          <NavLink
            to="/sign-in"
            className="profile__options__item"
            onClick={clearToken}
          >
            Sign out
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export { ProfilePage };
