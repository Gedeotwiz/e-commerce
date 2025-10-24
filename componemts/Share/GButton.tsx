"use client";
import React from "react";
import { Button } from "antd";
import clsx from "clsx";

type GButtonProps = {
  children: React.ReactNode;
  type?: "primary" | "default" | "dashed" | "text" | "link";
  size?: "small" | "middle" | "large";
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  shape?: "default" | "circle" | "round";
  block?: boolean;
};

export const GButton: React.FC<GButtonProps> = ({
  children,
  type = "primary",
  size = "middle",
  loading = false,
  disabled = false,
  onClick,
  icon,
  shape = "default",
  block = false,
}) => {
  return (
    <Button
      type={type}
      size={size}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      icon={icon}
      shape={shape}
      block={block}
    >
      {children}
    </Button>
  );
};

export default GButton;
