import React from "react";

interface Props {
  ttl: string;
  placeholder: string;
}

const InputTextArea: React.FC<Props> = (props) => {
  return (
    <div className="input-txtarea">
      <p className="input-txtarea__heading">{props.ttl}</p>
      <textarea placeholder={props.placeholder}></textarea>
    </div>
  );
};

export default InputTextArea;
