import React from 'react'
import VisibilityObserver from './VisibilityObserver'


const Card = ({ id, isVisible }) => {
    return (
        <div id={id} style={{
            border: '1px solid black',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            height: '100px'
        }}>

            {isVisible ? <div>
                <h1 style={{ margin: '0' }}>ID: {id}</h1>
                {isVisible && console.log(isVisible, id)}
                {/* {!isVisible && console.log(isVisible, id)} */}
                <h5 style={{ margin: '0' }}>Hello This is a Card</h5>
                <h5 style={{ margin: '0' }} >Demonstrating intersection observer.</h5>
            </div> : <></>}
        </div>
    )
}

export default VisibilityObserver(Card);