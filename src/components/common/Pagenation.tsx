import React from 'react';
import {Link} from 'react-router-dom';
import { ArrowBold_Gray, ArrowBold_White } from '../../assets/images/index';

const Pagenation:React.FC = () => {
    return(
        <div className="pagenation">
          <button className="btn page-prevBtn"><img src={ArrowBold_Gray} alt="" /></button>
          <ol className="pagination-number">
            <li><Link to="#">1</Link></li>
            <li><Link to="#">2</Link></li>
            <li className="current"><Link to="#">3</Link></li>
            <li><Link to="#">...</Link></li>
            <li><Link to="#">10</Link></li>
          </ol>
          <button className="btn page-nextBtn"><img src={ArrowBold_White} alt="" /></button>
        </div>
    );
};

export default Pagenation;