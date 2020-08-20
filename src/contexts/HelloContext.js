import React,{createContext,useState} from 'react';

export const HelloContext = createContext();

const HelloContextProvider = (props) =>{
    const [hello,setHello] = useState("");

    const addHello = (helloworld) => {
        setHello(helloworld)
        console.log(hello)
    };

    return (
        <HelloContext.Provider value ={{hello, addHello}} >
            {props.children}
        </HelloContext.Provider>     
    )
}

export default HelloContextProvider;