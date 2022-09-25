/*import logo from './logo.svg';*/
import React , {Component} from 'react';
import './App.css';
/*import PicProfil from './images/PicProfil2.jpg';*/
import Profile from './components/Profile'


class App extends Component {

    state = {
      title : 'hello',
      show: false
    }
 
  
  render () { 
    
   
    return (

      <div className='App'>

          <h1>{this.state.title}</h1>        
          <button className='btn' onClick={() => this.setState({show : !this.state.show})}>show profil</button>      
          {this.state.show ? <Profile /> : <p>click to show</p>}

      </div>      
    );
  }
  
}

export default App;
