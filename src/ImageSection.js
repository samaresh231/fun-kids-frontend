import React from 'react';
import './ImageSection.css';
import Image from './louis-hansel-shotsoflouis-MardkT836BU-unsplash.jpg'
class ImageSection extends React.Component {
    render() {
        return (
            <div class="image-section mt-5">
                <img src={Image} class="img-fluid p-0 align-middle"/>
            </div>
        );
    }
}

export default ImageSection;