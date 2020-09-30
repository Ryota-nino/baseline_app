import React from 'react';

const MyActivityMeter:React.FC = () => {
    return(
        <div className="myActivity-meter">
            <meter max="100" value="75">75%</meter>
            <p className="myActivity-meter__percent">75%</p>
        </div>
    );
};

export default MyActivityMeter