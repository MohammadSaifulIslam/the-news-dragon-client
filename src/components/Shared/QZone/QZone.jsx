import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const QZone = () => {
    return (
        <div>
            <img className='my-2 img-fluid' src={qZone1} alt="" />
            <img className='my-2 img-fluid' src={qZone2} alt="" />
            <img className='my-2 img-fluid' src={qZone3} alt="" />
        </div>
    );
};

export default QZone;