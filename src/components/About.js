import User from "./User";
import UserClass from "./userClass";
import React from "react";

import { Component } from "react";

// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <User name={"Sandy"}/>
//           <UserClass name={"Sandy from class"} location={"Hyderabad"}/>
            
//         </div>
//     )
// }

// export default About;



class About extends React.Component {
    constructor(props){
        super(props);
        // console.log('parent constructor')
    }

    componentDidMount(){
        // console.log('Parent did mount')
    }

    render(){
        // console.log('parent render')
        return (
            <div>
                <h1>About</h1>
                <User name={"Sandy"}/>
              <UserClass name={"First from class"} location={"Hyderabad"}/>
              {/* <UserClass name={"Second from class"} location={"Hyderabad"}/> to understand the lifecycle they are two phases the render andd commit phase first is the component calls the constructor and renders,so all child components are rendered in this phase next is commit phase in this the dom is updates so it takes time for react to update the dome,then only componentDidMount is called at last
              when we have parent and child components first the parent constructor,render then it finds child class their so eventually child1 class,render=> child2 class,render then first classdidmount,secondchilddidmount at last the parentconstructordidmount is called,In this final phase api calls are made.Since the dom manipulation in commit phase takes time ,all parent and child components are rendered and are ready by batching all components in the render phase.
                 */}
            </div>
        )
    }
    
  
}



export default About;