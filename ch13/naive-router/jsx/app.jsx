const React = require('react')
const ReactDOM = require('react-dom')
const Router = require("./router.jsx")

const map = {
    "#profile": <div>Profile (<a href="#">home</a></div>, // profile directs to homepage
    "#accounts": <div>Accounts (<a href="#">home</a></div>, //
    "*": <div>Dashboard<br/><a href="profile">Accounts</a></div>
}
ReactDOM.render(
    <Router mapping = {mapping}/>,
    document.getElementById('content')
)
