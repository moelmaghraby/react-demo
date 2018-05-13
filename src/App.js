import React, { Component } from 'react';
import logo from './logo.svg';
import EmployeeList from './components/employee-list';
import EmployeeDetails from './components/employee-details';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      employees:[
        {
          id:1,
          name:'Employee 1',
          age:23,
          title:'developer',
          bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec purus ex. Maecenas imperdiet at metus a ultrices. Maecenas maximus ultricies aliquet. Donec auctor imperdiet condimentum. Aliquam eget risus sit amet metus tincidunt mattis non id sem. Praesent ac metus tempor, eleifend mauris vel, accumsan arcu. Mauris bibendum finibus ipsum nec dignissim. Ut congue ligula ac ornare placerat. Nunc consequat tincidunt diam ac varius. Nam maximus aliquet aliquet. Sed laoreet finibus risus. Donec at congue velit. Suspendisse porta, purus at consectetur molestie, libero sem tristique mauris, ut ultricies mi eros ac nisl. Vivamus id faucibus eros, non euismod leo. Integer gravida ultricies felis nec dictum. Cras sit amet felis pretium, molestie sapien id, convallis nunc.'
        },
        {
          id:2,
          name:'Employee 2',
          age:25,
          title:'BA',
          bio:'Nulla mollis, libero ut volutpat interdum, tellus sapien ornare enim, at vehicula mi nisl faucibus dui. Sed tempus auctor turpis in elementum. Quisque at eros iaculis, sagittis sapien nec, lacinia lectus. Aenean turpis sem, ultrices eget nibh eu, bibendum malesuada mauris. In eu orci ac velit molestie tempus vel ut purus. Praesent mollis quam volutpat porttitor maximus. Nam nec augue dolor. Nullam bibendum feugiat odio, non sollicitudin nisl malesuada vel. Morbi fermentum eget velit ut vehicula. Donec ut urna vitae nulla pharetra suscipit laoreet a magna. Pellentesque sollicitudin gravida lorem efficitur eleifend. Vestibulum sagittis, ipsum id suscipit sodales, lorem lorem sollicitudin mi, quis semper turpis odio eu turpis. Nulla facilisi.'
        },
        {
          id:3,
          name:'Employee 3',
          age:28,
          title:'Senior Developer',
          bio:'No Bio'
        },
        {
          id:4,
          name:'Employee 4',
          age:50,
          title:'Delivery manager',
          bio:'Etiam sit amet velit magna. Curabitur laoreet, est quis venenatis tincidunt, dolor lorem convallis elit, eget bibendum leo sem vitae lacus. Aenean lorem est, luctus in tincidunt sed, tincidunt ac elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod, nisi vel bibendum tincidunt, felis massa fringilla justo, eu ornare quam ex rutrum tortor. Morbi semper justo quis orci varius varius. Duis nec mi ut leo facilisis congue id placerat risus. Maecenas lectus sapien, pellentesque et ante sed, porta tempus libero. Nam dictum, elit ac egestas hendrerit, mauris ipsum accumsan ante, quis blandit magna purus non nulla. Praesent dui tellus, consectetur ac iaculis ac, malesuada non nisi.'
        },
      ],
      selectedEmployee : null
    }
  }
  onEmployeeSelected = (id) =>{
    const selectedEmployee = this.state.employees.find(emp =>{
      return emp.id === id;
    })

    if(selectedEmployee) {
      this.setState({selectedEmployee})
    }
  }
  render() {
    return (
      <div className="App">
       <EmployeeList employees={this.state.employees} onEmployeeSelected = {this.onEmployeeSelected}/>
       <EmployeeDetails employee = {this.state.selectedEmployee}/>
      </div>
    );
  }
}

export default App;
