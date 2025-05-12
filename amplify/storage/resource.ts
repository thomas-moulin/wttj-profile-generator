// amplify/storage/resource.ts
import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'wttj-datascience-junglelabs',
  access: (allow) => ({
    'company_data/*': [
      allow.guest.to(['read']), // Allow public read access to company data
    ],
  })
});
