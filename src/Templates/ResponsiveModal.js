import React from 'react'

export default class LargeModal extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="fukuro-modal-window-backdrop" onClick={this.props.onClose}></div>
                <div className="fukuro-modal-window fukuro-modal-window-content-responsive">
                    {this.props.header !== undefined ?
                        <React.Fragment>
                            <div className="fukuro-modal-window-header">
                                <h3>{this.props.header}</h3>
                            </div>
                            <hr className="display-fukuro-modal-window-hr" />
                        </React.Fragment>
                        : null}
                    <div className="fukuro-modal-window-content">
                        {this.props.children}
                    </div>
                    {this.props.footer !== undefined ?
                        <React.Fragment>
                            <hr className="display-fukuro-modal-window-hr" />
                            <div className="fukuro-modal-window-footer">
                                {this.props.footer}
                            </div>
                        </React.Fragment>
                        : null
                    }
                </div>
            </React.Fragment>
        )
    }
}
