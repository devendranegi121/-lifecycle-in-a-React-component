import React, { Component } from 'react';

class home extends Component {

    constructor(props) {
        super(props);
        this.updateParent = this.updateParent.bind(this)
        this.state = ({
            age: 0
        })
        console.log("Constructor call child")
    }
    static getDerivedStateFromProps(nextProps,oldstate) {
        console.log("getDerivedStateFromProps " + nextProps.count);
        return {
          age: nextProps.age,
        };
      }
    updateParent() {
        this.props.handlerUpdate(20)
    }

   
        
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate "+ nextProps.age );
        return true;
    }

    

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log('=================================================');
    }

    render() {
        return (
            <div> Child
               name {this.props.name} <br />
                age state {this.state.age}
                <button onClick={this.updateParent}>update age</button>

            </div>
        );
    }
}

export default home;