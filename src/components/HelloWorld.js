import React,{useContext }  from 'react';
import { HelloContext } from '../contexts/HelloContext';
import Tilt from 'react-tilt';
import icon from './icon.png';


//This component displays hello word(in specified language)
//here hello world is coming from context
const HelloWorld = () => {
    
    const {hello} = useContext(HelloContext);
    return (
        <div className ='flex ma4 mt4 #76ff03 center' >
			<Tilt className="Tilt abc br2 shadow-4 light-green accent-3 " options={{ max : 60 }} style={{ height: 150, width: 150 }} >
				 <div className="Tilt-inner pa3"> 
                     <h3 className="black-text text-darken-2">
                        {(hello)?hello:<img style={{height : '90px'}}src={icon} alt='logo'/>}
                     </h3>
				 </div>
			</Tilt>
		</div>
    );
}
 
export default HelloWorld;