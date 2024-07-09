# GTM (Google Tag Manager) Integration

## Import Base Pixel

**Note:** Only 1 base pixel is needed per website/web app.

1. Download the base pixel template from [here](https://cdn.persona3.tech/assets/files/persona-base-pixel-template.tpl)
2. In the google tag manager workspace, select "Templates" from the left-hand navigation menu and click "New" and click on the "three dots" on the top right.
3. In the dropdown that opens up, select "Import" and select the template file that you downloaded in step 1.
4. Click "Save" and close the template editor.
5. In the google tag manager workspace, select "Tags" from the left-hand navigation menu and click "New" and click on "Tag Configuration".
6. In the dialog/sheet that opens up, select "Persona Base Pixel" from the "Custom" section. 
7. Give your tag a title. Otherwise, it will default to "Untitled Tag".
8. An api key is needed to successfully setup the base tag, which can be generated on [Persona's ad platform](https://ads.persona3.io/conversions "Persona's ad platform"). Log in to the platform and click "Conversions" from the left-hand navigation menu > click on Add new event source > Enter your website name and url > click on "Save & Continue".
<img width="697" alt="Screenshot 2024-07-01 at 11 36 16 AM" src="https://github.com/persona-3/attribution-sdk-examples/assets/132479297/7fb2b054-d321-4e46-b477-fb62ef1d5894">

9. Copy and paste the "api key" into the Persona Base tag template.
10. Choose trigger named "Initialization - All Pages" with type "Initialization".
<img width="1680" alt="Screenshot 2024-07-01 at 11 37 31 AM" src="https://github.com/persona-3/attribution-sdk-examples/assets/132479297/666af1ae-c74d-431d-9b1e-ac84d85864c7">
11. Click "Save".


## Import Event Pixel

**Note:** Please ensure you have configured the base pixel before creating event pixel

1. Download the event pixel template from [here](https://cdn.persona3.tech/assets/files/persona-event-pixel-template.tpl)
2. In the google tag manager workspace, select "Templates" from the left-hand navigation menu and click "New" and click on the "three dots" on the top right.
3. In the dropdown that opens up, select "Import" and select the template file that you downloaded in step 1.
4. Click "Save" and close the template editor. 
5. In the google tag manager workspace, select "Tags" from the left-hand navigation menu and click "New" and click on "Tag Configuration".
5. In the dialog/sheet that opens up, select "Persona Event Pixel" from the "Custom" section. 
7. Give your tag a title. Otherwise, it will default to "Untitled Tag".
8. An event id is needed to successfully setup the event tag, which can be generated on [Persona's ad platform](https://ads.persona3.io/conversions "Persona's ad platform"). Log in to the platform and click "Conversions" from the left-hand navigation menu > click on "Add new event" under appropriate event source > Choose appropriate event type and enter event name > click on "Save & Continue".
<img width="699" alt="Screenshot 2024-07-01 at 11 41 09 AM" src="https://github.com/persona-3/attribution-sdk-examples/assets/132479297/6699f5f2-457a-42b0-a12f-e4d34afeb8d7">
9. Copy and paste the "event id" into the Persona Event tag template.
10. Optionally you can add any additional event parameters such as user email, purchase amount etc.
11. Add the necessary triggers to have the tag event load on a specific set of actions.
12. Click "Save".
13. Complete similar steps for different type of events that you'd like to track. Please ensure that a particular event id is associated with only 1 event pixel.