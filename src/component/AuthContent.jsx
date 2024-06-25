import * as React from 'react';
import { request } from "./axios_helper.js";

export default class AuthContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        }
    }

    componentDidMount() {

        request(
            "GET",
            "/messages/hello",
            {}
        ).then((response) => {
            console.log(response.data);
            this.setState({data: response.data})
        })

    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Backend Response: </h5>
                            <ul>
                                {this.state.data && this.state.data.map(
                                    (line) => <li key={line}>{line}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}