import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, Button } from 'react-native';
import { ROUTES } from '../../constants/constatnts';

const Posts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log('route.params', route);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log('posts', posts);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
              alt='photo'
            />
          </View>
        )}
      />
      <Button
        title='go to map'
        onPress={() => navigation.navigate(ROUTES.map)}
      />
      <Button
        title='go to Comments'
        onPress={() => navigation.navigate(ROUTES.comments)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Posts;
