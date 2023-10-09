import { useState } from "react";

const User=(props)=>{      //and also i can destructure the props into ({name}) and pass this alone
    const [count]=useState(0);
    const [count2]=useState(1);
    return (
        <div className="user-card">
            User
            <h1>Count={count}</h1>
            <h2>Name:{props.name}</h2>
            </div>
    );
};

export default User;