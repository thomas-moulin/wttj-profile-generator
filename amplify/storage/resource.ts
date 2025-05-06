// amplify/storage/resource.ts
import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'companyDataStorage',
  access: (allow) => ({
    'wttj-datascience-junglelabs/*': [
      allow.guest.to(['read']), // Allow public read access to company data
    ],
  })
});
