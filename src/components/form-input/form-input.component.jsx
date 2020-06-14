import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, children, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel withText={props.value}>{label}</FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
