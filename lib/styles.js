import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { height, width } = Dimensions.get('window');

EStyleSheet.build({
  '@media (min-height: 361) and (max-height: 412)': {
    $rem: 9,
    // $borderHeight: 'rem*0.05',
    $borderHeight: 'rem*0.05',
    $dialogWidth: 'rem',
  },
  '@media (min-height: 412)': {
    $rem: 18,
    $borderHeight: 'rem*0.05',
    $dialogWidth: 'rem',
    //  fontFamily: 'Foundation',
  },
  '@media (max-height: 360)': {
    $rem: 8,
    $borderHeight: 'rem*0.05',
    $dialogWidth: 'rem',
  },

  $primaryOrange: '#E48C45',

  $lightBlue: '#007AFF',

  $white: '#FFFFFF',

  $black: '#000000',
  $gray: '#808080',
  $gainsboroGray: '#EFEFF4',
  $lightGray: '#FAFAFA', // backgroundColor
  $mediumGray: '#b8b8b8',
  $border: '#AAAAAA',
  $borderLight: 'rgba(0, 0, 0, 0.1)',
  $inputText: '#797979',
  $darkText: '#3F3F3F',
  $lightText: '#8C8C8C',
  $semiLightText: '#919191',
  $background: '#F6F6F6', // using in folio

  $fontRegular: 'SFUIText-Regular',
  $fontMedium: 'SFUIText-Medium',
  $fontBold: 'SFUIText-Bold',
  $fontSemiBold: 'SFUIText-Semibold',
  $fontHeavy: 'SFUIText-Heavy',

  // $rem: height > 412 ? 18 : (412>height&& height>359 ) ? 9 : 7,
  $fontSizeNormal: '1rem',
  $fontSizeSmall: '0.8rem', // used in foliolist
  $fontSizeXSmall: '0.6rem', // used in foliolist
  $fontSizeSemiSmall: '0.9rem', // used in foliolist
  $fontSizeLarge: '1.6rem', // used in foliolist
  $fontSizeMedium: '1.2rem', // used in login
  $fontSemiMedium: '1.1rem', // used in login
  $fontSizeXLarge: '2rem', // used in login
  $fontSizeXXLarge: '3rem', // used in login ,Folio

  $width: width,
  $height: height,
});

const hairlineWidth = 1;

export const BG_COLOR = '#d2d5dc';

export default EStyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
  },
  main: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
});

export const keyStyle = EStyleSheet.create({
  wrapper: {
    flex: 1,
    height: '$rem*3',
    backgroundColor: '#fff',
  },
  bd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: hairlineWidth,
    borderTopWidth: hairlineWidth,
    borderColor: '#a5a5a5',
  },
  border: {
    borderColor: '#FFF',
  },
  mainText: {
    fontSize: '$fontSizeMedium',
    color: '#000',
  },
  otherText: {
    fontSize: '$fontSizeMedium',
    color: '#333',
  },
  bg_d2d5dc: {
    backgroundColor: BG_COLOR,
  },
  bgLessL: {
    backgroundColor: '#fff',
  },
  dot: {
    height: 30,
    fontSize: 30,
    lineHeight: 25,
  },
});
