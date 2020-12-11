import React, { useState } from "react";
import { CheckboxWithText } from "../../Molecules/Input/index";
import PrefecturesData from "../../../assets/data/prefectures";

interface Props {
  companyPref: string[];
  category?: string;
}
const PrefectureSelector: React.FC<Props> = (props) => {
  const [prefToggle, setPrefToggle] = useState<boolean>(false);
  const onCheckHandler = () => {
    // const checkboxes = document.querySelectorAll(
    //   ".check-radio-input"
    // ) as NodeListOf<HTMLInputElement>;
    // console.log(checkboxes);
  };

  const prefSelectorToggle = () => {
    setPrefToggle(!prefToggle);
  };

  const renderPrefecturesList = () => {
    return Object.entries(PrefecturesData["prefectures"]).map(
      ([key, value]) => {
        return (
          <li className="prefecture-accordion__item">
            <p className="prefecture-accordion__category">{key}</p>
            <ul className="prefecture-accordion__child-item">
              {value.map((data: any) => {
                return (
                  <li>
                    <CheckboxWithText
                      keyName={data.code}
                      id={data.code}
                      type="checkbox"
                      txt={data.name}
                      checkboxFunc={onCheckHandler}
                      checkedPref={props.companyPref}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
    );
  };

  return (
    <div className="prefecture-accordion">
      <p
        className={`prefecture-accordion__heading ${prefToggle && "rotate"}`}
        onClick={prefSelectorToggle}
      >
        地域選択
      </p>
      <ul
        className={`prefecture-accordion__select-list ${
          prefToggle && "hidden"
        }`}
      >
        {renderPrefecturesList()}
      </ul>
    </div>
  );
};

export default PrefectureSelector;
