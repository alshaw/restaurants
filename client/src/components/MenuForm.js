import React, { Component } from 'react';
import axios from 'axios';

class MenuForm extends Component {
  state = { name: this.props.menu.name, 
            description: this.props.menu.description,
            price: this.props.menu.price }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, price } = this.state;
    const { menu } = this.props;

    if(Object.keys(menu).length) {
      axios.put(menu.url, { menu: { name, description, price } })
        .then( res => {
          this.props.cancelAction();
        })
        .catch( res => {
          // TODO: handle client side errors better
          console.log('error updating menu item');
        });
      } else {
        axios.post(`/api/menus.json`, { menu: { name, description, price }})
          .then( res => {
            // res.data = new product in our database
            this.setState({ name: '', description: '', price: '' })
            this.props.addMenu(res.data)
          })
          .catch( res => {
            console.log('error creating menu item')
          });
      }
  }

  setValue = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value })
  }

  render() {
    const { name, description, price } = this.state;
    const { cancelAction } = this.props;

    return(
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          onChange={this.setValue}
          id='name'
          required
          placeholder='Menu Name'
          autoFocus
        />
        <br />
        <label>Description</label>
        <textarea
          value={description}
          onChange={this.setValue}
          id='description'
          required
          placeholder='Menu Item Description'
        />
        <br />
        <label>Price</label>
        <input value={price} onChange={this.setValue} id='price' type='number' required />
        <br />
        { cancelAction && <button type='button' onClick={cancelAction}>Cancel</button> }
        <input type='submit' />
      </form>
    )
  }
}

export default MenuForm;