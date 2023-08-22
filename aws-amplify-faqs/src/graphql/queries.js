/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFAQ = /* GraphQL */ `
  query GetFAQ($id: ID!) {
    getFAQ(id: $id) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const listFAQS = /* GraphQL */ `
  query ListFAQS(
    $filter: ModelFAQFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFAQS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        answer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
