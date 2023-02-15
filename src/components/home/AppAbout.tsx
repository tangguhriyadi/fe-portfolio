import React, { Key, ReactElement } from "react";

import { Row, Col } from "antd";

type Item = {
    key:Key
    icon:ReactElement
    title:String
    content:String
}

const items:Item[] = [
  {
    key: 1,
    icon: <i className="fas fa-chart-pie"></i>,
    title: "High Performance",
    content:
      "Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences.",
  },
  {
    key: 2,
    icon: <i className="fas fa-desktop"></i>,
    title: "Flat Design",
    content:
      "Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look.",
  },
  {
    key: 3,
    icon: <i className="fas fa-database"></i>,
    title: "Simplified Workflow",
    content:
      "Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.",
  },
];

const AppAbout: React.FC = () => {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Me</h2>
          <p>Muhammad Tangguh Riyadi</p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => (
            <Col key={item.key} md={{span:8}} >
              <div className="content">
                <div className="icon">{item.icon}</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AppAbout;
