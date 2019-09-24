import { GITHUB_KEY, GITHUB_URL } from 'react-native-dotenv';
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
    uri: GITHUB_URL,
    headers: {
        authorization: `Bearer ${GITHUB_KEY}`
    }
});

const cache = new InMemoryCache();

export default new ApolloClient({
    link: httpLink,
    cache,
})
