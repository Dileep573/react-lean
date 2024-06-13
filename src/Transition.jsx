 
import { useState} from "react";
import Brand from './Brand.jsx'
import TabButton from './TabButton.jsx'

import Contact from "./contact.jsx";


 export default function   TabContainer(){

const [tab, setTab ] = useState('Contact','Brand', 'Dropdow');

 return(
<>
 <TabButton 
isActive={tab =='Brand'}
onClick={()=> setTab('Brand')}>
      Brand 
    </TabButton>

   
    <TabButton 
isActive={tab =='Dropdown'}
onClick={()=> setTab('Dropdown')}>
     data
    </TabButton>



    <TabButton 
isActive={tab =='Contact'}
onClick={()=> setTab('Contact')}>
Contact
   </TabButton>


    <hr/>

 {tab =='Brand'&& <Brand/>}
 {tab =='Dropdow' && <Dropdow/>}
 {tab =='Contact' && <Contact/>}

</>
 );
 }