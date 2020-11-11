import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


export default SortMenu = () => {
  const [selectedId, setSelectedId] = useState("");
  return (
    <View>
      <DropDownPicker
    items={[
        {label: 'Item 1', value: 'item1'},
        {label: 'Item 2', value: 'item2'},
    ]}
    defaultIndex={0}
    containerStyle={{height: 40}}
    onChangeItem={item => console.log(item.label, item.value)}
/>
    </View>
  );
};
