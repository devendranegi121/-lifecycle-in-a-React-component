import React, {Component} from 'react';
import './App.css';
import Home from './components/home'

class app extends Component {

  constructor() {
    super();
    this.state=({
          name: 'dev',
          age:0,
          count:0
      })
      console.log(" constructor call Parent");
      this.updateTime=this.updateTime.bind(this);
  }
  
  componentDidMount() {
   
     this.updateTime();
    console.log('componentDidMount');
    console.log('=================================================');
}

updateTime(){
  setInterval( () =>{
    this.setState({
      count:this.state.count + 1
    })
}, 1000)
}

  updateName(updatedName){
          this.setState({
          age:updatedName
          })
  }

  
  render() {
    return (
      <div className="body">
             <Home name={this.state.name} age={this.state.age} handlerUpdate={this.updateName.bind(this)} count={this.state.count} />
             {this.state.age}

             {this.state.count}
      </div>
    );
  }
}

export default app;
