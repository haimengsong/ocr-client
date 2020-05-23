import * as React from 'react';

class JobDescriptionForm extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {test: this.props.data}
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const data = new FormData(event.target).get('jd');
        this.setState({test:data})

        this.props.onUpdate({isLoading: true})

        fetch('http://localhost:8080/courses', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'text/plain'
            },
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(rdata => this.props.onUpdate({courses: rdata, isLoading: false}));

        this.setState({test: this.props.data})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>{this.state.test}</p>
                <label htmlFor="jd">Paste a job description: </label>
                <input id="jd" name="jd" type="text" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default JobDescriptionForm;