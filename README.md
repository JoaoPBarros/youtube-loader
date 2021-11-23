**WARNING**: This is not a ordinary react-app! This is a custom app and for that the scripts are diferents than usual. Please follow the steps.

Inicialize using `yarn install` then `yarn dev` for a development environment.

Use `yarn build` for a production environment.

_This application may not function well with `npm` commands._

How the application works:

When the program starts, the user will see a login screen with a button to logon;

The logic in login screen is:

    1 - Does client has a google token ? Send to search screen : ask me again later;
    2 - Does localStorage has a key (google token) ? Set the key as a google token in client and make the first question : ask me later;
    3 - Does client logon with google ? Save the google token in client, save in localStorage and make the first question : wait until the user do it;

After the user make logon with google and the client receive and save the google token, change the exibition to the search area. Without a google token the user will canot access the search area.

In the search area the user may make a search, and when is searching is possible to click and see on the browser the selected video.
