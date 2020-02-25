// ? Debugging

// import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";

// export class AddCategory extends Component {
//   constructor(props) {
//     super(props);
//     this.input = React.createRef();
//     this.state = {
//       active: true,
//       list: []
//     };
//   }

//   addCategory = () => {
//     const Items = {
//       id: uuidv4(),
//       value: this.input.current.value,
//       date: new Date().toUTCString()
//     };

//     if (localStorage.getItem("list") == null) {
//       const list = [];
//       list.push(Items);
//       localStorage.setItem("list", JSON.stringify(list));
//     } else {
//       const list = JSON.parse(localStorage.getItem("list"));
//       list.push(Items);
//       localStorage.setItem("list", JSON.stringify(list));
//     }
//     this.setState({
//       list: JSON.parse(localStorage.getItem("list"))
//     });
//     this.createCategory();
//   };

//   componentDidMount() {
//     const list = window.localStorage.getItem("list");
//     const parsedList = JSON.parse(list);
//     if (list == null) {
//       return false;
//     } else {
//       this.setState({
//         list: parsedList
//       });
//       console.log(this.state.list);
//     }
//   }

//   render() {
//     return (
//       <>
//         {this.state.list.map(item => {
//           return <p key={item.id}>{item.value}</p>;
//         })}
//       </>
//     );
//   }
// }

// export default AddCategory;
