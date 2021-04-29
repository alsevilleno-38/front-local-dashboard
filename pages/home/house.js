import React from "react";
import House from "../../components/Auth/House"
import { Provider } from "react-redux";
import indexStore from "../../redux/store/index"

const housePage = (props) => {
    return (
        <Provider store={indexStore}>
            <House/>
        </Provider>
            
        
    )
}


export default housePage;