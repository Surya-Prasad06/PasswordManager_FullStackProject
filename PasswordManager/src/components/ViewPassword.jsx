import React, { useState } from "react";
import "./Style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const ViewPassword = () => {
  // const [visibleStates, setVisibleStates] = useState([]);
  const [passwords, setPasswords] = useState([]);

  // const handleToggle = (index) => {
  //   setVisibleStates((prev) => {
  //     const newStates = [...prev];
  //     newStates[index] = !newStates[index];
  //     return newStates;
  //   });
  // };
  const deletePassword = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/viewpassword/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 204) {
        console.log("User deleted successfully!");

        // Update UI (optional): remove deleted item from state
        setPasswords((prev) => prev.filter((item) => item.id !== id));
      } else {
        console.error("Failed to delete user:", response.status);
      }
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this password?")) {
      deletePassword(id);
    }
  };

  useEffect(() => {
    async function getData() {
      const url = "http://localhost:8080/api/v1/viewpassword";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPasswords(json); // ✅ Set state here
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();
  }, []);
  return (
    <>
      {passwords.map((item, index) => (
        <div key={item.id} style={{ fontFamily: "cursive" }}>
          <div className="card">
            <div className="container" style={{ height:"350px"}}>
              <h4>
                <b>Shorten URL:-</b>
              </h4>
              <p>
                <a href={item.url}> {item.website}</a>
              </p>

              <div>
                <h4>
                  <b>username</b>
                </h4>
                <p>{item.username}</p>
                <h4>
                  <b>password</b>
                </h4>
                <p>
                  ***********
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link to={`/updatepassword/${item.id}`}>
                  <div className="box-button">
                    <div className="button">
                      <span>Update Password</span>
                    </div>
                  </div>
                </Link>

                <div className="box-button">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="button"
                  >
                    <span>Delete</span>
                  </button>
                </div>

                <Link to={`/viewpassword/${item.id}`}>view in Detail</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewPassword;
