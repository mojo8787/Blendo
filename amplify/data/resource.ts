import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  ContactInquiry: a
    .model({
      name: a.string(),
      email: a.string(),
      mobile: a.string(),
      message: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});
