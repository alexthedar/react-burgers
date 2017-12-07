import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.props.ingredients);
    this.setState({loading: true});

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Alex',
        address: {
          street: 'Test Street',
          zipCode: '98765',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };

    axios.post('/orders.json', order)
      .then( res => {
        this.setState({
          loading: false
        });
        console.log(res);
      })
      .catch(err => {
        this.setState({
          loading: false
        });
        console.log(err);
      });
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input 
            className={classes.Input} 
            type="text" 
            name="name" 
            placeholder="Your Name" />
          <input 
            className={classes.Input} 
            type="email"
            name="email" 
            placeholder="Your Email" />
          <input 
            className={classes.Input} 
            type="text" 
            name="street" 
            placeholder="Street" />
          <input 
            className={classes.Input} 
            type="text" 
            name="postal" 
            placeholder="Postal Code" />
          <Button 
            btnType="Success"
            clicked={this.orderHandler}>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;