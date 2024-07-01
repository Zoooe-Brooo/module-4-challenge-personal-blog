// TODO: Create a variable that selects the form element
const formEl = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');
const pEl = document.querySelector('#error');

// let formDataList = [];

// TODO:  Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmit(event) {
  event.preventDefault();
  
  const formData = {
    Username: usernameInput.value,
    Title: titleInput.value,
    Content: contentInput.value
  };
  
  if (formData.Username==='' || formData.Title==='' || formData.Content==='') {
    pEl.textContent = 'Please fill all blanks.';
  } else {
localStorage.setItem('form-data', JSON.stringify(formData));

    // formDataList.push(formData);
    // usernameInput = '';
    // titleInput = '';
    // contentInput = '';
    redirectPage('https://zoooe-brooo.github.io/module-4-challenge-personal-blog/blog.html');
  }
}

  
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
  

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', handleFormSubmit);