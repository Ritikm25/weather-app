

import Menu from "./component/menu"
import Homew from "./Homew"
import News from "./component/News"
import { Route , Routes } from "react-router-dom"

 export default function App() {
    return <>
    <div>
   
  <Menu/>
      
  <Homew/>  
   
<Routes>

<Route path="news" element={<News/>} />
</Routes>


      </div>         
    </>
    
    
 }