import React from "react";
import ReactDOM  from "react-dom/client";

// const heading=React.createElement("h1",{id:"heading"},'Helloooooooo from React');  
// // it takes 3 paramaters
// const root=ReactDOM.createRoot(document.getElementById('root'));
// // root is the place all my react code runs
// root.render(heading);

// if i have two childs like h1,h2

// const parent=React.createElement("div",{id:'parent'},
// React.createElement('div',{id:'child'},
// [
// React.createElement('h1',{},'Im a h1 tag'),
// React.createElement('h2',{},'I am h2')
// ]));

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);


//If i have two childs i can make an array of childs
const parent = React.createElement("div", { id: 'parent' },
    [
        React.createElement('div', { id: 'child' },
            [
                React.createElement('h1', {}, 'Im a h1 tag'),
                React.createElement('h2', {}, 'I am h2')
            ]),
        
        React.createElement('div', { id: 'child2' },
            [
                    React.createElement('h1', {}, 'Im a h1 tag'),
                    React.createElement('h2', {}, 'I am h2')
            ])
        
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);


// but the above approach the code is not readable and lengthy




