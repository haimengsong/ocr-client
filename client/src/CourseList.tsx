import * as React from 'react';
import { Course } from './App';
import './CourseList.css';

class CourseList extends React.Component<any, any> {

    constructor (props: any) {
        super(props)
    }

    render() {

        const {courses, isLoading} = this.props.data;

        if(isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="CourseList">
                <table>
                    <tr>
                        <th>Number</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Enrollment</th>
                        <th>Related Skills</th>
                        <th>Score</th>
                        <th>Level</th>
                        <th>Price</th>
                        <th>Link</th>
                    </tr>
                    {courses.map((course: Course, index: React.ReactNode) =>{
                        return (
                            <tr key={course.id}>
                                <td>{index}</td>
                                <td>{course.courseName}</td>
                                <td>{course.description}</td>
                                <td>{course.enrollment}</td>
                                <td>{course.skills}</td>
                                <td>{course.score}</td>
                                <td>{course.level}</td>
                                <td>{course.price}</td>
                                <td>{course.url}</td>
                            </tr>
                        )}
                    )}
                </table>
            </div>
        );
    }
}

export default CourseList;