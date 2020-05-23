import * as React from 'react';

interface CourseListState {
    courses: Array<Course>;
    isLoading: boolean;
}

interface Course {
    id: number;
    courseName: string;
}

class CourseList extends React.Component<any, CourseListState> {

    constructor (props: any) {
        super(props)
        this.state = this.props.data
    }

    render() {

        const {courses, isLoading} = this.state;

        if(isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h2> Course List</h2>
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