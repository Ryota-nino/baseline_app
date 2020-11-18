import React from "react";
import { CheckboxWithText } from "../../Molecules/Input/index";
import PrefecturesData from "../../../assets/data/prefectures";

const PrefectureSelector: React.FC = (props) => {
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
      <p className="prefecture-accordion__heading">地域選択</p>
      <ul className="prefecture-accordion__select-list">
        {renderPrefecturesList()}
      </ul>
    </div>
  );
};

export default PrefectureSelector;
