import React from "react";
import { Layout } from "antd";
import { HeartFilled } from "@ant-design/icons";

const Footer = () => {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      Made with <HeartFilled style={{ color: "red", fontSize: 18 }} /> by{" "}
      <span className="bold-purple"> Ahmad Bilal Amjad </span>
    </Footer>
  );
};

export default Footer;
