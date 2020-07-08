import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj}
                </td>
                <td>
                    <button className="btn btn-sm btn-primary">Unassign</button>
                </td>
            </tr>
        );
    }
}

export default DataTable;