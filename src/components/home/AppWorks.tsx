import { Button, Modal } from "antd";
import React, { useState } from "react";

const AppWorks: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div id="how it works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How It Works</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="contentHolder">
          <Button type="primary" onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
        </div>
        <Modal
          title="Woocommerce Tutorial"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <iframe
            title="Woocommerce Tutorial"
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"
          ></iframe>
        </Modal>
      </div>
    </div>
  );
};

export default AppWorks;
