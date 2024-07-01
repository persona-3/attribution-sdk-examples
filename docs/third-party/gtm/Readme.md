#GTM (Google Tag Manager) Integration

##Create Base Pixel

**Note:** Only 1 base pixel is needed per website/web app.

1. In the google tag manager workspace, select "Tags" from the left-hand navigation menu and click "New" and click on "Tag Configuration".
2. In the dialog/sheet that opens up, select "Discover more tag tag types in the community template gallery" and search for "Persona Base Pixel".
3. Select "Persona Base Pixel" and click on "Add to workspace".
4. Give your tag a title. Otherwise, it will default to "Untitled Tag".
5. An api key is needed to successfully setup the base tag, which can be generated on [Persona's ad platform](http://https://ads.persona3.io/conversions "Persona's ad platform"). Log in to the platform and click "Conversions" from the left-hand navigation menu > click on Add new event source > Enter your website name and url > click on "Save & Continue".
6. Copy and paste the "api key" into the Persona Base tag template.
7. Choose trigger named "Initialization - All Pages" with type "Initialization".
8. Click "Save".


##Create Event Pixel

**Note:** Please ensure you have configured the base pixel before creating event pixel

1. In the google tag manager workspace, select "Tags" from the left-hand navigation menu and click "New" and click on "Tag Configuration".
2. In the dialog/sheet that opens up, select "Discover more tag tag types in the community template gallery" and search for "Persona Event Pixel".
3. Select "Persona Event Pixel" and click on "Add to workspace".
4. Give your tag a title. Otherwise, it will default to "Untitled Tag".
5. An event id is needed to successfully setup the base tag, which can be generated on [Persona's ad platform](http://https://ads.persona3.io/conversions "Persona's ad platform"). Log in to the platform and click "Conversions" from the left-hand navigation menu > click on "Add new event" under appropriate event source > Choose appropriate event type and enter event name > click on "Save & Continue".
6. Copy and paste the "event id" into the Persona Event tag template.
7. Optionally you can add any additional event parameters such as user email, purchase amount etc.
8. Add the necessary triggers to have the tag event load on a specific set of actions.
9. Click "Save".
10. Complete similar steps for different type of events that you'd like to track. Please ensure that a particular event id is associated with only 1 event pixel.
