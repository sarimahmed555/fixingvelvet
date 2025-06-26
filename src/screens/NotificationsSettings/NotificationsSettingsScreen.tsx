import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Switch } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONT_POPPINS, COLORS } from '../../utils/theme';
import Svg, { Path } from 'react-native-svg';
import { AuthStackNavigationType } from '../../utils/types/NavigationTypes';

const BackIcon = () => (
  <Svg width={wp('6%')} height={hp('2.5%')} viewBox="0 0 24 24" fill="none">
    <Path d="M19 12H5" stroke="#404348" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 19L5 12L12 5" stroke="#404348" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const NotificationsSettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();
  const [activeTab, setActiveTab] = useState('Notifications');

  // State for all switches
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [textMessages, setTextMessages] = useState(false);
  const [newMessageTexts, setNewMessageTexts] = useState(false);
  const [newInquiries, setNewInquiries] = useState(false);
  const [newMessages, setNewMessages] = useState(false);
  const [newBookingRequest, setNewBookingRequest] = useState(false);
  const [bookingDeclined, setBookingDeclined] = useState(false);
  const [mmsSupport, setMmsSupport] = useState(false);
  const [quietHours, setQuietHours] = useState(false);
  const [marketingTexts, setMarketingTexts] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <BackIcon />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={styles.emptyView} />
        </View>

        <Text style={styles.settingsTitle}>Settings</Text>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'General' && styles.activeTab]}
            onPress={() => setActiveTab('General')}
          >
            <Text style={styles.tabText}>General</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Notifications' && styles.activeTab]}
            onPress={() => setActiveTab('Notifications')}
          >
            <Text style={styles.tabText}>Notifications</Text>
            {activeTab === 'Notifications' && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView}>
          {/* Email Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Email</Text>
            <View style={styles.settingRow}>
              <Text style={styles.settingText}>Send me an email when I get a new message or request</Text>
              <Switch
                value={emailNotifications}
                onValueChange={setEmailNotifications}
                trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
                thumbColor={COLORS.StaticWhite}
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.settingRow}>
              <Text style={styles.settingText}>Receive marketing emails from Velvet Leash Co.</Text>
              <Switch
                value={marketingEmails}
                onValueChange={setMarketingEmails}
                trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
                thumbColor={COLORS.StaticWhite}
              />
            </View>
          </View>

          {/* Text/SMS Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Text/SMS</Text>
            <View style={styles.settingRow}>
              <Text style={styles.settingText}>We recommend keeping these messages on so we can provide you the best service.</Text>
              <Switch
                value={textMessages}
                onValueChange={setTextMessages}
                trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
                thumbColor={COLORS.StaticWhite}
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.settingRow}>
              <Text style={styles.settingText}>Send me a text message when I get a new message or request.</Text>
              <Switch
                value={newMessageTexts}
                onValueChange={setNewMessageTexts}
                trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
                thumbColor={COLORS.StaticWhite}
              />
            </View>
          </View>

          {/* New Inquiries */}
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingTitle}>New Inquiries</Text>
              <Text style={styles.settingText}>Text me when I receive a new message or request.</Text>
            </View>
            <Switch
              value={newInquiries}
              onValueChange={setNewInquiries}
              trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
              thumbColor={COLORS.StaticWhite}
            />
          </View>
          <View style={styles.divider} />

          {/* New Messages */}
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingTitle}>New Messages</Text>
              <Text style={styles.settingText}>Text me all my Velvet Leash Co messages after the initial request.</Text>
            </View>
            <Switch
              value={newMessages}
              onValueChange={setNewMessages}
              trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
              thumbColor={COLORS.StaticWhite}
            />
          </View>
          <View style={styles.divider} />

          {/* New Booking Request */}
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingTitle}>New Booking Request</Text>
              <Text style={styles.settingText}>Text me when I have a new Velvet Leash Co booking request.</Text>
            </View>
            <Switch
              value={newBookingRequest}
              onValueChange={setNewBookingRequest}
              trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
              thumbColor={COLORS.StaticWhite}
            />
          </View>
          <View style={styles.divider} />

          {/* Booking Declined */}
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingTitle}>Booking Declined</Text>
              <Text style={styles.settingText}>Text me when a new Velvet Leash Co is confirmed.</Text>
            </View>
            <Switch
              value={bookingDeclined}
              onValueChange={setBookingDeclined}
              trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
              thumbColor={COLORS.StaticWhite}
            />
          </View>
          <View style={styles.divider} />

          {/* MMS Message Support */}
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingTitle}>MMS Message Support</Text>
              <Text style={styles.settingText}>By enabling MMS support, text message can include sound, images, and video.</Text>
            </View>
            <Switch
              value={mmsSupport}
              onValueChange={setMmsSupport}
              trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
              thumbColor={COLORS.StaticWhite}
            />
          </View>
          <View style={styles.divider} />

          {/* Quiet Hours */}
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingTitle}>Quiet Hours</Text>
              <Text style={styles.settingText}>Would you like to delay delivery of nighttime text messages until the following morning?</Text>
            </View>
            <Switch
              value={quietHours}
              onValueChange={setQuietHours}
              trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
              thumbColor={COLORS.StaticWhite}
            />
          </View>
          <View style={styles.divider} />

          {/* Marketing Text Messages */}
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingTitle}>Receive marketing text message from Velvet Leash Co.</Text>
              <Text style={styles.settingText}>
                By enabling mobile notifications, you're saying it's okay for us to send you service-related and promotional text messages, include auto-dialed. you can adjust these settings on this page anytime. receiving promotional messages is not a condition to use th Velvet Leash Co Service. reply HELP for help and STOP to unsubscribe. Message frequency varies. Message and date rates may apply. For more, see our <Text style={styles.linkText}>Terms of service</Text> and <Text style={styles.linkText}>Privacy Statement</Text>.
              </Text>
            </View>
            <Switch
              value={marketingTexts}
              onValueChange={setMarketingTexts}
              trackColor={{ false: '#D9D9D9', true: COLORS.Primary }}
              thumbColor={COLORS.StaticWhite}
            />
          </View>

          {/* Delete Account */}
          <TouchableOpacity 
            style={styles.deleteAccountButton}
            onPress={() => navigation.navigate('InboxTabs')}
          >
            <Text style={styles.deleteAccountText}>Delete or deactivate your account</Text>
          </TouchableOpacity>
        </ScrollView>
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
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: wp('2%'),
  },
  headerTitle: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(18),
    color: COLORS.TextPrimary,
  },
  emptyView: {
    width: wp('6%'),
  },
  settingsTitle: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(18),
    color: COLORS.TextPrimary,
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginTop: hp('2%'),
  },
  tab: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    position: 'relative',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.Primary,
  },
  tabText: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
  },
  activeTabIndicator: {
    height: 2,
    backgroundColor: COLORS.Primary,
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('2%'),
  },
  sectionTitle: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(16),
    color: COLORS.TextPrimary,
    marginBottom: hp('1.5%'),
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1.5%'),
  },
  settingTitle: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
    marginBottom: hp('0.5%'),
  },
  settingText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(12),
    color: '#A9A9A9',
    width: wp('70%'),
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: wp('5%'),
  },
  linkText: {
    color: '#8F9E73',
    textDecorationLine: 'underline',
  },
  deleteAccountButton: {
    marginVertical: hp('3%'),
    alignSelf: 'center',
  },
  deleteAccountText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: '#8F9E73',
    textDecorationLine: 'underline',
  },
});

export default NotificationsSettingsScreen;