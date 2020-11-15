import React from "react";

interface Props {
  type: string;
  ttl: string;
  placeholder: string;
  isRequired: boolean;
  unit?: string;
  maxLength?: number;
  name?: string;
}

const Primary: React.FC<Props> = (props) => {
  return (
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
      />
      {props.unit}
    </label>
  );
};

export default Primary;
