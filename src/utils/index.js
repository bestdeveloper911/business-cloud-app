import AsyncStorage from '@react-native-community/async-storage';
import Images from "../constants/Images";

export const getProductIcon = (name) => {
  let icon;

  switch (name) {
    case 'Approval':
      icon = Images.Product_Approval;
      break;
    case 'Cloudmeb':
      icon = Images.Product_Cloudmeb;
      break;
    case 'Fathom':
      icon = Images.Product_Fathom;
      break;
    case 'ReceiptBank':
      icon = Images.Product_ReceiptBank;
      break;
    case 'RingCentral':
      icon = Images.Product_RingCentral;
      break;
    case 'Shopify':
      icon = Images.Product_Shopify;
      break;
    case 'Stripe':
      icon = Images.Product_Stripe;
      break;
    case 'Vend':
      icon = Images.Product_Vend;
      break;
    case 'Wagepoint':
      icon = Images.Product_WagePoint;
      break;
    case 'Xero':
      icon = Images.Product_Xero;
      break;
  }
  return icon;
};

export const numberFormat = (number) =>
  number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

export const dateFormat = (str) => {
  const date = new Date(str)
  const day = ('0' + date.getDate()).slice(-2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours || 12
  hours = ('0' + hours).slice(-2)
  minutes = ('0' + minutes).slice(-2)
  return `${day}.${month}.${year} ${hours}:${minutes} ${ampm}`
}

export const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error saving data
  }
};

export const _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return '';
  }
};

export const _clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
};

export const commafyDigitFormat = (num, digitLength) => {
  try {
    let str;
    const ePlus = num.toString().split('e+')[1];
    const eMinus = num.toString().split('e-')[1];
    let catenateSymbol = '';
    let decimalDigits = 0;
    if (ePlus) {
      decimalDigits = digitLength - 4;
      catenateSymbol = 'e+';
      str = num.toString().split(catenateSymbol);
      str[0] = parseFloat(str[0]).toFixed(decimalDigits);
    } else if (eMinus) {
      decimalDigits = digitLength - 4;
      catenateSymbol = 'e-';
      str = num.toString().split(catenateSymbol);
      str[0] = parseFloat(str[0]).toFixed(decimalDigits);
    } else {
      catenateSymbol = '.';
      const numPrecised = Number(num).toPrecision(digitLength);
      str = numPrecised.toString().split(catenateSymbol);
    }
    if (str[0].length >= 4 && catenateSymbol === '.') {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    return str.join(catenateSymbol);
  } catch(e) {
    return num;
  }
};

export const colorLuminance = (hex, lum) => {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i*2,2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00"+c).substr(c.length);
  }

  return rgb;
}
