import * as React from 'react';
import './JobDescriptionForm.css';

class JobDescriptionForm extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {info:''}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const jd = new FormData(event.target).get('jd');

        this.props.onUpdate({isLoading: true})

        fetch('http://localhost:8080/courses', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'text/plain'
            },
            method: 'POST',
            body: jd
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        }).then(data => {
            this.props.onUpdate({courses: data, isLoading: false});
        }).catch(error => {
            this.setState({info:error.toString()})
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>{this.state.info}</p>
                <label htmlFor="jd">Paste Your Job Description Here</label>
                <br />
                <input id="jd" name="jd" type="text" />
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default JobDescriptionForm;