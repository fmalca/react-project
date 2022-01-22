import React from 'react'
import {Link} from 'react-router-dom'

const Item = ( {id, title, description,price, pictureUrl, category} ) => {    
    return (
        <>        
        <div>              
            <div>                
                <div>{category.toUpperCase()}</div>
                <img src={pictureUrl} alt="foto" />
                <div>
                    <div>{title}</div>       
                    <button >                        
                        <Link to = {`/detail/${id}`} >
                        Ver detalle
                        </Link>    
                    </button>                
                </div>
            </div>            
        </div>
        </>
    )
}
export default Item