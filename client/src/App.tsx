import * as React from 'react';
import './App.css';
import CourseList from './CourseList';
import JobDescriptionForm from "./JobDescriptionForm";


interface CourseListState {
    courses: Array<Course>;
    isLoading: boolean;
}

export interface Course {
    id: number;
    courseName: string;
}

class App extends React.Component<any, CourseListState> {

    constructor (props: any) {
        super(props)
        this.state = {courses: [], isLoading: false}
        this.onUpdate = this.onUpdate.bind(this)
    }

    render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Online Course Recommendation</h1>
        </header>
        <JobDescriptionForm onUpdate={this.onUpdate}/>
        <CourseList data={this.state} />
      </div>
    );
  }

  onUpdate (cdata: any) { this.setState(cdata) }
}

export default App;
