import React  from "react"
import {useFetch} from '../../hooks/useFetch'
import Categories from "../Categories"
import Product from '../Product'
import Totals from '../Totals'




const ProductsListFunction = ({apiName}) => {
    
    const {data, isLoading, error}= useFetch(apiName, 'data')

    return(
        <div >
            
            {data && (data.meta || data.count)  ? <div><Totals {...data} apiName={apiName} /></div> : ""}
            
            {isLoading && <div>Loading products... </div>}
            {error && <div>{error}</div>}  
        </div>
    )
}

export default ProductsListFunction