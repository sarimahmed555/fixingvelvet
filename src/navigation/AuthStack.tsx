import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LocationScreen from '../screens/Location/LocationScreen';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import SelectServiceScreen from '../screens/ServicePage/SelectServiceScreen';
import SignInScreen from '../screens/SignIn/SignInScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import { AuthStackNavigationType } from '../utils/types/NavigationTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardingScreen from '../screens/BoardingScreen/BoardingScreen';
import SearchingScreen from '../screens/SearchingScreen/SearchingScreen';
import { BoardingSearching } from '../screens/BoardingSearchingResult/BoardingSearchingResult';
import MoreScreen from '../screens/MoreScreen/MoreScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingScreen';
import GeneralSettingsScreen from '../screens/GeneralSetting/GeneralSettingsScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';
import InboxScreen from '../screens/Inbox/InboxScreen';
import YourPetsScreen from '../screens/YourPets/YourPetsScreen';
import PaymentHistoryScreen from '../screens/PaymentHistory/PaymentHistoryScreen';
import NotificationsSettingsScreen from '../screens/NotificationsSettings/NotificationsSettingsScreen';
import InboxTabsScreen from '../screens/InboxScreen/InboxTabsScreen';
import SendRequestScreen from '../../SendRequestScreen';

const Stack = createNativeStackNavigator();

 const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={'SignIn'}>
            <Stack.Screen name={'SignIn'} component={SignInScreen} />
            <Stack.Screen name={'SignUp'} component={SignUpScreen} />
            <Stack.Screen name={'Location'} component={LocationScreen} />
            <Stack.Screen name={'Onboarding'} component={OnboardingScreen} />
            <Stack.Screen name={'SelectService'} component={SelectServiceScreen} />
            <Stack.Screen name={'Boarding'} component={BoardingScreen} /> 
            <Stack.Screen name={'Searching'} component={SearchingScreen} />
            <Stack.Screen name={'BoardingSearch'} component={BoardingSearching} /> 
            <Stack.Screen name={'More'} component={MoreScreen} />   
            <Stack.Screen name={'Settings'} component={SettingsScreen} />
            <Stack.Screen name={'GeneralSettings'} component={GeneralSettingsScreen} />
            <Stack.Screen name={'Notification'} component={NotificationsScreen} />
            <Stack.Screen name={'SendRequest'} component={SendRequestScreen} />
            <Stack.Screen name={'Inbox'} component={InboxScreen} />
            <Stack.Screen name={'InboxTabs'} component={InboxTabsScreen} />
            <Stack.Screen name={'YourPets'} component={YourPetsScreen} />
            <Stack.Screen name={'PaymentHistory'} component={PaymentHistoryScreen} />
            <Stack.Screen name={'NotificationsSettings'} component={NotificationsSettingsScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack;

const styles = StyleSheet.create({});

