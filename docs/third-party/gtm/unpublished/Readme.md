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
8. An API key is needed to successfully set up the base tag, which can be generated on [Persona's ad platform](https://ads.persona3.io/conversions "Persona's ad platform"). Log in to the platform and click "Conversions" from the left-hand navigation menu > click on Create Conversion Actions > Create an Event Source > Create an Event. After you create an event, you can find the API key here:    
    <div style="display: flex; justify-content:center; items:center; padding:16px;">
      <img style="border: 1px solid black; border-radius: 8px;" src="https://github.com/user-attachments/assets/c42ae357-afca-42ed-a4e3-680681f1b81f" alt="Creating a new event source" width="800" height="350"/>
    </div>
9. You can find API keys for the event sources you created by clicking "Conversions" from the left-hand navigation menu:
  <div style="display: flex; justify-content:center; items:center; padding:16px;"><img style="border: 1px solid black; border-radius: 8px;"  width="100%" alt="Screenshot 2024-09-09 at 7 11 52 PM" src="https://github.com/user-attachments/assets/24d0ad8f-30c8-4a63-9d01-604f96e106e8"> </div>
10. Copy and paste the "API key" into the Persona Base tag template.
11. Choose the trigger named "Initialization - All Pages" with type "Initialization".
    ![Choosing a trigger](https://github.com/persona-3/attribution-sdk-examples/assets/132479297/666af1ae-c74d-431d-9b1e-ac84d85864c7)
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
8. An event ID is needed to successfully setup the event tag, which can be generated on [Persona's ad platform](https://ads.persona3.io/conversions "Persona's ad platform"). Log in to the platform and click "Conversions" from the left-hand navigation menu > click on "Add new event" under appropriate event source > Choose appropriate event type and enter event name > click on "Save & Continue".
    ![Adding new Event](https://github.com/persona-3/attribution-sdk-examples/assets/132479297/6699f5f2-457a-42b0-a12f-e4d34afeb8d7)
9. Copy and paste the "event ID" into the Persona Event tag template.
10. Optionally, you can add any additional event parameters such as user email, purchase amount, etc.
11. Add the necessary triggers to have the tag event load on a specific set of actions.
12. Click "Save".
13. Complete similar steps for different types of events that you'd like to track. Please ensure that a particular event ID is associated with only one event pixel.

