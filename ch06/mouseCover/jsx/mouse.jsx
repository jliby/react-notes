class Mouse extends React.Component {
    render() {
        return <div>
            <div
            style={{border: '1px solid red'}}
            onMouseOver={((event)=>{console.log('mouse is over with event')
                                    console.dir(event)}).bind(this)} >
                                    open devtools and move your mouse to this area.
            </div>
        </div>
    }
}
