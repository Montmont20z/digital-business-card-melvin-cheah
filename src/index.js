import React from "react"
import ReactDOM from "react-dom"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./index.css"

function App(){
    return (
        <div className="app">
            <Main/>
            <Footer/>
            
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
