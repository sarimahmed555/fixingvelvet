import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONT_POPPINS, COLORS, FONT_PACIFICO } from '../../utils/theme';
import Svg, { Path } from 'react-native-svg';

const BellIcon = () => (
  <Svg width={wp('7%')} height={hp('3%')} viewBox="0 0 24 24" fill="none">
    <Path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#8F9E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#8F9E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const HourglassIcon = () => (
  <Svg width={wp('30%')} height={hp('15%')} viewBox="0 0 100 100" fill="none">
    <Path d="M30 10H70V30C70 40 60 45 50 50C40 55 30 60 30 70V90H70V70C70 60 60 55 50 50C40 45 30 40 30 30V10Z" stroke="#000" strokeWidth="2" fill="none"/>
    <Path d="M50 50C55 45 60 40 60 30V20H40V30C40 40 45 45 50 50Z" fill="#000"/>
    <Path d="M50 50C45 55 40 60 40 70V80H60V70C60 60 55 55 50 50Z" fill="#000"/>
    <Path d="M45 65 A 2 2 0 1 0 45 69 A 2 2 0 1 0 45 65 Z" fill="#000"/>
    <Path d="M50 70 A 2 2 0 1 0 50 74 A 2 2 0 1 0 50 70 Z" fill="#000"/>
    <Path d="M55 65 A 2 2 0 1 0 55 69 A 2 2 0 1 0 55 65 Z" fill="#000"/>
  </Svg>
);

const InboxTabsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Unread');

  const tabs = ['Primary', 'Unread', 'pending'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Inbox</Text>
          <TouchableOpacity style={styles.bellButton}>
            <BellIcon />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.tab, 
                activeTab === tab && styles.activeTab
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text 
                style={[
                  styles.tabText, 
                  activeTab === tab && styles.activeTabText
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Sort Section */}
        <View style={styles.sortSection}>
          <Svg width={wp('5%')} height={hp('2.5%')} viewBox="0 0 24 24" fill="none">
            <Path d="M7 10L12 15L17 10" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
          <Text style={styles.sortText}>Sorted by recent activity</Text>
        </View>
        <View style={styles.divider} />

        {/* Empty State */}
        <View style={styles.emptyStateContainer}>
          <HourglassIcon />
          <Text style={styles.emptyStateTitle}>No unread conversations</Text>
          <Text style={styles.emptyStateSubtitle}>you have read all the unread conversations in this folder</Text>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.navItem}>
            <Svg width={wp('6%')} height={hp('3%')} viewBox="0 0 24 24" fill="none">
              <Path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#8F9E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M22 6L12 13L2 6" stroke="#8F9E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
            <Text style={styles.navText}>Inbox</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <Svg width={wp('6%')} height={hp('3%')} viewBox="0 0 24 24" fill="none">
              <Path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#A9A9A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M21 21L16.65 16.65" stroke="#A9A9A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
            <Text style={styles.navTextInactive}>Search</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navItem}>
            <Svg width={wp('6%')} height={hp('3%')} viewBox="0 0 24 24" fill="none">
              <Path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#A9A9A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M6 22V18C6 16.8954 6.89543 16 8 16H16C17.1046 16 18 16.8954 18 18V22" stroke="#A9A9A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
            <Text style={styles.navTextInactive}>Your Pet</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => navigation.navigate('PaymentHistory')}
          >
            <Svg width={wp('6%')} height={hp('3%')} viewBox="0 0 24 24" fill="none">
              <Path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#A9A9A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#A9A9A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
            <Text style={styles.navTextInactive}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
  },
  headerTitle: {
    fontFamily: FONT_PACIFICO.regularFont,
    fontSize: RFValue(24),
    color: COLORS.TextPrimary,
  },
  bellButton: {
    padding: wp('2%'),
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  tab: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('8%'),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 50,
  },
  activeTab: {
    borderColor: '#8F9E73',
    backgroundColor: '#8F9E73',
  },
  tabText: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(14),
    color: '#A9A9A9',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  sortSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    marginTop: hp('3%'),
  },
  sortText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
    marginLeft: wp('2%'),
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: hp('2%'),
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('10%'),
  },
  emptyStateTitle: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(18),
    color: COLORS.TextPrimary,
    marginTop: hp('2%'),
    textAlign: 'center',
  },
  emptyStateSubtitle: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: '#A9A9A9',
    marginTop: hp('1%'),
    textAlign: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp('2%'),
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(12),
    color: COLORS.Primary,
    marginTop: hp('0.5%'),
  },
  navTextInactive: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(12),
    color: '#A9A9A9',
    marginTop: hp('0.5%'),
  },
});

export default InboxTabsScreen;