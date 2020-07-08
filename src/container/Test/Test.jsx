import React from "react";
// import "./styles.css";

Element = () => {
    return (
    <div style={{ marginTop: "10px" }}>
        {/* <input type="text" name="users" placeholder="input here" onChange={this.onChangeUser} /> */}
        <select id="cars" name="carlist" form="carform">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
    </div>
    );
};

class Test extends React.Component {

    constructor(props) {
        super(props)
        
        this.onChangeUser = this.onChangeUser.bind(this);

        this.state = {
            users: [],
            elements: [
                <div style={{ marginTop: "10px" }}>
                    <input type="text" name="users" placeholder="input here" onChange={this.onChangeUser} />
                    <select id="cars" name="carlist" form="carform">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            ]
        }
    }


    onChangeUser(e) {
        this.setState({ users: [...this.state.users, e.target.value] })
        
        console.log('this.state.users', this.state.users);
    }
    
    addUser = () => {
        this.setState({
            elements: [...this.state.elements, <Element />]
        });
    };

    render() {
        return (
        <div className="App">
            <h3>Append a React component in another on button click</h3>
            {this.state.elements}

            <button onClick={this.addUser} style={{ marginTop: "10px" }}>
            Add User
            </button>
        </div>
        );
    }
}

export default Test;