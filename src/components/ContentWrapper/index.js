import React from "react"
import ProductsListFunction from "../Products"
import DataCategories from "../DataCategories"
import ProductsData from "../ProductsData"

export default function ContentWrapper() {

   const  apiNames = [
      '/api/users'
      , '/api/users?page=20&limit=1' 
      , '/api/products?page=0&limit=0'
     ,'http://localhost:3000/api/products?page=4&limit=6'
     , '/api/products?page=0&limit=10'
  ] 
    
    return(

      <>
      <h1 className="status-dashbord">Dashbord</h1>
      <div id="wrapper">
      {apiNames.map((apiName, i)=>
                <ProductsListFunction apiName={apiName}  key={i+'apiName'} />)}
        </div>
        <div id="wrapper-a">
      {apiNames.map((apiName, i)=>
                <DataCategories apiName={apiName}  key={i+'apiName'} />)}
        </div>
       
      {apiNames.map((apiName, i)=>
                <ProductsData apiName={apiName}  key={i+'apiName'} />)}
      </>
      )
    
      
    
    };



