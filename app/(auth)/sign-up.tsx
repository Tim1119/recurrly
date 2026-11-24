import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Link href="/(auth)/sign-in">
        <Text>Sign In</Text>
      </Link>
    </View>
  )
}

export default SignIn