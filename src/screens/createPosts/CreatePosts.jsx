import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Image } from 'native-base';
import { ROUTES } from '../../constants/constatnts';
// import * as Location from 'expo-location';

const CreatePosts = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await cameraRef.takePictureAsync();
    // const location = await Location.getCurrentPositionAsync();
    setPhoto(photo.uri);
  };

  // if (!permission) {
  //   return <View />;
  // }
  // if (!permission.granted) {
  //   return <Text>No access to camera</Text>;
  // }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  }

  const sendPhoto = () => {
    console.log('photo', photo);
    navigation.navigate(ROUTES.posts, { photo });
  };

  const deletePhoto = () => {
    setPhoto(null);
  };

  return (
    <View style={styles.container}>
      {!photo ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            setCameraRef(ref);
          }}
        >
          <View style={styles.photoView}>
            <TouchableOpacity
              style={styles.flipContainer}
              onPress={toggleCameraType}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {' '}
                Flip{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
              <View style={styles.takePhotoOut}>
                <View style={styles.takePhotoInner}></View>
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <>
          <Image
            alt='photo'
            source={{ uri: photo }}
            style={{ height: '100%', width: '100%', borderRadius: 10, flex: 1 }}
          />
          <View style={styles.photoView}>
            <TouchableOpacity style={styles.button} onPress={deletePhoto}>
              <View style={styles.takePhotoOut}>
                <View style={styles.takePhotoInner}></View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
              <Text style={styles.sendLabel}>SEND</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', height: '70%' },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: 'flex-end',
  },

  button: { alignSelf: 'center' },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: 'white',
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: 'white',
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: '#20b2aa',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendLabel: {
    color: '#20b2aa',
    fontSize: 20,
  },
});

export default CreatePosts;
