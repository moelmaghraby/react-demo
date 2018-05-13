import React from 'react';

export default class EmployeeList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const employees = this.props.employees.map(employee => {
            return (
                <tr key={employee.id} onClick={() => { this.props.onEmployeeSelected(employee.id) }}>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.title}</td>
                </tr>
            )
        });
        return (
            <div>
                <h1>Click on employee row to show details</h1>
                <table width="100%">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>title</th>
                    </tr>
                </thead>
                    <tbody>
                        {employees}
                    </tbody>
                </table>
            </div>
        )
    }
}