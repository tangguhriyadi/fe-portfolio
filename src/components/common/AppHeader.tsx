import { Menu } from "antd";
import React from "react";

const AppHeader = () => {
  const contentHeader = [
    "Home",
    "About",
    "Experiences",
    "Contact",
  ]
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={contentHeader.map(i => {
            const key = i.toLocaleLowerCase()
            return {
              key,
              label:i
            }
          })}
        />
      </div>
    </div>
  );
};

export default AppHeader;
