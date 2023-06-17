import { InputProps } from '../../models'
import { handleError } from '../../utilities'
import { TextField } from '@mui/material'

const Input = ({
  name,
  type,
  errors,
  label,
  onTouched,
  value,
  handleBlur,
  handleChange,
  placeholder,
  ...otherProps
}: InputProps) => {
  return (
    <TextField
      fullWidth
      id={name}
      name={name}
      type={type}
      label={label}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={handleError(onTouched, errors)}
      helperText={onTouched && errors}
      placeholder={placeholder} 
      {...otherProps}
    />
  )
}
export default Input
