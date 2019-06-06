class Content extends React.Component {
    contstructor(props) {
    super(props)
    this.state = {counter: 0}
}
handleClick(events) {
    this.setState({counter: ++this.state.counter})
}

render() {
    return (
    <div>
        <button
        onClcik={this.handleClick.bind(this)}
        className="btn btn-primary">Don't click me {this.state.counter} times!
        )
        }</button>
    </div>
    )
    }
}