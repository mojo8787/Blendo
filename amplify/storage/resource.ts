import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTeamDrive',
  access: (allow) => ({
    'public/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
      allow.guest.to(['read', 'write'])
    ],
    'public/motasem/cv-uploads/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
      allow.guest.to(['write'])
    ]
  })
});

// Add your storage resource configuration here
export const storageResource = {
  // Your storage configuration
};
