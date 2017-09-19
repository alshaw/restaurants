import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import MenuForm from './MenuForm';

class Dashboard extends React.Component {
  state = { menus: [] }


  componentDidMount() {
    axios.get('/api/menus')
      .then( res => this.setState({ menus: res.data }) )
   }

  render() {
    let { menus } = this.state;
    return (
      <ul>
       { menus.map( m => 
           <li key={m.id}>
             <Link to={`/menus/${m.id}`}>{m.name}</Link>
           </li> 
         ) 
       }
     </ul>
   )
 }
}

export default Dashboard;