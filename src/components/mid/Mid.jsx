import React from 'react'
import BacktoPlans from '../back/BacktoPlans';
import LeftBar from '../leftSidebar/LeftBar';
import RightBar from '../rightbar/RightBar';

const mid = () => {
  return (
    <div className="flex flex-col justify-center">
        <BacktoPlans/>
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-start ">
            <LeftBar/>
            <RightBar/>
        </div>
    </div>
  )
}

export default mid