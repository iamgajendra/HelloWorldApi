import React,{useState, useContext } from 'react';
import { HelloContext } from '../contexts/HelloContext';
import M from 'materialize-css'
import HelloWorld from './HelloWorld';


//this component perform get request
//which will get response 
// from api and hello world is added to context.
const LanguageForm = () =>{
    const {addHello} = useContext(HelloContext);
    const [lang,setLang] = useState("");


    //This function is executed when form is submitted
    const handleSubmit =(e) =>{
        e.preventDefault();


        //here i have add link to my api which is deployed on heroku
        // you can also add http://localhost:5000/hello
        fetch(`https://stormy-chamber-54237.herokuapp.com/hello?language=${lang}`,{
            method:"get"
        }).then(res=>res.json())
        .then(data=>{
            if(data.error_message){
                console.log(data.error_message)
				M.toast({html: data.error_message,classes:"#f44336 red"})
			}
			else{
                addHello(data.message.msgText)
                console.log(data.message.msgText)
			}
        })
        .catch(err=>{
			console.log(err)
        })
        
        setLang('');

    }

    return(
        <div className="mycard">
			<div className="card auth-card input-field z-depth-4">
                <form onSubmit={handleSubmit}>
                    <h2 className="brand-logo">Hello World Api</h2>
                    <input
                    type="text"
                    placeholder="Enter Language"
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                    required
                    />
                    <input type="submit" value="See Magic"
                    className="btn waves-effect waves-light z-depth-2 #bdbdbd grey lighten-1"
                    />
                </form>
                <p>* please type first letter of Language in uppercase</p>
                <HelloWorld/>
            </div>
            
 		</div>
    );
}

export default LanguageForm;