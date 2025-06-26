import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../utils/theme';
import Svg, { Path } from 'react-native-svg';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

// Import screens
import InboxTabsScreen from '../screens/InboxScreen/InboxTabsScreen';
import YourPetsScreen from '../screens/YourPets/YourPetsScreen';
import MoreScreen from '../screens/MoreScreen/MoreScreen';

// Create a placeholder SearchScreen
const SearchScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Search Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const InboxIcon = ({ color }: { color: string }) => (
  <Svg width={wp('6%')} height={hp('3%')} viewBox="0 0 24 24" fill="none">
    <Path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M22 6L12 13L2 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const SearchIcon = ({ color }: { color: string }) => (
  <Svg width={wp('6%')} height={hp('3%')} viewBox="0 0 24 24" fill="none">
    <Path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M21 21L16.65 16.65" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const PetIcon = ({ color }: { color: string }) => (
  <Svg width={wp('6%')} height={hp('3%')} viewBox="0 0 24 24" fill="none">
    <Path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M6 22V18C6 16.8954 6.89543 16 8 16H16C17.1046 16 18 16.8954 18 18V22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const MoreIcon = ({ color }: { color: string }) => (
  <Svg width={wp('6%')} height={hp('3%')} viewBox="0 0 24 24" fill="none">
    <Path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.Primary,
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarStyle: {
          height: hp('8%'),
          paddingBottom: hp('1%'),
          paddingTop: hp('1%'),
        },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Inbox" 
        component={InboxTabsScreen} 
        options={{
          tabBarIcon: ({ color }) => <InboxIcon color={color} />,
          tabBarLabel: ({ color }) => (
            <Text style={[styles.tabLabel, { color }]}>Inbox</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
          tabBarLabel: ({ color }) => (
            <Text style={[styles.tabLabel, { color }]}>Search</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="YourPets" 
        component={YourPetsScreen} 
        options={{
          tabBarIcon: ({ color }) => <PetIcon color={color} />,
          tabBarLabel: ({ color }) => (
            <Text style={[styles.tabLabel, { color }]}>Your Pet</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="More" 
        component={MoreScreen} 
        options={{
          tabBarIcon: ({ color }) => <MoreIcon color={color} />,
          tabBarLabel: ({ color }) => (
            <Text style={[styles.tabLabel, { color }]}>More</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: RFValue(12),
    marginTop: -5,
  },
});

export default BottomTabNavigator;