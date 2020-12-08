import React from "react";

interface Props {
  searchFunc: any;
}

const SortBar: React.FC<Props> = (props) => {
  const selectChangeHandler = (e: any) => {
    let sortType: boolean = true;
    if (e.currentTarget.value == 0) {
      sortType = true;
    }
    if (e.currentTarget.value == 1) {
      sortType = false;
    }
    console.log(sortType);
    props.searchFunc({
      older: sortType,
    });
    // props.searchFunc({
    //   older: Number(e.currentTarget.value),
    // });
  };
  return (
    <div className="sort-bar">
      <div>
        <select onChange={selectChangeHandler}>
          <option value="0">新着順</option>
          <option value="1">古い順</option>
        </select>
      </div>
      <p>で並び替えています</p>
    </div>
  );
};

export default SortBar;
