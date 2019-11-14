import React from 'react'
import ReactDOM from 'react-dom'
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
        modalElement.style.zIndex = 9999

        this.state = {
            modalElement: modalElement,
            latestModalDragX: 0,
            latestModalDragY: 0,
            modalIdentifier: this.props.identifier ? this.props.identifier : Math.random()
        }

    }

    componentDidMount() {
        document.body.appendChild(this.state.modalElement)
        this.fixateModal()
        if (this.props.sizable) {
            this.makeModalResizable()
        }
        if (this.props.dragable) {
            this.makeModalDragable()
        }
    }

    componentWillUnmount() {
        document.body.removeChild(this.state.modalElement)
    }

    fixateModal() {
        let modal = document.getElementById("fukuro-modal-window-" + this.state.modalIdentifier)
        const modalHeight = Math.ceil(parseFloat(getComputedStyle(modal, null).getPropertyValue('height').replace('px', '')))
        const modalWidth = Math.ceil(parseFloat(getComputedStyle(modal, null).getPropertyValue('width').replace('px', '')))
        modal.style.top = ((((window.innerHeight - modalHeight) / 2) / window.innerHeight) * 100) + "%"
        modal.style.left = ((((document.body.clientWidth - modalWidth) / 2) / document.body.clientWidth) * 100) + "%"
        modal.style.right = "initial"
        modal.style.bottom = "initial"
        modal.style.height = modalHeight + "px"
        modal.style.width = modalWidth + "px"
    }

    makeModalResizable() {
        let modal = document.getElementById("fukuro-modal-window-" + this.state.modalIdentifier)
        let resizer = document.getElementById("fukuro-modal-resizer-" + this.state.modalIdentifier)

        resizer.addEventListener('mousedown', function (e) {
            e.preventDefault()
            let originalWidth = parseFloat(getComputedStyle(modal, null).getPropertyValue('width').replace('px', ''))
            let originalHeight = parseFloat(getComputedStyle(modal, null).getPropertyValue('height').replace('px', ''))
            let originalMouseX = e.pageX
            let originalMouseY = e.pageY

            let resize = (e) => {
                const width = originalWidth + (e.pageX - originalMouseX)
                const height = originalHeight + (e.pageY - originalMouseY)
                if (width > 200) {
                    modal.style.width = width + 'px'
                }
                if (height > 200) {
                    modal.style.height = height + 'px'
                }
            }
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', () => {
                window.removeEventListener('mousemove', resize)
            })
        })
    }

    makeModalDragable = () => {
        let modal = document.getElementById("fukuro-modal-window-" + this.state.modalIdentifier)
        let dragger = document.getElementById("fukuro-modal-drag-" + this.state.modalIdentifier)

        let drag = (e) => {
            e.preventDefault()
            const latestModalDragX = this.state.latestModalDragX - e.clientX
            const latestModalDragY = this.state.latestModalDragY - e.clientY
            this.setState({
                latestModalDragX: e.clientX,
                latestModalDragY: e.clientY

            })
            const newTop = (((modal.offsetTop - latestModalDragY) / window.innerHeight) * 100)
            const newLeft = (((modal.offsetLeft - latestModalDragX) / document.body.clientWidth) * 100)
            if (newTop < 90 && newTop > 0) {
                modal.style.top = newTop + "%"
            }
            if (newLeft < 90 && newLeft > 0) {
                modal.style.left = newLeft + "%"
            }
        }

        dragger.addEventListener("mousedown", (e) => {
            e.preventDefault()
            this.setState({
                latestModalDragX: e.clientX,
                latestModalDragY: e.clientY

            })
            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", drag)
            })
            document.addEventListener("mousemove", drag)
        })

    }

    getContent() {
        return <React.Fragment>
            <div className="fukuro-modal-window-backdrop" onClick={this.props.onClose}></div>
            <div className="fukuro-modal-window" id={"fukuro-modal-window-" + this.state.modalIdentifier}>
                {this.props.header !== undefined ?
                    <React.Fragment>
                        <div className={"fukuro-modal-window-header" + this.props.dragable ? " fukuro-modal-drag" : ""} id={"fukuro-modal-drag-" + this.state.modalIdentifier}>
                            {this.props.header}
                        </div>
                    </React.Fragment>
                    : null}
                <div className="fukuro-modal-window-content">
                    {this.props.children}
                </div>
                {this.props.footer !== undefined ?
                    <React.Fragment>
                        <div className="fukuro-modal-window-footer">
                            {this.props.footer}
                        </div>
                        {this.props.sizable ?
                            <div className="fukuro-modal-resizer" id={"fukuro-modal-resizer-" + this.state.modalIdentifier}></div>
                            : ""}
                    </React.Fragment>
                    : null
                }
            </div>
        </React.Fragment>
    }


    render() {
        return ReactDOM.createPortal(
            this.getContent(),
            this.state.modalElement
        )
    }

}