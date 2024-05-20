import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ReportForm = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const saveReport = () => {
    console.log('Location:', location); 
    console.log('Description:', description);
    console.log('Image URI:', image);
    // Implement the logic to save data to MongoDB here
  };

  return (
    <View style={styles.container}>
      <Button title="Take a Picture" onPress={takePicture} />
      {image && <Text>Picture taken!</Text>}
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Save Report" onPress={saveReport} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ReportForm;
