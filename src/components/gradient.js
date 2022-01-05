import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '../theme'

// Export component
export default ({ children, color, ...props }) => {
  return (
    <LinearGradient
      colors={[theme.colors.secondary, theme.colors.primary]}
      start={[0,0]}
      end={[1,1]}
      {...props}
    >
      {children}
    </LinearGradient>
  )
}
