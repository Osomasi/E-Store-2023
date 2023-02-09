

//SCRIPT FOR THE SIGN IN PAGE //
  // Select the form element by its id
  const form = document.querySelector('#sign-in-form');

  // Add an event listener to the form for the "submit" event
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Redirect to the "home.html" page
    window.location.href = 'home.html';
  });
