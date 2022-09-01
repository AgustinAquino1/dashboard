export default function Categories(data){


    return(
        <div className="card">
        <ul> 
          <div className="div-apiName" >
            <li className = "apiName" >{data.name}
          </li></div>
          <div className="div-message"><li className="message">{data.associatedProducts}</li></div>
        
          
        
                                   
        </ul>
        </div>      
    )
}

       