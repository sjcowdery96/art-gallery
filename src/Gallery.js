import React, { useState } from 'react'

function Gallery(props) {

    return (
        <div>
            <img src={props.artData.primaryImage} alt={props.artData.title} />
            <p>{props.artData.title} created by {props.artData.artistDisplayName} in {props.artData.accessionYear}</p>
            <button>{props.artData.title}</button>
        </div>
    )
}

export default Gallery