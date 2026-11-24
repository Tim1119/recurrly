import {Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-3xl font-bold text-red-900 text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded-lg bg-primary px-4 py-2">
        <Text className="text-lg text-blue-500">Get Started</Text>
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded-lg bg-primary px-4 py-2">
        <Text className="text-lg text-blue-500">Sign In</Text>
      </Link>


      <Link href="/(auth)/sign-up" className="mt-4 rounded-lg bg-primary px-4 py-2">
        <Text className="text-lg text-blue-500">Sign Up</Text>
      </Link>

      <Link href="/subscriptions/spotify" className="mt-4 text-white rounded-lg bg-primary px-4 py-2">
      Spotify Subscription
      </Link>


      <Link className="mt-4 text-white rounded-lg bg-primary px-4 py-2" href={{pathname: "/subscriptions/[id]", params : {id: "claude"} }}>
      Claude Max subscription
      </Link>


    </View>
  );
}