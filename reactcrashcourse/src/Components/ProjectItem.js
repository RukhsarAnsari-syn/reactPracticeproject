import React from 'react';

class ProjectItem extends React.Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
  render(){
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong> = {this.props.project.category}
        <a href="a" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
