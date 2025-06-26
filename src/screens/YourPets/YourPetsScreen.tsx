import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText } from '../../components/CustomText';
import { CustomIcon } from '../../components/CustomIcon';
import { COLORS } from '../../utils/theme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackNavigationType } from '../../utils/types/NavigationTypes';

const YourPetsScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <CustomText textType="H4SemiBold" color={COLORS.TextPrimary} textStyle={styles.header}>
        Your Pets
      </CustomText>

      {/* Insurance Box */}
      <View style={styles.insuranceBox}>
        <CustomText textType="H5SemiBold" color={COLORS.TextPrimary} textStyle={styles.insuranceTitle}>
          Shop for pet insurance
        </CustomText>
        <CustomText textType="BodyLargeRegular" color={COLORS.NeutralGrey60} textStyle={styles.insuranceSubtitle}>
          Pet insurance can help reduce vet bills. Compare plans today.
        </CustomText>
        <TouchableOpacity style={styles.quoteButton}>
          <CustomText textType="H5SemiBold" color={COLORS.TextPrimary}>
            Get a quote
          </CustomText>
        </TouchableOpacity>
      </View>

      {/* Pets Section */}
      <CustomText textType="H5SemiBold" color={COLORS.TextPrimary} textStyle={styles.petsTitle}>
        Pets
      </CustomText>

      {/* Pet Card */}
      <View style={styles.petCard}>
        <View style={styles.petIconBox}>
          <CustomIcon icon="paw" type="FontAwesome" iconStyle={styles.petIcon} />
        </View>
        <View style={{ flex: 1 }}>
          <CustomText textType="BodyLargeSemiBold" color={COLORS.TextPrimary}>
            Kali
          </CustomText>
          <CustomText textType="BodyMediumRegular" color={COLORS.Primary}>
            Persian
          </CustomText>
          <CustomText textType="CaptionRegular" color={COLORS.Primary}>
            12 pounds, 1 years, 2 months old
          </CustomText>
        </View>
        <CustomIcon icon="arrow-right" type="FontAwesome" iconStyle={styles.arrowIcon} />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Add a Pet */}
      <TouchableOpacity style={styles.addPetRow}>
        <CustomText textType="BodyLargeRegular" color={COLORS.NeutralGrey60}>
          Add a Pet
        </CustomText>
        <CustomIcon icon="arrow-right" type="FontAwesome" iconStyle={styles.arrowIcon} />
      </TouchableOpacity>

      {/* Bottom Navbar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Inbox')}>
          <CustomIcon icon="envelope" type="FontAwesome" iconStyle={styles.navIcon} />
          <CustomText textType="BodyMediumRegular" color={COLORS.TextPrimary}>
            Inbox
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SelectService')}>
          <CustomIcon icon="search" type="FontAwesome" iconStyle={styles.navIcon} />
          <CustomText textType="BodyMediumRegular" color={COLORS.TextPrimary}>
            Services
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <CustomIcon icon="paw" type="FontAwesome" iconStyle={{ ...styles.navIcon, color: COLORS.Primary }} />
          <CustomText textType="BodyMediumRegular" color={COLORS.Primary}>
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
    backgroundColor: '#FAFAF8',
    paddingTop: hp('5%'),
    paddingHorizontal: wp('4%'),
  },
  header: {
    textAlign: 'center',
    marginBottom: hp('3%'),
  },
  insuranceBox: {
    backgroundColor: COLORS.NeutralGrey10,
    borderRadius: wp('4%'),
    padding: wp('5%'),
    marginBottom: hp('3%'),
  },
  insuranceTitle: {
    textAlign: 'center',
    marginBottom: hp('1%'),
  },
  insuranceSubtitle: {
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  quoteButton: {
    backgroundColor: COLORS.StaticWhite,
    borderRadius: wp('8%'),
    borderWidth: 2,
    borderColor: COLORS.NeutralGrey20,
    alignSelf: 'center',
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('12%'),
  },
  petsTitle: {
    marginBottom: hp('1.5%'),
  },
  petCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.StaticWhite,
    borderRadius: wp('3%'),
    padding: wp('3%'),
    marginBottom: hp('1.5%'),
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  petIconBox: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: COLORS.NeutralGrey10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('3%'),
  },
  petIcon: {
    fontSize: wp('7%'),
    color: COLORS.NeutralGrey60,
  },
  arrowIcon: {
    fontSize: wp('6%'),
    color: COLORS.NeutralGrey60,
    marginLeft: wp('2%'),
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.NeutralGrey20,
    marginBottom: hp('1.5%'),
  },
  addPetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: hp('1.2%'),
    paddingHorizontal: wp('2%'),
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

export default YourPetsScreen; 