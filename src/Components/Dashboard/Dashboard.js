import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    
    render() {
        
        return (
            <div>
                <h1>Dashboard</h1>
                <Product name={this.props.name} price={this.props.price}/>
                
            </div>
        );
    }
}

export default Dashboard;