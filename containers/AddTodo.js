import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'

import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props){
    super(props)

    this.state = {
      text:null
    }
  }
  _addText(text){
    this.setState({
      text:text
    })
  }
  render() {
    return (
      <View>
        <TextInput onChangeText={(text) => this._addText(text)}/>
        <Button onPress={()=>this.props.onAddTodo(this.state.text)} title="Add Todo"/>
      </View>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: text => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)
