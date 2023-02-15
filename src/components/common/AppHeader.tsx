import React, { useState } from "react";
import { Anchor, Button, Drawer } from "antd";
import { useMediaQuery } from "react-responsive";

const AppHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const contentHeader = [
    "Hero",
    "About",
    "Features",
    "How It Works",
    "FAQ",
    "Pricing",
    "Contact",
  ];

  const isDesktop = useMediaQuery({ query: "(min-width: 767px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TECH
          </a>
        </div>

        {isDesktop && (
          <Anchor
            affix={false}
            direction="horizontal"
            items={contentHeader.map((i) => {
              const key = i.toLocaleLowerCase();
              return {
                key,
                href: `#${key}`,
                title: i === "Hero" ? "Home" : i,
              };
            })}
          />
        )}

        {isMobile && (
          <>
            <Button type="primary" onClick={showDrawer}>
              <i className="fas fa-bars"></i>
            </Button>
            <Drawer
              placement="right"
              onClose={onClose}
              open={open}
            >
              <Anchor

                direction="vertical"
                items={contentHeader.map((i) => {
                  const key = i.toLocaleLowerCase();
                  return {
                    key,
                    href: `#${key}`,
                    title: i === "Hero" ? "Home" : i,
                  };
                })}
              />
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
};

export default AppHeader;
