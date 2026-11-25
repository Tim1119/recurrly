import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router';

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>SubscriptionDetails</Text>
      <Link href="/">
        <Text>Go back</Text>
      </Link>
    </View>
  )
}

export default SubscriptionDetails