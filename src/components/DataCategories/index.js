import React  from "react"
import {useFetch} from '../../hooks/useFetch'
import Categories from "../Categories"





const DataCategories = ({apiName}) => {
    
    const {data, isLoading, error}= useFetch(apiName, 'data')

    return(
        <div className="row">
                    
            {data && apiName.includes('limit=0') && data.meta.countByCategory.category.map((category, i)=> <div className="hola"><Categories {...category} key={i+'category'} /></div> ) } 
         
            {isLoading && <div>Loading products... </div>}
            {error && <div>{error}</div>}  
        </div>
    )
}

export default DataCategories