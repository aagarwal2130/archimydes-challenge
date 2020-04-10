Tasks
Login as admin or normal user: Create a login page with following components:

Email ID input field
Password field
Submit button
A toggle button to login as admin or normal user
On the click of submit button make a call to login API which will return an authentication token as response. You will find more details in the swagger documentation.

Once logged in; based on the userRoles, the user should navigate to either create a story option when logged in as a user, or see the stories available for review if logged in as an Admin.

Creating a Story as user:
Once logged in, a user of the platform should be able to create a User Story, (i.e a ticket or card) which will contain the information about the task which needs to be performed by the developer.

Summary (Input field)
Description (Text area)
Type (like enhancement, bugfix, development, QA) (Dropdown)
Complexity (Dropdown with values: Low, Mid, High)
Estimated time for completion (Input)
Cost associated to it (numeric Input showing $ as prefix of input)
Design a page with with the above inputs controls and a SUBMIT button. On Submit, validate the form and call Create Story API.
[Validations not done: Lack of Time]

Once the story is created take the user to story list page.

User Story List
Create a list page with the following columns to show the stories created by the logged in user:

ID
Summary
Description
Type
Complexity
Estimated time for completion
Cost
The user should be able to sort the stories by the Story ID and complexity. To keep it simple, sorting will be done based only one column at a time, no chaining is needed.
[One way ascending sorting implemented (No toggle sorting) Sorting on complexity will be based on keywords "high", "mid", "low" as the service is returning these values and no manipulation has been done on front end]

The user should be able to filter the stories by type
[Filter works for only one type. Successive filtration would show empty list]

Admin Story List
When logged in as Admin, the admin should be able to see all the stories. The story list will be the same as the users list view.

ID
Summary
Description
Type
Complexity
Estimated time for completion
Cost
NOTE: If for a story the status is ‘rejected’ then the particular story row color should be RED, if the status is accepted then row should be in GREEN else the row color should be BLACK
[status is not returned in the response of user story list and hence the note could not be implemented]

Admin Story Review
As an Admin, he/she should be able to see the story details page when clicked on a row. Admin can either approve or reject the user story. Elements on Page

Read only fields for the following fields

Summary
Description
Type
Complexity
Estimated time for completion
Cost
Status
Two buttons Accept(Green color) and Reject (Red color)

On Accept or Reject, take the admin to the story list view with updated status.
[Status not returned in the story details service. In my view of the acceptance criteria, on click of the button, backend service should be called and the status of the story should be updated based on ID. Once the status is updated successfully, user/admin will be navigated to the story list page. Story list page will get the latest updated stories from the api and render on screen. This flow was not available and hence not implemented.]

Process
Please design the UI as per what you feel is right.
Design should be responsive and work on both desktop and mobile browser.
All pages should have separate routes and when we refresh the browser, it should remain on the same page if authenticated.
[It is assumed that the URL will not be tampered, because in this case a user will be able to see the admin page and vice versa.]
On App launch you need to check if the user is logged in. If not logged in, then show the login page.
Usage of redux is encouraged but not mandatory.
Please upload the working copy of your code to GitHub and send us the link .
Please state all your assumptions in the readme file of your GitHub repository.
As a Bonus, it will be highly appreciated if you can also provide Javascript based unit tests for your front-end code.
