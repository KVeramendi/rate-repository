import { StatusBar } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient.js';

const apolloClient = createApolloClient()

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style='light'></StatusBar>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  )
}

