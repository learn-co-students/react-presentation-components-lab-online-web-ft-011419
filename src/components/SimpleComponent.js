// Code SimpleComponent Here
import React,{Component} from 'react'
export default class SimpleComponent extends Component {
state= {
  mood: "happy"
}

  handleClick = () =>{
    const changedmood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState(
      {mood: changedmood}
    )
  }

redner() {
  return 

    <div onClick={this.handleClick}> 
    {this.state.mood}>
   
    </div>
  
}
}