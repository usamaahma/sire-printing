import { Form, Input, Select, Upload, Button } from "antd";
const { Option } = Select;

function Productform() {
  return (
    <div>
      <Form className="allproduct-form">
        <h2>Beat My Quote</h2>

        <Form.Item label="Length">
          <Input placeholder="Length" />
        </Form.Item>

        <Form.Item label="Width">
          <Input placeholder="Width" />
        </Form.Item>

        <Form.Item label="Depth">
          <Input placeholder="Depth" />
        </Form.Item>

        <Form.Item label="Unit">
          <Select defaultValue="inches">
            <Option value="inches">Inch</Option>
            <Option value="cm">Centimeter</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Color">
          <Select placeholder="Select Color">
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="green">Green</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Quantity">
          <Input type="number" placeholder="Quantity" />
        </Form.Item>

        <Form.Item label="Full Name">
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item label="Phone Number">
          <Input placeholder="Phone Number" />
        </Form.Item>

        <Form.Item label="Email Address">
          <Input type="email" placeholder="Email Address" />
        </Form.Item>

        <Form.Item label="Upload File">
          <Upload>
            <Button>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Message">
          <Input.TextArea placeholder="Message" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Productform;
