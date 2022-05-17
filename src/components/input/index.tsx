import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type InputProps = {
  errorMessage?: string;
  icon?: IconDefinition;
  name: string;
  placeholder?: string;
  label?: string;
  id?: string;
  isRequired?: boolean;
  type?: "search" | "text" | "password" | "email" | "number";
};

const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      {props.icon && <FontAwesomeIcon icon={props.icon} data-testid={props.id} />}
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        required={props.isRequired}
      />
      {props.isRequired && <span >{props.errorMessage}</span>}
    </>
  );
};

export default Input;
