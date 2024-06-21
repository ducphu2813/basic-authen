import React from 'react';
import WelcomeContent from "./WelcomeContent.jsx";
import AuthContent from "./AuthContent.jsx";

class AppContent extends React.Component {
    render() {
        return (
            <div>
                <WelcomeContent />
                <AuthContent />
            </div>
        )
    }
}

export default AppContent;