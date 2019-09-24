import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import client from './src/graphql';
import Profile from "./src/pages/Profile";

export default function App() {
  return (
      <ApolloProvider client={client}>
        <Profile/>
      </ApolloProvider>
  );
}

