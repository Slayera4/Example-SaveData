import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    console.log(this.props.todos)
    return(
      <View>
      {this.props.todos.map(todo => 
      <TouchableHighlight onPress={() => this.props.onToggle(todo.id)}>
        <Todo
          key={todo.id}
          {...todo}
          
          text={todo.text}
        />
        </TouchableHighlight>
      )}
      </View>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList
