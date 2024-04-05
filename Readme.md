# Attribution SDK

The attribution tag is available as a JavaScript library that can be imported into any web-based application. This attribution tag can be integrated in two ways -

1. Integration via script tag
2. Integration via npm

# Integration via script tag

This is the most simple way to integrate the sdk in your app. To load the attribution tag in your app, insert the following script in the `<head>` section of your app / page where you’d like to perform analytics.

### Tag Initialization

```
<script src="https://cdn.jsdelivr.net/npm/@personaxyz/attribution-sdk@latest" crossorigin="anonymous"></script>
<script>window.persona || _persona.Attribution.init({ apiKey:'<YOUR_API_KEY_HERE>' }); window.persona = _persona.Attribution;</script>
```

The above code snippet will download the tag followed by auto initialization of user session tracking on the page.
**Note**: Please ensure you are using correct value for the **API Key**.

### Track Custom Events

Once the tag is initialized using the above snippet, you can track any custom event on user triggered actions such as button clicks, form submit etc. by using the following snippet.

```
persona.track(<Your_custom_event_name>, <Your_custom_properties>);
```

**Note**: The event properties are optional but if provided, should be a valid JSON object with string values.

---

# Integration via npm

If you prefer integrating through npm, you can follow the below steps for integration.

1. Install the sdk
2. Initialize the sdk once on page/app startup to enable auto tracking of user sessions.
3. Start tracking custom events

### Installation

To install the sdk , run the following command

```
npm install @personaxyz/attribution-sdk@latest
```

### Initialization

To start tracking user sessions on the page, simply initialize this **once** in the app and it will start tracking user sessions automatically.

```
import { Attribution } from '@personaxyz/attribution-sdk';
Attribution.init({
            apiKey: "<Your_API_Key_here>"
 });
```

**Note**: Please ensure you are using correct value for the **API Key**.

### Tracking Custom Events

Once the sdk is initialized using the above snippet, you can track any custom event on user triggered actions such as button clicks, form submit etc. by using the following snippet.

```
Attribution.track(<Your_custom_event_name>, <Your_custom_properties>);
```

**Note**: The event properties are optional but if provided, should be a valid JSON object with string values.
