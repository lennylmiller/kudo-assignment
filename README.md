# Overview
 * [Get Started](#get-started) - Getting the app running locally on your machine.
 * [App Functionality](#app-functionality) - A document provided to me as a coding challenge. 
 * [Todo List](#todo-list) - A few reads of the [App Functionality](#app-functionality) led to a list of todo's. I use this to guide my journey.
## Get Started 

Checkout the project and navigate to the directory then do the following; 

open the first terminal window and;
```bash
npm install
npm start
```
open a second terminal window and navigate to the project directory and then type
```bash
npm run server
```
### App Functionality

The person using your application should have a way of impersonating/logging in as an existing user. (This could be as simple as having a login box that appears at the root of the application that lets the user select a name from the list of existing users. Alternatively, you could create your own account creation process to allow a user to sign up for an account.) Your application should work correctly regardless of which user is selected. Once the user logs in, the home page should be shown.

We always want to make sure we know who the logged in user is, so information about the logged in user should appear on the page. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in.

Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions should be shown by default, and the name of the logged in user should be visible on the page.

What would be the point of seeing answered and unanswered polling questions if we couldn’t actually vote or see the results? Each polling question should link to the details of that poll. The details of each poll should be available at questions/:question_id.

When a poll is clicked on the home page, the following is shown:

Text “Would You Rather”;
Avatar of the user who posted the polling question; and
Two options.
For answered polls, each of the two options contains the following:

Text of the option;
Number of people who voted for that option; and
Percentage of people who voted for that option.
The option selected by the logged-in user should be clearly marked.

Since we want to make sure our application creates a good user experience, the application should show a 404 page if the user is trying to access a poll that does not exist. (Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is set up in this application.) It should also display a navigation bar so that the user can easily navigate anywhere in the application.

So what happens when someone votes in a poll? Upon voting in a poll, all of the information of an answered poll should be displayed. The user’s response should be recorded and clearly visible on the poll details page. Users can only vote once per poll; they shouldn’t be allowed to change their answer after they’ve voted -- no cheating allowed! When the user comes back to the home page, the polling question should appear in the “Answered” column.

It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions should be available at the /add route. The application should show the text “Would You Rather” and have a form for creating two options. Upon submitting the form, a new poll should be created, the user should be taken to the home page, and the new polling question should appear in the correct category on the home page.

But how can we know how many questions each user has asked and answered? Let’s get some healthy competition going here! The application should have a leaderboard that’s available at the /leaderboard route. Each entry on the leaderboard should contain the following:

User’s name;
User's picture
Number of questions the user asked and
Number of questions the user answered

Users should be ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions you ask and answer, the higher up you move.

The user should be able to navigate to the leaderboard, to a specific question, and to the form that allows the user to create a new poll both from within the app and by typing in the address into the address bar. To make sure we’re showing the data that is relevant to the user, the application should require the user to be signed in order to access those pages.
### Todo List

- [ ] Saving the user while answering a question is is blocked because the server is bugged. **SERVER BUGGED**.  
- [x] Show 404 for a question that doesn't exist.
  - [x] The design I chose uses modal dialogs so we may not need this, lets discuss it.
- [x] Way of impersonating/logging in as an existing user.
- [x] Know Who the logged in user is.
- [x] Show logged in user their list of questions.
- [x] Newest questions at the top. Sort by timestamp.
- [x] Create a leader board 
- [x] Order leader board by (numberAsked + numberAnswered)
- [x] Only show logged in user questions in /questions.
- [x] Toggle between answered and unanswered questions.
- [x] Logged in user can answer unanswered questions
- [x] View question details by clicking row.
- [x] Input answers to question details.
- [x] Save a polling question
- [x] Save Question
- [ ] Partial Update for user is blocked by **SERVER BUGGED**.
- [x] Only answer question once.
- [x] If answered use readonly dialog
- [x] Logged in user can read answered questions
- [x] Users response should be recorded and clearly visible on question details page.
- [x] Immediately after answering a question, it should switch to the Answered tab.
- [x] Upon answering a poll, switch to finished question popup.
- [x] Create a new question "Would you rather ________________ or _______________".
- [x] Navigate to valid url 
- [x] Entering an address in address bar redirects to login.

- [x] Login and Logout Toolbar Butons do not show up. app.component's
- [x] Match spinner background with other background
- [x] Cleanup 
---

## Would like a do-over
 - [x] Have the auth service use the users/model
 - [ ] Centralize the store artifacts, 
 - [ ] combine auth with user (store)
### Assets

* <https://kudo-assignment.s3-us-west-2.amazonaws.com/survey-clipart.jpg>
* <https://kudo-assignment.s3-us-west-2.amazonaws.com/asdf.jpg>
* <https://kudo-assignment.s3-us-west-2.amazonaws.com/index.jpg>
* <https://kudo-assignment.s3-us-west-2.amazonaws.com/johndoe.jpg>
* <https://kudo-assignment.s3-us-west-2.amazonaws.com/julian.jpg>
* <https://kudo-assignment.s3-us-west-2.amazonaws.com/memory-loss.jpeg>
* <https://kudo-assignment.s3-us-west-2.amazonaws.com/rashmi.jpg>
* <https://kudo-assignment.s3-us-west-2.amazonaws.com/survey-clipart.jpg>
