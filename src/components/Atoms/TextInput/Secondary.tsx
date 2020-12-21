import React, { ChangeEventHandler, KeyboardEventHandler } from "react";

interface Props {
  name: string;
  type: string;
  labelTxt: string;
  isRequired: boolean;
  isRequiredTxt: boolean;
  placeholderTxt: string;
  isError: any;
  isIcon: boolean;
  iconUrl?: string;
  className?: string;
  defaultValue?: string;
  readonly?: boolean;
  onChange?: ChangeEventHandler;
  onKeyPress?: KeyboardEventHandler;
  errorMessage?: string;
}

const Secondary: React.FC<Props> = (props) => {
  let txt: string;
  // const hasErrorCheck = () => {
  //   Object.values(props.isError).forEach((value: any) => {
  //     if (value.isEmpty1) {
  //       txt = "項目を入力してください1";
  //     } else if (value.isEmpty2) {
  //       txt = "項目を入力してください2";
  //     } else if (value.isEmpty3) {
  //       txt = "項目を入力してください3";
  //     }
  //   });
  //   return <p>{txt}</p>;
  // };

  return (
    <>
      <label className={`input--big ${props.className}`}>
        <div className="input--big__wrap">
          {props.isIcon && <img src={props.iconUrl} alt="" />}
          <span className="input--big__label">{props.labelTxt}</span>
          {props.isRequiredTxt && <span className="cAttention">*</span>}
        </div>
        <input
          name={props.name}
          type={props.type}
          required={props.isRequired}
          placeholder={props.placeholderTxt}
          defaultValue={props.defaultValue}
          readOnly={props.readonly}
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
        />
      </label>
      {props.isError && (
        <span className="secondary error-message">{props.errorMessage}</span>
      )}
    </>
  );
};

export default Secondary;
