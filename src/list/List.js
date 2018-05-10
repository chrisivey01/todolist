import classNames from 'classnames';
import React, { Component } from 'react';

class App extends Component {

    // Constructor to set our initial state
    constructor(props) {
        super(props);
        this.state = {
            items: [ ],
            tempInput:'',
            completed: [ ]
        };
    }

    markCompleted = (index) => {
        // This is so dumb. I can't modify arrays directly in the state? Screw you react.
        this.setState((prevState, props) => {
            let completed = prevState.completed;
            completed[index] = !completed[index];
            return {
                completed: completed
            };
        });
    }

    addItem = () => {
        this.setState((prevState, props) => {
            return {
                items: [...prevState.items, this.state.tempInput],
                completed: [...prevState.completed, false]
            };
        });
    }

    handleChange = (event) => {
        this.setState({tempInput: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">TODO List</h1>
                </header>
                <p className="App-intro">
                    To get started, add an item using the form. Click on an item to toggle it as completed (Green)
                </p>
                <input value={this.state.tempInput} onChange={this.handleChange} /><button onClick={this.addItem}>Add Item</button>

                <ul>
                    {this.state.items.map((item, index) =>
                        <li key={index} onClick={() => this.markCompleted(index)} className={classNames({completed: this.state.completed[index]})}>{item}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;

// import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
//
// //what i was doing wrong - when you do setState I was changing the state from an array to a string value with
// // event.target.value... this made my mapfail... when you concat and pass a value it will add it to the array with setstate
// export default class List extends Component{
//     selectedItem;
//
//     constructor(props){
//         super(props);
//
//         this.state = {
//             items: [],
//             newItem: [],
//             color:false,
//             deleted:false,
//             id:0
//         }
//     }
//
//     getItem = (event) => {
//         this.setState({ newItem: event.target.value})
//     }
//
//     addItem = (event) => {
//         event.preventDefault()
//         this.setState({items : this.state.items.concat(this.state.newItem)})
//
//         this.setState({newItem: ''})
//     }
//
//     selectItem = () => {
//         console.log(this.item.innerText)
//         this.selectedItem = this.item
//     }
//
//     deleteItem = () => {
//         console.log('delete' + this.selectedItem.innerText)
//         this.selectedItem.remove()
//         this.selectedItem = null
//         // event.target.remove()
//         // event.
//         //this.setState({color: !this.state.color})
//     }
//     render(){
//
//         const{items, newItem} = this.state
//         let bgColor = this.state.color ? 'purple' : 'white'
//
//         return(
//         <div>
//             <div>
//                 <label>To Do: </label>
//             </div>
//             <div>
//                 <input onChange={this.getItem} value={newItem}></input>
//             </div>
//             <div>
//                 <button onClick={this.addItem}></button>
//             </div>
//
//
//             <div>
//              <div>
//                  <ul className="list-group">
//                      {
//                          items.map((item, i) => {
//                             return <li id={i} key={i} style={{backgroundColor: bgColor}} ref={item => this.item = item} onClick={this.selectItem}> {item} </li>
//                         })
//                      }
//                  </ul>
//                  <button onClick={this.deleteItem}>Delete</button>
//              </div>
//             </div>
//         </div>
//     )}
// }
