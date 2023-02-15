AOS.init();

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const gallery = document.getElementById("gallery");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

if (gallery) {
  gallery.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG") {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      captionText.innerHTML = e.target.alt;
    }
  });
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

modal.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}