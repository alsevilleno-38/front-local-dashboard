import React, {useState} from "react";
import ListConnector from "./ListConnector";
import AuthContext from "../../store/AuthContext";
import Timer from "../Alert/Timer";

const nameList = ["Pam", "Lam", "Dam"];

// let ListItem have state = {age}

// Listitem has name which comes from List

const List = props => {
    const [names, setNames] = useState(nameList);
    const changeName = (index) => {
        setNames(prevNames => {
            const updatedNames = [...prevNames];
            updatedNames[index] += " modified";
            return updatedNames;
        })                
    }
    const authValue = {
        names: names,
        changeName: changeName
    }
    return (
    <AuthContext.Provider value={authValue}>       
        <ListConnector>
            <Timer/>
        </ListConnector>        
    </AuthContext.Provider>
    )
}

export default List;