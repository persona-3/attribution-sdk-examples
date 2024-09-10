# GTM (Google Tag Manager) Integration

## Import Base Pixel

**Note:** Only 1 base pixel is needed per website/web app.

1. Download the base pixel template from [here](https://cdn.persona3.tech/assets/files/persona-base-pixel-template.tpl).
2. In the Google Tag Manager workspace, select "Templates" from the left-hand navigation menu and click "New", then click on the "three dots" on the top right.
3. In the dropdown that opens up, select "Import" and select the template file that you downloaded in step 1.
4. Click "Save" and close the template editor.
5. In the Google Tag Manager workspace, select "Tags" from the left-hand navigation menu and click "New", then click on "Tag Configuration".
6. In the dialog/sheet that opens up, select "Persona Base Pixel" from the "Custom" section.
7. Give your tag a title. Otherwise, it will default to "Untitled Tag".
8. An API key is needed to successfully set up the base tag. To get the API Key, select "Conversions" from the left-hand navigation menu: <div style="display: flex; justify-content:center; items:center; padding:16px;"><img style="border-radius: 8px;" src="https://github.com/user-attachments/assets/dfa286ae-64dc-4237-80b3-5cddbe991202" alt="Conversions Tab" width="800" height="350"/></div>
9. Click on Create Conversion Actions > Fill the Form to add a new source for your events, then you can create a new event for this source. After you create an event, you can find the API key on the next page:    
    <div style="display: flex; justify-content:center; items:center; padding:16px;">
      <img style="border-radius: 8px;" src="https://github.com/user-attachments/assets/c42ae357-afca-42ed-a4e3-680681f1b81f" alt="Creating a new event source" width="800" height="350"/>
    </div>
10. You can also find the API key for an existing event source by clicking "Conversions" from the left-hand navigation menu and scrolling to the appropriate event source:
  <div style="display: flex; justify-content:center; items:center; padding:16px;"><img width="800" alt="api-key-loc" src="https://github.com/user-attachments/assets/24d0ad8f-30c8-4a63-9d01-604f96e106e8" /> </div>
10. Copy and paste the "API key" into the Persona Base tag template.
11. Choose the trigger named "Initialization - All Pages" with type "Initialization".<div style="display: flex; justify-content:center; items:center; padding:16px;"><img width="800" alt="Choosing a trigger" src="https://github.com/persona-3/attribution-sdk-examples/assets/132479297/666af1ae-c74d-431d-9b1e-ac84d85864c7" /> </div>
12. Click "Save".


## Import Event Pixel

**Note:** Please ensure you have configured the base pixel before creating the event pixel.

1. Download the event pixel template from [here](https://cdn.persona3.tech/assets/files/persona-event-pixel-template.tpl).
2. In the Google Tag Manager workspace, select "Templates" from the left-hand navigation menu and click "New", then click on the "three dots" on the top right.
3. In the dropdown that opens up, select "Import" and select the template file that you downloaded in step 1.
4. Click "Save" and close the template editor.
5. In the Google Tag Manager workspace, select "Tags" from the left-hand navigation menu and click "New", then click on "Tag Configuration".
6. In the dialog/sheet that opens up, select "Persona Event Pixel" from the "Custom" section.
7. Give your tag a title. Otherwise, it will default to "Untitled Tag".
8. An event ID is needed to successfully setup the event tag. If you have already created an event, you can find it's event ID again by selecting the "Conversions" from the left-hand navigation menu > Scrolling to the event source > Choose the *Event Details* option for the event. <div style="display: flex; justify-content:center; items:center; padding:16px;"><img width="100%" alt="Screenshot 2024-09-09 at 7 11 52 PM" src="https://github.com/user-attachments/assets/181dce35-c447-4107-8223-20a83d6e911e"/></div>
9. If you have not created an event yet, follow these steps: Select "Conversions" from the left-hand navigation menu > Click on "Add event" under appropriate event source > Choose an event type and enter event name > Click on "Continue". <div style="display: flex; justify-content:center; items:center; padding:16px;"><img style="border-radius: 8px;"  width="100%" alt="Screenshot 2024-09-09 at 7 11 52 PM" src="https://github.com/user-attachments/assets/64fa16c5-9831-411a-932e-82f907d05cc9"/></div> 
10. You can find the event ID on the next page: <div style="display: flex; justify-content:center; items:center; padding:16px;"> <img style="border-radius: 8px;" src="https://github.com/user-attachments/assets/c42ae357-afca-42ed-a4e3-680681f1b81f" alt="Creating a new event source" width="800" height="350"/></div>
11. Copy and paste the "event ID" into the Persona Event tag template.
12. Optionally, you can add any additional event parameters such as user email, purchase amount, etc.
13. Add the necessary triggers to have the tag event load on a specific set of actions.
14. Click "Save".
15. Complete similar steps for different types of events that you'd like to track. Please ensure that a particular event ID is associated with only one event pixel.

