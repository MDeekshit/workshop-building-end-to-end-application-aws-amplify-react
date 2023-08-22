/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFAQ = /* GraphQL */ `
  mutation CreateFAQ(
    $input: CreateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    createFAQ(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const updateFAQ = /* GraphQL */ `
  mutation UpdateFAQ(
    $input: UpdateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    updateFAQ(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const deleteFAQ = /* GraphQL */ `
  mutation DeleteFAQ(
    $input: DeleteFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    deleteFAQ(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
