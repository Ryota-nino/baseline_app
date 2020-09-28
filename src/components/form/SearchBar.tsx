import React from 'react';
import { SearchIconGray } from '../../assets/images/index';

interface Props {
  width?: string;
  isIcon: boolean;
  placeholder: string;
}

const SearchBar:React.FC<Props> = props => {
  const style = {
    width: props.width,
  }
  const isIconRender = () => {
    if(props.isIcon) {
      return <img src={SearchIconGray} alt=""/>
    }
  }
  
  
  return (
    <div style={style} className="searchBar input--normal">
      { isIconRender()  }
        <input type="text" placeholder={props.placeholder}/>
      </div>
  );
}


export default SearchBar;
