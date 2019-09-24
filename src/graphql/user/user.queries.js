import { gql } from 'apollo-boost';

export const GET_REPOSITORIES_OF_CURRENT_USER = gql`
    {
        viewer {
            login
            name
            avatarUrl
            repositories(
                first: 5
                orderBy: { direction: DESC, field: STARGAZERS }
            ) {
                edges {
                    node {
                        id
                        name
                        url
                        descriptionHTML
                        primaryLanguage {
                            name
                        }
                        owner {
                            login
                            url
                        }
                        stargazers {
                            totalCount
                        }
                        viewerHasStarred
                        watchers {
                            totalCount
                        }
                        viewerSubscription
                    }
                }
            }
        }
    }
`;