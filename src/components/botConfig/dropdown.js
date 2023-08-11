import * as React from 'react';
import { } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const Dropper = ({ values, selectedValue, onValueChange }) => {
    const dropdownData = values.map(value => ({ value }));
  
    return (
      <Dropdown
        label='Select a value'
        data={dropdownData}
        value={selectedValue}
        onChangeText={onValueChange}
        containerStyle={{ width: 150 }} // Adjust width as needed
      />
    );
  };
  
  export default Dropper;
