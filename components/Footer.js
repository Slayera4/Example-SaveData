import React, { Component } from 'react'
import { View, Text } from 'react-native';

import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

class Footer extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <View>
        <Text>Show: </Text>
        <FilterLink filter={VisibilityFilters.SHOW_ALL} title="All"/>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} title="Active"/>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} title="Completed"/>
      </View>
    )
  }
}

export default Footer
