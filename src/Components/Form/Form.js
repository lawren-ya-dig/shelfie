import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
    constructor(props){
        super(props);

        this.state={
            name: '',
            price: 0,
            imgurl: '',
        }


    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    }
    
        handleFormSubmit(){
            this.setState({
                name: this.refs.value,
                price: this.refs.value,
                imgurl: this.refs.value,
            })
        }

        handleClearForm(){
            this.setState({
                name: '',
                price: 0,
                imgurl: '',
            })
        }


  render() {
    return (
        <form>
            <h1>Form</h1>
            <label>Image URL:</label>
            <input id='img' type='text' />
            
            <label>Product Name:</label>
            <input id='name' type='text' />
            
            <label>Price:</label>
            <input id='price' type='text'/>

            <button type='button' onClick={this.handleClearForm}>Cancel</button>
            <button type='submit' onClick={this.handleFormSubmit}>Add to Inventory</button>
        </form>
    
    )
  }
}

export default Form;
