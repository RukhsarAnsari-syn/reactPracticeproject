import React from 'react';
import ProjectItem from './ProjectItem';

class Projects extends React.Component {
  deleteProjects(id){
    this.props.onDelete(id);
  }
  render(){
    let projectItems;
    if(this.props.projects){
       projectItems = this.props.projects.map(project=>{
          //console.log(project);
          return(
            <ProjectItem onDelete={this.deleteProjects.bind(this)} key={project.title} project={project}/>
          );
      });
    }
    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

projects.propTypes={
  projects:React.propTypes.array,
  
}
export default Projects;
