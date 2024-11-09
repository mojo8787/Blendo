# AWS Amplify Project Overview

This document provides an overview of the AWS Amplify project, detailing the data schema, storage configuration, function definitions, and their integration with frontend components. It explains how these components interact to provide a structured and secure backend for the application.

## 1. Data Schema and Authorization (`amplify/data/resource.ts`)

### Purpose
Defines the data schema and authorization rules for the backend using AWS Amplify.

### Key Components
- **Schema Definition**:
  - **JobApplication**: Includes fields such as `name`, `email`, `mobile`, `jobDesire`, `personalImage`, and `cv`.
  - **ContactInquiry**: Includes fields such as `name`, `email`, `mobile`, and `message`.
- **Authorization**:
  - **JobApplication**: 
    - Guests can create applications.
    - Authenticated users can read, update, and delete applications.
  - **ContactInquiry**: 
    - Guests have access to create, read, update, and delete inquiries.
- **Query Definition**:
  - **sayHello**: A query that accepts a `name` argument and returns a string. It allows guest access and uses a handler function.
- **Exported Types and Data**:
  - **Schema**: Type definition for the schema.
  - **data**: Configures the data with the schema and sets the default authorization mode to `iam`.

### Relationship
This file sets up the data models and their access rules, which are used by the frontend to interact with the backend.

## 2. Storage Configuration (`amplify/storage/resource.ts`)

### Purpose
Defines storage resources and access permissions for S3 buckets.

### Key Components
- **Storage Definition**:
  - **amplifyTeamDrive**: Configures paths and access permissions for `guest` and `authenticated` users.
  - Paths like `motasem/cv-uploads/*` and `motasem/public/*` have specific read, write, and delete permissions.
- **Exported Storage Resource**:
  - **storageResource**: Placeholder for additional storage configuration.

### Relationship
This file configures how files are stored and accessed, complementing the data models that might reference these storage paths (e.g., `cv` and `personalImage` fields in `JobApplication`).

## 3. Function Definitions

### `amplify/data/functions/resource.ts`

#### Purpose
Defines a function resource for the backend.

#### Key Components
- **Function Definition**:
  - **sayHello**: A function named `say-hello` with an entry point at `./handler.ts`.

#### Relationship
This function is referenced in the `sayHello` query in `amplify/data/resource.ts`, providing the logic for handling the query.

### `amplify/functions/say-hello/resource.ts`

#### Purpose
Another definition for the `sayHello` function, similar to the one in `amplify/data/functions/resource.ts`.

#### Key Components
- **Function Definition**:
  - **sayHello**: A function named `sayHello` with an entry point at `./handler.ts`.

#### Relationship
This file appears to duplicate the function definition from `amplify/data/functions/resource.ts`. It should be ensured that both definitions are consistent and necessary, or consolidated if possible.

## 4. Frontend Components

### `CareersPage.vue`

#### Purpose
Displays job listings and allows users to apply for jobs by submitting their CVs and personal information.

#### Key Features
- **Job Listings**: Displays a list of current job openings.
- **Application Form**: Allows users to submit their CV and personal information.
- **File Upload**: Handles the upload of personal images and CVs to AWS S3.
- **Data Submission**: Submits application data to the backend using AWS Amplify Data client.

#### Relationship to AWS Amplify
- **Data Models**: Interacts with the `JobApplication` model to create new job applications.
- **Storage**: Utilizes storage configuration to upload files to specific S3 paths.

### `ContactUsPage.vue`

#### Purpose
Provides a contact form for users to send messages to the company.

#### Key Features
- **Contact Information**: Displays main office and branch contact details.
- **Contact Form**: Allows users to submit their name, email, mobile number, and message.
- **Form Submission**: Sends contact form data to a backend endpoint.

#### Relationship to AWS Amplify
- **Data Models**: Represents a similar use case to `ContactInquiry` for collecting user input.
- **Backend Interaction**: Demonstrates frontend-to-backend data submission using AWS Amplify's API client. The form data is submitted to the `ContactInquiry` model in the backend using the `generateClient` function from `@aws-amplify/api`, configured with IAM authentication.

## Overall Relationship

- **Data and Storage**: The `amplify/data/resource.ts` file defines the data models and their access rules, while `amplify/storage/resource.ts` configures the storage resources that these models might use.
- **Functions**: The `sayHello` function is defined in both `amplify/data/functions/resource.ts` and `amplify/functions/say-hello/resource.ts`, providing backend logic that can be invoked by the data models.
- **Frontend Interaction**: The data schema and storage configurations are used by the frontend to perform CRUD operations and manage file storage, as indicated by the comments in `amplify/data/resource.ts`.

This setup allows for a structured and secure way to manage data and storage in an AWS Amplify project, with clear separation of concerns between data models, storage, functions, and frontend components.