import React from "react";
import ReactDOM  from "react-dom/client";

//JSX is actually html like syntax but not html in javascript

// const jsxheading = <h1 className="heading">Namaste Hyderabad people</h1>;   //single line

const jsxheading=(
    <h1 className="heading" tabIndex='3'>
        HIII
        </h1>           //this is a react elwment
);    //multi line


//React funcitonal component
// a component in another component is called component composition
const Title=()=>(
<h1>I am a title </h1>
);


const title=(
    <h1>Am a normalll java script variable</h1>
)

const HeadingComponet=()=>(
    <div id="contianer">
        <Title/>
        {Title()}
        <Title></Title>
        {title}   
      
      
<h2>{5+8}</h2>

     <h1> I am a functional Component </h1>;     
    </div>
    
);



const HeadingComponet1=()=>(
    <h1> I am a functional Component </h1>     //React funcitonal component same as above can write without return also
);


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxheading);  react lement
root.render(<HeadingComponet/>);




