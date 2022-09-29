import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Box, Button, Icon, Image } from 'native-base';
import React from 'react';
import { ROUTES } from '../../constants/constatnts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Posts from '../../screens/posts/Posts';
import CreatePosts from '../../screens/createPosts/CreatePosts';
import Profile from '../../screens/profile/Profile';
import Map from '../../screens/map/Map';
import Comments from '../../screens/comments/Comments';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PostsNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name={ROUTES.posts} component={Posts} />
      <Stack.Screen name={ROUTES.map} component={Map} />
      <Stack.Screen name={ROUTES.comments} component={Comments} />
    </Stack.Navigator>
  );
};
// const CreatePostsNavigator = () => {
//   return (
//     <Stack.Navigator headerMode='none'>
//       <Stack.Screen name={ROUTES.createPosts} component={CreatePosts} />
//     </Stack.Navigator>
//   );
// };
// const ProfileNavigator = () => {
//   return (
//     <Stack.Navigator headerMode='none'>
//       <Stack.Screen name={ROUTES.profile} component={Profile} />
//     </Stack.Navigator>
//   );
// };

const BottomTabNavigator = () => {
  const TABS = [
    {
      name: ROUTES.home,
      component: PostsNavigator,
      title: 'Posts',
      icon: ({ focused, size, color }) => (
        <MaterialCommunityIcons
          name='postage-stamp'
          size={size}
          color={color}
        />
      ),
      header: () => <Button w={12}>Log out</Button>,
    },
    {
      name: ROUTES.createPosts,
      component: CreatePosts,
      title: 'Create Posts',
      icon: ({ focused, size, color }) => (
        <AntDesign name='pluscircleo' size={35} color={color} />
      ),
    },
    {
      name: ROUTES.profile,
      component: Profile,
      title: 'Profile',
      icon: ({ focused, size, color }) => (
        <MaterialCommunityIcons name='umbrella' size={size} color={color} />
      ),
    },
  ];

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.posts}
      sceneContainerStyle={{
        backgroundColor: '#fffffff',
      }}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      {TABS.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            title: tab.title,
            tabBarBadge: tab.tabBarBadge,
            // tabBarIcon: ({ color }) => <tab.icon color={color} />,
            tabBarIcon: tab.icon,
            headerRight: tab.header,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
