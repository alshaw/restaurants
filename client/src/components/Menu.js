/*eslint no-restricted-globals: ["warn", "event", "fdescribe"]*/
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuForm from './MenuForm';


class Menu extends React.Component {
  state = { menu: {} }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then( res => this.setState({ menu: res.data }) )
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.menu === this.state.menu)
    this.fetchMenus()
  }

  fetchMenus = () => {
    axios.get(`/api/menus/${this.props.match.params.id}.json`)
      .then( res => this.setState({ menu: res.data }))
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  }

  successRedirect = () => {
    this.props.history.push(`/menus/${this.state.menu.id}`)
  }

  deleteMenu = () => {
    if(confirm('Really Delete?')) {
      axios.delete(this.state.menu.url)
        .then( res => {
          this.props.history.push('/dashboard');
        })
        .catch( res => {
          // TODO: handle client side errors better. HINT: flash messages in react
          console.log('error deleting menu');
        })
    }
  }

  render() {
    const { editing, menu: { name, description, price } } = this.state;

    if(editing) {
      return(
        <MenuForm
          menu={this.state.menu}
          cancelAction={this.toggleEdit}
          successRedirect={this.successRedirect}
        />
      )
    } else {
      return(
        <div>
          <h1>{name}</h1>
          <h3>{description}</h3>
          <h3>{price}</h3>
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={this.deleteProduct}>Delete</button>
          <hr />
          <Link to='/dashboard'>All Menu Items</Link>
        </div>
      )
    }
  }
}

export default Menu;
