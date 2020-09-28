//import { ReactComponent } from '*.svg';
import React from 'react';
import Listitem from './Listitem';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons';
library.add(faMinusCircle);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      list:[],
      inputitem:{
        text:'',
        key:''
      }
    }
    this.handlechange=this.handlechange.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.editItem=this.editItem.bind(this);
  }
  handlechange(e){
    this.setState({
      inputitem:{
        text:e.target.value ,
        key: Date.now()
      }
    })
  }
  addItem(e){
   e.preventDefault( );
   const newItem = this.state.inputitem;
   if(newItem.text !==""){
    const newList=[...this.state.list,newItem];
     this.setState({
       list:newList,
       inputitem : {
         text:'',
         key:''
       }
     })
   }
  }
  deleteItem(key){
    const filtereditems = this.state.list.filter( item =>
      item.key!== key);
      this.setState({
        list:filtereditems
      })
  }
  editItem(text,key){
   const lists=this.state.list;
   lists.map( item=>{
     if(item.key===key){
     item.text=text;
     }
   } )
   this.setState({
     list:lists
   })
  }
  render(){
  return (
    <div > 
      <h1>TO-DO List</h1>
    <header  className="background"> 
      <form id="todo-form" onSubmit={this.addItem}>
        <input type="text" placeholder="enter text" onChange={this.handlechange}
        value={this.state.inputitem.text}/>
        <button type="submit">ADD</button>
        </form>
    <Listitem list={this.state.list}
    deleteItem={this.deleteItem}
    editItem={this.editItem} > </Listitem> </header>
    </div>
  );
  }
}

export default App;
