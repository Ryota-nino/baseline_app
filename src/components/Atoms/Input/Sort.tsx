import React from 'react';



const SortBar:React.FC = (props) => {
  const selectChangeHandler = (e:any) => {
    console.log(e.target.value);
  }
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
}

export default SortBar;
