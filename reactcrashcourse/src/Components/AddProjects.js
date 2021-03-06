import React from 'react';
import ProjectItem from './ProjectItem';
import uuid from 'uuid';

class AddProjects extends React.Component {
    constructor(){
        super();
        this.state={
            newProject:{}
        }
    }

    static defaultProps={
        categories:['Web Design','Mobile Development','Web Development']
    }

    handleSubmit(e){
        if(this.refs.title.value ===''){
            alert("Title is required");
        }else{
            this.setState({newProject:{
                id:uuid.v4(),
                title: this.refs.title.value,
                category:this.refs.category.value
             }},function(){
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

  render(){

    let categoryOptions = this.props.categories.map(category=>{
         return <option key={category} value={category}>{category}</option>
      })

      return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br/>
                <input type="text" ref="title"/>
            </div><br/>
            <div>
                <label>Category</label><br/>
                <select ref="category">
                    {categoryOptions}
                </select>
            </div><br />
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddProjects;
