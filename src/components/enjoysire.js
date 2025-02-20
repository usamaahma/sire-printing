import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./enjoysire.css";
import { sireperks } from "../../src/utils/axios";

const imagesData = [
  { src: "../images/graphic.webp", text: "Free Graphics" },
  { src: "../images/friendly.webp", text: "Eco-Friendly" },
  { src: "../images/environment.webp", text: "Environmental Friendly Ink" },
  { src: "../images/shortrun.webp", text: "Short Run" },
  { src: "../images/enjoysire.webp", text: "Custom Size & Style" },
  { src: "../images/price.webp", text: "Competitive Price" },
  { src: "../images/fast.webp", text: "Fast Turnaround" },
  { src: "../images/freedelivery.webp", text: "Free Delivery" },
];

const Enjoysire1 = () => {
  const [sirePerk, setSirePerk] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await sireperks.get("/"); // Replace with your API URL
        setSirePerk(response.data); // Assuming the response contains an array of blogs
        console.log(response.data);
      } catch (err) {
        setError("Failed to load blogs."); // Set error if request fails
      } finally {
        setLoading(false); // Set loading to false after the data is fetched or if an error occurs
      }
    };

    fetchBlogData(); // Call the fetch function
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  return (
    <div>
      {/* Header Section */}
      <div className="enjoy-container">
        <p className="enjoy-txt">Enjoy Sire Printing Perks</p>
      </div>
      {/* Image Grid Section */}
      <div
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <Row gutter={[8, 16]} justify="center" className="rowgap">
          {" "}
          {/* Reduced the gutter value */}
          {sirePerk.map((sireperk, index) => (
            <Col xs={8} sm={8} md={4} lg={3} key={index}>
              <div className="image-wrapper">
                <img
                  src={sireperk.image}
                  alt={sireperk.text}
                  className="responsive-image1" // Use a class for styles
                />
                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {sireperk.title}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Enjoysire1;
