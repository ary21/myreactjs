import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    <button className="btn btn-sm btn-primary">Assign new task</button>
                </td>
            </tr>
        );
    }
}

export default DataTable;