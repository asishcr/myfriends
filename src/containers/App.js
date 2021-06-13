import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from  '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary'


class App extends Component {
    constructor() {
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots:users}));
    }


    render(){
        const filteredRobots=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return (
            <div className="tc">
            <h1 className ="f2">My&nbsp;&nbsp;&nbsp;Friends</h1>
            <SearchBox searchChange ={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
            </div>
        )
    }

};

export default App;