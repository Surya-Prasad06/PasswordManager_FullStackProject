import React from "react";
import "./Style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddPassword = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState(" ");
  const [url, setUrl] = useState(" ");
  const navagiate = useNavigate();

  const submitHandler = async (event) => {
  event.preventDefault();
  console.log("Form submitted:", { username, password, website, url });

  try {
    const payload = {
      username,
      password,
      website,
      url,
    };

    const response = await fetch("http://localhost:8080/api/v1/addpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("Post created successfully!");
      navagiate("/view-passwords")
    } else {
      console.error("Failed to create post.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <>
      <div className="div">
        <form action="" onSubmit={submitHandler}>
          <label className="label" htmlFor="">
            Username
          </label>
          <input
            value={username} 
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="label" htmlFor="">
            Password
          </label>
          <input
            type="text"
            value={password}
          
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="label" htmlFor="">
            Shorten URL
          </label>
          <input
            type="text"
            value={website}
            required 
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
          />
          <label className="label" htmlFor="">
            Website LInk
          </label>
          <input
            type="url"
            value={url}
             placeholder="https://www.google.com/"
        
            required
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <input type="submit" name="" id="" value="Add Password" />
        </form>
      </div>
    </>
  );
};

export default AddPassword;
