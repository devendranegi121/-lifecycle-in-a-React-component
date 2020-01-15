import React, { Component } from 'react';

class home extends Component {

    constructor(props) {
        super(props);
        this.updateParent = this.updateParent.bind(this)
        this.state = ({
            age: 0
        })
        console.log("Constructor call child one time call only")
    }
    static getDerivedStateFromProps(nextProps,oldstate) {
        console.log("getDerivedStateFromProps every time call when state and props will update " + nextProps.count);
        return {
          age: nextProps.age,
        };
      }
    updateParent() {
        this.props.handlerUpdate(20)
    }

   
        
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate every time call when state and props will update "+ nextProps.age );
        return true;
    }

    

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate every time call when state and props will update ");
        console.log('=================================================');
    }

    render() {
        return (
            <div> Child
               name {this.props.name} <br />
                age state {this.state.age } 
                <button onClick={this.updateParent}>update age</button><br></br>
                <strong> {this.props.count %2==0?"Even No": "Odd No" }</strong>

            </div>
        );
    }
}

export default home;