import React from 'react';
import './App.css';
import Projects from "./Components/Projects";
import AddProjects from './Components/AddProjects';
import uuid from 'uuid';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      projects : []
    }
  }
  componentWillMount(){
    this.setState({projects : [
      {
        id:uuid.v4(),
        title:"Bussiness Website",
        category:"Web Design"
      },
      {
        id:uuid.v4(),
        title:"Social App",
        category:"Mobile Development"
      },
      {
        id:uuid.v4(),
        title:"Ecommerce Shopping Cart",
        category:"Web Development"
      }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects=this.state.projects;
    let index=projects.findIndex(x=>x.id==id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  render(){
    return (
      <div className="App">
        <AddProjects addProject={this.handleAddProject.bind(this)} />
        <h3>Latest Projects</h3>
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
