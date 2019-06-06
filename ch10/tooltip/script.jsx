class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {opacity : false}
        this.state = this.toggle.bind(this);
    }
    toggle () {
        const tooltipNode = ReactDOM.findDOMNode(this);
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }
}
render() {
    const style = {
        zIndex: this.state.opacity ? 1000: -1000,
        opacity: +this.state.opacity,
        top: (this.state.top || 0) + 20,
        left: (this.state.left || 0) - 30
    };
    return React.createElement(
        'div',
        {style: {display: 'inline'}},
        React.createElement(
            'div',
            {className: 'tooltip bottom', style: style, role:"tooltip"}
        )