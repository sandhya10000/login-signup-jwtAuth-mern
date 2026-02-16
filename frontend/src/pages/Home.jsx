import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Loggedout");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  //Product resource
  const fetchProducts = async () => {
    try {
      const url = "http://localhost:5000/products";
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result, "result----");
      setProducts(result);
    } catch (error) {
      handleError(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>{loggedInUser}</h1>

      <button className="mb-5" onClick={handleLogout}>
        Logout
      </button>
      <div>
        {products?.map((item, index) => {
          return (
            <ul key={index}>
              <span>
                {item.name}: {item.price}
              </span>
            </ul>
          );
        })}
      </div>

      <ToastContainer />
    </div>
  );
}
