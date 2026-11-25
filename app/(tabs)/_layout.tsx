
import { View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { tabs } from '@/constants/data'
import { Image } from 'expo-image'
import clsx from 'clsx'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {colors,components} from '@/constants/theme'

const TabLayout = () => {

    const insets = useSafeAreaInsets();

    const tabBar = components.tabBar;

    const TabIcon = ({ focused, icon }: TabIconProps) => (
        <View className="tabs-icon">
            <View className={clsx("tabs-pill", focused && "tabs-icon-active")}>
                <Image
                    source={icon}
                    contentFit="contain"
                    className="tabs-glyph"
                />
            </View>
        </View>
    )

    return (
        <Tabs screenOptions={{ headerShown: false, 
        tabBarShowLabel: false, tabBarStyle: { position: 'absolute',
        bottom:Math.max(insets.bottom,tabBar.height),
        marginHorizontal:tabBar.horizontalInset,
        height:tabBar.height,
        borderRadius:tabBar.radius,
        backgroundColor:colors.primary,
        borderTopWidth:0,
        elevation:0,

         }, 
         tabBarItemStyle: { 
            paddingVertical: tabBar.height / 2 - tabBar.iconFrame/1.6,
        },
        tabBarIconStyle: {
                width: tabBar.iconFrame,
                height: tabBar.iconFrame,
                alignItems: 'center',
             }
             
             }}>

            {/* Home */}
            <Tabs.Screen
                name="index"
                options={{ title: "Home" }}
            />

            {/* Other tabs */}
            {tabs
                .filter((tab) => tab.name !== 'index')
                .map((tab) => (
                    <Tabs.Screen
                        key={tab.name}
                        name={tab.name}
                        options={{
                            title: tab.title,
                            tabBarIcon: ({ focused }) => (
                                <TabIcon
                                    focused={focused}
                                    icon={tab.icon}
                                />
                            )
                        }}
                    />
                ))}

        </Tabs>
    )
}

export default TabLayout
