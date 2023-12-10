import React, { useState } from 'react'

function Gallery(props) {

    return (
        <div>
            <button>{props.artData.title}</button>
        </div>
    )
}

export default Gallery