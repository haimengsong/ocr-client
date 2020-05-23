import * as React from 'react';
import './App.css';
import CourseList from './CourseList';
import JobDescriptionForm from "./JobDescriptionForm";

class App extends React.Component<any, any> {

    constructor (props: any) {
        super(props)
        this.state = {data: {courses: [], isLoading: false}}
        this.onUpdate = this.onUpdate.bind(this)
    }

    render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Online Course Recommendation</h1>
        </header>
        <JobDescriptionForm onUpdate={this.onUpdate}/>
        <CourseList data={this.state.data} />
      </div>
    );
  }

  onUpdate (cdata: any) { this.setState({data: cdata}) }
}

export default App;
