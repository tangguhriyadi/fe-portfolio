import React from "react";
import { Anchor } from 'antd';

const AppHeader = () => {
  const contentHeader = ["Hero", "About", "Features", "How It Works", "FAQ", "Pricing", "Contact"];
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">TECH</a>
        </div>
         <Anchor
         
         affix={false}
         direction="horizontal"
        items={contentHeader.map((i) => {
          const key = i.toLocaleLowerCase();  
          return {
            key,
            href: `#${key}`,
            title:i === "Hero" ? "Home" : i
          };
        })}
      />
      </div>
    </div>
  );
};

export default AppHeader;
