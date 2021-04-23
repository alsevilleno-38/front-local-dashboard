import React, {useState} from "react";

const ListItem = props => {
    const [age, setAge] = useState(0);
    const changeAge = () => {
        setAge(prevAge => {
            return prevAge + 1;
        })
    }
    return (
        <>
            <p>{props.name}</p>
            <p>{age}</p>
            <button onClick={props.changeName}>Change Name</button>
            <button onClick={changeAge}>Change Age</button>
        </>
    )
}

export default ListItem;