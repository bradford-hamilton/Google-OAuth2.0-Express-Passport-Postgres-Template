##Google OAuth2.0 with Express & Passport Template
This is a template for using Google OAuth2.0 with Express and Passport.js. I will be adding more in the next couple days. It's functional for local use right now.

1. Clone the repo, cd into it, and run npm install.

2. Make sure you have PostgreSQL installed and run createdb <database name> in your command line. Name your db whatever you'd like

3. Open up knexfile.js and under development > connection replace your-database-name, replace with the name of the db you just created.

4. Run 'knex migrate:latest' in the command line

5. Go to [https://console.developers.google.com/](https://console.developers.google.com/) and 'create credentials' for 'OAuth ClientId'.

6. Select 'Web Application' and give it a name.

7. Set 'Authorized JavaScript origins' to whatever local port you are running the app on (in this template it's set to http://127.0.0.1:1337)

8. Set Authorized redirect URIs' to http://127.0.0.1:1337/auth/google/callback

9. It will show you clientId and you can click okay. When you get back to the credentials page you can click on your app name and it will give you Client ID and Client secret which you can access at any time. Leave this page open, as we need to put it into our app in step 8.

10. Click on 'Overview' on the left side nav and then find the Google+ api. Click on it. Enable that api.

11. Go back into editor and create a .env file. Add into that file 3 new environment variables:

        GOOGLE_CLIENT_ID= <your client id>
        GOOGLE_CLIENT_SECRET= <your client secret>
        SESSION_KEY= <whatever you want>

12. Make certain your .env file is included in your .gitignore - it should already be.

13. Run npm start or nodemon and visit http://localhost:1337

14. As is, the only thing saved into your database after logging in via Google is the user's googleId. I wanted to set up the db to a basic level. There are many Mongo examples, but not many others... I also left a console.log in on the auth.js file in the GoogleStrategy so that you can view what's coming back from Google and use the info however you'd like!

15. :)
