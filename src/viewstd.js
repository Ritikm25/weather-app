 import { useSelector } from "react-redux"
 export default function View() {

     var student = useSelector(store => store.students.value)

     return < >
         <
         div >

         <
         h1 className = "alert-danger text-center" > View Student < /h1> <
         table className = "table" >
         <
         thead >
         <
         tr >
         <
         th > Roll Number < /th> <
         th > Name < /th> <
         th > Age < /th> <
         /tr> <
         /thead>


     <
     tbody > {
             student.map(ob => < tr >

                 <
                 td > { ob.roll } < /td>  <
                 td > { ob.name } < /td>  <
                 td > { ob.age } < /td>


                 <
                 /tr>)}  <
                 /tbody>  <
                 /table>  <
                 /div>  <
                 />
             }