// Basic input

import { TextFieldProps } from "@mui/material";

interface InputInterface {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  label: string;
  value: string;
  handleChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  handleBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onTouched: boolean;
  errors: string;
  placeholder?: string;
}

export type InputProps = InputInterface & TextFieldProps;
