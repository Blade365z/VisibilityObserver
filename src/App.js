import React, { useState } from 'react'
import Card from './Card';
import VisibilityObserver from './VisibilityObserver';

const App = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])



  return (
    <div >
      <div style={{
        maxWidth: '400px',
        maxHeight: '300px',
        overflow: 'scroll',
        padding: '1rem',
        border: '1px solid black',
        margin: '1rem 2rem'
      }}>
        {
          data.map(item => {
            return <Card id={item} key={item} />
          })
        }
      </div>
    </div>
  )
}


export default App;