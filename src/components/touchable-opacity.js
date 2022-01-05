// Dependencies
import React from 'react'
import { TouchableOpacity } from 'react-native'

//  Export component
export default ({ children, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={.5} {...props}>{children}</TouchableOpacity>
  )
}