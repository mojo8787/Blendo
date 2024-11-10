import { defineData } from '@aws-amplify/backend';

const schema = /* GraphQL */`
  type User @model {
    id: ID!
    email: String!
    name: String
    jobApplications: [JobApplication] @connection(keyName: "byUser", fields: ["id"])
  }

  type JobApplication @model @key(name: "byUser", fields: ["userId"]) {
    id: ID!
    userId: ID!
    position: String!
    status: String!
    submittedAt: AWSDateTime!
    user: User @connection(fields: ["userId"])
  }

  type Company @model {
    id: ID!
    name: String!
    logoUrl: String
    jobApplications: [JobApplication] @connection(keyName: "byCompany", fields: ["id"])
  }
`;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});