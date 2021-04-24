import React, {useContext} from "react";
import AuthContext from "../../store/AuthContext"
import ListItem from "./ListItem";

const ListConnector = props => {
    console.log(props.children);
    const contextValue = useContext(AuthContext);
    
    return (              
        <>
            {contextValue.names.map((name, index) => (
                <ListItem name={name} key={index} changeName={() => contextValue.changeName(index)}/>
            ))}       
            {props.children} 
        </>
    )                        
}

export default ListConnector;