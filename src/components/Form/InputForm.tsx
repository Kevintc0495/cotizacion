import React from "react";
import { Input } from "@mui/material";

interface input {
  label: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  fullWidth?: boolean;
  type?: string;
}

const InputForm = ({
  label,
  className,
  onChange,
  value,
  name,
  fullWidth,
  type,
}: input) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <Input
        name={name}
        fullWidth={fullWidth || true}
        id={name}
        onChange={onChange}
        value={value}
        type={type || "text"}
        aria-label={name}
      />
    </div>
  );
};

export default InputForm;
