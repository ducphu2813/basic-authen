import React from 'react';

export default class WelcomeContent extends React.Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Basic Authentication with JWT</h1>
                        <p className="lead">This is a simple web application that demonstrates the use of JWT for basic authentication.</p>
                    </div>
                </div>
            </div>
        )
    }
}
