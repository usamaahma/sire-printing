import React, { useEffect, useState } from "react";
import { Button, Form, Select, Input, Row, Col, message } from "antd";
import { Breadcrumb } from "antd";
import Productimg1 from "./productimg";
import FileUpload from "../fileupload";
import { category, getquote } from "../../utils/axios";

const { Option } = Select;
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

const ProductDetail1 = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState(false);
  const [error, setError] = useState("");

  const [form] = Form.useForm();

  useEffect(() => {
    console.log("Product:", product);
    console.log("Product Category:", product?.category);

    if (!product?.category) {
      console.error("Category is missing, API call will not proceed.");
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await category.get(`${product?.category}`);
        setCategoryName(response.data.title);
      } catch (err) {
        console.error("Failed to load product details:", err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [product?.category]);

  const handleFinish = async (values) => {
    setLoading(true);

    // Ensure file URL is available before submission
    if (!values.uploadFile) {
      message.error("Please upload a file before submitting!");
      setLoading(false);
      return;
    }

    try {
      const response = await getquote.post("/", values);
      message.success("Form submitted successfully!");
      form.resetFields();
    } catch (error) {
      console.error("API Error: ", error);
      message.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="smallpillow-form">
      <div className="breadcrumb-container">
        <Breadcrumb
          items={[
            {
              title: (
                <a href="/" className="breadcrumb-title">
                  Home
                </a>
              ),
            },
            {
              title: (
                <a href="/CBD-Packaging" className="breadcrumb-title">
                  {categoryName}
                </a>
              ),
            },
            {
              title: (
                <span className="breadcrumb-link">
                  {product?.titlerelatedProducts[0].title}
                </span>
              ),
            },
          ]}
        />
      </div>
      <div className="txt-rigid-maindiv">
        {" "}
        <p className="rigid-txt">{product?.title}</p>
      </div>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        {/* Padding for the row */}
        <Col
          span={10}
          xs={24}
          md={24}
          lg={12}
          style={{ flex: "0 0 40%", marginBottom: "2rem" }}
        >
          <div className="column-content">
            <div className="column-img-main">
              {/* Content for the first column */}
              <Productimg1 product={product} />
            </div>
          </div>
        </Col>
        <Col span={14} xs={24} md={24} lg={12} style={{ flex: "0 0 60%" }}>
          {" "}
          {/* 70% width for second column */}
          <div className="column1-content">
            <Row gutter={16} style={{ marginTop: "20px" }}>
              {" "}
              {/* Nested Row */}
              <Col span={12} xs={24} sm={24} md={24} lg={12}>
                <div className="nested-column-content">
                  {/* Content for the first nested column */}
                  <div className="center-text-small">
                    <h3>GET CUSTOM QUOTE</h3>
                  </div>
                  <Form form={form} layout="vertical" onFinish={handleFinish}>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item name="length">
                          <Input
                            className="input-allproduct"
                            placeholder="Length"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name="width">
                          <Input
                            className="input-allproduct"
                            placeholder="Width"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name="depth">
                          <Input
                            className="input-allproduct"
                            placeholder="Depth"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name="inches">
                          <Select
                            defaultValue="inches"
                            style={{ width: "100%" }}
                            className="input-allproduct"
                          >
                            <Option value="inches">Inches</Option>
                            <Option value="cm">cm</Option>
                            <Option value="mm">mm</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="chooseProduct"
                          label={
                            <span className="small-label">Choose Product</span>
                          }
                        >
                          <Select
                            placeholder="Select Product"
                            className="input-allproduct"
                            style={{ width: "100%" }}
                          >
                            <Option value="product1">Product 1</Option>
                            <Option value="product2">Product 2</Option>
                            <Option value="product3">Product 3</Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col span={12}>
                        <Form.Item
                          name="colors"
                          label={<span className="small-label">Color</span>}
                        >
                          <Select placeholder="Select Color">
                            <Option value="red">Red</Option>
                            <Option value="blue">Blue</Option>
                            <Option value="green">Green</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="quantity"
                          label={<span className="small-label">Quantity</span>}
                        >
                          <Input
                            className="input-allproduct"
                            type="number"
                            placeholder="Enter Quantity"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="phoneNumber"
                          label={<span className="small-label">Phone</span>}
                          className="input-allproduct"
                        >
                          <Input
                            className="input-allproduct"
                            placeholder="Enter Your Phone Number"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="fullName"
                          label={<span className="small-label">Full Name</span>}
                        >
                          <Input
                            className="input-allproduct"
                            placeholder="Enter Your Full Name"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          name="email"
                          label={<span className="small-label">Email</span>}
                        >
                          <Input
                            className="input-allproduct"
                            type="email"
                            placeholder="Enter Your Email"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="uploadFile"
                          label={
                            <span className="small-label">Upload File</span>
                          }
                        >
                          <FileUpload
                            onUploadSuccess={(url) =>
                              form.setFieldsValue({ uploadFile: url })
                            }
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Form.Item name="message" label="Message">
                          <Input.TextArea
                            placeholder="Enter Your Message"
                            rows={2}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24} style={{ textAlign: "center" }}>
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="geta-submit-button"
                            loading={loading}
                          >
                            {loading ? "Submitting..." : "Submit"}
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>{" "}
                </div>
              </Col>
              <Col span={12} xs={24} sm={24} md={24} lg={12}>
                <div className="nested-column-content">
                  {/* Content for the second nested column */}
                  <div className="image-gallery-small">
                    {imagesData.map((image, index) => (
                      <div key={index} className="image-card-small">
                        <div className="image-wrapper-small">
                          <img
                            src={image.src}
                            alt={image.text}
                            className="responsive-image-small"
                          />
                          <p className="image-caption-small">{image.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>{" "}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail1;
