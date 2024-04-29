## Persona Attribution SDK example

### Initalizing The SDK
1. If you are using typescript, you would need to declare `_persona` and `persona` property in the global namespace to the window object to avoid any errors from typescript. Please refer to `src/app/globals.types.d.ts` file
2. To initialize the SDK , you can create a component with the `"use client"` directive which would initialize the SDK script. Please refer to `src/components/ScriptProvider.tsx`
3. Then wrap the entire app within the `ScriptProvider` component, preferably in the root layout. Check this for reference - `src/app/layout.tsx` 
**(Please note that by wrapping the entire app within ScriptProvider , we are still retaining the benefits of react server components because the entire app is still rendered as `children`)**


### Tracking Custom Events
Any sort of event such as button clicks, form submit etc. can be tracked using the following snippet - `window.persona.track(<Your_event_id>, <Your_custom_properties>)`. 
Check `src/app/page.tsx` and `src/components/ClickEventTracker.tsx` for an example
#### Note: The event properties should be a valid json object with string values.
