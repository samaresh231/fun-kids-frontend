import React from 'react';
import './WebCam.css'
import Webcam from "react-webcam";
 class WebCam extends React.Component{
    render(){
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
          };
        return (
            <div className="webCam mt-5">
                <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={635}
                videoConstraints={videoConstraints}
                />
            </div>
        );
    }
 }

 export default WebCam;