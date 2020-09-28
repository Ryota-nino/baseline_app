import React from 'react';

const MyActivityMeter:React.FC = () => {
    return(
        <div className="myActivity-meter">
            <meter max="100" value="80">80%</meter>
            <p className="myActivity-meter__percent">30%</p>
        </div>
    );
};

export default MyActivityMeter