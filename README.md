
Design a page with with the above inputs controls and a SUBMIT button. On Submit, validate the form and call Create Story API. <br>
<b>[Validations not done: Lack of Time]</b>

The user should be able to sort the stories by the Story ID and complexity. To keep it simple, sorting will be done based only one column at a time, no chaining is needed.<br>
<b>[One way ascending sorting implemented (No toggle sorting) Sorting on complexity will be based on keywords "high", "mid", "low" as the service is returning these values and no manipulation has been done on front end]</b>

The user should be able to filter the stories by type<br>
<b>[Filter works for only one type. Successive filtration would show empty list]</b>

NOTE: If for a story the status is ‘rejected’ then the particular story row color should be RED, if the status is accepted then row should be in GREEN else the row color should be BLACK<br>
<b>[status is not returned in the response of user story list and hence the note could not be implemented]</b>

On Accept or Reject, take the admin to the story list view with updated status.<br>
<b>[Status not returned in the story details service. In my view of the acceptance criteria, on click of the button, backend service should be called and the status of the story should be updated based on ID. Once the status is updated successfully, user/admin will be navigated to the story list page. Story list page will get the latest updated stories from the api and render on screen. This flow was not available and hence not implemented.]</b>

All pages should have separate routes and when we refresh the browser, it should remain on the same page if authenticated.<br>
<b>[It is assumed that the URL will not be tampered, because in this case a user will be able to see the admin page and vice versa.]</b>
