import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
query {
    repositories {
        edges {
            node {
                id
                name
                ownerName
                createdAt
                fullName
                reviewCount
                ratingAverage
                forksCount
                stargazersCount
                description
                language
                ownerAvatarUrl
                openIssuesCount
                watchersCount
                url
                userHasReviewed
            }
        }
    }
}
`
console.log(GET_REPOSITORIES);