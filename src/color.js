import { useState } from "react"


export default function Color(){

    const [dark,setdark] = useState({
        Color:'white',
        backgroundColor :'black' , 
        border:'2px solid black',
        height:"300px"

    })

    const [btn,setbtn] = useState("Light mode")
   const toggle=()=>{

       if (dark.Color== 'white') {
          setdark({
            Color:'black',
        backgroundColor :'white' , 
        border:'2px solid blue',
        height:"300px"

          })

          setbtn("dark mode")
       }else{
       setdark({ Color:'white',
        backgroundColor :'black' , 
        border:'2px solid black',
        height:"300px"},
)
setbtn("Light mode")
       }
   }

//    const change =()=>{
//           setdark

//    }

    return <>
        <h1>hello</h1>

        <div style={dark}> hello this is dark theme </div>

        <button onClick={()=> toggle()} >{btn}</button>    
    </>
}