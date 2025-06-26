import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, FlatList, Platform } from 'react-native';
import { CustomText } from '../../components/CustomText';
import { CustomIcon } from '../../components/CustomIcon';
import { COLORS } from '../../utils/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackNavigationType } from '../../utils/types/NavigationTypes';

const TABS = [
  { key: 'primary', label: 'Primary' },
  { key: 'unread', label: 'Unread' },
  { key: 'pending', label: 'pending' },
];

const messages = [
  {
    id: '1',
    user: 'Christy S.',
    time: '5:29 PM',
    avatar: require('../../../assets/images/profile1.png'),
    lastMessage: 'You: Right',
    service: 'House Sitting . Jun 16 to Jun 20',
    status: 'Request sent',
    statusColor: COLORS.Primary,
    action: "Complete your Pet's profile",
  },
];

const InboxScreen = () => {
  const [activeTab, setActiveTab] = useState('primary');
  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();

  const renderTab = (tab: { key: string; label: string }, idx: number) => (
    <React.Fragment key={tab.key}>
      <TouchableOpacity
        style={[styles.tab, activeTab === tab.key ? styles.tabActive : styles.tabInactive]}
        onPress={() => setActiveTab(tab.key)}
      >
        <CustomText
          textType="BodyLargeSemiBold"
          color={activeTab === tab.key ? COLORS.Primary : COLORS.NeutralGrey60}
        >
          {tab.label}
        </CustomText>
      </TouchableOpacity>
      {/* Add vertical divider after Unread */}
      {idx === 1 && <View style={styles.tabDivider} />}
    </React.Fragment>
  );

  const renderMessage = ({ item }: { item: typeof messages[0] }) => (
    <View style={styles.messageCardBox}>
      <View style={styles.profileBox}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <View style={styles.messageHeader}>
            <CustomText textType="BodyLargeSemiBold" color={COLORS.TextPrimary}>{item.user}</CustomText>
            <CustomText textType="CaptionRegular" color={COLORS.NeutralGrey60}>{item.time}</CustomText>
          </View>
          <CustomText textType="BodyMediumRegular" color={COLORS.TextPrimary} style={{ marginTop: 2 }}>{item.lastMessage}</CustomText>
          <CustomText textType="CaptionRegular" color={COLORS.TextPrimary} style={{ marginTop: 2 }}>{item.service}</CustomText>
          <CustomText textType="CaptionRegular" color={item.statusColor} style={{ marginTop: 2 }}>{item.status}</CustomText>
        </View>
      </View>
      <TouchableOpacity style={styles.actionButton}>
        <CustomText textType="BodyLargeRegular" color={COLORS.Primary}>
          {item.action}
        </CustomText>
        <CustomIcon icon="arrow-right" type="FontAwesome" iconStyle={styles.actionIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <CustomText textType="H4SemiBold" color={COLORS.TextPrimary}>
          Inbox
        </CustomText>
        <CustomIcon icon="bell" type="FontAwesome" iconStyle={styles.bellIcon} />
      </View>
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {TABS.map((tab, idx) => renderTab(tab, idx))}
      </View>
      {/* Sort */}
      <View style={styles.sortRow}>
        <CustomIcon icon="arrow-down" type="FontAwesome" iconStyle={styles.sortIcon} />
        <CustomText textType="BodyMediumRegular" color={COLORS.TextPrimary}>
          Sorted by recent activity
        </CustomText>
      </View>
      <View style={styles.divider} />
      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: hp('14%') }}
      />
      {/* Bottom Navbar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <CustomIcon icon="envelope" type="FontAwesome" iconStyle={{ ...styles.navIcon, color: COLORS.Primary }} />
          <CustomText textType="BodyMediumRegular" color={COLORS.Primary}>
            Inbox
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SelectService')}>
          <CustomIcon icon="search" type="FontAwesome" iconStyle={styles.navIcon} />
          <CustomText textType="BodyMediumRegular" color={COLORS.TextPrimary}>
            Search
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('YourPets')}>
          <CustomIcon icon="paw" type="FontAwesome" iconStyle={styles.navIcon} />
          <CustomText textType="BodyMediumRegular" color={COLORS.TextPrimary}>
            Your Pet
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('More')}>
          <CustomIcon icon="ellipsis-h" type="FontAwesome" iconStyle={styles.navIcon} />
          <CustomText textType="BodyMediumRegular" color={COLORS.TextPrimary}>
            More
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.StaticWhite,
    paddingTop: hp('3%'),
    paddingHorizontal: wp('3%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
  },
  bellIcon: {
    fontSize: wp('6%'),
    color: COLORS.Primary,
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  tab: {
    paddingVertical: hp('0.7%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('5%'),
    marginRight: wp('1.5%'),
    borderWidth: 1.5,
  },
  tabActive: {
    borderColor: COLORS.Primary,
    backgroundColor: COLORS.StaticWhite,
  },
  tabInactive: {
    borderColor: COLORS.NeutralGrey20,
    backgroundColor: COLORS.NeutralGrey10,
  },
  tabDivider: {
    width: 1,
    height: '60%',
    backgroundColor: COLORS.NeutralGrey20,
    marginHorizontal: wp('1.5%'),
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('0.5%'),
  },
  sortIcon: {
    fontSize: wp('4%'),
    color: COLORS.TextPrimary,
    marginRight: wp('1.5%'),
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.NeutralGrey20,
    marginBottom: hp('1%'),
  },
  messageCardBox: {
    backgroundColor: COLORS.NeutralGrey10,
    borderRadius: wp('3%'),
    padding: wp('3%'),
    marginBottom: hp('1.2%'),
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  profileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  avatar: {
    width: wp('9%'),
    height: wp('9%'),
    borderRadius: wp('4.5%'),
    marginRight: wp('3%'),
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.NeutralGrey10,
    borderRadius: wp('3%'),
    paddingVertical: hp('0.7%'),
    paddingHorizontal: wp('2%'),
    marginTop: hp('1%'),
    justifyContent: 'space-between',
  },
  actionIcon: {
    fontSize: wp('5%'),
    color: COLORS.Primary,
    marginLeft: wp('2%'),
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.NeutralGrey20,
    paddingVertical: hp('1.2%'),
    backgroundColor: COLORS.StaticWhite,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    padding: wp('3%'),
    alignItems: 'center',
  },
  navIcon: {
    fontSize: wp('6%'),
    color: COLORS.TextPrimary,
    marginBottom: 2,
  },
});

export default InboxScreen; 