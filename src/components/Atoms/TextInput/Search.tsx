import React, { useEffect } from "react";
import { SearchIconGray } from "../../../assets/images/index";
interface Props {
  isIcon: boolean;
  placeholder: string;
  defaultValue?: string;
  searchFunc?: any;
  width?: string;
  types?: string;
}

const SearchBar: React.FC<Props> = (props) => {
  const style = {
    width: props.width,
  };
  const isIconRender = () => {
    if (props.isIcon) {
      return <img src={SearchIconGray} alt="" />;
    }
  };

  useEffect(() => {
    // ホーム画面から入力した検索
    if (props.defaultValue) {
      props.searchFunc({
        free_word: props.defaultValue,
      });
    }
  }, []);

  const pressEnterHandler = (e: any) => {
    // company
    if (e.key == "Enter" && props.types === "company_name") {
      props.searchFunc({
        free_word: e.currentTarget.value,
      });
    } else if (e.key == "Enter" && props.types === "business") {
      props.searchFunc({
        business_description: e.currentTarget.value,
      });
    } else if (e.key == "Enter" && props.types === "top_company_search") {
      props.searchFunc(e.currentTarget.value);
    }

    // student
    if (e.key == "Enter" && props.types === "student_name") {
      props.searchFunc({
        free_word: e.currentTarget.value,
      });
    }
  };

  return (
    <div style={style} className="searchBar input--normal">
      {isIconRender()}
      <input
        type="text"
        placeholder={props.placeholder}
        onKeyPress={pressEnterHandler}
        defaultValue={props.defaultValue}
        maxLength={100}
      />
    </div>
  );
};

export default SearchBar;
