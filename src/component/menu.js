import News from "./News"

import { Link , Route , Routes }from "react-router-dom";
export default function Menu(){

    return<>

        <div>


<div className="wrapper col2">
    <div id="header" className="clear">
        <div className="fl_left">
       
            <h1>  <img className="logo" src="logow.png" height={50} width={50}/> <a href="index.html">Weather met</a></h1>
            <p className="p">weather forcasts</p>
        </div>
        <div id="topnav"> 
            <ul>

                <li><Link to ={'news'} >Blogs </Link></li>
                <li><a href="#">DropDown</a>
                   
                </li>


                <li className="active"><a href="#" >Homepage</a></li>   
            </ul>
            <form action="#" method="post" id="search">
            <fieldset>
                <legend>Site Search</legend>
                <input type="text" value="Search Our Website&hellip;" onfocus="this.value=(this.value=='Search Our Website&hellip;')? '' : this.value ;" />
                <input type="image" id="go" src="images/search.gif" alt="Search" />
            </fieldset>
        </form>
        </div>
    </div>
</div>
</div>  

    </>
}