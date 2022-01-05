import React from "react";
import {Image, StyleSheet} from "react-native";
import Images from "../constants/Images";

const styles = StyleSheet.create({
  completeIcon: {
    width: 16,
    height: 16,
  },
  openIcon: {
    width: 16,
    height: 16,
    marginLeft: 10
  }
});

export const TaskCompletedIcon = (props) => {

  const {state, isHovered, ...rest} = props;

  return (
    <>
      {
        state === 'EXPIRED' &&
        <Image source={isHovered ? Images.IconTasksCompletedDark : Images.IconTasksTodoDark} style={styles.completeIcon} {...rest} alt=""/>
      }
      {
        state === 'COMPLETED' &&
        <Image source={isHovered ? Images.IconTasksCompletedHover : Images.IconTasksCompleted} style={styles.completeIcon} {...rest} alt=""/>
      }
      {
        state !== 'COMPLETED' && state !== 'EXPIRED' &&
        <Image source={isHovered ? Images.IconTasksTodoHover : Images.IconTasksTodo} style={styles.completeIcon} {...rest} alt=""/>
      }
    </>
  )
};

export const TaskOpenIcon = (props) => {

  const {state, isHovered, ...rest} = props;

  return (
    <>
      {
        state === 'EXPIRED' ?
          <Image source={isHovered ? Images.IconOpenDarkHover : Images.IconOpenDark} style={styles.openIcon} {...rest} alt=""/>
          :
          <Image source={isHovered ? Images.IconOpenHover : Images.IconOpen} style={styles.openIcon} {...rest} alt=""/>
      }
    </>
  )
};
