import React, { Component } from 'react';
import './Home.css';
import Nav from '../../component/navbar/NavbarComponent'

function formatName(user) {
    return (user) ? user.firstName + ' ' + user.lastName : '';
    
}

const user = {
    firstName: 'Budi',
    lastName: 'Subandi'
};

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number * 2}</li>
    );

    return (
      <ul>{listItems}</ul>
    );
}
  
const numbers = [1, 2, 3, 4, 5];


class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    state = {
        posts: []
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleGetApi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => { 
            this.setState({
                posts: json
            }); 
            console.log('this.state.posts', this.state.posts);
        })
    }

    render(){
        return (
            <div>
                <ul className="navbar">
                    <Nav text="Register" link="/register" />
                    <Nav text="Assign" link="/assign" />
                    <Nav text="Unassign" link="/unassign" />
                    <Nav text="Tasks" link="/tasks" />
                    <Nav text="Users" link="/users" />
                </ul>
                <h1>Hello, {formatName(user)}</h1>
                <br/><hr/>

                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

                <br/><hr/>
                <NumberList numbers={numbers} />,

                <br/><hr/>
                <button type="button" onClick={this.handleGetApi}>Get Data</button>
                <div>
                    {/* {
                        this.state.posts.map(post => {
                            console.log(post);
                            return <p>Post here</p>
                        })
                    } */}
                </div>
            </div>
        )
    }
}

export default Home;