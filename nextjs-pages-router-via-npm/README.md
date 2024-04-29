## Persona Attribution SDK example

### Initalizing The SDK via npm
To integrate the sdk via npm, you can follow the below steps.
- Install the sdk
- Initialize the sdk once on page/app startup to enable auto tracking of user sessions.

1. To install the sdk, simply run the following command
`npm install @personaxyz/attribution-sdk@0.0.2`

2. Once the sdk is installed, you need to initialize the sdk once on app startup using the following snippet. Check `pages/_app.tsx` for reference
```
import { Attribution } from '@personaxyz/attribution-sdk';
Attribution.init({
    apiKey: "<Your_API_Key_here>"
});
```

3. Optionally, create a `*.d.ts` file if using typescript and add the following snippet to avoid any errors from typescript. Check `/globals.types.d.ts` for reference
```
declare module '@personaxyz/attribution-sdk';
```


### Tracking Custom Events
Any sort of event such as button clicks, form submit etc. can be tracked using the following snippet. Check `pages/index.tsx` or `pages/about/index.tsx` for reference
```
import { Attribution } from '@personaxyz/attribution-sdk';
Attribution.track(<Your_event_id>, <Your_custom_properties);
```
#### Note: The event properties are optional but if provided, should be a valid json object with string values.
