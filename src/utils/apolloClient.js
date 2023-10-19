// import ApolloClient from "apollo-boost";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const createApolloClient = () => {
    const client = new ApolloClient({
        uri: 'http://192.168.0.4:5000/api/repositories',
        cache: new InMemoryCache(),
    })
    return client
}

export default createApolloClient