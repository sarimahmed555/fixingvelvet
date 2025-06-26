import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
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

const PaymentHistoryScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();
  const [activeTab, setActiveTab] = useState('Earning');

  const tabs = ['Earning', 'Pending Earnings', 'Withdrawals', 'Payment', 'Payment issues', 'Other'];

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
          <Text style={styles.headerTitle}>Payment History</Text>
          <View style={styles.emptyView} />
        </View>

        {/* Wallet Section */}
        <View style={styles.walletSection}>
          <View style={styles.walletRow}>
            <Text style={styles.walletTitle}>Wallet</Text>
            <Text style={styles.walletAmount}>$0.00</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.promoCodeText}>Apply Promo Code</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Method Button */}
        <TouchableOpacity 
          style={styles.paymentMethodButton}
          onPress={() => navigation.navigate('NotificationsSettings')}
        >
          <Text style={styles.paymentMethodText}>Add or Modify a Payment Method</Text>
        </TouchableOpacity>

        {/* Earning Summary Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Earning Summary</Text>
          <View style={styles.sectionDivider} />
          <Text style={styles.sectionText}>you haven't made any withdrawals yet</Text>
          <TouchableOpacity>
            <Text style={styles.moreInfoText}>More info......</Text>
          </TouchableOpacity>
        </View>

        {/* External Withdrawal History Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>External Withdrawal History</Text>
          <View style={styles.sectionDivider} />
          <Text style={styles.sectionText}>you haven't made any External Withdrawal yet</Text>
          <TouchableOpacity>
            <Text style={styles.moreInfoText}>More info......</Text>
          </TouchableOpacity>
        </View>

        {/* Documents Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Documents</Text>
          <View style={styles.sectionDivider} />
          <Text style={styles.sectionText}>No documents available</Text>
        </View>

        {/* Payment History Tabs */}
        <View style={styles.paymentHistoryContainer}>
          <Text style={styles.paymentHistoryTitle}>Payment History</Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabsContainer}
          >
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
                {activeTab === tab && <View style={styles.activeTabIndicator} />}
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* No Transaction Found */}
          <View style={styles.noTransactionContainer}>
            <Text style={styles.noTransactionText}>No transaction found</Text>
          </View>
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
  walletSection: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('3%'),
  },
  walletRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  walletTitle: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(20),
    color: COLORS.TextPrimary,
  },
  walletAmount: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(20),
    color: COLORS.TextPrimary,
  },
  promoCodeText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: '#8F9E73',
    marginTop: hp('1%'),
  },
  paymentMethodButton: {
    marginHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentMethodText: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
  },
  sectionContainer: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('3%'),
  },
  sectionTitle: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(16),
    color: COLORS.TextPrimary,
  },
  sectionDivider: {
    height: 2,
    width: wp('15%'),
    backgroundColor: '#8F9E73',
    marginTop: hp('0.5%'),
    marginBottom: hp('1%'),
  },
  sectionText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: COLORS.TextPrimary,
    marginTop: hp('1%'),
  },
  moreInfoText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: '#8F9E73',
    marginTop: hp('0.5%'),
  },
  paymentHistoryContainer: {
    paddingHorizontal: wp('5%'),
    paddingTop: hp('3%'),
    flex: 1,
  },
  paymentHistoryTitle: {
    fontFamily: FONT_POPPINS.mediumFont,
    fontSize: RFValue(18),
    color: COLORS.TextPrimary,
    marginBottom: hp('2%'),
  },
  tabsContainer: {
    paddingBottom: hp('1%'),
  },
  tab: {
    marginRight: wp('5%'),
    paddingBottom: hp('1%'),
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#8F9E73',
  },
  tabText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: '#A9A9A9',
  },
  activeTabText: {
    color: COLORS.TextPrimary,
    fontFamily: FONT_POPPINS.mediumFont,
  },
  activeTabIndicator: {
    height: 2,
    backgroundColor: '#8F9E73',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  noTransactionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#A9A9A9',
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
    paddingVertical: hp('5%'),
  },
  noTransactionText: {
    fontFamily: FONT_POPPINS.regularFont,
    fontSize: RFValue(14),
    color: '#A9A9A9',
  },
});

export default PaymentHistoryScreen;