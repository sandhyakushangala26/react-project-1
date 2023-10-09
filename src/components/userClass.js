import React from "react";
//we use super keyword access variable of parent class and use this keyword to get the instanvce and value of props
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"Dummy"
      }
    };
    // this.state = {
    //   count: 0,
    // count2:2,
    //  }; //creating state variabe
    // console.log(this.props.name," child constructor called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json,
    })
    // console.log(this.props.name," child comopoent did mount called")
  }

  componentDidUpdate(){
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("it is unmounted");
    //called when we r leaving the page like going from one component to another component
  }
  render() {
    console.log(this.props.name, "child render called");
    const { name, location } = this.props;
    const { count2 } = this.state; //i can even destructuture and write it in this way
    return (
      <div className="user-card">
        {/* <h1>Count:{this.state.count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button> */}
        {/* <h1>Count:{count2}</h1> */}
        {/* <h2>Name:{this.props.name}</h2> */}
        <h1>{this.state.userInfo[1]?.name}</h1>
        <h2>location:{location}</h2>
      </div>
    );
  }
}

export default UserClass;

//this is a class based component which uses render method to return a piece of jssx code

// Components constructor is callled
// render is called
// dom is updated  with dummy data
// component did mount is called api call=>set state is called
// render is called
// componentDidUpdate is also called
// first is mounting cycle then updating cycle
//component unmount is called as soon as we move to some other page,before the mounting starts on some other component this is called

