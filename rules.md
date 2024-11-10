1.	Vue/
2.	Build & connect backend/
3.	Authentication
Authentication

Set up Amplify Auth
Learn how to set up and connect your backend resources for authentication in Amplify.

Concepts
Learn more about what Amplify Auth provisions and supports

Connect your frontend
Learn how to connect your frontend to your backend auth resource

Manage users
Learn how to manage users

Customize auth lifecycle
Learn how to customize the auth lifecycle

Examples
Learn how to address different business use cases with Amplify Auth

Grant access to auth resources
Learn how to grant access to auth resources

Modify Amplify-generated Cognito resources with CDK
Learn how to modify Amplify-generated Cognito resources.

Moving to production
Learn how to configure your auth resources for production workloads

Advanced workflows
Learn more about advanced workflows in the Amplify auth category. This includes subscribing to events, identity pool federation, auth-related Lambda triggers and working with AWS service objects.

Use existing Cognito resources
Learn how to use existing auth resources

API References
API References - auth

Set up Amplify Auth
Amplify Auth is powered by Amazon Cognito. Cognito is a robust user directory service that handles user registration, authentication, account recovery, and other operations. Review the concepts to learn more.
To get started with defining your authentication resource, open or create the auth resource file:
amplify/auth/resource.ts
Copyamplify/auth/resource.ts code example
import { defineAuth } from "@aws-amplify/backend"

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
})
By default, your auth resource is scaffolded using email as the default login mechanism. You can also configure your auth resource to allow signing in with phone numbers or an external provider such as Google, Facebook, Amazon, or Sign in with Apple.
Note: At a minimum you will need to pass a loginWith value to set up how your users sign in to your app. Signing in with email and password is configured by default if you do not provide any value.
Deploy auth resource
After you have chosen and defined your authentication resource, run the following command to create your resource in your personal cloud sandbox.
Terminal
CopyTerminal code example
npx ampx sandbox
After a successful deployment, this command also generates an outputs file (amplify_outputs.json) to enable your frontend app to connect to your backend resources. The values you configure in your backend authentication resource are set in the generated outputs file to automatically configure the frontend Authenticator connected component.
Connect your application code to your auth resource
Creating and correctly implementing the sign-in flow can be challenging and time-consuming. Amplify's Authenticator UI component streamlines this by enabling you to rapidly build the entire authentication flow for your app. The component works seamlessly with configuration in amplify/auth/resource.ts to automatically connect with your backend resources.
Amplify has pre-built UI components for React, Vue, Angular, React Native, Swift, Android, and Flutter. In this guide, we are focusing on those for web applications.
Vue 3Vue 2
First, install the @aws-amplify/ui-vue library:
Terminal
CopyTerminal code example
npm add @aws-amplify/ui-vue
Next, open src/App.vue and add the Authenticator component.
Authenticator
The Authenticator component offers a simple way to add authentication flows into your app. This component encapsulates an authentication workflow in the framework of your choice and is backed by your backend Auth resources. Authenticator passes the user info and signOut function to the inner template.
Copycode example
<script setup>
  import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";

  import { Amplify } from 'aws-amplify';
  import outputs from '../amplify_outputs.json';

  Amplify.configure(outputs);
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>
Once you add the Authenticator component to your app, you can test the sign-up, sign-in, and sign-out functionality. You can also customize the Authenticator connected component to adjust colors and styling as needed.


Concepts
Amplify helps you secure your application while providing an easy sign-in experience for your users. This experience is influenced by your security strategy. This security strategy includes the authentication method, security credentials, and enabling additional verification when needed.
•	Authentication is a process to validate who you are (abbreviated as AuthN). The system that does this validation is referred to as an Identity Provider or IdP. This can be your own self-hosted IdP or a cloud service. Oftentimes, this IdP is an external provider such as Apple, Facebook, Google, or Amazon.
•	Authorization is the process of validating what you can access (abbreviated as AuthZ). This is sometimes done by looking at tokens with custom logic, predefined rules, or signed requests with policies.
Common authentication methods and associated risks include:
•	External provider federation which enables easier access for your users but shares data with third parties.
You can improve security credentials and verification for these authentication methods by:
•	Modifying the default password policy to ensure your users create stronger passwords.
•	Requiring additional contact information from users before they can reset passwords.
•	Enabling multi-factor authentication (MFA) which adds a layer of security at sign-in but may also add friction for your users.
What is Amazon Cognito?
Amplify Auth is powered by Amazon Cognito. Amazon Cognito is an identity and access management service, enabling you to secure your web or mobile applications, and is comprised of two services:
1.	Amazon Cognito User Pools is a full-featured user directory service to handle user registration, authentication, and account recovery
2.	Amazon Cognito Federated Identities or Identity Pools is a service used to authorize your users to interact with other AWS services
Amplify interfaces with User Pools to store your user information, including federation with other OpenID providers like Apple, Facebook, Google, or Amazon, and leverages federated identities to manage user access to AWS resources.
Authorization is often done in one of two ways:
1.	Clients pass the tokens to the backend that perform custom logic to allow or deny actions
2.	Clients sign the requests and the backend validates the signature, allowing or denying actions depending on predefined policy. The predefined rules, known as IAM access policies, are automatically configured by Amplify.
The first is a common authorization method for HTTP or GraphQL APIs, while the second is necessary for interfacing with AWS services such as Amazon S3, Amazon Pinpoint, and others.
Before you build
Amazon Cognito can be customized based on your security strategy for authentication. However, some initial configuration options cannot be changed after the backend resources are configured:
•	User attributes that are used to identify your individual users (such as email and phone) cannot be renamed or deleted.
•	Sign-in methods (including username, email, and phone) cannot be added or changed after the initial configuration. This includes both defining which attributes are used to sign in and which attributes are required. Required attributes must have a value for all users once set.
•	Verification methods (including username and email) are the same as required attributes and cannot be removed once configured.
•	The sub attribute is a unique identifier within each user pool that cannot be modified and can be used to index and search users.
•	If MFA is set to required with phone number for all users, you will need to include MFA setup (i.e. mandating phone number) when users sign up.
Visit the Amazon Cognito documentation for more details on these settings, including User pool attributes and Adding MFA to a user pool.

Usernames
Learn more about what Amplify Auth provisions and supports

Email
Learn more about what Amplify Auth provisions and supports

Phone
Learn more about what Amplify Auth provisions and supports

User attributes
Learn more about what Amplify Auth provisions and supports

User groups
Learn more about what Amplify Auth provisions and supports

Multi-factor authentication
Learn more about what Amplify Auth provisions and supports

External identity providers
Learn more about what Amplify Auth provisions and supports

Guest access
Access services without needing to sign in.

Tokens and credentials
Learn about how tokens and credentials are used in Amplify applications

Usernames
Amplify Auth does not support signing in with only username and password, however can be configured to enable usernames for display purposes. Amazon Cognito offers two ways of provisioning login mechanisms:
1.	Username attributes
2.	Alias attributes
Each are described in more detail on the AWS documentation for Cognito user pool settings, however at a high-level can be described as follows:
•	Username attributes allow you to customize which attribute can be used as the "username", or allowing users to sign in with an email or phone in place of a username
•	Alias attributes allow you to specify with attribute(s) can be used with sign in in addition to a username
With Amazon Cognito, usernames are immutable, which means after the initial sign-up users are unable to change their username later. In some applications this may be undesirable, which can motivate the use of alias attributes. Alias attributes allow you to define a mutable "preferred username" in addition to an immutable username.
Amplify Auth leverages username attributes to configure Cognito to accept an email or a phone number as the "username". Users will then need to verify their ownership of specified email or phone number to confirm their account.
However, it is common to consider a "username" for display purposes. For example, you can configure your auth resource to accept a "preferred username" to be used as the display name:
amplify/auth/resource.ts
import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
Copyhighlighted code example
  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: false
    }
  }
});
This is not a username the user will be able to sign in with, but it can be used to mask their personal information such as their email or phone number when displaying publicly.
If you would like to override the default behavior and allow your users to sign up with an immutable username, you can use CDK to modify your auth resource's usernameAttributes configuration directly:
amplify/backend.ts
Copyamplify/backend.ts code example
import { defineBackend } from "@aws-amplify/backend"
import { auth } from "./auth/resource"
import { data } from "./data/resource"

const backend = defineBackend({
  auth,
  data,
})

const { cfnUserPool } = backend.auth.resources.cfnResources
// an empty array denotes "email" and "phone_number" cannot be used as a username
cfnUserPool.usernameAttributes = []
Email
By default Amplify Auth is scaffolded with email as the default method for user sign-in.
amplify/auth/resource.ts
Copyamplify/auth/resource.ts code example
import { defineAuth } from "@aws-amplify/backend"

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
})
This will configure an email attribute that is required for sign-up and cannot be changed.
Next steps
Phone
By default Amplify Auth is scaffolded with email as the default method for user sign-in, however this can be changed or extended to also allow your users to sign in using their phone number.
amplify/auth/resource.ts
import { defineAuth } from "@aws-amplify/backend"

export const auth = defineAuth({
  loginWith: {
Copyhighlighted code example
    phone: true,
  },
})
This will configure the phone_number attribute that is required for sign-up and cannot be changed.
User attributes
Amplify Auth stores user profile information in user attributes. When the default method for user sign-in, Amplify Auth will automatically configure an email or phoneNumber attribute that is required for sign-in.
To extend a user profile beyond the default email or phoneNumber attribute that is automatically configured when specified in your auth resource's loginWith property, you can configure attributes with the userAttributes property:
Warning: After you create your auth resource, you cannot switch an attribute between required and not required.
amplify/auth/resource.ts
import { defineAuth } from "@aws-amplify/backend"

export const auth = defineAuth({
  loginWith: {
    // this configures a required "email" attribute
    email: true,
  },
Copyhighlighted code example
  userAttributes: {
    // specify a "birthdate" attribute
    birthdate: {
      mutable: true,
      required: false,
    }
  },
})
Standard attributes
User attributes are defined as Cognito Standard Attributes. Attributes can be configured to be required for user sign-up in addition to whether the values are mutable. When configuring your resource to allow your users to login with email, an email must be specified for user sign-up and cannot be changed later. However additional attributes can be configured to be optional, and mutable after sign-up.
Custom attributes
In addition to the provided standard attributes, you can configure Custom Attributes. These are attributes that are typically unique to your use case, such as a tenant ID or a user's display name. Custom attributes are identified by the custom: prefix:
amplify/auth/resource.ts
import { defineAuth } from "@aws-amplify/backend"

export const auth = defineAuth({
  loginWith: {
    // this configures a required "email" attribute
    email: true,
  },
  userAttributes: {
Copyhighlighted code example
    "custom:display_name": {
      dataType: "String",
      mutable: true,
      maxLen: 16,
      minLen: 1,
    },
    "custom:favorite_number": {
      dataType: "Number",
      mutable: true,
      min: 1,
      max: 100,
    },
    "custom:is_beta_user": {
      dataType: "Boolean",
      mutable: true,
    },
    "custom:started_free_trial": {
      dataType: "DateTime",
      mutable: true,
    },
  },
})
Unlike standard attributes, custom attributes cannot natively be required for sign-up, however can be codified to require some value by validating user attributes upon sign-up with a pre sign-up trigger.
Custom attributes can also be configured with specific data types. The following data types are supported:
•	String
•	Number
•	Boolean
•	DateTime
Shown in the snippet above, String and Number can be assigned minimum and maximum constraints. This is useful to defer simple validations to the underlying service, although does not extend to complex validations such as matching against a regular expression.

Guest access
Amplify Auth can be configured to automatically obtain guest credentials once the device is online so that you are able to use other categories "anonymously" without the need to sign in. You will not be able to perform user specific methods while in this state such as updating attributes, changing your password, or getting the current user. However, you can obtain the unique Identity ID which is assigned to the device through the fetchAuthSession method described here.
Amplify Gen 2 enables guest access by default. To disable it, you can update the backend.ts file with the following changes:
amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend'
import { auth } from './auth/resource'
import { data } from './data/resource'

const backend = defineBackend({
  auth,
  data,
});

Copyhighlighted code example
const { cfnIdentityPool } = backend.auth.resources.cfnResources;
cfnIdentityPool.allowUnauthenticatedIdentities = false;
Tokens and credentials
Amplify Auth interacts with its underlying Amazon Cognito user pool as an OpenID Connect (OIDC) provider. When users successfully authenticate you receive OIDC-compliant JSON web tokens (JWT). These tokens are used to identity your user, and access resources.
Access tokens are used to verify the bearer of the token (i.e. the Cognito user) is authorized to perform an action against a resource. Below is an example payload of an access token vended by Cognito:
Copycode example
{
  "sub": "54288468-e051-706d-a73f-03892273d7e9",
  "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_yoKn9s4Tq",
  "client_id": "1sg675g08g6g0e9f64grv9n5sk",
  "origin_jti": "0eadb994-a6e0-419e-b309-a7a0d522d72f",
  "event_id": "b180897a-181c-4f73-94bb-a2946e8b4ef1",
  "token_use": "access",
  "scope": "aws.cognito.signin.user.admin",
  "auth_time": 1714241873,
  "exp": 1714245473,
  "iat": 1714241873,
  "jti": "57f10a4d-a1f2-453b-8672-d1cfa8187047",
  "username": "54288468-e051-706d-a73f-03892273d7e9"
}
ID tokens are intended to be used within your frontend application only. This token contains personally identifiable information (PII) and should not be used to authorize access against a resource. Below is an example of an ID token with the default Amplify Auth configuration of email and password auth.
Copycode example
{
  "sub": "54288468-e051-706d-a73f-03892273d7e9",
  "email_verified": true,
  "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_yoKn9s4Tq",
  "cognito:username": "54288468-e051-706d-a73f-03892273d7e9",
  "origin_jti": "0eadb994-a6e0-419e-b309-a7a0d522d72f",
  "aud": "1sg675g08g6g0e9f64grv9n5sk",
  "event_id": "b180897a-181c-4f73-94bb-a2946e8b4ef1",
  "token_use": "id",
  "auth_time": 1714241873,
  "exp": 1714245473,
  "iat": 1714241873,
  "jti": "bb69af10-3ce0-47c2-8d8d-5bdc8630ab58",
  "email": "hello@mycompany.com"
}
When additional user attributes are specified for Amplify Auth, their values will be found in the ID token. For example, if a nickname attribute is requested it will be available on the ID token with the nickname claim:
Copycode example
{
  "sub": "54288468-e051-706d-a73f-03892273d7e9",
  "email_verified": true,
  "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_yoKn9s4Tq",
  "cognito:username": "54288468-e051-706d-a73f-03892273d7e9",
  "origin_jti": "0eadb994-a6e0-419e-b309-a7a0d522d72f",
  "aud": "1sg675g08g6g0e9f64grv9n5sk",
  "event_id": "b180897a-181c-4f73-94bb-a2946e8b4ef1",
  "token_use": "id",
  "auth_time": 1714241873,
+ "nickname": "hello",
  "exp": 1714245473,
  "iat": 1714241873,
  "jti": "bb69af10-3ce0-47c2-8d8d-5bdc8630ab58",
  "email": "hello@mycompany.com"
}
Conversely, user pool group claims are found in both the access token and ID token on the cognito:groups claim:
Copycode example
{
  "sub": "54288468-e051-706d-a73f-03892273d7e9",
  "email_verified": true,
  "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_yoKn9s4Tq",
  "cognito:username": "54288468-e051-706d-a73f-03892273d7e9",
  "cognito:groups": ["ADMINS"],
  "origin_jti": "0eadb994-a6e0-419e-b309-a7a0d522d72f",
  "aud": "1sg675g08g6g0e9f64grv9n5sk",
  "event_id": "b180897a-181c-4f73-94bb-a2946e8b4ef1",
  "token_use": "id",
  "auth_time": 1714241873,
  "nickname": "hello",
  "exp": 1714245473,
  "iat": 1714241873,
  "jti": "bb69af10-3ce0-47c2-8d8d-5bdc8630ab58",
  "email": "hello@mycompany.com"
}
Visit the AWS documentation for using tokens with Cognito user pools to learn more about tokens, how they're used with Cognito, and their intended usage.
Understand token management options
Token keys are automatically rotated for you for added security but you can update how they are stored, customize the refresh rate and expiration times, and revoke tokens on sign-out.
Update your token-saving mechanism
You can update the storage mechanism to choose where and how tokens are persisted in your application. The default option is localStorage. Additionally, you can import the sessionStorage, sharedInMemoryStorage or CookieStorage options as well.
If you want to customize your own mechanism, you can import the KeyValueStorageInterface interface and implement it in your own class.
Browser Local Storage
In Amplify the localStorage is the default storage mechanism. It saves the tokens in the browser's localStorage. This local storage will persist across browser sessions and tabs. You can explicitly set to this storage by calling:
Copycode example
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import { defaultStorage } from 'aws-amplify/utils';

cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);
Cookie Storage
CookieStorage saves the tokens in the browser's Cookies. The cookies will persist across browser sessions and tabs. You can explicitly set to this storage by calling:
Copycode example
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import { CookieStorage } from 'aws-amplify/utils';

cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());
Browser Session Storage
sessionStorage saves the tokens in the browser's sessionStorage and these tokens will clear when a tab is closed. The benefit to this storage mechanism is that the session only lasts as long as the browser is open and you can sign out users when they close the tab. You can update to this storage by calling:
Copycode example
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import { sessionStorage } from 'aws-amplify/utils';

cognitoUserPoolsTokenProvider.setKeyValueStorage(sessionStorage);
Custom Storage
You can implement your own custom storage mechanism by creating a class that implements the storage interface. Here is an example that uses memory storage:
Copycode example
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import { KeyValueStorageInterface } from 'aws-amplify/utils';

class MyCustomStorage implements KeyValueStorageInterface {
  storageObject: Record<string, string> = {};
  async setItem(key: string, value: string): Promise<void> {
    this.storageObject[key] = value;
  }
  async getItem(key: string): Promise<string | null> {
    return this.storageObject[key];
  }
  async removeItem(key: string): Promise<void> {
    delete this.storageObject[key];
  }
  async clear(): Promise<void> {
    this.storageObject = {};
  }
}

cognitoUserPoolsTokenProvider.setKeyValueStorage(new MyCustomStorage());
When you get the current user session, the tokens will be saved in your custom location.
Token Revocation
Token revocation is enabled automatically in Amplify Auth. To revoke tokens you can set up global sign-out with signOut({ global: true }) to globally sign out your user from all of their devices.
 
Data

Set up Amplify Data
Create a new cloud API that connects your app with new or existing data sources.

Connect your app code to API
Learn how to connect your app code to an API.

Create, update, and delete application data
Mutate application data in an API by generating the client, adding items, updating existing items, deleting items, troubleshooting unauthorized errors, and canceling requests.

Read application data
Read application data using list and get queries. You can filter query results, paginate list queries, specify only the data fields needed, and cancel requests. This guide covers how to perform these tasks to optimize data access in your application.

Subscribe to real-time events
Set up real-time data subscriptions in your app to get live updates, filter those subscriptions on the server side, and unsubscribe when no longer needed.

Customize your data model
Learn how to customize your data model.

Customize your auth rules
Learn how to customize and combine your authorization rules.

Add custom queries and mutations
Customize your business logic for queries and mutations.

Working with files/attachments
Working with files/attachments.

Add custom real-time subscriptions
Customize your business logic to create custom real-time subscriptions.

Connect to existing data sources
Learn how to connect your Data API to existing DynamoDB tables, MySQL databases, or PostgreSQL databases.

Connect to data from Server-side Runtimes
Connect to Amplify Data from Next.js and Nuxt.js Server-side Runtimes (SSR).

Optimistic UI
Learn more about implementing optimistic UI with Amplify Data API.

Connect to AWS AppSync Events
Connect to AWS AppSync Events

Modify Amplify-generated AWS resources
Modify and customize existing AWS resources generated by the Amplify GraphQL API.

Manage Data with Amplify console
Manage GraphQL data with Amplify console



Set up Amplify Data
In this guide, you will learn how to set up Amplify Data. This includes building a real-time API and database using TypeScript to define your data model, and securing your API with authorization rules. We will also explore using AWS Lambda to scale to custom use cases.
Before you begin, you will need:
•	Node.js v18.16.0 or later
•	npm v6.14.4 or later
•	git v2.14.1 or later
With Amplify Data, you can build a secure, real-time API backed by a database in minutes. After you define your data model using TypeScript, Amplify will deploy a real-time API for you. This API is powered by AWS AppSync and connected to an Amazon DynamoDB database. You can secure your API with authorization rules and scale to custom use cases with AWS Lambda.
Building your data backend
If you've run npm create amplify@latest already, you should see an amplify/data/resource.ts file, which is the central location to configure your data backend. The most important element is the schema object, which defines your backend data models (a.model()) and custom queries (a.query()), mutations (a.mutation()), and subscriptions (a.subscription()).
amplify/data/resource.ts
Copyamplify/data/resource.ts code example
import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Todo: a.model({
      content: a.string(),
      isDone: a.boolean()
    })
    .authorization(allow => [allow.publicApiKey()])
});

// Used for code completion / highlighting when making requests from frontend
export type Schema = ClientSchema<typeof schema>;

// defines the data resource to be deployed
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 }
  }
});
Every a.model() automatically creates the following resources in the cloud:
•	a DynamoDB database table to store records
•	query and mutation APIs to create, read (list/get), update, and delete records
•	createdAt and updatedAt fields that help you keep track of when each record was initially created or when it was last updated
•	real-time APIs to subscribe for create, update, and delete events of records
The allow.publicApiKey() rule designates that anyone authenticated using an API key can create, read, update, and delete todos.
To deploy these resources to your cloud sandbox, run the following CLI command in your terminal:
Terminal
CopyTerminal code example
npx ampx sandbox
Connect your application code to the data backend
Once the cloud sandbox is up and running, it will also create an amplify_outputs.json file, which includes the relevant connection information to your data backend, like your API endpoint URL and API key.
To connect your frontend code to your backend, you need to:
1.	Configure the Amplify library with the Amplify client configuration file (amplify_outputs.json)
2.	Generate a new API client from the Amplify library
3.	Make an API request with end-to-end type-safety
First, install the Amplify client library to your project:
Terminal
CopyTerminal code example
npm add aws-amplify
In your app's entry point, typically main.ts for Vue apps created using Vite, make the following edits:
src/main.ts
Copysrc/main.ts code example
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);
Write data to your backend
src/TodoList.vue
Copysrc/TodoList.vue code example
<script setup lang="ts">
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

const client = generateClient<Schema>()

async function createTodo() {
  await client.models.Todo.create({
    content: window.prompt("Todo content?"),
    isDone: false
  })
}
</script>

<template>
  <div>
    <button @click="createTodo">Add new todo</button>
  </div>
</template>
Read data from your backend
Next, list all your todos and then refetch the todos after a todo has been added:
src/TodoList.vue
Copysrc/TodoList.vue code example
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

const client = generateClient<Schema>()

// create a reactive reference to the array of todos
const todos = ref<Array<Schema['Todo']['type']>>([]);

function fetchTodos() {
  const { data: items, errors } = await client.models.Todo.list();
  todos.value = items; 
}

async function createTodo() {
  await client.models.Todo.create({
    content: window.prompt("Todo content?"),
    isDone: false
  })
  fetchTodos();
}

 onMounted(() => {
  fetchTodos();
});

</script>

<template>
  <div>
    <button @click="createTodo">Add new todo</button>
    <ul>
     <li 
       v-for="todo in todos" 
       :key="todo.id">
       {{ todo.content }}
     </li>
    </ul>
  </div>
</template>
Subscribe to real-time updates
src/TodoList.vue
Copysrc/TodoList.vue code example
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Schema } from '../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

const client = generateClient<Schema>()

// create a reactive reference to the array of todos
const todos = ref<Array<Schema['Todo']["type"]>>([]);

function fetchTodos() {
  client.models.Todo.observeQuery().subscribe({
    next: ({ items, isSynced }) => {
      todos.value = items
     },
  }); 
}

async function createTodo() {
  await client.models.Todo.create({
    content: window.prompt("Todo content?"),
    isDone: false
  })
  // no more manual refetchTodos required!
  // - fetchTodos()
}

 onMounted(() => {
  fetchTodos();
});

</script>

<template>
  <div>
    <button @click="createTodo">Add new todo</button>
    <ul>
     <li 
       v-for="todo in todos" 
       :key="todo.id">
       {{ todo.content }}
     </li>
    </ul>
  </div>
</template>
Conclusion
Success! You've learned how to create your first real-time API and database with Amplify Data.







Connect your app code to API
In this guide, you will connect your application code to the backend API using the Amplify Libraries. Before you begin, you will need:
•	Your cloud sandbox with an Amplify Data resource up and running (npx ampx sandbox)
•	A frontend application set up with the Amplify library installed
•	npm installed
Configure the Amplify Library
When you deploy you're iterating on your backend (npx ampx sandbox), an amplify_outputs.json file is generated for you. This file contains your API's endpoint information and auth configurations. Add the following code to your app's entrypoint to initialize and configure the Amplify client library:
Copycode example
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);
Generate the Amplify Data client
Once the Amplify library is configured, you can generate a "Data client" for your frontend code to make fully-typed API requests to your backend.
If you're using Amplify with a JavaScript-only frontend (i.e. not TypeScript), then you can still get a fully-typed data fetching experience by annotating the generated client with a JSDoc comment. Select the JavaScript in the code block below to see how.
To generate a new Data client, use the following code:
TypeScriptJavaScript
Copycode example
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Path to your backend resource definition

const client = generateClient<Schema>();

// Now you should be able to make CRUDL operations with the
// Data client
const fetchTodos = async () => {
  const { data: todos, errors } = await client.models.Todo.list();
};
Configure authorization mode
The Authorization Mode determines how a request should be authorized with the backend. By default, Amplify Data uses the "userPool" authorization which uses the signed-in user credentials to sign an API request. If you use a allow.publicApiKey() authorization rules for your data models, you need to use "apiKey" as an authorization mode. Review Customize your auth rules to learn more about which authorization modes to choose for which type of request. A Default Authorization Mode is provided as part of the amplify_outputs.json that is generated upon a successful deployment.
You can generate different Data clients with different authorization modes or pass in the authorization mode at the request time.
Set authorization mode on a per-client basis
To apply the same authorization mode on all requests from a Data client, specify the authMode parameter on the generateClient function.
API KeyAmazon Cognito user poolAWS IAM (including Amazon Cognito identity pool roles)OpenID Connect (OIDC)Lambda Authorizer
Use "API Key" as your authorization mode when if defined the allow.publicApiKey() authorization rule.
Copycode example
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Path to your backend resource definition

const client = generateClient<Schema>({
  authMode: 'apiKey',
});
Set authorization mode on the request-level
You can also specify the authorization mode on each individual API request. This is useful if your application typically only uses one authorization mode with a small number of exceptions.
API KeyAmazon Cognito user poolAWS IAM (including Amazon Cognito identity pool roles)OpenID Connect (OIDC)Lambda Authorizer
Copycode example
const { data: todos, errors } = await client.models.Todo.list({
  authMode: 'apiKey',
});
Set custom request headers
When working with the Amplify Data endpoint, you may need to set request headers for authorization purposes or to pass additional metadata from your frontend to the backend API.
This is done by specifying a headers parameter into the configuration. You can define headers either on a per Data client-level or on a per-request level:
Custom headers per Data clientCustom headers per request
Copycode example
import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>({
  headers: {
    'My-Custom-Header': 'my value',
  },
});
The examples above show you how to set static headers but you can also programmatically set headers by specifying an async function for headers:
Custom headers per Data clientCustom headers per request
Copycode example
import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>({
  headers: async (requestOptions) => {
    console.log(requestOptions);
    /* The request options allow you to customize your headers based on the request options such
       as http method, headers, request URI, and query string. These options are typically used
       to create a request signature.
    {
      method: '...',
      headers: { },
      uri: '/',
      queryString: ""
    }
    */
    return {
      'My-Custom-Header': 'my value',
    };
  },
});


Connect your app code to API
In this guide, you will connect your application code to the backend API using the Amplify Libraries. Before you begin, you will need:
•	Your cloud sandbox with an Amplify Data resource up and running (npx ampx sandbox)
•	A frontend application set up with the Amplify library installed
•	npm installed
Configure the Amplify Library
When you deploy you're iterating on your backend (npx ampx sandbox), an amplify_outputs.json file is generated for you. This file contains your API's endpoint information and auth configurations. Add the following code to your app's entrypoint to initialize and configure the Amplify client library:
Copycode example
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);
Generate the Amplify Data client
Once the Amplify library is configured, you can generate a "Data client" for your frontend code to make fully-typed API requests to your backend.
If you're using Amplify with a JavaScript-only frontend (i.e. not TypeScript), then you can still get a fully-typed data fetching experience by annotating the generated client with a JSDoc comment. Select the JavaScript in the code block below to see how.
To generate a new Data client, use the following code:
TypeScriptJavaScript
Copycode example
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Path to your backend resource definition

const client = generateClient<Schema>();

// Now you should be able to make CRUDL operations with the
// Data client
const fetchTodos = async () => {
  const { data: todos, errors } = await client.models.Todo.list();
};
Configure authorization mode
The Authorization Mode determines how a request should be authorized with the backend. By default, Amplify Data uses the "userPool" authorization which uses the signed-in user credentials to sign an API request. If you use a allow.publicApiKey() authorization rules for your data models, you need to use "apiKey" as an authorization mode. Review Customize your auth rules to learn more about which authorization modes to choose for which type of request. A Default Authorization Mode is provided as part of the amplify_outputs.json that is generated upon a successful deployment.
You can generate different Data clients with different authorization modes or pass in the authorization mode at the request time.
Set authorization mode on a per-client basis
To apply the same authorization mode on all requests from a Data client, specify the authMode parameter on the generateClient function.
API KeyAmazon Cognito user poolAWS IAM (including Amazon Cognito identity pool roles)OpenID Connect (OIDC)Lambda Authorizer
Use "API Key" as your authorization mode when if defined the allow.publicApiKey() authorization rule.
Copycode example
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Path to your backend resource definition

const client = generateClient<Schema>({
  authMode: 'apiKey',
});
Set authorization mode on the request-level
You can also specify the authorization mode on each individual API request. This is useful if your application typically only uses one authorization mode with a small number of exceptions.
API KeyAmazon Cognito user poolAWS IAM (including Amazon Cognito identity pool roles)OpenID Connect (OIDC)Lambda Authorizer
Copycode example
const { data: todos, errors } = await client.models.Todo.list({
  authMode: 'apiKey',
});
Set custom request headers
When working with the Amplify Data endpoint, you may need to set request headers for authorization purposes or to pass additional metadata from your frontend to the backend API.
This is done by specifying a headers parameter into the configuration. You can define headers either on a per Data client-level or on a per-request level:
Custom headers per Data clientCustom headers per request
Copycode example
import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>({
  headers: {
    'My-Custom-Header': 'my value',
  },
});
The examples above show you how to set static headers but you can also programmatically set headers by specifying an async function for headers:
Custom headers per Data clientCustom headers per request
Copycode example
import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>({
  headers: async (requestOptions) => {
    console.log(requestOptions);
    /* The request options allow you to customize your headers based on the request options such
       as http method, headers, request URI, and query string. These options are typically used
       to create a request signature.
    {
      method: '...',
      headers: { },
      uri: '/',
      queryString: ""
    }
    */
    return {
      'My-Custom-Header': 'my value',
    };
  },
});
Use "userPool" as your authorization mode when using Amazon Cognito user pool-based authorization rules, such as allow.authenticated(), allow.owner(), allow.ownerDefinedIn(), allow.groupsDefinedIn(), or allow.groups().
Copycode example
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Path to your backend resource definition

const client = generateClient<Schema>({
  authMode: 'userPool',
});
Use "identityPool" as your authorization mode when using Amazon Cognito identity pool-based authorization rules, such as allow.guest() or allow.authenticated('identityPool').
Copycode example
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Path to your backend resource definition

const client = generateClient<Schema>({
  authMode: 'identityPool',
});
Use "oidc" as your authorization mode when connecting applications to a trusted identity provider. Private, owner, and group authorization can be configured with an OIDC authorization mode. Review the OIDC authorization docs to learn more.
Copycode example
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Path to your backend resource definition

const client = generateClient<Schema>({
  authMode: 'oidc',
});
Use "Lambda Authorizer" when using your own custom authorization logic via allow.custom(). Review Customize your auth rules to learn more about how to implement your authorization protocol.
Copycode example
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Path to your backend resource definition

const getAuthToken = () => 'myAuthToken';
const lambdaAuthToken = getAuthToken();

const client = generateClient<Schema>({
  authMode: 'lambda',
  authToken: lambdaAuthToken,
});
Create, update, and delete application data
In this guide, you will learn how to create, update, and delete your data using Amplify Libraries' Data client.
Before you begin, you will need:
•	An application connected to the API
Create an item
You can create an item by first generating the Data client with your backend Data schema. Then you can add an item:
Copycode example
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../amplify/data/resource'

const client = generateClient<Schema>();

const { errors, data: newTodo } = await client.models.Todo.create({
  content: "My new todo",
  isDone: true,
})
Note: You do not need to specify createdAt or updatedAt fields because Amplify automatically populates these fields for you.
Update an item
To update the item, use the update function:
Copycode example
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../amplify/data/resource';

const client = generateClient<Schema>();

const todo = {
  id: 'some_id',
  content: 'Updated content',
};

const { data: updatedTodo, errors } = await client.models.Todo.update(todo);
Notes:
•	You do not need to specify the updatedAt field. Amplify will automatically populate this field for you.
•	If you specify extra input fields not expected by the API, this query will fail. You can see this in the errors field returned by the query. With Amplify Data, errors are not thrown like exceptions. Instead, any errors are captured and returned as part of the query result in the errors field.
Delete an item
You can then delete the Todo by using the delete mutation. To specify which item to delete, you only need to provide the id of that item:
Copycode example
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../amplify/data/resource'

const client = generateClient<Schema>();

const toBeDeletedTodo = {
  id: '123123213'
}

const { data: deletedTodo, errors } = await client.models.Todo.delete(toBeDeletedTodo)
Note: When deleting items in many-to-many relationships, the join table records must be deleted before deleting the associated records. For example, for a many-to-many relationship between Posts and Tags, delete the PostTags join record before deleting a Post or Tag. Review Many-to-many relationships for more details.
Troubleshooting
Troubleshoot unauthorized errors
Cancel create, update, and delete requests
You can cancel any mutation API request by calling .cancel on the mutation request promise that's returned by .create(...), .update(...), or .delete(...).
Copycode example
const promise = client.models.Todo.create({ content: 'New Todo' });
//  ^ Note: we're not awaiting the request, we're returning the promise

try {
  await promise;
} catch (error) {
  console.log(error);
  // If the error is because the request was cancelled you can confirm here.
  if (client.isCancelError(error)) {
    console.log(error.message); // "my message for cancellation"
    // handle user cancellation logic
  }
}

//...

// To cancel the above request
client.cancel(promise, 'my message for cancellation');
You need to ensure that the promise returned from .create(), .update(), and .delete() has not been modified. Typically, async functions wrap the promise being returned into another promise. For example, the following will not work:
Copycode example
async function makeAPICall() {
  return client.models.Todo.create({ content: 'New Todo' });
}
const promise = makeAPICall();

// The following will NOT cancel the request.
client.cancel(promise, 'my error message');
Conclusion
Congratulations! You have finished the Create, update, and delete application data guide. In this guide, you created, updated, and deleted your app data.
Next steps
Our recommended next steps include using the API to query data and subscribe to real-time events to look for mutations in your data. Some resources that will help with this work include:

Read application data
You can read application data using the Amplify Data client. In this guide, we will review the difference between reading data and getting data, how to filter query results to get just the data you need, and how to paginate results to make your data more manageable. We will also show you how to cancel these requests when needed.
Before you begin, you will need:
•	An application connected to the API
•	Data already created to view
List and get your data
Queries are used to read data through the API and include the list and get operations. Amplify Data automatically creates list and get queries for any a.model() type in your schema. The list query retrieves multiple items, such as Todo items, without needing to specific an identifier for a particular record. This is best suited for getting an overview or summary of items, or for enhancing the list operation to filter the items by specific criteria. When you want to query a single entry by an identifier, you would use get to retrieve a specific Todo item.
Note: The cost structure of your underlying data source can impact the cost to run some queries. For example, the list operation uses Amazon DynamoDB "scan operations," which can use more read request units than the get operation. You will want to review the associated costs for these operations for your data source. In our example, we are using DynamoDB. You can learn more about how DynamoDB costs are calculated by visiting Amazon DynamoDB pricing.
You can list items by first generating the Data client with your backend Data schema. Then you can list items of your desired model:
Copycode example
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

// list all items
const { data: todos, errors } = await client.models.Todo.list();

// get a specific item
const { data: todo, errors } = await client.models.Todo.get({
  id: '...',
});
Troubleshooting
Troubleshoot unauthorized errors
Filter list queries
As your data grows, you will need to paginate your list queries. Fortunately, this is already built in to Amplify Data.
Copycode example
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

const { data: todos, errors } = await client.models.Todo.list({
  filter: {
    content: {
      beginsWith: 'hello'
    }
  }
});
Compound filters
You can combine filters with and, or, and not Boolean logic. Observe that filter is recursive in respect to those fields. So if, for example, you wanted to filter for priority values of 1 or 2, you would do this:
Copycode example
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

const { data: todos, errors } = await client.models.Todo.list({
  filter: {
    or: [
      {
        priority: { eq: '1' }
      },
      {
        priority: { eq: '2' }
      }
    ]
  }
});
Note that querying for priority of 1 and 2 would return no results, because this is Boolean logic instead of natural language.
Paginate list queries
To paginate your list query results, make a subsequent list query request with the nextToken and limit input variable set. The limit variable limits how many results are returned. The response will include a nextToken you can use to request the next page of data. A nextToken is a very long string that represents the cursor to the starting item of the next query made with these filters.
Copycode example
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

const {
  data: todos,
  nextToken, // Repeat this API call with the nextToken until the returned nextToken is `null`
  errors
} = await client.models.Todo.list({
  limit: 100, // default value is 100
  nextToken: 'eyJ2ZXJzaW9uejE1a2...' // previous nextToken
});
If you're building a React application, you can use the usePagination hook in Amplify UI to help with managing the pagination user experience.
Copycode example
import * as React from 'react';
import { Pagination } from '@aws-amplify/ui-react';

export const PaginationHasMorePagesExample = () => {
  const [pageTokens, setPageTokens] = React.useState([null]);
  const [currentPageIndex, setCurrentPageIndex] = React.useState(1);
  const [hasMorePages, setHasMorePages] = React.useState(true);

  const handleNextPage = async () => {
    if (hasMorePages && currentPageIndex === pageTokens.length) {
      const { data: todos, nextToken } = await client.models.Todo.list({
        nextToken: pageTokens[pageTokens.length - 1]
      });

      if (!nextToken) {
        setHasMorePages(false);
      }

      setPageTokens([...pageTokens, nextToken]);
    }

    setCurrentPageIndex(currentPageIndex + 1);
  };

  return (
    <Pagination
      currentPage={currentPageIndex}
      totalPages={pageTokens.length}
      hasMorePages={hasMorePages}
      onNext={handleNextPage}
      onPrevious={() => setCurrentPageIndex(currentPageIndex - 1)}
      onChange={(pageIndex) => setCurrentPageIndex(pageIndex)}
    />
  );
};
Limitations:
•	There is no API to get a total page count at this time. Note that scanning all items is a potentially expensive operation.
•	You cannot query by page number; you have to query by nextToken.
Fetch only the data you need with custom selection set
A business domain model may contain many models with numerous fields. However, apps typically only need subsets of the data or fields to meet the requirements of different components or screens. It is necessary to have a mechanism to retrieve subsets of models and their relationships. This mechanism would help optimize data usage for screens and components by only transferring needed data. Having this capability would improve the app's data efficiency, latency, and the end user's perceived performance.
A custom selection set allows consumers to specify, on a per-call basis, the fields the consumer wants to retrieve; this is possible for all operations that return data (CRUDL + observeQuery). The desired fields are specified in a strongly typed way (discoverable through IntelliSense) with a "dot notation".
Copycode example
// same way for all CRUDL: .create, .get, .update, .delete, .list, .observeQuery
const { data: blogWithSubsetOfData, errors } = await client.models.Blog.get(
  { id: blog.id },
  {
    selectionSet: ['author.email', 'posts.*'],
  }
);
TypeScript type helpers for Amplify Data
When using TypeScript, you frequently need to specify data model types for type generics. For instance, with React's useState, you provide a type in TypeScript to ensure type-safety in your component code using the state. Use the Schema["MODEL_NAME"]["type"] pattern to get TypeScript types for the shapes of data models returned from the backend API. This allows you to get consumable TypeScript types for the shapes of the data model return values coming from the backend API.
Copycode example
import { type Schema } from '@/amplify/data/resource';

type Post = Schema['Post']['type'];

const [posts, setPosts] = useState<Post[]>([]);
You can combine the Schema["MODEL_NAME"]["type"] type with the SelectionSet helper type to describe the return type of API requests using the selectionSet parameter:
Copycode example
import type { SelectionSet } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';


const selectionSet = ['content', 'blog.author.*', 'comments.*'] as const;
type PostWithComments = SelectionSet<Schema['Post']['type'], typeof selectionSet>;

// ...
const [posts, setPosts] = useState<PostWithComments[]>([]);

const fetchPosts = async () => {
  const { data: postsWithComments } = await client.models.Post.list({
    selectionSet,
  });
  setPosts(postsWithComments);
}
Cancel read requests
You can cancel any query API request by calling .cancel on the query request promise that's returned by .list(...) or .get(...).
Copycode example
const promise = client.models.Todo.list();
//  ^ Note: we're not awaiting the request, we're returning the promise

try {
  await promise;
} catch (error) {
  console.log(error);
  // If the error is because the request was cancelled you can confirm here.
  if (client.isCancelError(error)) {
    console.log(error.message); // "my message for cancellation"
    // handle user cancellation logic
  }
}
...

// To cancel the above request
client.cancel(promise, "my message for cancellation");
You need to ensure that the promise returned from .list() or .get() has not been modified. Typically, async functions wrap the promise being returned into another promise. For example, the following will not work:
Copycode example
async function makeAPICall() {
  return client.models.Todo.list();
}
const promise = makeAPICall();

// The following will NOT cancel the request.
client.cancel(promise, 'my error message');
Conclusion
Congratulations! You have finished the Read application data guide. In this guide, you learned how to read your data through get and list queries.
Subscribe to real-time events
In this guide, we will outline the benefits of enabling real-time data integrations and how to set up and filter these subscriptions. We will also cover how to unsubscribe from subscriptions.
Before you begin, you will need:
•	An application connected to the API
•	Data already created to modify
With Amplify Data Construct @aws-amplify/data-construct@1.8.4, an improvement was made to how relational field data is handled in subscriptions when different authorization rules apply to related models in a schema. The improvement redacts the values for the relational fields, displaying them as null or empty, to prevent unauthorized access to relational data.
This redaction occurs whenever it cannot be determined that the child model will be protected by the same permissions as the parent model.
Because subscriptions are tied to mutations and the selection set provided in the result of a mutation is then passed through to the subscription, relational fields in the result of mutations must be redacted.
If an authorized end-user needs access to the redacted relational fields, they should perform a query to read the relational data.
Additionally, subscriptions will inherit related authorization when relational fields are set as required. To better protect relational data, consider modifying the schema to use optional relational fields.
Set up a real-time list query
The recommended way to fetch a list of data is to use observeQuery to get a real-time list of your app data at all times. You can integrate observeQuery with React's useState and useEffect hooks in the following way:
Copycode example
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';

type Todo = Schema['Todo']['type'];

const client = generateClient<Schema>();

export default function MyComponent() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: ({ items, isSynced }) => {
        setTodos([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
  );
}
observeQuery fetches and paginates through all of your available data in the cloud. While data is syncing from the cloud, snapshots will contain all of the items synced so far and an isSynced status of false. When the sync process is complete, a snapshot will be emitted with all the records in the local store and an isSynced status of true.
Troubleshooting
Missing real-time events and model fields
    
    
    
    
    
Set up a real-time event subscription
Subscriptions is a feature that allows the server to send data to its clients when a specific event happens. For example, you can subscribe to an event when a new record is created, updated, or deleted through the API. Subscriptions are automatically available for any a.model() in your Amplify Data schema.
Copycode example
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';

const client = generateClient<Schema>();

// Subscribe to creation of Todo
const createSub = client.models.Todo.onCreate().subscribe({
  next: (data) => console.log(data),
  error: (error) => console.warn(error),
});

// Subscribe to update of Todo
const updateSub = client.models.Todo.onUpdate().subscribe({
  next: (data) => console.log(data),
  error: (error) => console.warn(error),
});

// Subscribe to deletion of Todo
const deleteSub = client.models.Todo.onDelete().subscribe({
  next: (data) => console.log(data),
  error: (error) => console.warn(error),
});

// Stop receiving data updates from the subscription
createSub.unsubscribe();
updateSub.unsubscribe();
deleteSub.unsubscribe();
Set up server-side subscription filters
Subscriptions take an optional filter argument to define service-side subscription filters:
Copycode example
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource';

const client = generateClient<Schema>();

const sub = client.models.Todo.onCreate({
  filter: {
    content: {
      contains: 'groceries',
    },
  },
}).subscribe({
  next: (data) => console.log(data),
  error: (error) => console.warn(error),
});
If you want to get all subscription events, don't specify any filter parameters.
Limitations:
•	Specifying an empty object {} as a filter is not recommended. Using {} as a filter might cause inconsistent behavior based on your data model's authorization rules.
•	If you're using dynamic group authorization and you authorize based on a single group per record, subscriptions are only supported if the user is part of five or fewer user groups.
•	Additionally, if you authorize by using an array of groups (groups: [String]),
o	subscriptions are only supported if the user is part of 20 or fewer groups
o	you can only authorize 20 or fewer user groups per record
Subscription connection status updates
Now that your application is set up and using subscriptions, you may want to know when the subscription is finally established, or reflect to your users when the subscription isn't healthy. You can monitor the connection state for changes through the Hub local eventing system.
Copycode example
import { CONNECTION_STATE_CHANGE, ConnectionState } from 'aws-amplify/data';
import { Hub } from 'aws-amplify/utils';

Hub.listen('api', (data: any) => {
  const { payload } = data;
  if (payload.event === CONNECTION_STATE_CHANGE) {
    const connectionState = payload.data.connectionState as ConnectionState;
    console.log(connectionState);
  }
});
Subscription connection states
•	Connected - Connected and working with no issues.
•	ConnectedPendingDisconnect - The connection has no active subscriptions and is disconnecting.
•	ConnectedPendingKeepAlive - The connection is open, but has missed expected keep-alive messages.
•	ConnectedPendingNetwork - The connection is open, but the network connection has been disrupted. When the network recovers, the connection will continue serving traffic.
•	Connecting - Attempting to connect.
•	ConnectionDisrupted - The connection is disrupted and the network is available.
•	ConnectionDisruptedPendingNetwork - The connection is disrupted and the network connection is unavailable.
•	Disconnected - Connection has no active subscriptions and is disconnecting.
Troubleshooting
Troubleshoot connection issues and automated reconnection
Unsubscribe from a subscription
You can also unsubscribe from events by using subscriptions by implementing the following:
Copycode example
// Stop receiving data updates from the subscription
sub.unsubscribe();
Conclusion
Congratulations! You have finished the Subscribe to real-time events guide. In this guide, you set up subscriptions for real-time events and learned how to filter and cancel these subscriptions when needed.

Customize your data model
Data modeling capabilities
Every data model is defined as part of a data schema (a.schema()). You can enhance your data model with various fields, customize their identifiers, apply authorization rules, or model relationships. Every data model (a.model()) automatically provides create, read, update, and delete API operations as well as real-time subscription events. Below is a quick tour of the many functionalities you can add to your data model:
Copycode example
import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a
  .schema({
    Customer: a
      .model({
        customerId: a.id().required(),
        // fields can be of various scalar types,
        // such as string, boolean, float, integers etc.
        name: a.string(),
        // fields can be of custom types
        location: a.customType({
          // fields can be required or optional
          lat: a.float().required(),
          long: a.float().required(),
        }),
        // fields can be enums
        engagementStage: a.enum(["PROSPECT", "INTERESTED", "PURCHASED"]),
        collectionId: a.id(),
        collection: a.belongsTo("Collection", "collectionId")
        // Use custom identifiers. By default, it uses an `id: a.id()` field
      })
      .identifier(["customerId"]),
    Collection: a
      .model({
        customers: a.hasMany("Customer", "collectionId"), // setup relationships between types
        tags: a.string().array(), // fields can be arrays
        representativeId: a.id().required(),
        // customize secondary indexes to optimize your query performance
      })
      .secondaryIndexes((index) => [index("representativeId")]),
  })
  .authorization((allow) => [allow.publicApiKey()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

Add fields to data model
Configure built-in and custom field types.

Modeling relationships
Learn about the types of model relationships and modeling relationships.

Customize data model identifiers
Define the primary key for a model using single-field or composite identifiers.

Customize secondary indexes
Define the secondary indexes for your data model to optimize query performance

Gen 1 schema support
If you are coming from Gen 1, you can continue to use the GraphQL Schema Definition Language (SDL) for defining your schema. However, we strongly recommend you use the TypeScript-first schema builder experience in your project as it provides type safety and is the recommended way of working with Amplify going forward.
Note: Some features available in Gen 1 GraphQL SDL are not available in Gen 2. See the feature matrix for features supported in Gen 2.
amplify/data/resource.ts
Copyamplify/data/resource.ts code example
import { defineData } from '@aws-amplify/backend';

const schema = /* GraphQL */`
  type Todo @model @auth(rules: [{ allow: owner }]) {
    content: String
    isDone: Boolean
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

Customize your auth rules
Use the .authorization() modifier to configure authorization rules for public, signed-in user, per user, and per user group data access. Authorization rules operate on the deny-by-default principle. Meaning that if an authorization rule is not specifically configured, it is denied.
Copycode example
const schema = a.schema({
  Post: a.model({
    content: a.string()
  }).authorization(allow => [
    // Allow anyone auth'd with an API key to read everyone's posts.
    allow.publicApiKey().to(['read']),
    // Allow signed-in user to create, read, update,
    // and delete their __OWN__ posts.
    allow.owner(),
  ])
})
In the example above, everyone (public) can read every Post but authenticated users (owner) can create, read, update, and delete their own posts. Amplify also allows you to restrict the allowed operations, combine multiple authorization rules, and apply fine-grained field-level authorization.
Available authorization strategies
Use the guide below to select the correct authorization strategy for your use case:
Recommended use case	Strategy	authMode
Public data access where users or devices are anonymous. Anyone with the AppSync API key is granted access.
publicApiKey	apiKey
Recommended for production environment's public data access. Public data access where unauthenticated users or devices are granted permissions using Amazon Cognito identity pool's role for unauthenticated identities.
guest	identityPool
Per user data access. Access is restricted to the "owner" of a record. Leverages amplify/auth/resource.ts Cognito user pool by default.
owner/ownerDefinedIn/ownersDefinedIn	userPool / oidc
Any signed-in data access. Unlike owner-based access, any signed-in user has access.
authenticated	userPool / oidc / identityPool
Per user group data access. A specific or dynamically configured group of users has access.
group/groupDefinedIn/groups/groupsDefinedIn	userPool / oidc
Define your own custom authorization rule within a serverless function.
custom	lambda
Understand how authorization rules are applied
Authorization rules can be applied globally across all data models in a schema, onto specific data models, and onto specific fields.
Amplify will always use the most specific authorization rule that is available. For example, if there is an authorization rule for a field and an authorization rule for the model that the field belongs to, Amplify will evaluate against the field-level authorization rule. Review Field-level authorization rules to learn more.
If there are multiple authorization rules present, they will be logically OR'ed. Review Configure multiple authorization rules to learn more. For userPools and oidc authorization modes, the rules are evaluated in the sequence authenticated > group(s) > owner(s)DefinedIn > group(s)DefinedIn.
Global authorization rule (only for getting started)
To help you get started, you can define an authorization rule on the data schema that will be applied to all data models that do not have a model-level authorization rule. Instead of having a global authorization rule for all production environments, we recommend creating specific authorization rules for each model or field.
The global authorization rule below uses allow.publicApiKey(). This example allows anyone to create, read, update, and delete and is applied to every data model.
Copycode example
const schema = a.schema({
  // Because no model-level authorization rule is present
  // this model will use the global authorization rule.
  Todo: a.model({
    content: a.string()
  }),

  // Will use model-level authorization rule
  Notes: a.model({
    content: a.string()
    // [Model-level authorization rule]
  }).authorization(allow => [allow.publicApiKey().to(['read'])])

// [Global authorization rule]
}).authorization(allow => [
  allow.publicApiKey()
])
Model-level authorization rules
Add an authorization rule to a model to apply the authorization rule to all fields of that model.
Copycode example
const schema = a.schema({
  Post: a.model({
    content: a.string(),
    createdBy: a.string()
    // [Model-level authorization rule]
    // All fields (content, createdBy) will be protected by
    // this authorization rule
  }).authorization(allow => [
    allow.publicApiKey().to(['read']),
    allow.owner(),
  ])
})
Field-level authorization rules
When an authorization rule is added to a field, it will strictly define the authorization rules applied on the field. Field-level authorization rules do not inherit model-level authorization rules. Meaning, only the specified field-level authorization rule is applied.
In the example below:
•	Owners are allowed to create, read, update, and delete Employee records they own
•	Any signed in user has read access and can read data with the exception of the ssn field
•	Only the ssn field has owner auth applied and this field-level auth rule means that model-level auth rules are not applied
Copycode example
const schema = a.schema({
  Employee: a.model({
    name: a.string(),
    email: a.string(),
    // [Field-level authorization rule]
    // This auth rule will be used for the "ssn" field
    // All other fields will use the model-level auth rule
    ssn: a.string().authorization(allow => [allow.owner()]),
  })

  // [Model-level authorization rule]
  .authorization(allow => [
    allow.authenticated().to(["read"]),
    allow.owner()
  ]),
});
Non-model authorization rules
Non-model types are any types added to the schema without using a.model(). These consist of modifiers such as a.customType(), a.enum(),a.query(), a.mutation(), or a.subscription().
Dynamic authorization rules such as allow.owner(), allow.ownerDefinedIn(), allow.groupDefinedIn() are not supported for non-model types.
Copycode example
const schema = a.schema({
  // ...
  listCustomType: a
    .query()
    .returns(a.ref("CustomType").array())
    .handler(
      a.handler.custom({
        entry: "./handler.js",
      })
    )
    .authorization((allow) => [
      // Static auth rules - Supported
      allow.guest(),
      allow.publicApiKey(),
      allow.authenticated(),
      allow.group("Admin"),
      allow.groups(["Teacher", "Student"]),

      // Dynamic auth rules - Not supported
      allow.owner(),
      allow.ownerDefinedIn("owner"),
      allow.ownersDefinedIn("otherOwners"),
      allow.groupDefinedIn("group"),
      allow.groupsDefinedIn("otherGroups"),
    ]),
});
There are TS warnings and validation checks in place that will cause a sandbox deployment to fail if unsupported auth rules are defined on custom queries and mutations.
Configure multiple authorization rules
When combining multiple authorization rules, they are "logically OR"-ed. In the following example:
•	Any user (using Amazon Cognito identity pool's unauthenticated roles) is allowed to read all posts
•	Owners are allowed to create, read, update, and delete their own posts
Copycode example
const schema = a.schema({
  Post: a.model({
    title: a.string(),
    content: a.string()
  }).authorization(allow => [
    allow.guest().to(["read"]),
    allow.owner()
  ])
})
On the client side, make sure to always authenticate with the corresponding authorization mode.
Copycode example
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '@/amplify/data/resource' // Path to your backend resource definition

const client = generateClient<Schema>()

// Creating a post is restricted to Cognito User Pools
const { data: newPostResult , errors } = await client.models.Post.create({
    query: queries.createPost,
    variables: { input: { title: 'Hello World' } },
    authMode: 'userPool',
});

// Listing posts is available to unauthenticated users (verified by Amazon Cognito identity pool's unauthenticated role)
const { data: listPostsResult , errors } = await client.models.Post.list({
    query: queries.listPosts,
    authMode: 'identityPool',
});
IAM authorization
All Amplify Gen 2 projects enable IAM authorization for data access. This ensures that the Amplify console's data manager will be able to access your API. It also allows you to authorize other administrative or machine-to-machine access using your own IAM policies. See the AWS AppSync Developer Guide for details on how AWS AppSync works with IAM.
Authorization on custom types
Authorization rules are only supported on data models (model-level and field-level) and custom operations (queries, mutations and subscriptions). They are not fully supported on custom types, including custom types returned by custom operations. For example, consider a custom query that returns a custom type:
Copycode example
const schema = a.schema({
  Counter: a.customType({
    value: a.integer(),
  })
  .authorization(...), // <-- not supported
  getCounter: a
    .mutation()
    .arguments({
      id: a.string().required(),
    })
    .returns(a.ref("Counter"))
    .handler(
      a.handler.custom({
        entry: "./getCounter.js",
      })
    )
    .authorization((allow) => [allow.authenticated()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema: schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
As you can see, the custom Counter type does not support the .authorization() modifier. Instead, behind the scenes, Amplify will add appropriate authorization rules to Counter to allow authenticated users to access it. That means that any signed-in user will be able to access the custom operation and all fields of the custom type.
Note: IAM authorization is not currently supported for custom operations that return custom types if defaultAuthorizationMode is not iam. See GitHub issue #2929 for details and suggested workarounds.
Add custom queries and mutations
The a.model() data model provides a solid foundation for querying, mutating, and fetching data. However, you may need additional customizations to meet specific requirements around custom API requests, response formatting, and/or fetching from external data sources.
In the following sections, we walk through the three steps to create a custom query or mutation:
1.	Define a custom query or mutation
2.	Configure custom business logic handler code
3.	Invoke the custom query or mutation
Step 1 - Define a custom query or mutation
Type	When to choose
Query	When the request only needs to read data and will not modify any backend data
Mutation	When the request will modify backend data
For every custom query or mutation, you need to set a return type and, optionally, arguments. Use a.query() or a.mutation() to define your custom query or mutation in your amplify/data/resource.ts file:
Custom queryCustom mutation
Copycode example
import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  // 1. Define your return type as a custom type
  EchoResponse: a.customType({
    content: a.string(),
    executionDuration: a.float()
  }),

  // 2. Define your query with the return type and, optionally, arguments
  echo: a
    .query()
    // arguments that this query accepts
    .arguments({
      content: a.string()
    })
    // return type of the query
    .returns(a.ref('EchoResponse'))
    // only allow signed-in users to call this API
    .authorization(allow => [allow.authenticated()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema
});
Step 2 - Configure custom business logic handler code
After your query or mutation is defined, you need to author your custom business logic. You can either define it in a function or using a custom resolver powered by AppSync JavaScript resolver.
FunctionCustom resolver powered by AppSync JavaScript resolvers
In your amplify/data/echo-handler/ folder, create a handler.ts file. You can import a utility type for your function handler via the Schema type from your backend resource. This gives you type-safe handler parameters and return values.
amplify/data/echo-handler/handler.ts
Copyamplify/data/echo-handler/handler.ts code example
import type { Schema } from '../resource'

export const handler: Schema["echo"]["functionHandler"] = async (event, context) => {
  const start = performance.now();
  return {
    content: `Echoing content: ${event.arguments.content}`,
    executionDuration: performance.now() - start
  };
};
In your amplify/data/resource.ts file, define the function using defineFunction and then reference the function with your query or mutation using a.handler.function() as a handler.
amplify/data/resource.ts
Copyamplify/data/resource.ts code example
import {
  type ClientSchema,
  a,
  defineData,
  defineFunction // 1.Import "defineFunction" to create new functions
} from '@aws-amplify/backend';

// 2. define a function
const echoHandler = defineFunction({
  entry: './echo-handler/handler.ts'
})

const schema = a.schema({
  EchoResponse: a.customType({
    content: a.string(),
    executionDuration: a.float()
  }),

  echo: a
    .query()
    .arguments({ content: a.string() })
    .returns(a.ref('EchoResponse'))
    .authorization(allow => [allow.publicApiKey()])
    // 3. set the function has the handler
    .handler(a.handler.function(echoHandler))
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30
    },
  },
});
All handlers must be of the same type. For example, you can't mix and match a.handler.function with a.handler.custom within a single .handler() modifier.
Step 3 - Invoke the custom query or mutation
From your generated Data client, you can find all your custom queries and mutations under the client.queries. and client.mutations. APIs respectively.
Custom queryCustom mutation
Copycode example
const { data, errors } = await client.queries.echo({
  content: 'hello world!!!'
});
Async function handlers
Async function handlers allow you to execute long-running operations asynchronously, improving the responsiveness of your API. This is particularly useful for tasks that don't require an immediate response, such as batch processing, putting messages in a queue, and initiating a generative AI model inference.
Usage
To define an async function handler, use the .async() method when defining your handler:
amplify/data/resource.ts
Copyamplify/data/resource.ts code example
const signUpForNewsletter = defineFunction({
  entry: './sign-up-for-newsletter/handler.ts'
});

const schema = a.schema({
  someAsyncOperation: a.mutation()
    .arguments({
      email: a.email().required()
    })
    .handler(a.handler.function(signUpForNewsletter).async())
    .authorization((allow) => allow.guest()),
})
Key Characteristics
1.	Single Return Type: Async handlers return a static type EventInvocationResponse and don't support specifying a return type. The .returns() method is not available for operations using async handlers.
2.	Fire and Forget: The client is informed whether the invocation was successfully queued, but doesn't receive data from the Lambda function execution.
3.	Pipeline Support: Async handlers can be used in function pipelines. If the final handler is an async function, the return type of the query or mutation is EventInvocationResponse.
Working with files/attachments
The Storage and GraphQL API categories can be used together to associate a file, such as an image or video, with a particular record. For example, you might create a User model with a profile picture, or a Post model with an associated image. With Amplify's GraphQL API and Storage categories, you can reference the file within the model itself to create an association.
Set up the project
Set up your project by following the instructions in the Quickstart guide.
Define the model
Open amplify/data/resource.ts and add the following model as shown below:
amplify/data/resource.ts
Copyamplify/data/resource.ts code example
import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Song: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      coverArtPath: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",

    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
Setup the Storage
Next, Let's configure Storage and allow access to all authenticated(signed in) users of your application. create a file amplify/storage/resource.ts and add the following code,This will restrict file access to only the signed-in user.
amplify/storage/resource.ts
Copyamplify/storage/resource.ts code example
import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplify-gen2-files",
  access: (allow) => ({
    "images/*": [allow.authenticated.to(["read", "write", "delete"])],
  }),
});
Configure the storage in the amplify/backend.ts file as demonstrated below:
amplify/backend.ts
Copyamplify/backend.ts code example
import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { storage } from "./storage/resource";

export const backend = defineBackend({
  auth,
  data,
  storage,
});
Configuring authorization
Your application needs authorization credentials for reading and writing to both Storage and the Data, except in the case where all data and files are intended to be publicly accessible.
The Storage and Data categories govern data access based on their own authorization patterns, meaning that it's necessary to configure appropriate auth roles for each individual category. Although both categories share the same access credentials set up through the Auth category, they work independently from one another. For instance, adding an allow.authenticated() to the Data does not guard against file access in the Storage category. Likewise, adding authorization rules to the Storage category does not guard against data access in the API.
When you configure Storage, Amplify will configure appropriate IAM policies on the bucket using a Cognito Identity Pool role. You will then have the option of adding CRUD (Create, Update, Read and Delete) based permissions as well, so that Authenticated and Guest users will be granted limited permissions within these levels. Even after adding this configuration, all Storage access is still guest by default. To guard against accidental public access, the Storage access levels must either be configured on the Storage object globally, or set within individual function calls. This guide uses the former approach, setting all Storage access to authenticated users.
The ability to independently configure authorization rules for each category allows for more granular control over data access, and adds greater flexibility. For scenarios where authorization patterns must be mixed and matched, configure the access level on individual Storage function calls. For example, you may want to use entity_id CRUD access on an individual Storage function call for files that should only be accessible by the owner (such as personal files), authenticated read access to allow all logged in users to view common files (such as images in a shared photo album), and guest read access to allow all users to view a file (such as a public profile picture).
For more details on how to configure Storage authorization levels, see the Storage documentation. For more on configuring Data authorization, see the API documentation.
Create a record with an associated file
You can create a record via the Amplify Data client, upload a file to Storage, and finally update the record to associate it with the uploaded file. Use the following example with the Amplify Data client and Amplify Storage library helpers, uploadData and getUrl, to create a record and associate it the file with the record.
The API record's id is prepended to the Storage file name to ensure uniqueness. If this is excluded, multiple API records could then be associated with the same file path unintentionally.
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import { uploadData, getUrl } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

// Create the API record:
const response = await client.models.Song.create({
  name: `My first song`,
});

const song = response.data;

if (!song) return;

// Upload the Storage file:
const result = await uploadData({
  path: `images/${song.id}-${file.name}`,
  data: file,
  options: {
    contentType: "image/png", // contentType is optional
  },
}).result;

// Add the file association to the record:
const updateResponse = await client.models.Song.update({
  id: song.id,
  coverArtPath: result?.path,
});

const updatedSong = updateResponse.data;

setCurrentSong(updatedSong);

// If the record has no associated file, we can return early.
if (!updatedSong.coverArtPath) return;

// Retrieve the file's signed URL:
const signedURL = await getUrl({ path: updatedSong.coverArtPath });
Add or update a file for an associated record
To associate a file with a record, update the record with the path returned by the Storage upload. The following example uploads the file using Storage, updates the record with the file's path, then retrieves the signed URL to download the image. If an image is already associated with the record, this will update the record with the new image.
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import { uploadData, getUrl } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

// Upload the Storage file:
const result = await uploadData({
  path: `images/${currentSong.id}-${file.name}`,
  data: file,
  options: {
    contentType: "image/png", // contentType is optional
  },
}).result;

// Add the file association to the record:
const response = await client.models.Song.update({
  id: currentSong.id,
  coverArtPath: result?.path,
});

const updatedSong = response.data;

setCurrentSong(updatedSong);

// If the record has no associated file, we can return early.
if (!updatedSong?.coverArtPath) return;

// Retrieve the file's signed URL:
const signedURL = await getUrl({ path: updatedSong.coverArtPath });
Query a record and retrieve the associated file
To retrieve the file associated with a record, first query the record, then use Storage to get the signed URL. The signed URL can then be used to download the file, display an image, etc:
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import { getUrl } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

const response = await client.models.Song.get({
  id: currentSong.id,
});

const song = response.data;

// If the record has no associated file, we can return early.
if (!song?.coverArtPath) return;

// Retrieve the signed URL:
const signedURL = await getUrl({ path: song.coverArtPath });
Delete and remove files associated with API records
There are three common deletion workflows when working with Storage files and the GraphQL API:
1.	Remove the file association, continue to persist both file and record.
2.	Remove the record association and delete the file.
3.	Delete both file and record.
Remove the file association, continue to persist both file and record
The following example removes the file association from the record, but does not delete the file from S3, nor the record from the database.
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

const response = await client.models.Song.get({
  id: currentSong.id,
});

const song = response.data;

// If the record has no associated file, we can return early.
if (!song?.coverArtPath) return;

const updatedSong = await client.models.Song.update({
  id: song.id,
  coverArtPath: null,
});
Remove the record association and delete the file
The following example removes the file from the record, then deletes the file from S3:
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import { remove } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});
const response = await client.models.Song.get({
  id: currentSong.id,
});
const song = response?.data;

// If the record has no associated file, we can return early.
if (!song?.coverArtPath) return;

// Remove associated file from record
const updatedSong = await client.models.Song.update({
  id: song.id,
  coverArtPath: null,
});

// Delete the file from S3:
await remove({ path: song.coverArtPath });
Delete both file and record
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import { remove } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});
const response = await client.models.Song.get({
  id: currentSong.id,
});

const song = response.data;

// If the record has no associated file, we can return early.
if (!song?.coverArtPath) return;

await remove({ path: song.coverArtPath });

// Delete the record from the API:
await client.models.Song.delete({ id: song.id });
Working with multiple files
You may want to add multiple files to a single record, such as a user profile with multiple images. To do this, you can add a list of file keys to the record. The following example adds a list of file keys to a record:
GraphQL schema to associate a data model with multiple files
Add the following model in `amplify/data/resource.ts" file.
amplify/data/resource.ts
Copyamplify/data/resource.ts code example
const schema = a.schema({
  PhotoAlbum: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      imagePaths: a.string().array(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});
CRUD operations when working with multiple files is the same as when working with a single file, with the exception that we are now working with a list of image keys, as opposed to a single image key.
Create a record with multiple associated files
First create a record via the GraphQL API, then upload the files to Storage, and finally add the associations between the record and files.
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import { uploadData, getUrl } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

// Create the API record:
const response = await client.models.PhotoAlbum.create({
  name: `My first photoAlbum`,
});

const photoAlbum = response.data.createPhotoAlbum;

if (!photoAlbum) return;

// Upload all files to Storage:
const imagePaths = await Promise.all(
  Array.from(e.target.files).map(async (file) => {
    const result = await uploadData({
      path: `images/${photoAlbum.id}-${file.name}`,
      data: file,
      options: {
        contentType: "image/png", // contentType is optional
      },
    }).result;

    return result.path;
  })
);

const updatePhotoAlbumDetails = {
  id: photoAlbum.id,
  imagePaths: imagePaths,
};

// Add the file association to the record:
const updateResponse = await client.graphql({
  query: mutations.updatePhotoAlbum,
  variables: { input: updatePhotoAlbumDetails },
});

const updatedPhotoAlbum = updateResponse.data.updatePhotoAlbum;

// If the record has no associated file, we can return early.
if (!updatedPhotoAlbum.imageKeys?.length) return;

// Retrieve signed urls for all files:
const signedUrls = await Promise.all(
  updatedPhotoAlbum?.imagePaths.map(
    async (path) => await getUrl({ path: path! })
  )
);
Add new files to an associated record
To associate additional files with a record, update the record with the paths returned by the Storage uploads.
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import { uploadData, getUrl } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

// Upload all files to Storage:
const newimagePaths = await Promise.all(
  Array.from(e.target.files).map(async (file) => {
    const result = await uploadData({
      path: `images/${currentPhotoAlbum.id}-${file.name}`,
      data: file,
      options: {
        contentType: "image/png", // contentType is optional
      },
    }).result;

    return result.path;
  })
);

// Query existing record to retrieve currently associated files:
const queriedResponse = await client.models.PhotoAlbum.get({
  id: currentPhotoAlbum.id,
});

const photoAlbum = queriedResponse.data;

if (!photoAlbum?.imagePaths) return;

// Merge existing and new file paths:
const updatedimagePaths = [...newimagePaths, ...photoAlbum.imagePaths];

// Update record with merged file associations:
const response = await client.models.PhotoAlbum.update({
  id: currentPhotoAlbum.id,
  imagePaths: updatedimagePaths,
});

const updatedPhotoAlbum = response.data;

// If the record has no associated file, we can return early.
if (!updatedPhotoAlbum?.imageKeys) return;

// Retrieve signed urls for merged image paths:
const signedUrls = await Promise.all(
  updatedPhotoAlbum?.imagePaths.map(
    async (path) => await getUrl({ path: path! })
  )
);
Update the file for an associated record
Updating a file for an associated record is the same as updating a file for a single file record, with the exception that you will need to update the list of file keys.
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import { uploadData, getUrl } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

// Upload new file to Storage:
const result = await uploadData({
  path: `images/${currentPhotoAlbum.id}-${file.name}`,
  data: file,
  options: {
    contentType: "image/png", // contentType is optional
  },
}).result;

const newFilePath = result.path;

// Query existing record to retrieve currently associated files:
const queriedResponse = await client.models.PhotoAlbum.get({
  id: currentPhotoAlbum.id,
});

const photoAlbum = queriedResponse.data;

if (!photoAlbum?.imagePaths?.length) return;

// Retrieve last image path:
const [lastImagePath] = photoAlbum.imagePaths.slice(-1);

// Remove last file association by path
const updatedimagePaths = [
  ...photoAlbum.imagePaths.filter((path) => path !== lastImagePath),
  newFilePath,
];

// Update record with updated file associations:
const response = await client.models.PhotoAlbum.update({
  id: currentPhotoAlbum.id,
  imagePaths: updatedimagePaths,
});

const updatedPhotoAlbum = response.data;

// If the record has no associated file, we can return early.
if (!updatedPhotoAlbum?.imagePaths) return;

// Retrieve signed urls for merged image paths:
const signedUrls = await Promise.all(
  updatedPhotoAlbum?.imagePaths.map(
    async (path) => await getUrl({ path: path! })
  )
);
Query a record and retrieve the associated files
To retrieve the files associated with a record, first query the record, then use Storage to retrieve all of the signed URLs.
src/App.tsx
Copysrc/App.tsx code example
async function getImagesForPhotoAlbum() {
import { generateClient } from "aws-amplify/api";
import { uploadData, getUrl } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

// Query the record to get the file paths:
const response = await client.models.PhotoAlbum.get({
  id: currentPhotoAlbum.id,
});

const photoAlbum = response.data;

// If the record has no associated files, we can return early.
if (!photoAlbum?.imagePaths) return;

// Retrieve the signed URLs for the associated images:
const signedUrls = await Promise.all(
  photoAlbum.imagePaths.map(async (imagePath) => {
    if (!imagePath) return;
    return await getUrl({ path: imagePath });
  })
);
}
Delete and remove files associated with API records
The workflow for deleting and removing files associated with API records is the same as when working with a single file, except that when performing a delete you will need to iterate over the list of file paths and call Storage.remove() for each file.
Remove the file association, continue to persist both files and record
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

const response = await client.models.PhotoAlbum.get({
  id: currentPhotoAlbum.id,
});

const photoAlbum = response.data;

// If the record has no associated file, we can return early.
if (!photoAlbum?.imagePaths) return;

const updatedPhotoAlbum = await client.models.PhotoAlbum.update({
  id: photoAlbum.id,
  imagePaths: null,
});
Remove the record association and delete the files
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import { remove } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

const response = await client.models.PhotoAlbum.get({
  id: currentPhotoAlbum.id,
});

const photoAlbum = response.data;

// If the record has no associated files, we can return early.
if (!photoAlbum?.imagePaths) return;

// Remove associated files from record
const updateResponse = await client.models.PhotoAlbum.update({
  id: photoAlbum.id,
  imagePaths: null, // Set the file association to `null`
});

const updatedPhotoAlbum = updateResponse.data;

// Delete the files from S3:
await Promise.all(
  photoAlbum?.imagePaths.map(async (imagePath) => {
    if (!imagePath) return;
    await remove({ path: imagePath });
  })
);
Delete record and all associated files
src/App.tsx
Copysrc/App.tsx code example
import { generateClient } from "aws-amplify/api";
import { remove } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

const response = await client.models.PhotoAlbum.get({
  id: currentPhotoAlbum.id,
});

const photoAlbum = response.data;

if (!photoAlbum) return;

await client.models.PhotoAlbum.delete({
  id: photoAlbum.id,
});

setCurrentPhotoAlbum(null);

// If the record has no associated file, we can return early.
if (!photoAlbum?.imagePaths) return;

await Promise.all(
  photoAlbum?.imagePaths.map(async (imagePath) => {
    if (!imagePath) return;
    await remove({ path: imagePath });
  })
);
Data consistency when working with records and files
The recommended access patterns in these docs attempt to remove deleted files, but favor leaving orphans over leaving records that point to non-existent files. This optimizes for read latency by ensuring clients rarely attempt to fetch a non-existent file from Storage. However, any app that deletes files can inherently cause records on-device to point to non-existent files.
One example is when we create an API record, associate the Storage file with that record, and then retrieve the file's signed URL. "Device A" calls the GraphQL API to create API_Record_1, and then associates that record with First_Photo. Before "Device A" is about to retrieve the signed URL, "Device B" might query API_Record_1, delete First_Photo, and update the record accordingly. However, "Device A" is still using the old API_Record_1, which is now out-of-date. Even though the shared global state is correctly in sync at every stage, the individual device ("Device A") has an out-of-date record that points to a non-existent file. Similar issues can conceivably occur for updates. Depending on your app, some of these mismatches can be minimized even more with real-time data / GraphQL subscriptions.
It is important to understand when these mismatches can occur and to add meaningful error handling around these cases. This guide does not include exhaustive error handling, real-time subscriptions, re-querying of outdated records, or attempts to retry failed operations. However, these are all important considerations for a production-level application.
Complete examples
Single File (TS)Multi-File (TS)
src/App.tsx
Copysrc/App.tsx code example
import "./App.css";
import { generateClient } from "aws-amplify/api";
import { uploadData, getUrl, remove } from "aws-amplify/storage";
import React, { useState } from "react";
import type { Schema } from "../amplify/data/resource";
import "@aws-amplify/ui-react/styles.css";
import {
  type WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

type Song = Schema["Song"]["type"];

function App({ signOut, user }: WithAuthenticatorProps) {

  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  // Used to display image for current song:
  const [currentImageUrl, setCurrentImageUrl] = useState<
    string | null | undefined
    >("");

  async function createSongWithImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0];
    try {

      // Create the API record:
      const response = await client.models.Song.create({
        name: `My first song`,
      });

      const song = response.data;

      if (!song) return;

      // Upload the Storage file:
      const result = await uploadData({
        path: `images/${song.id}-${file.name}`,
        data: file,
        options: {
          contentType: "image/png", // contentType is optional
        },
      }).result;

      // Add the file association to the record:
      const updateResponse = await client.models.Song.update({
        id: song.id,
        coverArtPath: result?.path,
      });

      const updatedSong = updateResponse.data;
      setCurrentSong(updatedSong);

      // If the record has no associated file, we can return early.
      if (!updatedSong?.coverArtPath) return;

      // Retrieve the file's signed URL:
      const signedURL = await getUrl({ path: updatedSong.coverArtPath });

      setCurrentImageUrl(signedURL.url.toString());
    } catch (error) {
      console.error("Error create song / file:", error);
    }
  }

  // Upload image, add to song, retrieve signed URL and retrieve the image.
  // Also updates image if one already exists.
  async function addNewImageToSong(e: React.ChangeEvent<HTMLInputElement>) {

    if (!currentSong) return;

    if (!e.target.files) return;

    const file = e.target.files[0];

    try {
      // Upload the Storage file:
      const result = await uploadData({
        path: `images/${currentSong.id}-${file.name}`,
        data: file,
        options: {
          contentType: "image/png", // contentType is optional
        },
      }).result;

      // Add the file association to the record:
      const response = await client.models.Song.update({
        id: currentSong.id,
        coverArtPath: result?.path,
      });

      const updatedSong = response.data;

      setCurrentSong(updatedSong);

      // If the record has no associated file, we can return early.
      if (!updatedSong?.coverArtPath) return;

      // Retrieve the file's signed URL:
      const signedURL = await getUrl({ path: updatedSong.coverArtPath });
      setCurrentImageUrl(signedURL.url.toString());

    } catch (error) {
      console.error("Error uploading image / adding image to song: ", error);
    }
  }

  async function getImageForCurrentSong() {
    if (!currentSong) return;

    try {
      // Query the record to get the file path:
      const response = await client.models.Song.get({
        id: currentSong.id,
      });

      const song = response.data;

      // If the record has no associated file, we can return early.
      if (!song?.coverArtPath) return;

      // Retrieve the signed URL:
      const signedURL = await getUrl({ path: song.coverArtPath });
      setCurrentImageUrl(signedURL.url.toString());
    } catch (error) {
      console.error("Error getting song / image:", error);
    }
  }

  // Remove the file association, continue to persist both file and record
  async function removeImageFromSong() {

    if (!currentSong) return;

    try {
      const response = await client.models.Song.get({
        id: currentSong.id,
      });

      const song = response.data;

      // If the record has no associated file, we can return early.
      if (!song?.coverArtPath) return;

      const updatedSong = await client.models.Song.update({
        id: song.id,
        coverArtPath: null,
      });

      // If successful, the response here will be `null`:
      setCurrentSong(updatedSong.data);

      setCurrentImageUrl(updatedSong.data?.coverArtPath);

    } catch (error) {
      console.error("Error removing image from song: ", error);
    }
  }

  // Remove the record association and delete the file
  async function deleteImageForCurrentSong() {

    if (!currentSong) return;

    try {
      const response = await client.models.Song.get({
        id: currentSong.id,
      });

      const song = response?.data;

      // If the record has no associated file, we can return early.
      if (!song?.coverArtPath) return;

      // Remove associated file from record
      const updatedSong = await client.models.Song.update({
        id: song.id,
        coverArtPath: null,
      });

      // Delete the file from S3:
      await remove({ path: song.coverArtPath });

      // If successful, the response here will be `null`:
      setCurrentSong(updatedSong.data);

      setCurrentImageUrl(updatedSong.data?.coverArtPath);

    } catch (error) {
      console.error("Error deleting image: ", error);
    }
  }

  // Delete both file and record
  async function deleteCurrentSongAndImage() {

    if (!currentSong) return;
    try {
      const response = await client.models.Song.get({
        id: currentSong.id,
      });
      const song = response.data;

      // If the record has no associated file, we can return early.
      if (!song?.coverArtPath) return;

      await remove({ path: song.coverArtPath });

      // Delete the record from the API:
      await client.models.Song.delete({ id: song.id });

      clearLocalState();

    } catch (error) {
      console.error("Error deleting song: ", error);
    }
  }

  function clearLocalState() {
    setCurrentSong(null);
    setCurrentImageUrl("");
  }

  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <div>
        <label>
          <h2>{`Current Song: ${currentSong?.id}`}</h2>
          Create song with file:
          <input id="name" type="file" onChange={createSongWithImage} />
        </label>
        <label>
          Add / update song image:
          <input
            id="name"
            type="file"
            onChange={addNewImageToSong}
            disabled={!currentSong}
          />
        </label>
        <button
          onClick={getImageForCurrentSong}
          disabled={!currentSong || !currentImageUrl}
        >
          Get image for current song
        </button>
        <button
          onClick={removeImageFromSong}
          disabled={!currentSong || !currentImageUrl}
        >
          Remove image from current song (does not delete image)
        </button>
        <button
          onClick={deleteImageForCurrentSong}
          disabled={!currentSong || !currentImageUrl}
        >
          Remove image from current song, then delete image
        </button>
        <button onClick={deleteCurrentSongAndImage} disabled={!currentSong}>
          Delete current song (and image, if it exists)
        </button>
        <button onClick={signOut} className="app-button">
          Sign out
        </button>
      </div>
    </>
  );
}

export default withAuthenticator(App);
Add custom real-time subscriptions
Create a custom real-time subscription for any mutation to enable PubSub use cases.
Define a custom subscription
For every custom subscription, you need to set:
1.	the mutation(s) that should trigger a subscription event,
2.	a return type that matches the subscribed mutations' return type,
3.	authorization rules.
Optionally, you can set filter arguments to customize the server-side subscription filter rules.
Use a.subscription() to define your custom subscription in your amplify/data/resource.ts file:
amplify/data/resource.ts
import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  // Message type that's used for this PubSub sample
  Message: a.customType({
    content: a.string().required(),
    channelName: a.string().required()
  }),

  // Message publish mutation
  publish: a.mutation()
    .arguments({
      channelName: a.string().required(),
      content: a.string().required()
    })
    .returns(a.ref('Message'))
    .handler(a.handler.custom({ entry: './publish.js' }))
    .authorization(allow => [allow.publicApiKey()]),

Copyhighlighted code example
  // Subscribe to incoming messages
  receive: a.subscription()
    // subscribes to the 'publish' mutation
    .for(a.ref('publish')) 
    // subscription handler to set custom filters
    .handler(a.handler.custom({entry: './receive.js'})) 
    // authorization rules as to who can subscribe to the data
    .authorization(allow => [allow.publicApiKey()]),

  // A data model to manage channels
  Channel: a.model({
    name: a.string(),
  }).authorization(allow => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema
});
For this example, we're building a generic PubSub capability. This requires us to convert the arguments for publish into the Channel's format. Create a new publish.js file in your amplify/data/ folder with the following contents:
amplify/data/publish.js
Copyamplify/data/publish.js code example
// This handler simply passes through the arguments of the mutation through as the result
export function request() {
  return {}
}

/**
 * @param {import('@aws-appsync/utils').Context} ctx
 */
export function response(ctx) {
  return ctx.args
}
Next, create a new receive.js file in your amplify/data/ folder to define handlers for your subscription. In this case, it'll just be a simple passthrough. In the next section, we'll explore how to use this handler to construct more advanced subscription filters.
Note: We're planning a developer experience enhancement in the near future that'll create this passthrough under the hood.
amplify/data/receive.js
Copyamplify/data/receive.js code example
export function request() {
  return {};
}

export const response = (ctx) => {
  return ctx.result;
};
Subscribe to custom subscriptions client-side
From your generated Data client, you can find all your custom subscriptions under client.subscriptions. Subscribe using the .subscribe() function and then use the next function to handle incoming events.
Copycode example
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../amplify/data/resource'

const client = generateClient<Schema>()

const sub = client.subscriptions.receive()
  .subscribe({
    next: event => {
      console.log(event)
    }
  }
)
You can try publishing an event using the custom mutation to test the real-time subscription.
Copycode example
client.mutations.publish({
  channelName: "world",
  content: "My first message!"
})
Your subscription event should be received and logs the payload into your app's developer console. Unsubscribe your subscription to disconnect using the unsubscribe() function.
Copycode example
sub.unsubscribe()
(Optionally) Add server-side subscription filters
You can add subscription filters by adding arguments to the custom subscriptions.
If you want to customize the filters, modify the subscription handler. For this example, we'll allow a customer to pass in a namePrefix parameter that allows the end users to only receive channel events in channels that start with the namePrefix.
amplify/data/resource.ts
import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Channel: a.model({
    name: a.string(),
  }).authorization(allow => [allow.publicApiKey()]),

  Message: a.customType({
    content: a.string().required(),
    channelName: a.string().required()
  }),

  publish: a.mutation()
    .arguments({
      channelName: a.string().required(),
      content: a.string().required()
    })
    .returns(a.ref('Message'))
    .handler(a.handler.custom({ entry: './publish.js' }))
    .authorization(allow => [allow.publicApiKey()]),

  receive: a.subscription()
    .for(a.ref('publish'))
Copyhighlighted code example
    .arguments({ namePrefix: a.string() })
    .handler(a.handler.custom({entry: './receive.js'}))
    .authorization(allow => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema
});
In your handler, you can set custom subscription filters based on arguments passed into the custom subscription. For this example, create a new receive.js file alongside the amplify/data/resource.ts file:
Copycode example
import { util, extensions } from "@aws-appsync/utils"

// Subscription handlers must return a `null` payload on the request
export function request() { return { payload: null } }

/**
 * @param {import('@aws-appsync/utils').Context} ctx
 */
export function response(ctx) {
  const filter = {
    channelName: {
      beginsWith: ctx.args.namePrefix
    }
  }

  extensions.setSubscriptionFilter(util.transform.toSubscriptionFilter(filter))

  return null
}




Connect your app to existing MySQL and PostgreSQL database
Amplify's native integration supports any MySQL or Postgres database, no matter if they're hosted on AWS within a VPC or outside of AWS with a 3rd party hosted database provider.
You must create a connection string using the following database information to get started:
•	Database hostname
•	Database port
•	Database username
•	Database user password
•	Database name
Step 1 - Set secrets for database connection
First, provide all the database connection information as secrets, you can use the Amplify sandbox's secret functionality to set them or go to the Amplify console to set secrets in a shared environment:
Copycode example
npx ampx sandbox secret set SQL_CONNECTION_STRING
MySQLPostgreSQL
Connection string format for MySQL
mysql://user:password@hostname:port/db-name
Step 2 - Generate TypeScript representation of your database schema
Run the following command to generate the Data schema with your database connection information. It'll infer an a.model() representation for all database tables that have primary key specified.
Copycode example
npx ampx generate schema-from-database --connection-uri-secret SQL_CONNECTION_STRING --out amplify/data/schema.sql.ts
Info
Connecting to a database behind the VPC
1.	
2.	
Info
Handling of implicit fields (id, createdAt, updatedAt)
Learn more
RDS Proxy for improved connectivity
Connecting to a database with a custom SSL certificate
This creates a new schema.sql.ts with a schema reflecting the types of your database. Do not edit the schema.sql.ts file directly. Import the schema to your amplify/data/resource.ts file and apply any additive changes there. This ensures that you can continuously regenerate the TypeScript schema representation of your SQL database without losing any additive changes that you apply out-of-band.
import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
Copyhighlighted code example
import { schema as generatedSqlSchema } from './schema.sql';

// Add a global authorization rule
const sqlSchema = generatedSqlSchema.authorization(allow => allow.guest())

// Relational database sources can coexist with DynamoDB tables managed by Amplify.
const schema = a.schema({
  Todo: a.model({
    content: a.string(),
  }).authorization(allow => [allow.guest()])
});

// Use the a.combine() operator to stitch together the models backed by DynamoDB
// and the models backed by Postgres or MySQL databases.
Copyhighlighted code example
const combinedSchema = a.combine([schema, sqlSchema]);

// Don't forget to update your client types to take into account the types from
// both schemas.
Copyhighlighted code example
export type Schema = ClientSchema<typeof combinedSchema>;

export const data = defineData({
  // Update the data definition to use the combined schema, instead of just
  // your DynamoDB-backed schema
Copyhighlighted code example
  schema: combinedSchema
});
Step 3 - Fine-grained authorization rules
Use the .setAuthorization() modifier to set model-level and field-level authorization rules for the SQL-backed data models. Review Customize your auth rules for detailed authorization rule options.
// Add an authorization rule to the schema
Copyhighlighted code example
const sqlSchema = generatedSqlSchema.setAuthorization((models) => [
  // Model-level authorization rules
  models.event.authorization((allow) => [allow.publicApiKey()]),
  // Field-level authorization rules
  models.event.fields.id.authorization(allow => [allow.publicApiKey(), allow.guest()]),
  models.event.fields.created_at.authorization(allow => [allow.publicApiKey(), allow.guest()])
]);
Step 4 - Deploy your Data resources using the cloud sandbox
Finally, you can now validate your Data resources with your cloud sandbox:
Copycode example
npx ampx sandbox
On the client side, you can now make create, read, update, delete, and subscribe to your SQL-backed data models:
Copycode example
const { data: events } = await client.models.event.list()
Step 5 - Configuring database connection for production
When deploying your app to production, you need to add the database connection string as a secret. Make sure to add the appropriate database connection string with the same secret name you used in the sandbox environment. For example, we used SQL_CONNECTION_STRING above.
Rename generated models and fields
To improve the ergonomics of your API, you might want to rename the generate fields or types to better accommodate your use case. Use the renameModels() and renameModelFields() modifiers to rename the auto-inferred data models and their fields.
// Rename models or fields to be more idiomatic for frontend code
const sqlSchema = generatedSqlSchema.authorization(allow => allow.guest())
Copyhighlighted code example
  .renameModels(() => [
    //⌄⌄⌄⌄⌄ existing model name based on table name
    ['event', 'Event']
    //        ^^^^^^ renamed data model name
  ])
Add relationships between tables
const sqlSchema = generatedSqlSchema
  .authorization(allow => allow.guest())
Copyhighlighted code example
  .setRelationships((models) => [
    models.Note.relationships({
      comments: a.hasMany("Comment", "note_id"),
    }),
    models.Comment.relationships({
      note: a.belongsTo("Note", "note_id")
    })
  ]);
Add custom queries, mutations, subscriptions auto-generated SQL data schema
Use the .addToSchema(...) to add in additional queries, mutations, and subscriptions to your auto-generated SQL data schema.
Note: you can't add additional data models via a.model(). They should be exclusively generated via npx ampx generate schema-from-database.
Use an inline SQL statement as a query or mutation handler
// Add custom mutations or queries that execute SQL statements
const sqlSchema = generatedSqlSchema.authorization(allow => allow.guest())
Copyhighlighted code example
  .addToSchema({
    listEventsWithDecodedLatLong: a.query()
      // reference custom types added to the schema
      .returns(a.ref("EventWithDecodedCoord").array())
      .handler(a.handler.inlineSql(
          `SELECT
            id,
            name,
            address,
            ST_X(geom) AS longitude,
            ST_Y(geom) AS latitude
          FROM locations;`
      ))
      .authorization(allow => [allow.guest()]),

      // Define custom types to provide end-to-end typed results
      // for custom queries / mutations
      EventWithDecodedCoord: a.customType({
        id: a.integer(),
        name: a.string(),
        address: a.string(),
        longitude: a.float(),
        latitude: a.float(),
      })
  })
Reference an existing SQL file as a query or mutation handler
You can define the different SQL handlers in separate .sql files and reference them in your custom queries / mutations.
First, configure the custom query or mutation in your amplify/data/resource.ts file:
const sqlSchema = generatedSqlSchema.authorization(allow => allow.guest())
  .addToSchema({
    createNewLocationWithLongLat: a.mutation()
      .arguments({
        lat: a.float().required(),
        long: a.float().required(),
        name: a.string().required(),
        address: a.string().required()
      })
      .returns(a.json().array())
      .authorization(allow => allow.authenticated())
Copyhighlighted code example
      .handler(a.handler.sqlReference('./createNewLocationWithLongLat.sql'))
  })
Next, add a corresponding sql file to handle the request:
MySQLPostgreSQL
createNewLocationWithLongLat.sql
CopycreateNewLocationWithLongLat.sql code example
INSERT INTO locations (name, address, geom)
VALUES (:name, :address, ST_GEOMFROMTEXT(CONCAT('POINT (', :long, ' ', :lat, ')'), 4326));
The return type for custom queries and mutations expecting to return row data from SQL statements must be an array of the corresponding model. This is true even for custom get queries, where a single row is expected.
Example
getPostBySlug: a
  .query()
  .arguments({
    slug: a.string().required(),
  })
Copyhighlighted code example
  .returns(a.ref("Post").array())
  .handler(
    a.handler.inlineSql(`
    SELECT id, title, slug, content, created_at, updated_at
    FROM posts
    WHERE slug = :slug;
    `)
  )
How does it work?
The Amplify uses AWS Lambda functions to enable features like querying data from your database. To work properly, these Lambda functions need access to common logic and dependencies.
Amplify provides this shared code in the form of Lambda Layers. You can think of Lambda Layers as a package of reusable runtime code that Lambda functions can reference.
When you deploy an Amplify API, it will create two Lambda functions:
SQL Lambda
This allows you to query and write data to your database from your API.
NOTE: If the database is in a VPC, this Lambda function will be deployed in the same VPC as the database. The usage of Amazon Virtual Private Cloud (VPC) or VPC peering, with AWS Lambda functions will incur additional charges as explained, this comes with an additional cost as explained on the Amazon Elastic Compute Cloud (EC2) on-demand pricing page.
Updater Lambda
This automatically keeps the SQL Lambda up-to-date by managing its Lambda Layers.
A Lambda layer that includes all the core SQL connection logic lives within the AWS Amplify service account but is executed within your AWS account, when invoked by the SQL Lambda. This allows the Amplify service team to own the ongoing maintenance and security enhancements of the SQL connection logic.
This allows the Amplify team to maintain and enhance the SQL Layer without needing direct access to your Lambdas. If updates to the Layer are needed, the Updater Lambda will receive a signal from Amplify and automatically update the SQL Lambda with the latest Layer.
Mapping of SQL data types to field types for auto-generated schema
Note: MySQL does not support time zone offsets in date time or timestamp fields. Instead, we will convert these values to datetime, without the offset. Unlike MySQL, PostgreSQL does support date time or timestamp values with an offset.
SQL	Mapped field types
String	
char	a.string()
varchar	a.string()
tinytext	a.string()
text	a.string()
mediumtext	a.string()
longtext	a.string()
Geometry	
geometry	a.string()
point	a.string()
linestring	a.string()
geometryCollection	a.string()
Numeric	
smallint	a.integer()
mediumint	a.integer()
int	a.integer()
integer	a.integer()
bigint	a.integer()
tinyint	a.integer()
float	a.float()
double	a.float()
decimal	a.float()
dec	a.float()
numeric	a.float()
Date and Time	
date	a.date()
datetime	a.datetime()
timestamp	a.datetime()
time	a.time()
year	a.integer()
Binary	
binary	a.string()
varbinary	a.string()
tinyblob	a.string()
blob	a.string()
mediumblob	a.string()
longblob	a.string()
Others	
bool	a.boolean()
boolean	a.boolean()
bit	a.integer()
json	a.json()
enum	a.enum()
Troubleshooting
Debug Mode
To return the actual SQL error instead of a generic error from underlying API responses, an environment variable DEBUG_MODE can be set to true on the Amplify-generated SQL Lambda function. You can find this Lambda function in the AWS Lambda console with the naming convention of: <stack-name>-<api-name>-SQLLambdaFunction<hash>.
My SQL table doesn't get generated when running npx ampx generate schema-from-database
This is likely because the table doesn't have a designated primary key. A primary key is required for npx ampx generate schema-from-database to infer the table structure and create a create, read, update, and delete API.

NEXT
Connect to e

Connect to external Amazon DynamoDB data sources
The a.model() data model allows you to define a GraphQL schema for an AWS AppSync API where models are backed by DynamoDB Tables managed by Amplify. The generated schema also provides queries and mutations to the Amplify Data client. However, you may want to connect to an external DynamoDB table and execute custom business logic against it instead.
Using an external DynamoDB table as a data source may be useful if you need to leverage patterns such as single table design.
In the following sections, we walk through the steps to add and use an external DynamoDB table as a data source for your API:
1.	Set up your Amazon DynamoDB table
2.	Add your Amazon DynamoDB table as a data source
3.	Define custom queries and mutations
4.	Configure custom business logic handler code
5.	Invoke custom queries or mutations
Step 1 - Set up your Amazon DynamoDB table
For the purpose of this guide we will define a Post type and create an external DynamoDB table that will store records for it. In Amplify Gen 2, customType adds a type to the schema that is not backed by an Amplify-generated DynamoDB table.
With the Post type defined, it can then be referenced as the return type when defining your custom queries and mutations.
First, add the Post custom type to your schema:
amplify/data/resource.ts
import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization(allow => [allow.publicApiKey()]),
Copyhighlighted code example
  Post: a.customType({
    id: a.id().required(),
    author: a.string().required(),
    title: a.string(),
    content: a.string(),
    url: a.string(),
    ups: a.integer(),
    downs: a.integer(),
    version: a.integer(),
  }),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
NOTE: To comply with the GraphQL spec, at least one query is required for a schema to be valid. Otherwise, deployments will fail with a schema error. The Amplify Data schema is auto-generated with a Todo model and corresponding queries under the hood. You can leave the Todo model in the schema until you add the first custom query to the schema in the next steps.
Once the deployment successfully completes, navigate to the AppSync console and select your Amplify-generated API. Follow these steps to create a new DynamoDB table:
1.	On the Schema page, choose Create Resources.
 
2.	Choose Use existing type, then choose the Post type.
 
3.	Set the Primary key to id and the Sort key to None.
4.	Disable Automatically generate GraphQL. In this example, we'll create the resolver ourselves.
 
5.	Choose Create.
You now have a new DynamoDB table named PostTable, which you can see by visiting Data sources in the side tab. You will use this table as the data source for your custom queries and mutations to your Amazon DynamoDB table.
 
Step 2 - Add your Amazon DynamoDB table as a data source
In your amplify/backend.ts file, add your DynamoDB table as a data source for your API:
amplify/backend.ts
import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { aws_dynamodb } from "aws-cdk-lib";

export const backend = defineBackend({
  auth,
  data,
});

Copyhighlighted code example
const externalDataSourcesStack = backend.createStack("MyExternalDataSources");

const externalTable = aws_dynamodb.Table.fromTableName(
  externalDataSourcesStack,
  "MyExternalPostTable",
  "PostTable"
);

backend.data.addDynamoDbDataSource(
  "ExternalPostTableDataSource",
  externalTable
);
Step 3 - Define custom queries and mutations
Now that your DynamoDB table has been added as a data source, you can reference it in custom queries and mutations using the a.handler.custom() modifier which accepts the name of the data source and an entry point for your resolvers.
Use the following code examples to add addPost, getPost, updatePost, and deletePost as custom queries and mutations to your schema:
addPostgetPostupdatePostdeletePost
amplify/data/resource.ts
import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Post: a.customType({
    author: a.string().required(),
    title: a.string(),
    content: a.string(),
    url: a.string(),
    ups: a.integer(),
    downs: a.integer(),
    version: a.integer(),
  }),
Copyhighlighted code example
  addPost: a
    .mutation()
    .arguments({
      id: a.id(),
      author: a.string().required(),
      title: a.string(),
      content: a.string(),
      url: a.string(),
    })
    .returns(a.ref("Post"))
    .authorization(allow => [allow.publicApiKey()])
    .handler(
      a.handler.custom({
        dataSource: "ExternalPostTableDataSource",
        entry: "./addPost.js",
      })
    ),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
Step 4 - Configure custom business logic handler code
Next, create the following files in your amplify/data folder and use the code examples to define custom resolvers for the custom queries and mutations added to your schema from the previous step. These are AppSync JavaScript resolvers
addPostgetPostupdatePostdeletePost
amplify/data/addPost.js
Copyamplify/data/addPost.js code example
import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const item = { ...ctx.arguments, ups: 1, downs: 0, version: 1 };
  const key = { id: ctx.args.id ?? util.autoId() };
  return ddb.put({ key, item });
}

export function response(ctx) {
  return ctx.result;
}
Step 5 - Invoke custom queries or mutations
From your generated Data client, you can find all your custom queries and mutations under the client.queries. and client.mutations. APIs respectively.
addPostgetPostupdatePostdeletePost
App.tsx
CopyApp.tsx code example
const { data, errors } = await client.mutations.addPost({
  title: "My Post",
  content: "My Content",
  author: "Chris",
});
Conclusion
In this guide, you’ve added an external DynamoDB table as a data source to an Amplify GraphQL API and defined custom queries and mutations, handled by AppSync JS resolvers, to manipulate Post items in an external DynamoDB table using the Amplify Gen 2 Data client.
To clean up, you can delete your sandbox by accepting the prompt when terminating the sandbox process in your terminal. Alternatively, you can also use the AWS Amplify console to manage and delete sandbox environments.
To delete your external DynamoDB table, you can navigate to the AppSync console and click on the name of the table in the data sources list. This takes you to the DynamoDB console where you can delete the table.
All DynamoDB operations & example resolvers
GetItem
Reference - The GetItem request lets you tell the AWS AppSync DynamoDB function to make a GetItem request to DynamoDB, and enables you to specify:
•	The key of the item in DynamoDB
•	Whether to use a consistent read or not
Example:
Copycode example
export function request(ctx) {
  const { foo, bar } = ctx.args;
  return {
    operation: 'GetItem',
    key: util.dynamodb.toMapValues({ foo, bar }),
    consistentRead: true
  };
}
PutItem
PutItem - The PutItem request mapping document lets you tell the AWS AppSync DynamoDB function to make a PutItem request to DynamoDB, and enables you to specify the following:
•	The key of the item in DynamoDB
•	The full contents of the item (composed of key and attributeValues)
•	Conditions for the operation to succeed
Example:
Copycode example
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { foo, bar, ...values } = ctx.args;
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues({ foo, bar }),
    attributeValues: util.dynamodb.toMapValues(values)
  };
}
UpdateItem
UpdateItem - The UpdateItem request enables you to tell the AWS AppSync DynamoDB function to make a UpdateItem request to DynamoDB and allows you to specify the following:
•	The key of the item in DynamoDB
•	An update expression describing how to update the item in DynamoDB
•	Conditions for the operation to succeed
Example:
Copycode example
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { id } = ctx.args;
  return {
    operation: 'UpdateItem',
    key: util.dynamodb.toMapValues({ id }),
    update: {
      expression: 'ADD #voteField :plusOne, version :plusOne',
      expressionNames: { '#voteField': 'upvotes' },
      expressionValues: { ':plusOne': { N: 1 } }
    }
  };
}
DeleteItem
DeleteItem - The DeleteItem request lets you tell the AWS AppSync DynamoDB function to make a DeleteItem request to DynamoDB, and enables you to specify the following:
•	The key of the item in DynamoDB
•	Conditions for the operation to succeed
Example:
Copycode example
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  return {
    operation: 'DeleteItem',
    key: util.dynamodb.toMapValues({ id: ctx.args.id })
  };
}
Query
Query - The Query request object lets you tell the AWS AppSync DynamoDB resolver to make a Query request to DynamoDB, and enables you to specify the following:
•	Key expression
•	Which index to use
•	Any additional filter
•	How many items to return
•	Whether to use consistent reads
•	query direction (forward or backward)
•	Pagination token
Example:
Copycode example
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { owner } = ctx.args;
  return {
    operation: 'Query',
    query: {
      expression: 'ownerId = :ownerId',
      expressionValues: util.dynamodb.toMapValues({ ':ownerId': owner })
    },
    index: 'owner-index'
  };
}
Scan
Scan - The Scan request lets you tell the AWS AppSync DynamoDB function to make a Scan request to DynamoDB, and enables you to specify the following:
•	A filter to exclude results
•	Which index to use
•	How many items to return
•	Whether to use consistent reads
•	Pagination token
•	Parallel scans
Example:
Copycode example
export function request(ctx) {
  return { operation: 'Scan' };
}
Sync
Sync - The Sync request object lets you retrieve all the results from a DynamoDB table and then receive only the data altered since your last query (the delta updates). Sync requests can only be made to versioned DynamoDB data sources. You can specify the following:
•	A filter to exclude results
•	How many items to return
•	Pagination Token
•	When your last Sync operation was started
Example:
Copycode example
export function request(ctx) {
  const { nextToken, lastSync } = ctx.args;
  return { operation: 'Sync', limit: 100, nextToken, lastSync };
}
BatchGetItem
BatchGetItem - The BatchGetItem request object lets you tell the AWS AppSync DynamoDB function to make a BatchGetItem request to DynamoDB to retrieve multiple items, potentially across multiple tables. For this request object, you must specify the following:
•	The table names where to retrieve the items from
•	The keys of the items to retrieve from each table
The DynamoDB BatchGetItem limits apply and no condition expression can be provided.
Example:
Copycode example
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { authorId, postId } = ctx.args;
  return {
    operation: 'BatchGetItem',
    tables: {
      authors: [util.dynamodb.toMapValues({ authorId })],
      posts: [util.dynamodb.toMapValues({ authorId, postId })],
    },
  };
}
BatchDeleteItem
BatchDeleteItem - The BatchDeleteItem request object lets you tell the AWS AppSync DynamoDB function to make a BatchWriteItem request to DynamoDB to delete multiple items, potentially across multiple tables. For this request object, you must specify the following:
•	The table names where to delete the items from
•	The keys of the items to delete from each table
The DynamoDB BatchWriteItem limits apply and no condition expression can be provided.
Example:
Copycode example
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { authorId, postId } = ctx.args;
  return {
    operation: 'BatchDeleteItem',
    tables: {
      authors: [util.dynamodb.toMapValues({ authorId })],
      posts: [util.dynamodb.toMapValues({ authorId, postId })],
    },
  };
}
BatchPutItem
BatchPutItem - The BatchPutItem request object lets you tell the AWS AppSync DynamoDB function to make a BatchWriteItem request to DynamoDB to put multiple items, potentially across multiple tables. For this request object, you must specify the following:
•	The table names where to put the items in
•	The full items to put in each table
The DynamoDB BatchWriteItem limits apply and no condition expression can be provided.
Example:
Copycode example
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { authorId, postId, name, title } = ctx.args;
  return {
    operation: 'BatchPutItem',
    tables: {
      authors: [util.dynamodb.toMapValues({ authorId, name })],
      posts: [util.dynamodb.toMapValues({ authorId, postId, title })],
    },
  };
}
TransactGetItems
TransactGetItems - The TransactGetItems request object lets you to tell the AWS AppSync DynamoDB function to make a TransactGetItems request to DynamoDB to retrieve multiple items, potentially across multiple tables. For this request object, you must specify the following:
•	The table name of each request item where to retrieve the item from
•	The key of each request item to retrieve from each table
The DynamoDB TransactGetItems limits apply and no condition expression can be provided.
Example:
Copycode example
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { authorId, postId } = ctx.args;
  return {
    operation: 'TransactGetItems',
    transactItems: [
      {
        table: 'posts',
        key: util.dynamodb.toMapValues({ postId }),
      },
      {
        table: 'authors',
        key: util.dynamodb.toMapValues({ authorId }),
      },
    ],
  };
}
TransactWriteItems
TransactWriteItems - The TransactWriteItems request object lets you tell the AWS AppSync DynamoDB function to make a TransactWriteItems request to DynamoDB to write multiple items, potentially to multiple tables. For this request object, you must specify the following:
•	The destination table name of each request item
•	The operation of each request item to perform. There are four types of operations that are supported: PutItem, UpdateItem, DeleteItem, and ConditionCheck
•	The key of each request item to write
The DynamoDB TransactWriteItems limits apply.
Example:
Copycode example
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { authorId, postId, title, description, oldTitle, authorName } = ctx.args;
  return {
    operation: 'TransactWriteItems',
    transactItems: [
      {
        table: 'posts',
        operation: 'PutItem',
        key: util.dynamodb.toMapValues({ postId }),
        attributeValues: util.dynamodb.toMapValues({ title, description }),
        condition: util.transform.toDynamoDBConditionExpression({
          title: { eq: oldTitle },
        }),
      },
      {
        table: 'authors',
        operation: 'UpdateItem',
        key: util.dynamodb.toMapValues({ authorId }),
        update: {
          expression: 'SET authorName = :name',
          expressionValues: util.dynamodb.toMapValues({ ':name': authorName }),
        },
      },
    ],
  };
}
Modify Amplify-generated AWS resources
Amplify GraphQL API uses a variety of auto-generated, underlying AWS services and resources. You can customize these underlying resources to optimize the deployed stack for your specific use case.
In your Amplify app, you can access every underlying resource using CDK "L2" or "L1" constructs. Access the generated resources as L2 constructs via the .resources property on the returned stack or access the generated resources as L1 constructs using the .resources.cfnResources property.
amplify/backend.ts
Copyamplify/backend.ts code example
import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';

const backend = defineBackend({
  data
});

const { cfnResources } = backend.data.resources;

for (const table of Object.values(cfnResources.amplifyDynamoDbTables)) {
  table.pointInTimeRecoveryEnabled = true;
}
Customize Amplify-generated AppSync GraphQL API resources
Apply all the customizations on backend.data.resources.graphqlApi or backend.data.resources.cfnResources.cfnGraphqlApi. For example, to enable X-Ray tracing for the AppSync GraphQL API:
amplify/backend.ts
Copyamplify/backend.ts code example
import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';

const backend = defineBackend({
  data
});

const { cfnResources } = backend.data.resources;

cfnResources.cfnGraphqlApi.xrayEnabled = true;
Customize Amplify-generated resources for data models
Pass in the model type name into backend.data.resources.amplifyDynamoDbTables["MODEL_NAME"] to modify the resources generated for that particular model type. For example, to enable time-to-live on the Todo @model type's DynamoDB table:
amplify/backend.ts
Copyamplify/backend.ts code example
import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';

const backend = defineBackend({
  data
});

const { cfnResources } = backend.data.resources;

cfnResources.amplifyDynamoDbTables["Todo"].timeToLiveAttribute = {
  attributeName: "ttl",
  enabled: true,
};
Example - Configure billing mode on a DynamoDB table
Set the DynamoDB billing mode for the DynamoDB table as either "PROVISIONED" or "PAY_PER_REQUEST".
amplify/backend.ts
Copyamplify/backend.ts code example
import { defineBackend } from '@aws-amplify/backend';
import { BillingMode } from "aws-cdk-lib/aws-dynamodb";
import { data } from './data/resource';

const backend = defineBackend({
  data
});

const { cfnResources } = backend.data.resources;

cfnResources.amplifyDynamoDbTables['Todo'].billingMode = BillingMode.PAY_PER_REQUEST;
Example - Configure provisioned throughput for a DynamoDB table
Override the default ProvisionedThroughput provisioned for each model table and its Global Secondary Indexes (GSI). This override is only valid if the "DynamoDBBillingMode" is set to "PROVISIONED".
amplify/backend.ts
Copyamplify/backend.ts code example
import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';

const backend = defineBackend({
  data
});

const { cfnResources } = backend.data.resources;

cfnResources.amplifyDynamoDbTables["Todo"].provisionedThroughput = {
  readCapacityUnits: 5,
  writeCapacityUnits: 5,
};
Example - Enable point-in-time recovery for a DynamoDB table
Enable/disable DynamoDB point-in-time recovery for each model table.
amplify/backend.ts
Copyamplify/backend.ts code example
import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';

const backend = defineBackend({
  data
});

const { cfnResources } = backend.data.resources;

cfnResources.amplifyDynamoDbTables['Todo'].pointInTimeRecoveryEnabled = true;
Set up Storage
In this guide, you will learn how to set up storage in your Amplify app. You will set up your backend resources, and enable listing, uploading, and downloading files.
If you have not yet created an Amplify app, visit the quickstart guide.
Amplify Storage seamlessly integrates file storage and management capabilities into frontend web and mobile apps, built on top of Amazon Simple Storage Service (Amazon S3). It provides intuitive APIs and UI components for core file operations, enabling developers to build scalable and secure file storage solutions without dealing with cloud service complexities.
Building your storage backend
First, create a file amplify/storage/resource.ts. This file will be the location where you configure your storage backend. Instantiate storage using the defineStorage function and providing a name for your storage bucket. This name is a friendly name to identify your bucket in your backend configuration. Amplify will generate a unique identifier for your app using a UUID, the name attribute is just for use in your app.
amplify/storage/resource.ts
Copyamplify/storage/resource.ts code example
import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTeamDrive'
});
Import your storage definition in your amplify/backend.ts file that contains your backend definition. Add storage to defineBackend.
amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
Copyhighlighted code example
import { storage } from './storage/resource';

defineBackend({
  auth,
Copyhighlighted code example
  storage
});
Now when you run npx ampx sandbox or deploy your app on Amplify, it will configure an Amazon S3 bucket where your files will be stored. Before files can be accessed in your application, you must configure storage access rules.
To deploy these changes, commit them to git and push the changes upstream. Amplify's CI/CD system will automatically pick up the changes and build and deploy the updates.
Terminal
CopyTerminal code example
git commit -am "add storage backend"
git push
Define File Path Access
By default, no users or other project resources have access to any files in the storage bucket. Access must be explicitly granted within defineStorage using the access callback.
The access callback returns an object where each key in the object is a file path and each value in the object is an array of access rules that apply to that path.
The following example shows you how you can set up your file storage structure for a generic photo sharing app. Here,
1.	Guests have access to see all profile pictures and only the users that uploaded the profile picture can replace or delete them. Users are identified by their Identity Pool ID in this case i.e. identityID.
2.	There's also a general pool where all users can submit pictures.
Learn more about customizing access to file path.
amplify/storage/resource.ts
Copyamplify/storage/resource.ts code example
export const storage = defineStorage({
  name: 'amplifyTeamDrive',
  access: (allow) => ({
    'profile-pictures/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'picture-submissions/*': [
      allow.authenticated.to(['read','write']),
      allow.guest.to(['read', 'write'])
    ],
  })
});
Configure additional storage buckets
Amplify Storage gives you the flexibility to configure your backend to automatically provision and manage multiple storage resources.
You can define additional storage buckets by using the same defineStorage function and providing a unique, descriptive name to identify the storage bucket. You can pass this name to the storage APIs to specify the bucket you want to perform the action to. Ensure that this name attribute is unique across the defined storage buckets in order to reliably identify the correct bucket and prevent conflicts.
It's important to note that if additional storage buckets are defined one of them must be marked as default with the isDefault flag.
amplify/storage/resource.ts
Copyamplify/storage/resource.ts code example
export const firstBucket = defineStorage({
  name: 'firstBucket',
  isDefault: true, // identify your default storage bucket (required)
});

export const secondBucket = defineStorage({
  name: 'secondBucket',
  access: (allow) => ({
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
})
Add additional storage resources to the backend definition.
amplify/backend.ts
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { firstBucket, secondBucket } from './storage/resource';

defineBackend({
  auth,
  firstBucket,
Copyhighlighted code example
  secondBucket
});
Storage bucket client usage
Additional storage buckets can be referenced from application code by passing the bucket option to Amplify Storage APIs. You can provide a target bucket's name assigned in Amplify Backend.
import { downloadData } from 'aws-amplify/storage';

try {
  const result = downloadData({
    path: "album/2024/1.jpg",
    options: {
Copyhighlighted code example
      // Specify a target bucket using name assigned in Amplify Backend
      bucket: "secondBucket"
    }
  }).result;
} catch (error) {
  console.log(`Error: ${error}`)
}
Alternatively, you can also pass in an object by specifying the bucket name and region from the console. See each Amplify Storage API page for additional usage examples.
import { downloadData } from 'aws-amplify/storage';

try {
  const result = downloadData({
    path: 'album/2024/1.jpg',
    options: {
Copyhighlighted code example
      // Alternatively, provide bucket name from console and associated region
      bucket: {
        bucketName: 'second-bucket-name-from-console',
        region: 'us-east-2'
      }
    }
  }).result;
} catch (error) {
  console.log(`Error: ${error}`);
}
Connect your app code to the storage backend
The Amplify Storage library provides client APIs that connect to the backend resources you defined.
Configure Amplify in project
Import and load the configuration file in your app. It's recommended you add the Amplify configuration step to your app's root entry point. For example index.js in React or main.ts in Angular.
Copycode example
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);
Make sure you call Amplify.configure as early as possible in your application’s life-cycle. A missing configuration or NoCredentials error is thrown if Amplify.configure has not been called before other Amplify JavaScript APIs.
Upload your first file
Next, let's a photo to the picture-submissions/ path.
Copycode example
import { uploadData } from "aws-amplify/storage";

const file = document.getElementById("file");
const upload = document.getElementById("upload");

upload.addEventListener("click", () => {
  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file.files[0]);

  fileReader.onload = async (event) => {
    console.log("Complete File read successfully!", event.target.result);
    try {
      await uploadData({
        data: event.target.result,
        path: `picture-submissions/${file.files[0].name}`
      });
    } catch (e) {
      console.log("error", e);
    }
  };
});
Manage files in Amplify console
After successfully publishing your storage backend and connecting your project with client APIs, you can manage files and folders in the Amplify console. You can perform on-demand actions like upload, download, copy, and more under the Storage tab in the console. Refer to Manage files in Amplify Console guide for additional information.
Conclusion
Congratulations! You finished the Set up Amplify Storage guide. In this guide, you set up and connected to backend resources, customized your file paths and access definitions, and connected your application to the backend to implement features like file uploads and downloads.
Next steps
Now that you have completed setting up storage in your Amplify app, you can proceed to add file management features to your app. You can use the following guides to implement upload and download functionality, or you can access more capabilities from the side navigation.
•	Upload Files
•	Download Files
Upload files
Implement upload functionality
Note: Refer to the Transfer Acceleration documentation to learn how to enable transfer acceleration for storage APIs.
Upload from file
The following is an example of how you would upload a file from a file object, this could be retrieved from the local machine or a different source.
Copycode exampleDownload files
To further customize your in-app experience, you can use the getUrl or downloadData API from the Amplify Library for Storage.
Note: Refer to the Transfer Acceleration documentation to learn how to enable transfer acceleration for storage APIs.
Get or download file from a URL
With the getUrl API, you can get a presigned URL which is valid for 900 seconds or 15 minutes by default. You can use this URL to create a download link for users to click on. The expiresAt property is a Date object that represents the time at which the URL will expire.
Copycode example
import { getUrl } from 'aws-amplify/storage';

const linkToStorageFile = await getUrl({
  path: "album/2024/1.jpg",
  // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
});
console.log('signed URL: ', linkToStorageFile.url);
console.log('URL expires at: ', linkToStorageFile.expiresAt);
Inside your template or JSX code, you can use the url property to create a link to the file:
Copycode example
<a href={linkToStorageFile.url.toString()} target="_blank" rel="noreferrer">
  {fileName} 
</a>
This function does not check if the file exists by default. As result, the signed URL may fail if the file to be downloaded does not exist.
More getUrl options
The behavior of the getUrl API can be customized by passing in options.
Copycode example
import { getUrl } from 'aws-amplify/storage';

const linkToStorageFile = await getUrl({
  path: "album/2024/1.jpg",
  options: {
    // specify a target bucket using name assigned in Amplify Backend
    bucket: 'assignedNameInAmplifyBackend',
    // ensure object exists before getting url
    validateObjectExistence: true, 
    // url expiration time in seconds.
    expiresIn: 300,
    // whether to use accelerate endpoint
    useAccelerateEndpoint: true,
  }
});
Option	Type	Default	Description
bucket	string |
{ bucketName: string;
region: string; }	Default bucket and region from Amplify configuration	A string representing the target bucket's assigned name in Amplify Backend or an object specifying the bucket name and region from the console.

Read more at Configure additional storage buckets

validateObjectExistence	boolean	false	Whether to head object to make sure the object existence before downloading.
expiresIn	number	900	Number of seconds till the URL expires.

The expiration time of the presigned url is dependent on the session and will max out at 1 hour.
useAccelerateEndpoint	boolean	false	Whether to use accelerate endpoint.

Read more at Transfer Acceleration

Download to a file
Use the downloadData API to download the file locally.
Copycode example
import { downloadData } from 'aws-amplify/storage';

// Downloads file content to memory
const { body, eTag } = await downloadData({
  path: "album/2024/1.jpg"
}).result;
Get the text value of downloaded File
You can get the value of file in any of the three formats: blob, json, or text. You can call the respective method on the body property to consume the set data in the respective format.
Copycode example
import { downloadData } from 'aws-amplify/storage';

try {
  const downloadResult = await downloadData({
    path: "album/2024/1.jpg"
  }).result;
  const text = await downloadResult.body.text();
  // Alternatively, you can use `downloadResult.body.blob()`
  // or `downloadResult.body.json()` get read body in Blob or JSON format.
  console.log('Succeed: ', text);
} catch (error) {
  console.log('Error : ', error);
}
Download from a specified bucket
You can also perform an upload operation to a specific bucket by providing the bucket option. You can pass in a string representing the target bucket's assigned name in Amplify Backend.
import { downloadData } from 'aws-amplify/storage';

const result = await downloadData({
  path: 'album/2024/1.jpg',
  options: {
Copyhighlighted code example
    // Specify a target bucket using name assigned in Amplify Backend
    bucket: 'assignedNameInAmplifyBackend'
  }
}).result;
Alternatively, you can also pass in an object by specifying the bucket name and region from the console.
import { downloadData } from 'aws-amplify/storage';

const result = await downloadData({
  path: 'album/2024/1.jpg',
  options: {
Copyhighlighted code example
    // Alternatively, provide bucket name from console and associated region
    bucket: {
      bucketName: 'bucket-name-from-console',
      region: 'us-east-2'
    }
  }
}).result;
Monitor download progress
Copycode example
import { downloadData } from 'aws-amplify/storage';

// Download a file from S3 bucket
const { body, eTag } = await downloadData(
  {
    path: 'album/2024/1.jpg',
    options: {
      onProgress: (progress) {
        console.log(`Download progress: ${(progress.transferredBytes/progress.totalBytes) * 100}%`);
      }
    }
  }
).result;
Cancel download
Copycode example
import { downloadData, isCancelError } from 'aws-amplify/storage';

const downloadTask = downloadData({ path: 'album/2024/1.jpg' });
downloadTask.cancel();
try {
  await downloadTask.result;
} catch (error) {
  if (isCancelError(error)) {
    // Handle error thrown by task cancellation.
  }
}
More download options
The behavior of the downloadData API can be customized by passing in options.
Copycode example
import { downloadData } from 'aws-amplify/storage';

// Downloads file content to memory
const { body, eTag } = await downloadData({
  path: "album/2024/1.jpg",
  options: {
    // optional bytes range parameter to download a part of the file, the 2nd MB of the file in this example
    bytesRange: {
      start: 1024,
      end: 2048
    },
    useAccelerateEndpoint: true,
  }
}).result;
Option	Type	Default	Description
bucket	string |
{ bucketName: string;
region: string; }	Default bucket and region from Amplify configuration	A string representing the target bucket's assigned name in Amplify Backend or an object specifying the bucket name and region from the console.

Read more at Configure additional storage buckets

onProgress	callback	—	Callback function tracking the upload/download progress.
bytesRange	{ start: number; end:number; }	—	Bytes range parameter to download a part of the file.
useAccelerateEndpoint	boolean	false	Whether to use accelerate endpoint.

Read more at Transfer Acceleration

Frequently Asked Questions
•	downloadData is cached; if you have recently modified a file you may not get the latest version right away. You can pass in cacheControl: 'no-cache' to get the latest version.
•	downloadData only returns the latest cached version of the file; there is not yet an API to view prior versions.
•	Image compression or CloudFront CDN caching for your S3 buckets is not yet possible.
•	There is no API for Cognito Group-based access to files.
•	There is currently no API for getting the identityId of other users; you have to retrieve this from elsewhere before calling Storage.get.

import { uploadData } from "aws-amplify/storage";

const file = document.getElementById("file");
const upload = document.getElementById("upload");

upload.addEventListener("click", () => {
  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file.files[0]);

  fileReader.onload = async (event) => {
    console.log("Complete File read successfully!", event.target.result);
    try {
      await uploadData({
                data: event.target.result,
                path: file.files[0].name
            });
    } catch (e) {
      console.log("error", e);
    }
  };
});
Upload from data
You can follow this example if you have data saved in memory and would like to upload this data to the cloud.
Copycode example
import { uploadData } from 'aws-amplify/storage';

try {
  const result = await uploadData({
    path: "album/2024/1.jpg",
    // Alternatively, path: ({identityId}) => `album/${identityId}/1.jpg`
    data: file,
  }).result;
  console.log('Succeeded: ', result);
} catch (error) {
  console.log('Error : ', error);
}
Upload to a specified bucket
You can also perform an upload operation to a specific bucket by providing the bucket option. You can pass in a string representing the target bucket's assigned name in Amplify Backend.
import { uploadData } from 'aws-amplify/storage';

const result = await uploadData({
  path: 'album/2024/1.jpg',
  data: file,
  options: {
Copyhighlighted code example
    // Specify a target bucket using name assigned in Amplify Backend
    bucket: 'assignedNameInAmplifyBackend'
  }
}).result;
Alternatively, you can also pass in an object by specifying the bucket name and region from the console.
import { uploadData } from 'aws-amplify/storage';

const result = await uploadData({
  path: 'album/2024/1.jpg',
  data: file,
  options: {
Copyhighlighted code example
    // Alternatively, provide bucket name from console and associated region
    bucket: {
      bucketName: 'bucket-name-from-console',
      region: 'us-east-2'
    }
  }
}).result;
Monitor upload progress
Monitor progress of upload by using the onProgress option.
Copycode example
import { uploadData } from 'aws-amplify/storage';

const monitorUpload = async () => {
  try {
    const result = await uploadData({
      path: "album/2024/1.jpg",
      // Alternatively, path: ({identityId}) => `album/${identityId}/1.jpg`
      data: file,
      options: {
        onProgress: ({ transferredBytes, totalBytes }) => {
          if (totalBytes) {
            console.log(
              `Upload progress ${Math.round(
                (transferredBytes / totalBytes) * 100
              )} %`
            );
          }
        },
      },
    }).result;
    console.log("Path from Response: ", result.path);
  } catch (error) {
    console.log("Error : ", error);
  }
}
Pause, resume, and cancel uploads
We have callback functions that support resuming, pausing, and cancelling uploadData requests.
Copycode example
import { uploadData, isCancelError } from 'aws-amplify/storage';

// Pause, resume, and cancel a task
const uploadTask = uploadData({ path, data: file });
//...
uploadTask.pause();
//...
uploadTask.resume();
//...
uploadTask.cancel();
//...
try {
  await uploadTask.result;
} catch (error) {
  if (isCancelError(error)) {
    // Handle error thrown by task cancellation
  }
}
Transfer with Object Metadata
Custom metadata can be associated with your uploaded object by passing the metadata option.
Copycode example
import { uploadData } from 'aws-amplify/storage';

const result = await uploadData({
  path: 'album/2024/1.jpg',
  data: file,
  options: {
    metadata: {
      customKey: 'customValue',
    },
  },
});
More upload options
The behavior of uploadData and properties of the uploaded object can be customized by passing in additional options.
Copycode example
import { uploadData } from 'aws-amplify/storage';

const result = await uploadData({
  path: 'album/2024/1.jpg',
  data: file,
  options: {
    // content-type header to be used when downloading
    contentType: "image/jpeg",
    // configure how object is presented
    contentDisposition: "attachment",
    // whether to use accelerate endpoint
    useAccelerateEndpoint: true
  },
});
Option	Type	Default	Description
bucket	string |
{ bucketName: string;
region: string; }	Default bucket and region from Amplify configuration	A string representing the target bucket's assigned name in Amplify Backend or an object specifying the bucket name and region from the console.

Read more at Configure additional storage buckets

contentType	string	application/octet-stream	The default content-type header value of the file when downloading it.

Read more at Content-Type documentation

contentEncoding	string	—	The default content-encoding header value of the file when downloading it.

Read more at Content-Encoding documentation

contentDisposition	string	—	Specifies presentational information for the object.

Read more at Content-Disposition documentation

metadata	map<string>	—	A map of metadata to store with the object in S3.

Read more at S3 metadata documentation

useAccelerateEndpoint	boolean	false	Whether to use accelerate endpoint.

Read more at Transfer Acceleration

List file properties
You can list files without having to download all the files. You can do this by using the list API from the Amplify Library for Storage. You can also get properties individually for a file using the getProperties API.
List Files
Copycode example
import { list } from 'aws-amplify/storage';

const result = await list({
    path: 'album/photos/',
  // Alternatively, path: ({identityId}) => `album/{identityId}/photos/`
});
Note the trailing slash / - if you had requested list({ path : 'album/photos' }) it would also match against files like album/photos123.jpg alongside album/photos/123.jpg.
The format of the response will look similar to the below example:
Copycode example
{
  items: [
    {
      path: "album/photos/123.jpg",
      eTag: "30074401292215403a42b0739f3b5262",
      lastModified: "Thu Oct 08 2020 23:59:31 GMT+0800 (Singapore Standard Time)",
      size: 138256
    },
    // ...
  ],
}
If the pageSize is set lower than the total file size, a single list call only returns a subset of all the files. To list all the files with multiple calls, users can use the nextToken flag:
Copycode example
import { list } from 'aws-amplify/storage';

const PAGE_SIZE = 20;
let nextToken = undefined;
//...
const loadNextPage = async () => {
  let response = await list({
    path: 'photos/',
    // Alternatively, path: ({ identityId }) => `album/{identityId}/photos/`
    pageSize: PAGE_SIZE,
    nextToken: nextToken
    }
  });
  if (response.nextToken) {
    nextToken = response.nextToken;
  } else {
    nextToken = undefined;
  }
  // render list items from response.items
};
List All files
Copycode example
import { list } from 'aws-amplify/storage';

const result = await list({
    path: 'album/photos/',
  // Alternatively, path: ({identityId}) => `album/{identityId}/photos/`,
  options: {
    listAll: true,
  }
});
Manually created folders will show up as files with a size of 0, but you can also match keys against a regex like file.key.match(/\.[0-9a-z]+$/i) to distinguish files from folders. Since "folders" are a virtual concept in Amazon S3, any file may declare any depth of folder just by having a / in its name.
To access the contents and subpaths of a "folder", you have two options:
1.	Request the entire path and parse the contents.
2.	Use the subpathStrategy option to retrieve only the files within the specified path (i.e. exclude files under subpaths).
Get all nested files within a path
This retrieves all files and folders under a given path. You may need to parse the result to get only the files within the specified path.
Copycode example
function processStorageList(response) {
  let files = [];
  let folders = new Set();
  response.items.forEach((res) => {
    if (res.size) {
      files.push(res);
      // sometimes files declare a folder with a / within then
      let possibleFolder = res.path.split('/').slice(0, -1).join('/');
      if (possibleFolder) folders.add(possibleFolder);
    } else {
      folders.add(res.path);
    }
  });
  return { files, folders };
}
If you need the files and folders in terms of a nested object instead (for example, to build an explorer UI), you could parse it recursively:
Copycode example
function processStorageList(response) {
  const filesystem = {};
  // https://stackoverflow.com/questions/44759750/how-can-i-create-a-nested-object-representation-of-a-folder-structure
  const add = (source, target, item) => {
    const elements = source.split('/');
    const element = elements.shift();
    if (!element) return; // blank
    target[element] = target[element] || { __data: item }; // element;
    if (elements.length) {
      target[element] =
        typeof target[element] === 'object' ? target[element] : {};
      add(elements.join('/'), target[element], item);
    }
  };
  response.items.forEach((item) => add(item.path, filesystem, item));
  return filesystem;
}
This places each item's data inside a special __data key.
Excluding subpaths
In addition to using the list API to get all the contents of a path, you can also use it to get only the files within a path while excluding files under subpaths.
For example, given the following keys in your path you may want to return only the jpg object, and not the "vacation" subpath and its contents:
Copycode example
photos/photo1.jpg
photos/vacation/
This can be accomplished with the subpathStrategy option:
src/main.ts
Copysrc/main.ts code example
import { list } from "aws-amplify/storage";
const result = await list({ 
  path: "photos/",
  options:{
    subpathStrategy: { strategy:'exclude' }
  }
});
The response will include only the objects within the photos/ path and will also communicate any excluded subpaths:
Copycode example
{
    excludedSubpaths: [
      'photos/vacation/'
    ],
    items: [
      {
        path: "photos/photo1.jpg",
        eTag: "30074401292215403a42b0739f3b5262",
        lastModified: "Thu Oct 08 2020 23:59:31 GMT+0800 (Singapore Standard Time)",
        size: 138256
      },
    ]
}
The default delimiter character is '/', but this can be changed by supplying a custom delimiter:
src/main.ts
Copysrc/main.ts code example
const result = await list({
  // Path uses '-' character to organize files rather than '/'
  path: 'photos-',
  options: {
    subpathStrategy: {
      strategy: 'exclude',
      delimiter: '-'
    }
  }
});
List files from a specified bucket
You can also perform an copy operation to a specific bucket by providing the bucket option. This option can either be a string representing the target bucket's assigned name in Amplify Backend or an object specifying the bucket name and region from the console.
Copycode example
import { list } from 'aws-amplify/storage';

const result = await list({
  path: 'photos/',
  options: {
    // Specify a target bucket using name assigned in Amplify Backend
    bucket: 'assignedNameInAmplifyBackend',
    // Alternatively, provide bucket name from console and associated region
    // bucket: {
    //   bucketName: 'generated-secondary-bucket-name',
    //   region: 'us-east-2'
    // }
  }
});
More list options
Option	Type	Default	Description
bucket	string |
{ bucketName: string;
region: string; }	Default bucket and region from Amplify configuration	A string representing the target bucket's assigned name in Amplify Backend or an object specifying the bucket name and region from the console.

Read more at Configure additional storage buckets

listAll	boolean	false	Set to true to list all files within the specified path
pageSize	number	1000	Sets the maximum number of files to be return. The range is 0 - 1000
nextToken	string	—	Indicates whether the list is being continued on this bucket with a token
subpathStrategy	{ strategy: 'include' } |
{ 'exclude',
delimiter?: string }	{ strategy: 'include' }	An object representing the subpath inclusion strategy and the delimiter used to group results for exclusion.

Read more at Excluding subpaths

useAccelerateEndpoint	boolean	false	Whether to use accelerate endpoint.

Read more at Transfer Acceleration

Get File Properties
You can also view the properties of an individual file.
Copycode example
import { getProperties } from 'aws-amplify/storage';

try {
  const result = await getProperties({
    path: 'album/2024/1.jpg',
    // Alternatively, path: ({ identityId }) => `album/{identityId}/1.jpg`
    options: {
      // Specify a target bucket using name assigned in Amplify Backend
      bucket: 'assignedNameInAmplifyBackend'
    }
  });
  console.log('File Properties ', result);
} catch (error) {
  console.log('Error ', error);
}
The properties and metadata will look similar to the below example
Copycode example
{
  path: "album/2024/1.jpg",
  contentType: "image/jpeg",
  contentLength: 6873,
  eTag: "\"56b32cf4779ff6ca3ba3f2d455fa56a7\"",
  lastModified: Wed Apr 19 2023 14:20:55 GMT-0700 (Pacific Daylight Time) {},
  metadata: { owner: 'aws' }
}
More getProperties options
Option	Type	Default	Description
bucket	string |
{ bucketName: string;
region: string; }	Default bucket and region from Amplify configuration	A string representing the target bucket's assigned name in Amplify Backend or an object specifying the bucket name and region from the console.

Read more at Configure additional storage buckets

useAccelerateEndpoint	boolean	false	Whether to use accelerate endpoint.

Remove files
Files can be removed from a storage bucket using the remove API. If a file is protected by an identity Id, only the user who owns the file will be able to remove it.
You can also perform a remove operation from a specific bucket by providing the target bucket's assigned name from Amplify Backend in bucket option.
Copycode example
import { remove } from 'aws-amplify/storage';

try {
  await remove({ 
    path: 'album/2024/1.jpg',
    // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
    bucket: 'assignedNameInAmplifyBackend', // Specify a target bucket using name assigned in Amplify Backend
  });
} catch (error) {
  console.log('Error ', error);
}
Alternatively, you can also pass in an object by specifying the bucket name and region from the console.
Copycode example
import { remove } from 'aws-amplify/storage';

try {
  await remove({ 
    path: 'album/2024/1.jpg',
    // Alternatively, provide bucket name from console and associated region
    bucket: {
      bucketName: 'bucket-name-from-console',
      region: 'us-east-2'
    }

  });
} catch (error) {
  console.log('Error ', error);
}
More remove options
Option	Type	Default	Description
bucket	string |
{ bucketName: string;
region: string; }	Default bucket and region from Amplify configuration	A string representing the target bucket's assigned name in Amplify Backend or an object specifying the bucket name and region from the console.

Read more at Configure additional storage buckets





Copy files
Note: You can only copy files up to 5GB in a single operation
You can copy an existing file to a different path within the storage bucket using the copy API.
The copy method duplicates an existing file to a designated path and returns an object {path: 'destPath'} upon successful completion.
Copycode example
import { copy } from 'aws-amplify/storage';

const copyFile = async () => {
  try {
    const response = await copy({
      source: {
        path: 'album/2024/1.jpg',
        // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
      },
      destination: {
        path: 'shared/2024/1.jpg',
        // Alternatively, path: ({identityId}) => `shared/{identityId}/1.jpg`
      },
    });
  } catch (error) {
    console.error('Error', err);
  }
};
Cross identity ID copying is only allowed if the destination path has the the right access rules to allow other authenticated users writing to it.
Specify a bucket or copy across buckets / regions
You can also perform an copy operation to a specific bucket by providing the bucket option. This option can either be a string representing the target bucket's assigned name in Amplify Backend or an object specifying the bucket name and region from the console.
Copycode example
import { copy } from 'aws-amplify/storage';

const copyFile = async () => {
  try {
    const response = await copy({
      source: {
        path: 'album/2024/1.jpg',
        // Specify a target bucket using name assigned in Amplify Backend
        // or bucket name from console and associated region
        bucket: 'assignedNameInAmplifyBackend'
      },
      destination: {
        path: 'shared/2024/1.jpg',
        // Specify a target bucket using name assigned in Amplify Backend
        // or bucket name from console and associated region
        bucket: {
          bucketName: 'generated-second-bucket-name',
          region: 'us-east-2'
        }
      }
    });
  } catch (error) {
    console.error('Error', err);
  }
};
In order to copy to or from a bucket other than your default, both source and destination must have bucket explicitly defined.
Copy source and destination options
Option	Type	Default	Description
path	string |
({ identityId }) => string	Required	A string or callback that represents the path in source and destination bucket to copy the object to or from
bucket	string |
{ bucketName: string;
region: string; }	Default bucket and region from Amplify configuration	A string representing the target bucket's assigned name in Amplify Backend or an object specifying the bucket name and region from the console.

Read more at Configure additional storage buckets.

Listen to storage events
Function triggers can be configured to enable event-based workflows when files are uploaded or deleted. To add a function trigger, modify the defineStorage configuration.
First, in your storage definition, add the following:
amplify/storage/resource.ts
export const storage = defineStorage({
  name: 'myProjectFiles',
Copyhighlighted code example
  triggers: {
    onUpload: defineFunction({
      entry: './on-upload-handler.ts'
    }),
    onDelete: defineFunction({
      entry: './on-delete-handler.ts'
    })
  }
});
Then create the function definitions at amplify/storage/on-upload-handler.ts and amplify/storage/on-delete-handler.ts.
amplify/storage/on-upload-handler.ts
Copyamplify/storage/on-upload-handler.ts code example
import type { S3Handler } from 'aws-lambda';

export const handler: S3Handler = async (event) => {
  const objectKeys = event.Records.map((record) => record.s3.object.key);
  console.log(`Upload handler invoked for objects [${objectKeys.join(', ')}]`);
};
amplify/storage/on-delete-handler.ts
Copyamplify/storage/on-delete-handler.ts code example
import type { S3Handler } from 'aws-lambda';

export const handler: S3Handler = async (event) => {
  const objectKeys = event.Records.map((record) => record.s3.object.key);
  console.log(`Delete handler invoked for objects [${objectKeys.join(', ')}]`);
};
Note: The S3Handler type comes from the @types/aws-lambda npm package. This package contains types for different kinds of Lambda handlers, events, and responses.
Now, when you deploy your backend, these functions will be invoked whenever an object is uploaded or deleted from the bucket.
More Advanced Triggers
The example listed above demonstrates what is exposed directly in your storage definition. Specifically, the use of the triggers option when you use defineStorage. This method is for simple triggers that always execute on file uploads or file deletions. There are no additional modifications you can make to the triggers defined in this way.
If you want the ability to do something more than simply handle the events onUpload and onDelete you will have to use .addEventNotification in your backend.ts. If you use this method, the triggers section in your storage/resource.ts file should be removed.
Here is an example of how you can add a Lambda trigger for an S3 object PUT event. This trigger will execute when a file that has been uploaded to the bucket defined in your storage/resource.ts has a matching prefix and suffix as that listed in the function input of addEventNotification.
amplify/backend.ts
Copyamplify/backend.ts code example
import { EventType } from 'aws-cdk-lib/aws-s3';
import { LambdaDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { defineBackend } from '@aws-amplify/backend';
import { storage } from './storage/resource';
import { yourLambda } from './functions/yourLambda/resource';

const backend = defineBackend({
  storage,
  yourLambda,
});

backend.storage.resources.bucket.addEventNotification(
    EventType.OBJECT_CREATED_PUT,
    new LambdaDestination(backend.yourLambda.resources.lambda),
    {
        prefix: 'protected/uploads/',
        suffix: '-uploadManifest.json',
    }
);
It's important to note that using this methodology does not require any changes your lambda function. This modification on your backend.ts file will create a new AWS CloudFormation handler for "Custom::S3BucketNotifications" resources (@aws-cdk/aws-s3) that specifically handles checking the prefix and suffix.
Extend S3 resources
For Amplify-generated S3 resources
Amplify Storage generates Amazon S3 resources to offer storage features. You can access the underlying Amazon S3 resources to further customize your backend configuration by using the AWS Cloud Developer Kit (AWS CDK).
Example - Enable Transfer Acceleration
The following is an example of how you would enable Transfer Acceleration on the bucket (CDK documentation). In order to enable Transfer Acceleration on the bucket, you will have to unwrap the L1 CDK construct from the L2 CDK construct like the following.
Copyhighlighted code example
import * as s3 from 'aws-cdk-lib/aws-s3';
import { defineBackend } from '@aws-amplify/backend';
import { storage } from './storage/resource';

const backend = defineBackend({
  storage
});

Copyhighlighted code example
const s3Bucket = backend.storage.resources.bucket;

const cfnBucket = s3Bucket.node.defaultChild as s3.CfnBucket;

cfnBucket.accelerateConfiguration = {
  accelerationStatus: "Enabled" // 'Suspended' if you want to disable transfer acceleration
}
Read more about escape hatches in the CDK.
For Manually configured S3 resources
To make calls to your S3 bucket from your App, you need to set up a CORS Policy for your S3 bucket. This callout is only for manual configuration of your S3 bucket.
The following steps will set up your CORS Policy:
1.	Go to Amazon S3 console and click on your project's userfiles bucket, which is normally named as [Bucket Name][Id]-dev.  
2.	Click on the Permissions tab for your bucket.  
3.	Click the edit button in the Cross-origin resource sharing (CORS) section.  
4.	Make the Changes and click on Save Changes. You can add required metadata to be exposed in ExposeHeaders with x-amz-meta-XXXX format.  
Copycode example
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "HEAD", "PUT", "POST", "DELETE"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": [
      "x-amz-server-side-encryption",
      "x-amz-request-id",
      "x-amz-id-2",
      "ETag",
      "x-amz-meta-foo"
    ],
    "MaxAgeSeconds": 3000
  }
]
Note: You can restrict the access to your bucket by updating AllowedOrigin to include individual domains.
Use Amplify Storage with any S3 bucket
With Amplify Storage APIs, you can use your own S3 buckets instead of the Amplify-created ones.
Important: To utilize the storage APIs with an S3 bucket outside of Amplify, you must have Amplify Auth configured in your project.
Use storage resources with an Amplify backend
Add necessary permissions to the S3 bucket
For the specific Amazon S3 bucket that you want to use with these APIs, you need to make sure that the associated IAM role has the necessary permissions to read and write data to that bucket.
To do this, go to Amazon S3 console > Select the S3 bucket > Permissions > Edit Bucket Policy.
 
The policy will look something like this
Copycode example
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Statement1",
            "Principal": { "AWS": "arn:aws:iam::<AWS-account-ID>:role/<role-name>" },
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::<bucket-name>/*"
            ]
        }
    ]
}
Replace <AWS-account-ID> with your AWS account ID and <role-name> with the IAM role associated with your Amplify Auth setup. Replace <bucket-name> with the S3 bucket name.
You can refer to Amazon S3's Policies and Permissions documentation for more ways to customize access to the bucket.
Specify S3 bucket in Amplify's backend config
Next, use the addOutput method from the backend definition object to define a custom s3 bucket by specifying the name and region of the bucket in your amplify/backend.ts file.
Important
You cannot use both a storage backend configured through Amplify and a custom S3 bucket at the same time.
If you specify a custom S3 bucket, no sandbox storage resource will be created. The provided custom S3 bucket will be used, even in the sandbox environment.
Copycode example
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

Copyhighlighted code example
backend.addOutput({
  storage: {
    aws_region: "<region>",
    bucket_name: "<bucket-name>"
  },
});
Import latest amplify_outputs.json file
To ensure the local amplify_outputs.json file is up-to-date, you can run the npx ampx generate outputs command or download the latest amplify_outputs.json from the Amplify console as shown below.
 
Now that you've configured the necessary permissions, you can start using the storage APIs with your chosen S3 bucket.
Use storage resources without an Amplify backend
While using the Amplify Backend is the easiest way to get started, existing storage resources can also be integrated with Amplify Storage.
In addition to manually configuring your storage options, you will also need to ensure Amplify Auth is properly configured in your project and associated IAM roles have the necessary permissions to interact with your existing bucket. Read more about using existing auth resources without an Amplify backend.
Using Amplify configure
Existing storage resource setup can be accomplished by passing the resource metadata to Amplify.configure. This will configure the Amplify Storage client library to interact with the additional resources. It's recommended to add the Amplify configuration step as early as possible in the application lifecycle, ideally at the root entry point.
Copycode example
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    // add your auth configuration
  },
  Storage: {
    S3: {
      bucket: '<your-default-bucket-name>',
      region: '<your-default-bucket-region>',
      // default bucket metadata should be duplicated below with any additional buckets
      buckets: {
        '<your-default-bucket-friendly-name>': {
          bucketName: '<your-default-bucket-name>',
          region: '<your-default-bucket-region>'
        },
        '<your-additional-bucket-friendly-name>': {
          bucketName: '<your-additional-bucket-name>',
          region: '<your-additional-bucket-region>'
        }
      }
    }
  }
});
Using Amplify outputs
Alternatively, existing storage resources can be used by creating or modifying the amplify_outputs.json file directly.
amplify_outputs.json
Copyamplify_outputs.json code example
{
  "auth": {
    // add your auth configuration
  },
  "storage": {
    "aws_region": "<your-default-bucket-region>", 
    "bucket_name": "<your-default-bucket-name>",
    // default bucket metadata should be duplicated below with any additional buckets
    "buckets": [
      {
        "name": "<your-default-bucket-friendly-name>", 
        "bucket_name": "<your-default-bucket-name>", 
        "aws_region": "<your-default-bucket-region>" 
      },
      {
        "name": "<your-additional-bucket-friendly-name>",
        "bucket_name": "<your-additional-bucket-name>",
        "aws_region": "<your-additional-bucket-region>"
      }
    ]
  }
}
API Reference
copy
Copy an object from a source to a destination object within the same bucket.
Parameters
Option	Required	Type	Description
input	true	StorageCopyInputWithPath	The CopyWithPathInput object.
Throws
•	service:S3Exception - Thrown when checking for existence of the object
•	validation:StorageValidationErrorCode - Thrown when source or destination path is not defined.
Returns
Promise<CopyWithPathOutput>
Output type with path for S3 copy API.
copy
Parameters
Option	Required	Type	Description
input	true	CopyInput	The CopyInput object.
Throws
•	service:S3Exception - Thrown when checking for existence of the object
•	validation:StorageValidationErrorCode - Thrown when source or destination key is not defined.
Returns
Promise<CopyOutput>
Output type with path for S3 copy API.
 
downloadData
Download S3 object data to memory
Parameters
Option	Required	Type	Description
input	true	DownloadDataWithPathInput	The DownloadDataWithPathInput object.
Throws
•	service:S3Exception - thrown when checking for existence of the object
•	validation:StorageValidationErrorCode - Validation errors
Returns
DownloadDataWithPathOutput
Output type with path for S3 downloadData API.
downloadData
Parameters
Option	Required	Type	Description
input	true	DownloadDataInput	The DownloadDataInput object.
Throws
•	service:S3Exception - thrown when checking for existence of the object
•	validation:StorageValidationErrorCode - Validation errors
Returns
DownloadDataOutput
Output type for S3 downloadData API.
 
getProperties
Gets the properties of a file. The properties include S3 system metadata and the user metadata that was provided when uploading the file.
Parameters
Option	Required	Type	Description
input	true	GetPropertiesWithPathInput	The GetPropertiesWithPathInput object.
Throws
•	AnS3Exception when the underlying S3 service returned error.
•	AStorageValidationErrorCode when API call parameters are invalid.
Returns
Promise<GetPropertiesWithPathOutput>
Output type with path for S3 getProperties API.
getProperties
Parameters
Option	Required	Type	Description
input	true	GetPropertiesInput	The GetPropertiesInput object.
Throws
•	AnS3Exception when the underlying S3 service returned error.
•	AStorageValidationErrorCode when API call parameters are invalid.
Returns
Promise<GetPropertiesOutput>
Output type for S3 getProperties API.
 
getUrl
Get a temporary presigned URL to download the specified S3 object. The presigned URL expires when the associated role used to sign the request expires or the option expiresIn is reached. The expiresAt
property in the output object indicates when the URL MAY expire.
By default, it will not validate the object that exists in S3. If you set the options.validateObjectExistence to true, this method will verify the given object already exists in S3 before returning a presigned URL, and will throw StorageError if the object does not exist.
Parameters
Option	Required	Type	Description
input	true	GetUrlWithPathInput	The GetUrlWithPathInput object.
Throws
•	service:S3Exception - thrown when checking for existence of the object
•	validation:StorageValidationErrorCode - Validation errors thrown either username or key are not defined.
Returns
Promise<GetUrlWithPathOutput>
Output type with path for S3 getUrl API.
getUrl
Parameters
Option	Required	Type	Description
input	true	GetUrlInput	The GetUrlInput object.
Throws
•	service:S3Exception - thrown when checking for existence of the object
•	validation:StorageValidationErrorCode - Validation errors thrown either username or key are not defined.
Returns
Promise<GetUrlOutput>
Output type for S3 getUrl API.
 
isCancelError
Check if an error is caused by user calling cancel() on a upload/download task. If an overwriting error is supplied to task.cancel(errorOverwrite), this function will return false.
Parameters
Option	Required	Type	Description
error	true	unknown	The unknown exception to be checked.
Returns
CanceledError
 
list
List files in pages with the given path. pageSize is defaulted to 1000. Additionally, the result will include a nextToken if there are more items to retrieve.
Parameters
Option	Required	Type	Description
input	true	ListPaginateWithPathInput	The ListPaginateWithPathInput object.
Throws
•	service:S3Exception - S3 service errors thrown when checking for existence of bucket
•	validation:StorageValidationErrorCode - thrown when there are issues with credentials
Returns
Promise<ListPaginateWithPathOutput>
Output type with path for S3 list API. Lists bucket objects with pagination.
list
List all files from S3 for a given path. You can set listAll to true in options to get all the files from S3.
Parameters
Option	Required	Type	Description
input	true	ListAllWithPathInput	The ListAllWithPathInput object.
Throws
•	service:S3Exception - S3 service errors thrown when checking for existence of bucket
•	validation:StorageValidationErrorCode - thrown when there are issues with credentials
Returns
Promise<ListAllWithPathOutput>
Output type with path for S3 list API. Lists all bucket objects.
list
Parameters
Option	Required	Type	Description
input	false	ListPaginateInput	The ListPaginateInput object.
Throws
•	service:S3Exception - S3 service errors thrown when checking for existence of bucket
•	validation:StorageValidationErrorCode - thrown when there are issues with credentials
Returns
Promise<ListPaginateOutput>
list
Parameters
Option	Required	Type	Description
input	false	ListAllInput	The ListAllInput object.
Throws
•	service:S3Exception - S3 service errors thrown when checking for existence of bucket
•	validation:StorageValidationErrorCode - thrown when there are issues with credentials
Returns
Promise<ListAllOutput>
 
remove
Remove a file from your S3 bucket.
Parameters
Option	Required	Type	Description
input	true	RemoveWithPathInput	The RemoveWithPathInput object.
Throws
•	service:S3Exception - S3 service errors thrown while while removing the object.
•	validation:StorageValidationErrorCode - Validation errors thrown when there is no path or path is empty or path has a leading slash.
Returns
Promise<RemoveWithPathOutput>
Output type with path for S3 remove API.
remove
Parameters
Option	Required	Type	Description
input	true	RemoveInput	The RemoveInput object.
Throws
•	service:S3Exception - S3 service errors thrown while while removing the object
•	validation:StorageValidationErrorCode - Validation errors thrown when there is no key or its empty.
Returns
Promise<RemoveOutput>
 
uploadData
Upload data to the specified S3 object path. By default uses single PUT operation to upload if the payload is less than 5MB. Otherwise, uses multipart upload to upload the payload. If the payload length cannot be determined, uses multipart upload.
Limitations: * Maximum object size is 5TB. * Maximum object size if the size cannot be determined before upload is 50GB.
Parameters
Option	Required	Type	Description
input	true	UploadDataWithPathInput	A UploadDataWithPathInput object.
Throws
•	Service:S3Exception thrown when checking for existence of the object.
•	Validation:StorageValidationErrorCode thrown when a validation error occurs.
Returns
UploadDataWithPathOutput
Output type with path for S3 uploadData API.
uploadData
Upload data to the specified S3 object key. By default uses single PUT operation to upload if the payload is less than 5MB. Otherwise, uses multipart upload to upload the payload. If the payload length cannot be determined, uses multipart upload.
Limitations: * Maximum object size is 5TB. * Maximum object size if the size cannot be determined before upload is 50GB.
Parameters
Option	Required	Type	Description
input	true	UploadDataInput	A UploadDataInput object.
Throws
•	Service:S3Exception thrown when checking for existence of the object.
•	Validation:StorageValidationErrorCode thrown when a validation error occurs.
Returns
UploadDataOutput
Output type for S3 uploadData API.
Functions

Set up a Function
Use AWS Lambda functions to perform tasks and customize workflows.

Environment variables and secrets
Learn how to configure and consume environment variables and secrets

Configure Functions
Learn how to configure functions

Scheduling Functions
Learn how to schedule functions to run at specific intervals

Streaming logs
Stream execution logs directly to your terminal while Sandbox is running

Lambda Layers
Learn how to add layers to your function

Grant access to other resources
Extend the capabilities of your Function by granting access to other resources

Examples
Example use cases for Amplify Functions

Modify Amplify-generated Lambda resources with CDK
Learn how to extend the underlying Function resources

Streaming logs
Amplify enables you to stream logs from your Function directly to your terminal while running ampx sandbox. To get started, specify the --stream-function-logs option when starting sandbox:
Terminal
CopyTerminal code example
npx ampx sandbox --stream-function-logs
Note: this feature is only available for Sandbox
Streaming Function logs directly to your terminal enable faster debug iterations, and greater insight into your Functions' executions.
Filtering
By default, Amplify will stream all of your Functions' logs. If you wish to only stream a subset of Functions you can specify a filter by Function name or a regular expression for Function names. For example, if you have a collection of Auth triggers where the Function names include "auth"
Terminal
CopyTerminal code example
npx ampx sandbox --stream-function-logs --logs-filter auth
After you successfully deploy your personal cloud sandbox, start your frontend application, and sign up for the first time, you will see logs from your triggers' executions printed to the terminal where sandbox is running.
Terminal
> npx ampx sandbox --stream-function-logs --logs-filter auth
...

✨  Total time: 158.44s

[Sandbox] Watching for file changes...
File written: amplify_outputs.json
[auth-pre-sign-up] 3:36:34 PM INIT_START Runtime Version: nodejs:18.v30	Runtime Version ARN: arn:aws:lambda:us-east-1::runtime:f89c264158db39a1cfcbb5f9b3741413df1cfce4d550c9a475a67d923e19e2f4
[auth-pre-sign-up] 3:36:34 PM START RequestId: 685be2bd-5df1-4dd5-9eb1-24f5f6337f91 Version: $LATEST
[auth-pre-sign-up] 3:36:34 PM END RequestId: 685be2bd-5df1-4dd5-9eb1-24f5f6337f91
[auth-pre-sign-up] 3:36:34 PM REPORT RequestId: 685be2bd-5df1-4dd5-9eb1-24f5f6337f91	Duration: 4.12 ms	Billed Duration: 5 ms	Memory Size: 512 MB	Max Memory Used: 67 MB	Init Duration: 173.67 ms
[auth-post-confirmation] 3:38:40 PM INIT_START Runtime Version: nodejs:18.v30	Runtime Version ARN: arn:aws:lambda:us-east-1::runtime:f89c264158db39a1cfcbb5f9b3741413df1cfce4d550c9a475a67d923e19e2f4
[auth-post-confirmation] 3:38:40 PM START RequestId: fce69b9f-b257-4af8-8a6e-821f84a39ce7 Version: $LATEST
[auth-post-confirmation] 3:38:41 PM 2024-07-19T22:38:41.209Z	fce69b9f-b257-4af8-8a6e-821f84a39ce7	INFO	processed 412f8911-acfa-41c7-9605-fa0c40891ea9
[auth-post-confirmation] 3:38:41 PM END RequestId: fce69b9f-b257-4af8-8a6e-821f84a39ce7
[auth-post-confirmation] 3:38:41 PM REPORT RequestId: fce69b9f-b257-4af8-8a6e-821f84a39ce7	Duration: 264.38 ms	Billed Duration: 265 ms	Memory Size: 512 MB	Max Memory Used: 93 MB	Init Duration: 562.19 ms
[auth-pre-authentication] 3:38:41 PM INIT_START Runtime Version: nodejs:18.v30	Runtime Version ARN: arn:aws:lambda:us-east-1::runtime:f89c264158db39a1cfcbb5f9b3741413df1cfce4d550c9a475a67d923e19e2f4
[auth-pre-authentication] 3:38:41 PM START RequestId: 9210ca3a-1351-4826-8544-123684765710 Version: $LATEST
[auth-pre-authentication] 3:38:41 PM END RequestId: 9210ca3a-1351-4826-8544-123684765710
[auth-pre-authentication] 3:38:41 PM REPORT RequestId: 9210ca3a-1351-4826-8544-123684765710	Duration: 3.47 ms	Billed Duration: 4 ms	Memory Size: 512 MB	Max Memory Used: 67 MB	Init Duration: 180.24 ms
[auth-post-authentication] 3:38:42 PM INIT_START Runtime Version: nodejs:18.v30	Runtime Version ARN: arn:aws:lambda:us-east-1::runtime:f89c264158db39a1cfcbb5f9b3741413df1cfce4d550c9a475a67d923e19e2f4
[auth-post-authentication] 3:38:42 PM START RequestId: 60c1d680-ea24-4a8b-93de-02d085859140 Version: $LATEST
[auth-post-authentication] 3:38:42 PM END RequestId: 60c1d680-ea24-4a8b-93de-02d085859140
[auth-post-authentication] 3:38:42 PM REPORT RequestId: 60c1d680-ea24-4a8b-93de-02d085859140	Duration: 4.61 ms	Billed Duration: 5 ms	Memory Size: 512 MB	Max Memory Used: 68 MB	Init Duration: 172.66 ms
Writing to a file
By default, Amplify will print logs to the terminal where sandbox is running, however you can alternatively write logs to a file by specifying --logs-out-file:
Terminal
CopyTerminal code example
npx ampx sandbox --stream-function-logs --logs-out-file sandbox.log
This can be combined with --logs-filter to create a log file of just your Auth-related Functions, for example:
Terminal
CopyTerminal code example
npx ampx sandbox --stream-function-logs --logs-filter auth --logs-out-file sandbox-auth.log
However it cannot be combined multiple times to write logs to multiple files.
Lambda Layers
Amplify offers the ability to add layers to your functions which contain your library dependencies. Lambda layers allow you to separate your function code from its dependencies, enabling easier management of shared components across multiple functions and reducing deployment package sizes.
To add a Lambda layer to your function, follow these steps:
1.	First, create and set up your Lambda layer in AWS. You can do this through the AWS Console or using the AWS CLI. For guidance on creating layers, refer to the AWS documentation on creating Lambda layers.
2.	Once your layer is created and available in AWS, you can reference it in your Amplify project as shown below.
Specify the layers property in defineFunction, for example:
amplify/functions/my-function/resource.ts
Copyamplify/functions/my-function/resource.ts code example
import { defineFunction } from "@aws-amplify/backend";

export const myFunction = defineFunction({
  name: "my-function",
  layers: {
   "@aws-lambda-powertools/logger":
      "arn:aws:lambda:us-east-1:094274105915:layer:AWSLambdaPowertoolsTypeScriptV2:12",
  },
});
The Lambda layer is represented by an object of key/value pairs where the key is the module name that is exported from your layer and the value is the ARN of the layer. The key (module name) is used to externalize the module dependency so it doesn't get bundled with your lambda function. A maximum of 5 layers can be attached to a function, and they must be in the same region as the function.
When using layers, be mindful of versioning. The ARN includes a version number (e.g., :12 in the example). Ensure you're using the appropriate version and have a strategy for updating layers when new versions are released.
3.	Then use the locally installed module in the function handler:
amplify/functions/my-function/handler.ts
Copyamplify/functions/my-function/handler.ts code example
import { Logger } from "@aws-lambda-powertools/logger";
import type { Handler } from "aws-lambda";

const logger = new Logger({ serviceName: "serverlessAirline" });

export const handler: Handler = async (event, context) => {
  logger.info("Hello World");
};
Grant access to other resources
In order for Amplify Functions to interact with other resources they must be given access. There are two ways to grant Amplify Functions access to other resources:
1.	Using the access property
2.	Using the AWS Cloud Development Kit (CDK)
Using the access property
The access property is a property found in each of the define* functions for defining Amplify resources. It allows you specify the necessary actions using common language.
When you grant a function access to another resource in your Amplify backend (such as granting access to storage), it will configure environment variables for that function to make SDK calls to the AWS services it has access to. Those environment variables are typed and available as part of the env object.
Say you have a function that generates reports each month from your Data resource and needs to store the generated reports in Storage:
amplify/storage/resource.ts
Copyamplify/storage/resource.ts code example
import { defineStorage } from '@aws-amplify/backend';
import { generateMonthlyReports } from '../functions/generate-monthly-reports/resource';

export const storage = defineStorage({
  name: 'myReports',
  access: (allow) => ({
    'reports/*': [
      allow.resource(generateMonthlyReports).to(['read', 'write', 'delete'])
    ]
  })
});
This access definition will add the environment variable myReports_BUCKET_NAME to the function. This environment variable can be accessed on the env object.
Here's an example of how it can be used to upload some content to S3.
amplify/functions/generate-monthly-reports/handler.ts
Copyamplify/functions/generate-monthly-reports/handler.ts code example
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { env } from '$amplify/env/generate-monthly-reports';

const s3Client = new S3Client();

export const handler = async () => {
  const command = new PutObjectCommand({
    Bucket: env.MY_REPORTS_BUCKET_NAME,
    Key: `reports/${new Date().toISOString()}.csv`,
    Body: new Blob([''], { type: 'text/csv;charset=utf-8;' })
  });

  await s3Client.send(command);
};
Using CDK
When permissions are needed to access resources beyond the capabilities of the access property, you must use CDK.
Functions are created with an execution role, which is an IAM role that contains policies that dictate what resources your Function can interact with when it executes. This role can be extended using the addToRolePolicy() method:
amplify/backend.ts
import { defineBackend } from "@aws-amplify/backend"
import * as iam from "aws-cdk-lib/aws-iam"
import * as sns from "aws-cdk-lib/aws-sns"
import { weeklyDigest } from "./functions/weekly-digest/resource"

const backend = defineBackend({
  weeklyDigest,
})

const weeklyDigestLambda = backend.weeklyDigest.resources.lambda

const topicStack = backend.createStack("WeeklyDigest")
const topic = new sns.Topic(topicStack, "Topic", {
  displayName: "digest",
})

Copyhighlighted code example
const statement = new iam.PolicyStatement({
  sid: "AllowPublishToDigest",
  actions: ["sns:Publish"],
  resources: [topic.topicArn],
})

weeklyDigestLambda.addToRolePolicy(statement)
However some constructs provide a grant* method to grant access to common policy actions. Revisiting the example above you can grant the same access with grantPublish:
amplify/backend.ts
import { defineBackend } from "@aws-amplify/backend"
import * as sns from "aws-cdk-lib/aws-sns"
import { weeklyDigest } from "./functions/weekly-digest/resource"

const backend = defineBackend({
  weeklyDigest,
})

const weeklyDigestLambda = backend.weeklyDigest.resources.lambda

const topicStack = backend.createStack("WeeklyDigest")
const topic = new sns.Topic(topicStack, "Topic", {
  displayName: "digest"
})

Copyhighlighted code example
topic.grantPublish(weeklyDigestLambda)

PREVIOUS




Server-Side Rendering
This guide walks through how to use Amplify Auth and Data APIs from Next.js server-side runtimes.

Install the Amplify Next.js adapter
To use Amplify APIs server-side, you need to install the Amplify Next.js adapter in addition to the Amplify libraries:

Terminal
npm add aws-amplify @aws-amplify/adapter-nextjs
Configure Amplify APIs for server-side usage
You will need to create a runWithAmplifyServerContextRunner function to use Amplify APIs on the server-side of your Next.js app.

You can create an amplifyServerUtils.ts file under a utils folder in your codebase. In this file, you will import the Amplify backend outputs from the amplify_outputs.json file that is generated by the Amplify CLI, and use the createServerRunner function to create the runWithAmplifyServerContextRunner function.

For example, the utils/amplifyServerUtils.ts file may contain the following content:

import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import outputs from '@/amplify_outputs.json';

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs
});
You can use the exported runWithAmplifyServerContext function to call Amplify APIs within isolated request contexts. You can review examples under the Calling Amplify category APIs on the server side section.

TIP: You only need to call the createServerRunner function once and reuse the runWithAmplifyServerContext function throughout.

Configure Amplify library for client-side usage
When you use the Amplify library on the client-side of your Next.js app, you will need to configure Amplify by calling the Amplify.configure as you would to use Amplify in a single-page application.

NOTE: To use the Amplify library on the client side in a Next.js app, you will need to set ssr to true when calling Amplify.configure. This instructs the Amplify library to store tokens in the cookie store of a browser. Cookies will be sent along with requests to your Next.js server for authentication.

'use client';

import outputs from '@/amplify_outputs.json';
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs, {
  ssr: true // required when using Amplify with Next.js
});

export default function RootLayoutThatConfiguresAmplifyOnTheClient({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
To avoid repetitive calls to Amplify.configure, you can call it once in a top-level client-side rendered layout component.

Learn more
Configure Amplify in a Next.js App Router application
Authentication with Next.js server-side runtime
You can use the Amplify Auth category APIs to sign up and sign in your end users on the client side. When you set ssr: true when calling Amplify.configure, the Amplify library uses cookies to store tokens which will be sent along with HTTP requests to your Next.js app server.

Manage Auth session with the Next.js Middleware
You can use the fetchAuthSession API to check the auth sessions that are attached to the incoming requests in the middleware of your Next.js app to protect your routes. For example:

import { fetchAuthSession } from 'aws-amplify/auth/server';
import { NextRequest, NextResponse } from 'next/server';
import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return (
          session.tokens?.accessToken !== undefined &&
          session.tokens?.idToken !== undefined
        );
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  });

  if (authenticated) {
    return response;
  }

  return NextResponse.redirect(new URL('/sign-in', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sign-in).*)'
  ]
};
In this example, if the incoming request is not associated with a valid user session the request will be redirected to the /sign-in route.

NOTE: When calling fetchAuthSession with a response context, it will send the refreshed tokens (if any) back to the client via the Set-Cookie header in the response.

Calling Amplify category APIs on the server side
For the Auth categories to use Amplify APIs on the server in your Next.js app, you will need to:

Import the API from the /server sub path.
Use the runWithAmplifyServerContext helper function created by calling the createServerRunner function exported from @aws-amplify/adapter-nextjs to call the Amplify API in an isolated server context.
For the GraphQL API category, review Connect to data from Server-side Runtimes.

NOTE: A subset of Amplify APIs can now be called on the server side of a Next.js app. These APIs are exported from the /server sub paths. See the full list of supported APIs.

Note: If you use the Amplify server-side APIs in a server action and encounter the following error running next build:

./node_modules/@aws-amplify/core/node_modules/@aws-crypto/sha256-js/build/module/index.js + 12 modules

Cannot get final name for export 'fromUtf8' of ./node_modules/@smithy/util-utf8/dist-es/index.js

You can add the following to your next.config.js:

next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@aws-crypto'],
  },
};
See Next.js documentation on serverComponentsExternalPackages for more details.

With Next.js App Router
Dynamic rendering in React server component
Dynamic rendering is based on a user session extracted from an incoming request.

import { cookies } from 'next/headers';
import { getCurrentUser } from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';

// This page always dynamically renders per request
export const dynamic = 'force-dynamic';

export default async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec)
    });

    return (
      <AuthFetchResult
        description="The API is called on the server side."
        data={currentUser}
      />
    );
  } catch (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }
}
Static rendering in React server component
Static rendering does not require a user session, so you can specify the nextServerContext parameter as null. This is useful for some use cases; for example, when you are using the Storage API with guest access (if you have enabled it in your backend).

import { getUrl } from 'aws-amplify/storage/server';
import Image from 'next/image';
import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';

// Re-render this page every 60 minutes
export const revalidate = 60 * 60; // in seconds

export default async function StaticallyRenderedPage() {
  try {
    const splashUrl = await runWithAmplifyServerContext({
      nextServerContext: null,
      operation: (contextSpec) =>
        getUrl(contextSpec, {
          key: 'splash.png'
        })
    });

    return (
      <Image
        src={splashUrl.url.toString()}
        alt="Splash Image"
        width={500}
        height={500}
      />
    );
  } catch (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }
}
NOTE: The URL returned by the getUrl API expires in the above example. You may want to specify the revalidate parameter to rerender the page as required to ensure the URL gets regenerated.

In Route Handlers
In route handlers require implementing an API route that enables GET /apis/get-current-user.

import { getCurrentUser } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';

export async function GET() {
  const user = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => getCurrentUser(contextSpec)
  });

  return NextResponse.json({ user });
}
When you call fetch('/apis/get-current-user') it returns a payload that contains the user data for the current signed-in user.

With Next.js Pages Router
In getServerSideProps
The following example extracts current user data from the request and provides them to a page react component via its props.

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const currentUser = await runWithAmplifyServerContext({
    nextServerContext: { request: req, response: res },
    operation: (contextSpec) => getCurrentUser(contextSpec)
  });

  return { props: { currentUser } };
};
In getStaticProps
Similar to static rendering with the App Router, you can pass null as the value of the nextServerContext parameter to use the Amplify Storage API with guest access.

export async function getStaticProps() {
  const splashUrl = await runWithAmplifyServerContext({
    nextServerContext: null,
    operation: (contextSpec) => getUrl(contextSpec, { key: 'splash.png' })
  });

  return {
    props: { imageUrl: splashUrl.url.toString() },
    revalidate: (splashUrl.expiresAt.getTime() - Date.now()) / 1000 // in seconds
  };
}
Supported APIs for Next.js server-side usage
All APIs that support use on the server are exported from the aws-amplify/<category>/server sub paths. You must use these APIs for any server-side use cases.

Category	APIs	Server (Node.js) Amplify Hosting/Vercel	Vercel Edge Runtime (middleware)
Auth	fetchAuthSession	✅	✅
Auth	fetchUserAttributes	✅	✅
Auth	getCurrentUser	✅	✅
Data	generateServerClientUsingCookies	✅	
Data	generateServerClientUsingReqRes	✅	
Storage	getUrl	✅	
Storage	getProperties	✅	
Storage	list	✅	
Storage	remove	✅	
Storage	copy	