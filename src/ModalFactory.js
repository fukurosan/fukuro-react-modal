import React from 'react'
import ReactDOM from 'react-dom'
import TallModal from './Templates/TallModal'
import LargeModal from './Templates/LargeModal'
import ResponsiveModal from './Templates/ResponsiveModal'
import './style.css'

export default class ModalFactory extends React.Component {

    constructor(props) {
        super(props)

        const modalElement = document.createElement('div')
        modalElement.style.top = 0
        modalElement.style.bottom = 0
        modalElement.style.left = 0
        modalElement.style.right = 0
        modalElement.style.position = "absolute"
        modalElement.style.display = "flex"
        modalElement.style.flexDirection = "column"
        modalElement.style.justifyContent = "space-around"

        this.state = {
            modalElement: modalElement
        }

    }

    componentDidMount() {
        document.body.appendChild(this.state.modalElement)
    }

    componentWillUnmount() {
        document.body.removeChild(this.state.modalElement)
    }

    getContent() {
        switch (this.props.modalType) {
            case 'LARGE':
                return <LargeModal {...this.props} />
            case 'TALL':
                return <TallModal {...this.props} />
            case 'RESPONSIVE':
                return <ResponsiveModal {...this.props} />
            default:
                return <ResponsiveModal {...this.props} />
        }
    }

    render() {
        return ReactDOM.createPortal(
            this.getContent(),
            this.state.modalElement
        )
    }

}