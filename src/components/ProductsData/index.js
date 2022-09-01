import React  from "react"
import {useFetch} from '../../hooks/useFetch'
import Product from '../Product'





const ProductsData = ({apiName}) => {
    
    const {data, isLoading, error}= useFetch(apiName, 'data')

    return(
        <div className="row">          
            {data && apiName.includes('limit=10') && data.data.map((product, i)=> <div className="hola" ><Product {...product} key={i+'product'} /></div>  ) }
            {isLoading && <div>Loading products... </div>}
            {error && <div>{error}</div>}  
        </div>
    )
}

export default ProductsData