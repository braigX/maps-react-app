import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapViewComponent from '../Components/MapViewComponent';
import ReportForm from '../Components/ReportForm';

const Locations = () => {
  return (
    <View style={styles.container}>
      <MapViewComponent />
      <ReportForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Locations;
