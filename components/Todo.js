import React, { Component } from 'react'
import  { Text } from 'react-native'

import PropTypes from 'prop-types'

class Todo extends Component {
  render(){
    return (
      <Text
        //style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
      >{this.props.text}</Text>
    )
  }
}

Todo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
