
import "./App.css"
import {Header} from "./Header.jsx";
import logo from "../assets/react.svg";
import AppContent from "./AppContent.jsx";

function App() {
    return (
        <div>
            <Header logoSrc={logo} pageTitle="Basic Authentication with JWT" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <AppContent />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App


