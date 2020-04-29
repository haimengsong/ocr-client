import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface Course {
	id: number;
	courseName: string;
}

interface AppProps {
	
}

interface AppState {
	courses: Array<Course>;
	isLoading: boolean;
}

class App extends React.Component<AppProps, AppState> {

   constructor(props: AppProps) {
   	super(props);

   	this.state = {
   		courses: [],
   		isLoading: false
   	}
   }
 

    render() {

  	const {courses, isLoading} = this.state;

  	if(isLoading) {
  		return <p>Loading...</p>;
  	}

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        	<h2> Course List</h2>
        	{courses.map((course: Course) => 
        		<div key={course.id}>
        			{course.courseName}
        		</div>
        	)}
        </div>
      </div>
    );
  }

  componentDidMount() {
  	this.setState({isLoading: true});

  	fetch('http://localhost:8080/courses')
  		.then(response => response.json())
  		.then(data => this.setState({courses: data, isLoading: false}));
  }
}

export default App;
