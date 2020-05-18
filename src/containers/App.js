import React  , { Component }from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


/*const state={
  robots: robots,
  searchfeilds: ''
}
*/
class App extends Component{
  constructor(){
    super()
    this.state={
      robots:[],
      searchfeilds: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
      return response.json();
    })
    .then(users=>{
         this.setState({robots:users})

    });
  }
  onSearchChange=(event)=>{
    this.setState({ searchfeilds : event.target.value})
    const filteredRobots=this.state.robots.filter(robots=>
    {
      return robots.name.toLowerCase().includes(this.state.searchfeilds.toLowerCase())
    })
    //console.log(filteredRobots);
  }
  render(){
        const {robots,searchfeilds}=this.state;

      const filteredRobots=this.state.robots.filter(robot=>
    {
      return robot.name.toLowerCase().includes(searchfeilds.toLowerCase())
    })
      return !robots.length?
       <h1> Loadinig </h1>:
     (
  <div className='tc'>
  <h1 className='f1'> RoboFreinds </h1>
  <SearchBox searchchange={this.onSearchChange}/>
  <Scroll>
  <ErrorBoundry>
 <CardList robots={ filteredRobots }/>
 </ErrorBoundry>
 </Scroll>
 </div>
 ) ;
      
  


  }
 
}

export default App;