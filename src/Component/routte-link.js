import React, {Component} from 'react';
import './styles.css';
import { BrowserRouter as Router, Link, NavLink,Redirect,Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

// const User = ( {match} ) =>{
//     return  <h1>Usuario  {match.params.username} </h1>
// }

const User = ( params ) =>{
    return  <h1>Usuario  {params.username} </h1>
}

class Menu extends Component{


    state = {
        loggedIn:false
      }
      loginHandle = () => {
        this.setState(prevState => ({
         loggedIn: !prevState.loggedIn  
        }))
      }
      render() {
        return (
          <Router>
            <div className="App">
            <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={
                  { color:'green' }
                }>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeStyle={
                  { color:'green' }
                }>About</NavLink>
              </li>
              <li>
                <NavLink to="/user/john" exact activeStyle={
                  { color:'green' }
                }>User John</NavLink>
              </li>
              <li>
                <NavLink to="/user/peter" exact activeStyle={
                  { color:'green' }
                }>User Peter</NavLink>
              </li>
              </ul>
              </nav>
              <Prompt
                when={!this.state.loggedIn}
                message={(location)=>{
                   return location.pathname.startsWith('/user') ? 'Are you sure?' : true
                 }}
              />
    
            <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>
    
            <Route path="/" exact strict render={
              () => {
                return ( <h1>Welcome Home</h1>);
              }
            }/>
            <Route path="/about" exact strict render={
              () => {
                return ( <h1>Welcome About</h1>);
              }
            }/>
            <Route path="/user/:username" exact strict render={({match})=>(
              this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/' />)
            )}/>
            </div>
          </Router>
        );
      }


    // state= {
    //     loggedIn:false
    // }
    // loginHandle = () =>{
    //     this.setState({loggedIn:true})
    // }
    // render(){

    //     return(
    //         <div>
    //             <Router>
    //                <div className="App">
    //                 <nav>
    //                     <ul>
    //                         <li>
    //                           <NavLink to="/" exact activeStyle={
    //                               {color:'green'}
    //                           } activeClassName="current">Home</NavLink> 
    //                         </li>
    //                         <li>
    //                           <NavLink to="/about" exact activeStyle={
    //                               {color:'green'}
    //                           } activeClassName="current">About</NavLink> 
    //                         </li>
    //                         <li>
    //                           <NavLink to="/user/john" exact activeStyle={
    //                               {color:'green'}
    //                           } activeClassName="current">User</NavLink> 
    //                         </li>
    //                     </ul>
    //                 </nav>
    //                 <input type="button" value="log in" onClick={this.loginHandle.bind(this)}/>
    //                    <Route path="/" exact strict render={
    //                        () =>{
    //                            return (<h1>Hello Bienvenido hacer router y link</h1>)
    //                        }
    //                    }/>

    //                    <Route path="/about" exact strict render={
    //                        () =>{
    //                            return (<h1>Hello Bienvenido hacer About</h1>)
    //                        }
    //                    }/>

    //                    {/* <Route path="/user/:username" exact strict component={User}/> */}
    //                    <Route path="/user/:username" exact strict redner={({match})=>(
    //                        this.state.loggedIn ?  (<User username={match.params.username} />) : (<Redirect to='/'/>)
    //                    )}/>

    //                </div>
    //             </Router>
    //         </div>
    //     )
    // }

}

export default Menu