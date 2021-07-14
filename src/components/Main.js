import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Main extends Component {
    render() {
        let close = (
            <div className="close" onClick={this.props.onCloseMenu}>
            </div>
        )
        return (
            <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: flex } : { display: none }}>

            </div>
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    menu: PropTypes.string,
    menuTimeout: PropTypes.bool,
    onCloseMenu: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main
