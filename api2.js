const userId = document.getElementById('user-id');
const post = document.getElementById('post');
const postTitle = document.getElementById('title-post');
const findButton = document.getElementById('find-btn');

findButton.addEventListener('click', function() {
  postFinder()
});

function postFinder() {
  fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        
        post.innerText = data.setup;
      } else {
        alert('Post not found');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Error fetching post');
    });
}