import React from "react";

const Timer = props => {
    return(
        <div>
            <p>Time now is {new Date().toLocaleString()}</p>
        </div>
    )
}

export default Timer;