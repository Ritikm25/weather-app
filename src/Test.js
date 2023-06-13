 import React, { useState } from "react"
 import { useEffect } from "react";
 import './App.css';

 
export default function New() {
    
    const [products,setproducts] = useState([])  

    const [page, setpage] = useState(1)

const product = async ()=>{  
  var res = await fetch('https://dummyjson.com/products')
 var data = await( res.json())
   console.log(data)  
   setproducts(data.products) 
}
 
useEffect(()=>{

      product()
},[])

   
 const selectPageHandler = (number) =>  {             
     
      setpage(number)
 }
 

    return <>
   <div>
   
 {products.length > 0 && <div className="products">
        {products.slice(page*10-10,page * 10).map((prod) => {  
          return <span className="products__single" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} /> 
            <span>
              {prod.title}
            </span>
          </span>
        })}
      </div>}  

{products.length > 0 && <div className="pagination" >    
   <span className={page==1?"hide":""} onClick={()=> selectPageHandler(page-1)}>◀</span>



       {[...Array(products.length / 10)].map((_,i)=>{
return   <span className={page == i+1 ? "pagehighlight":""} onClick={()=> selectPageHandler(i+1)}>{i+1} </span> 
       }) }  



<span className={page==products.length/10?"hide":""} onClick={()=> selectPageHandler(page+1)}>▶</span>   

  </div>}

   
   </div>  


 




    
     
      </>


    
}
// .slice(page * 10 - 10, page * 10) 