import React, { Component } from 'react';
import axios from 'axios';

export default class FormUsersComponent extends Component {
    constructor(props) {
        super(props)
        
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: ''
        }
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        
        axios.post('http://localhost:3030/api/register', { users: [ this.state.email ] })
            .then((res) => {
                console.log(res.data)
                alert(res.data.messages)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ email: '' })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="box-header">
                        <h3>Register User</h3>
                    </div>
                    <div className="box-body">
                        <form className="form form-user" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="text" id="email" placeholder="Entry email here" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn btn-success btn-block" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}