import React, { KeyboardEventHandler } from "react";

interface Props {
  type: string;
  ttl: string;
  placeholder: string;
  isRequired: boolean;
  isError?: boolean;
  unit?: string;
  maxLength?: number;
  name?: string;
  onKeyPress?: KeyboardEventHandler;
}

const Primary: React.FC<Props> = (props) => {
  return (
    <>
      <label className="free-word">
        <h3 className="heading6">
          {props.ttl}
          {props.isRequired && <span className="cAttention">*</span>}
        </h3>
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          required={props.isRequired}
          maxLength={props.maxLength}
          onKeyPress={props.onKeyPress}
        />
        {props.unit}
        {props.isError && <span className="error-message"></span>}
      </label>
    </>
  );
};

export default Primary;
