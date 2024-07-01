// TODO: Create a variable that selects the main element
const mainEl = document.querySelector('main');

// TODO: Create a function that builds an element and appends it to the DOM
function addBlogPost(Title, Content, Username) {
    const articleEl = document.createElement('article');
    const h2El = document.createElement('h2');
    const blockquoteEl = document.createElement('blockquote');
    const pEl = document.createElement('p');
    
    h2El.textContent = Title;
    blockquoteEl.textContent = Content;
    pEl.textContent = `Posted by: ${Username}`;

    articleEl.appendChild(h2El);
    articleEl.appendChild(blockquoteEl);
    articleEl.appendChild(pEl);
    
    articleEl.setAttribute('class', 'card');
    mainEl.appendChild(articleEl);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function emptyBlog() {
    mainEl.textContent = 'There is no blog post yet.'
};

// TODO: Create a function that reads from local storage and returns the data
function renderBlogList() {
    const formData = JSON.parse(localStorage.getItem('form-data-list'));

    if (formData && formData.Title && formData.Content && formData.Username) {
        addBlogPost(formData.Title, formData.Content, formData.Username);
    } else {
        emptyBlog();
    } 
};

// TODO: Call the function to render the list of blog posts
renderBlogList();
