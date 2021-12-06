import React from 'react'

const Item = ( {id, title, price, pictureURL} ) => {    
    return (
        <>
          <ul>
              <li>{id}</li>
              <li>{title}</li>
              <li>{price}</li>
              <li>{pictureURL}</li>              
          </ul>
        </>
    )
}
export default Item