
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name && email && message) {
    alert("Mesazhi juaj është dërguar me sukses! Faleminderit për kontaktin.");
   
    document.getElementById("contact-form").reset(); 
  } else {
    alert("Ju lutem plotësoni të gjitha fushat!");
  }
});

function toggleBlogContent() {
  let blogContent = document.getElementById("blog");
  if (blogContent.style.display === "none") {
    blogContent.style.display = "block";
  } else {
    blogContent.style.display = "none";
  }
}


document.getElementById("show-blog-button").addEventListener("click", toggleBlogContent);

document.getElementById("theme-toggle").addEventListener("click", function() {
  let body = document.body;
  body.classList.toggle("dark-theme");
});

/
document.querySelectorAll(".social-link").forEach(function(link) {
  link.addEventListener("click", function() {
    alert("Po vizitoni " + https://github.com/orest-software/bmw.git);
  });
});
