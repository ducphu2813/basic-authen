import * as React from 'react';
import { request } from "./axios_helper.js";
import axios from "axios";

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

        // axios.get('http://localhost:8080/messages/hello')
        //     .then((response) => {
        //         console.log('Response:', response);
        //         if (Array.isArray(response.data)) {
        //             this.setState({data: response.data});
        //         } else {
        //             console.error('Data is not an array:', response.data);
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('There was an error!', error);
        //     });
    }

    render() {
        return (
            <div>
                {this.state.data && this.state.data.map(
                    (line) => <p>{line}</p>
                )}
            </div>
        )
    }


}