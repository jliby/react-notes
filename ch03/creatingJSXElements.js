reactDOM.render(
    React.createElement("h1", null, "Hello World"),
    document.getElementById("content")
)

ReactDOM.render(
    <h1>HelloWorld</h1>,
    document.getElementById("content")
)

let helloWorldReactElement = <h1>Hello World</h1>
ReactDOM.render(
    helloWorldReactElement,
    document.getElementById('content')
)

// creating Helloworld class in JSX
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
            <h1>1. Helloworld!</h1>
            <h1>2. Helloworld!</h1>
            </div>
        )
    }
}
//rendering above class
ReactDOM.render( 
    <HelloWorld/>,
    document.getElementById('content')
)

let helloWorldReactElement = <h1>Hello World!</h1>
class HelloWorld extends React.Component {
    render() {
        return <div>
            {helloWorldReactElement}
            {helloWorldReactElement}
        </div>
    }
}
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
)
ReactDOM.render((
    <div> 
    <a href="http://reactquickly.co">Time for react!</a>
    <DateTimeNow userName="Azat"/>
    </div>
))