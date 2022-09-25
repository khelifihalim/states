import ImagesProfil from './ImageProfil';
import React, {Component} from 'react'

        class Profile extends Component  {

                state = {count: 0}

            componentDidMount(){
                this.myInterval = setInterval(()=>{ 
                    this.setState({count : this.state.count + 1})  
                }, 1000)

                console.log('appele')
            };
            componentWillUnmount(){            
                clearInterval(this.myInterval)
                
                console.log('detruit')
            }

            render() {
                
                return (

                    <div className="App txt">
                        <p>{this.state.count}</p>                       
                        <ImagesProfil/>
                        <h1>KHELIFI Halim</h1>
                        <p>Biography : my bio</p>
                        <p>My Profession is ............</p>                  
                    </div>
            )
            }
            
        };

export default Profile;

