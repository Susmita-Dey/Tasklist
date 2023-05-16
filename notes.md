When you're using a bundler (like Vite or Rollup), import the Appwrite module when you need it:
```
import { Client } from 'appwrite';
```

**Init your SDK**
Now that you've downloaded the SDK, it's time to initialze it. Use your project ID, which can be found in your project settings page.

```
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6462506338a4e75006ce');
```