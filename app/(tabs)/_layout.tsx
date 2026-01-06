import React from 'react';

import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import { Button, View } from 'react-native';


const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

let topBarVisible=false; 

export default function TabLayout() {
  const colorScheme = useColorScheme();

const [visible, setVisible] = React.useState(false);

return (
   <View style={{ flex: 1 }}>
<Button onPress={()=>{setVisible(v => !v)}} title='AIKATAIKURI' color = 'purple'></Button> 

  <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: { backgroundColor: 'purple' },

        tabBarStyle: visible ? {} : { display: 'none' },
      }}>

      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={'pink'} />,
        }}
        
      />
      <MaterialTopTabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={ 'pink' } />,
        }}
      />
    </MaterialTopTabs>

    </View>)
  ;
}
