
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Card,Button} from 'react-bootstrap'
import Plan from './Plan.js'
import './App.css';
import React, {Component} from 'react';
class App extends Component{
  state = {
    items:[],
    text:""
  }
  changeHandler = e =>{
    this.setState({text:e.target.value})
  }
  handlerAdd = e =>{
    if(this.state.text !=="")
    {
      const items = [...this.state.items, this.state.text];
      this.setState({items: items, text:""})
    }
  }
  handleDel = id =>{
    // {console.log("I am delete Function" ,id)};
    const oldItems = [...this.state.items]
    // {console.log(oldItems)}
    const updateItems = oldItems.filter((element, i) =>{
      return i!==id
    })
    this.setState({items: updateItems});
  }
  render(){
    return(
      <div className="container-fliud my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center ">Today's Plan</h2>
          <div className="row">
            <div className="col-9">
              <input className="form-control" type="text"
               value= {this.state.text} 
               placeholder="Write Plan" onChange = {this.changeHandler}/>
            </div>
            <div className="col-2">
              <button className="btn btn-warning px-5 fw-bold" onClick = {this.handlerAdd} >Add</button>
            </div>
            <div className="container-fluid">
              <ul className="list-unstyled row m-4">
             {this.state.items.map((value,i) =>{
               return <Plan key={i} id={i} value={value} sendData = {this.handleDel} />
             })}
              </ul>
            </div>
           </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default App;
