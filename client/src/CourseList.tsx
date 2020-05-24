import * as React from 'react';

import { Course } from './App';

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
            <div>
                {courses.map((course: Course) =>
                    <div key={course.id}>
                        {course.courseName}
                    </div>
                )}
            </div>
        );
    }
}

export default CourseList;