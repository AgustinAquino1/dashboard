export default function Totals(data){



 
  let name = ""
  if(data && data.meta && data.data.length <1){
   name = "Productos"
    data = data.meta.count
  }
  else if(data && data.count &&  data.data.length >1){
   name = "Usuarios"
    data = data.count.total
  }
  else if(data && data.meta &&  data.data.length >1 ){
   name = "Categorías"
   data = data.meta.countByCategory.category.length
  }
  else if (data && data.data.length ===1 && data.meta){
    name = "último Producto"
    data = data.data[0].name
   
  }
  else if (data && data.data.length ===1 && data.count){
    name = "último usuario"
    data = data.data[0].name
  }

  

    

    return(
      <div className="card">
      <ul> 
        <div className="div-apiName" >
          <li className = "apiName" >{name}</li></div>
        <div className="div-outage"><li className="outage">{data}</li></div>
      
        
      
                                 
      </ul>
      </div>   
    )
}