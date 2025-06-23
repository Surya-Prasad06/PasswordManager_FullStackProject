import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For getting ID from URL
import { useNavigate } from "react-router-dom";
const Updatepassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [url, setUrl] = useState("");
  const navagiate = useNavigate();

  
  const { id } = useParams(); // ⬅️ Get the `id` from the route if using React Router


  const handleSubmit = async (e) => {
  e.preventDefault(); // prevent page refresh

  try {
    const response = await fetch(`http://localhost:8080/api/v1/viewpassword/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        website,
        url,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update password. Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Updated successfully:", result);
    alert("Successfully Updated");
        navagiate("/view-passwords");
    // Optionally redirect or show success message
  } catch (error) {
    console.error("Error updating password:", error.message);
  }
};


  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/viewpassword/${id}`
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();

        
        setUsername(data.username);
        setPassword(data.password);
        setWebsite(data.website);
        setUrl(data.url);
      } catch (error) {
        console.error("Error fetching password data:", error.message);
        console.error("Fetch error:", error.message);
      }
    }

    getData();
  }, [id]);

  return (
    <div className="div">
      <form onSubmit={handleSubmit}>
        <label className="label">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="label">Website Name</label>
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <label className="label">Website</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <input type="submit" value="Update Password"  />
      </form>
    </div>
  );
};

export default Updatepassword;
