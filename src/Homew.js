import { useEffect, useState , useRef } from "react"
import './App.css';

export default function Homew() {

const [city,setcity] = useState(null)  
const [search,setsearch] = useState('mumbai')
const [loc, setloc] =  useState([])

const weather = async ()=>{
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9b5365daa3270d575d9eae3bb05bae4b`
var result = await fetch(url)


var data = await (result.json())       
console.log(data) 
setcity(data.main) 

}

useEffect(()=>{  
    weather()
},[search])

 

// const add = ()=>{

//   {city.map((ob)=>{
//        return  setloc(ob)
//   })}

//   console.log(loc)
// }


    return<>

<div>

  
  
 
    <div className="wrapper col4">
        <div id="container" className="clear">
         
          <div id="shout" className="clear">  
                <div className="fl_left">
                <h2>Weather update</h2>
                    
                </div>
                <p className="fl_right"><a href="#contact">contact us</a></p>
            </div> 
         
            <div id="homepage" className="clear">
                <div className="fl_left">
                    <h2>Satellite image</h2>
                    <div id="hpage_slider">   
                        <div className="item" ><img height={400} width={500}  src="imd.jpg"  alt="" /></div>
                        
                    </div>
                 

                </div>

              
                <input className="temp" placeholder="enter city" value={search} type="search" onChange={(event)=> { setsearch(event.target.value) }} style={{height:'40px', fontWeight:'bold'}} ></input>


         {!city?<div><p>city not found</p>  </div>
                    
         :(<div>

         <div className="fl_right">
    
                    <h1 style={{paddingTop:'0px', display:'flex' , alignItems:'center' , fontSize:'50px' }} >{search} <span>{city.temp >= 30 && city.humidity <= 60 ?
                     <img src="pngwing.com.png" height={120} width={120} alt="" style={{paddingLeft:'16px'}}/>:  <img src="rain.png" height={100} width={100} alt="" style={{paddingLeft:'18px' , paddingTop:'5px'}}/>}

                  </span></h1>

                    <div className="weather">Tempreature - {city.temp} °cel
                     </div>

                    <p className="testimonials humid"> 
                        Humidity - {city.humidity}% <span  style={{fontSize:'18px' , marginLeft:'20px'}} >  max-temp - {city.temp_max}  °cel</span>
                       
                    </p>
                   
                    {city.temp >= 35 ?<div>  <h2>Hot & humid </h2>
                    <p>the Tempreature is quite high in {search} compared to the normal temp during june . humidity will also increase in the coming days </p>
                    
                    </div>:<div>  <h2>pleasent </h2>
                    <p>the Tempreature is pleasent in {search} compared to the normal temp during june . humidity will also increase in the coming days </p>
                    
                    </div>}
                </div>

         </div>)}

        
                  

              
            </div>
       </div>
       </div>
       </div>
    </>
}