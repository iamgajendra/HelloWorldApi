import React,{useState } from 'react';
import M from 'materialize-css';

//this component perform post request
//which will post new language entered by the user in the  DB. 
const CreateLang = () => {

    
    const [lang,setLang] = useState("");
    const [translate,setTranslate] = useState("");


    //This function is executed when form is submitted
    const handleSubmit =(e) =>{
        e.preventDefault();


        //here i have add link to my api which is deployed on heroku
        // you can also add http://localhost:5000/hello
        fetch("https://stormy-chamber-54237.herokuapp.com/hello",{
			method:"post",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				language:lang,
				hello:translate
			})
        }).then(res=>res.json())
		.then(data=>{
			if(data.error_message){
				M.toast({html: data.error_message,classes:"#f44336 red"})
			}
			else{
				M.toast({html:"Language created successfully",classes:"#f44336 red"})
			}
		}).catch(err=>{ 
			console.log(err)
        })
        
        setLang('')
        setTranslate('')
    }
    return (
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
                    <input
                    type="text"
                    placeholder="Enter translated Hello World"
                    value={translate}
                    onChange={(e) => setTranslate(e.target.value)}
                    required
                    />
                    <input type="submit" value="Create Language"
                    className="btn waves-effect waves-light z-depth-2 #bdbdbd grey lighten-1"
                    />
                </form>
                <p>* please type first letter of Language in uppercase</p>
            </div>
            
 		</div>
    );
}
 
export default CreateLang;