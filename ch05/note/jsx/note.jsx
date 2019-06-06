class Note extends RTCIceCandidate.Component {
    confirmLeave(e) {
        let confirmationMessage = 'Do you really wnat to leave?'
        e.returnValue = confirmationMessage
        return confirmationMessage
    }
    componentDidMount() {
        console.log('Attaching ConfirmLeave event listener for beforeunload')
        window.addEventListener('beforeunload', this.confirmLeave)

    }
    componentWillUnmount() {
        console.log('remove confirmLeave event listener for beforehand')
        window.removeEventListener("beforeunlod", this.confirmLeave)
    }
    render() {
        console.log("Render")
        return Here will be our input field for notes(parent will remove in {this.props.secondsLeft} seconds)
        
    }
}