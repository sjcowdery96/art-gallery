import React, { useState } from 'react'

function ButtonBar(props) {

    return (
        <div>
            <button value={-5} onClick={props.handleIterate}>Way Back</button>
            <button value={-1} onClick={props.handleIterate}>Back</button>
            <button value={1} onClick={props.handleIterate}>Next</button>
            <button value={5} onClick={props.handleIterate}>Big Next</button>
            <div>
                <button onClick={props.handleRandom}>Try Random!</button>
            </div>
        </div>
    )

}

export default ButtonBar