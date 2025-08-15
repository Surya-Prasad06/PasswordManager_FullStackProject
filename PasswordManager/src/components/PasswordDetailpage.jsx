import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PasswordDetailpage = () => {
  const navigate = useNavigate(); // already imported above
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);

  const handleToggle = (index) => {
    setVisible((prev) => !prev);
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
        const json = await response.json();
        setItem(json);
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, [id]);
  if (error) return <div>{error}</div>;
  if (!item) return <div>Loading...</div>;
  return (
    <>
      <div style={{ fontFamily: "cursive" }}>
        <div className="card">
          <div className="container" style={{ height: "350px" }}>
            <h4>
              <b>Shorten URL:-</b>
            </h4>
            <p>
              <a href={item.url}> {item.website}</a>
            </p>
            <h4>
              <b>username</b>
            </h4>
            <p>{item.username}</p>
            <h4>
              <b>password</b>
            </h4>
            <p>
              {visible ? item.password : "***********"}
              <button className="Button" onClick={handleToggle}>
                👁️
              </button>
            </p>
            <div>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "inherit",
                }}
                to={`/updatepassword/${item.id}`}
              >
                <div className="box-button">
                  <div className="button">
                    <span>Update Password</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PasswordDetailpage;
