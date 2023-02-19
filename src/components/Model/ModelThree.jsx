import React from 'react'
import './ModelThree.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const ModelThree = () => {
    return (
      <div className="modelthree_contianer">
        <div className="modelthree_content">
          <div className="model_wrapper">
          
            <p className='black'><BsCheckCircleFill/> Your request has been sent successfully</p>
          </div>
        </div>
      </div>
    );
}

export default ModelThree