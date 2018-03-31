import React, { Component } from 'react'
import { Button } from 'react-native';

import PropTypes from 'prop-types'

class Link extends Component {
  render() {
    return(
      <Button
        onPress = {this.props.onFilter}
        disabled = {this.props.active}
        title = {this.props.title}
      />
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired
}

export default Link
