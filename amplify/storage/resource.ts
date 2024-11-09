import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTeamDrive',
  access: (allow) => ({
    'cv-uploads/{identity_id}/*': [
      allow.guest.to(['read', 'write']),
      allow.authenticated.to(['read', 'write', 'delete'])
    ]
  })
});

// Add your storage resource configuration here
export const storageResource = {
  // Your storage configuration
};
