import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//what i was doing wrong - when you do setState I was changing the state from an array to a string value with
// event.target.value... this made my mapfail... when you concat and pass a value it will add it to the array with setstate
export default class List extends Component{
    selectedItem;

    constructor(props){
        super(props);

        this.state = {
            items: [],
            newItem: [],
            color:false,
            deleted:false,
            id:0
        }
    }

    getItem = (event) => {
        this.setState({ newItem: event.target.value})
    }

    addItem = (event) => {
        event.preventDefault()
        this.setState({items : this.state.items.concat(this.state.newItem)})

        this.setState({newItem: ''})
    }

    selectItem = () => {
        console.log(this.item.innerText)
        this.selectedItem = this.item
    }

    deleteItem = () => {
        console.log('delete' + this.selectedItem.innerText)
        this.selectedItem.remove()
        this.selectedItem = null
        // event.target.remove()
        // event.
        //this.setState({color: !this.state.color})
    }
    render(){

        const{items, newItem} = this.state
        let bgColor = this.state.color ? 'purple' : 'white'

        return(
        <div>
            <div>
                <label>To Do: </label>
            </div>
            <div>
                <input onChange={this.getItem} value={newItem}></input>
            </div>
            <div>
                <button onClick={this.addItem}></button>
            </div>


            <div>
             <div>
                 <ul className="list-group">
                     {
                         items.map((item, i) => {
                            return <li id={i} key={i} style={{backgroundColor: bgColor}} ref={item => this.item = item} onClick={this.selectItem}> {item} </li>
                        })
                     }
                 </ul>
                 <button onClick={this.deleteItem}>Delete</button>
             </div>
            </div>
        </div>
    )}
}
