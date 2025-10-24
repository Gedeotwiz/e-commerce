"use client";
import React from "react";
import { Layout } from "antd";
import clsx from "clsx";

const { Content } = Layout;

type GContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const GContainer = ({ children, className }: GContainerProps) => {
  return (
    <Layout>
      <Content
        className={clsx(
          className
        )}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default GContainer;
