import React from "react";
import { SearchIconGray } from "../../../assets/images/index";

interface Props {
  isIcon: boolean;
  placeholder: string;
  searchFunc?: any;
  width?: string;
  isFreeWord?: boolean;
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
  const pressEnterHandler = (e: any) => {
    if (e.key == "Enter" && props.isFreeWord) {
      props.searchFunc({
        free_word: e.currentTarget.value,
      });
    } else if (e.key == "Enter" && !props.isFreeWord) {
      props.searchFunc({
        business_description: e.currentTarget.value,
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
      />
    </div>
  );
};

export default SearchBar;
