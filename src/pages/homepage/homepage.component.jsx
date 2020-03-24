import React from "react"
import "./homepage.styles.scss"

import Directory from "../../components/directory/directory.component"




// import MenuItem from "./pages/homepage/homepage.component"

const HomePage = ({ history }) => {
    return (
        <div className = 'homepage'> 
       
           <Directory />
           
        </div>
  
    )
}

export default HomePage