##Google OAuth2.0 with Express & Passport Template
This is a template for using Google OAuth2.0 with Express and Passport.js. I will be adding more in the next couple days. It's functional for local use right now.

1. Clone the repo, cd into it, and run npm install.

2. Go to [https://console.developers.google.com/](https://console.developers.google.com/) and 'create credentials' for 'OAuth ClientId'.

3. Select 'Web Application' and give it a name.

4. Set 'Authorized JavaScript origins' to whatever local port you are running the app on (in this template it's set to http://127.0.0.1:1337)

5. Set Authorized redirect URIs' to http://127.0.0.1:1337/auth/google/callback

6. It will show you clientId and you can click okay. When you get back to the credentials page you can click on your app name and it will give you Client ID and Client secret which you can access at any time. Leave this page open, as we need to put it into our app in step 8.

7. Click on 'Overview' on the left side nav and then find the Google+ api. Click on it. Enable that api.

8. Go back into editor and create a .env file. Add into that file 3 new environment variables:

        GOOGLE_CLIENT_ID= <your client id>
        GOOGLE_CLIENT_SECRET= <your client secret>
        SESSION_KEY= <whatever you want>

9. Make certain your .env file is included in your .gitignore - it should already be.

10. Run node/nodemon on app.js and visit http://localhost:1337

11. :)
