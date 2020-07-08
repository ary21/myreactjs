import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './usersTable';

export default class TasksComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { tasksCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3030/api/tasks/common', { user: []})
            .then(res => {
                this.setState({ tasksCollection: res.data.tasks });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.tasksCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <div className="box">
                        <div className="box-header"><h3>Tasks</h3></div>
                        <div className="box-body">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Tasks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.dataTable()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}