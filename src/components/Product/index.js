export default function Product(data){


    return(
    <div className="card">
         <ul>
            <li>
            ID {data.id}
            </li>
            <li>
            {data.name}
            </li>
            <li>
            {data.category}
            </li>
            <li>
            {data.f_im}
            </li>
         </ul>
       
    </div>

    )
}

 