import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

import {SvgEducationIcon, SvgTargetIcon, SvgChecklistIcon, SvgSolutionsIcon, SvgLogoIcon,} from "../SvgIcon";

export default function TabBarIcon(props) {

  const color = props.focused ? Colors.tabIconSelected : Colors.tabIconDefault;
  return (
    <>
      { props.name === 'dashboard' && <SvgLogoIcon color={color}/> }
      { props.name === 'target' && <SvgTargetIcon color={color}/> }
      { props.name === 'checklist' && <SvgChecklistIcon color={color}/> }
      { props.name === 'education' && <SvgEducationIcon color={color}/> }
      { props.name === 'solution' && <SvgSolutionsIcon color={color}/> }
    </>

    // <Ionicons
    //   name={props.name}
    //   size={30}
    //   style={{ marginBottom: -3 }}
    //   color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    // />
  );
}
