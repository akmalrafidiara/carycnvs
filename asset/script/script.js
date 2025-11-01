AOS.init({
  duration: 1200,
});

document.addEventListener('DOMContentLoaded', function() {
  const mainContainer = document.getElementById('main-container');
  if (mainContainer) {
    mainContainer.addEventListener('wheel', function(e) {
      e.preventDefault();
      mainContainer.scrollLeft += e.deltaY;
    }, { passive: false });
  }

  // Handle anchor link click for horizontal scroll
  const galleryLink = document.querySelector('a[href="#gallery"]');
  const container = document.querySelector('.container');

  if (galleryLink && container && mainContainer) {
    galleryLink.addEventListener('click', function(e) {
      e.preventDefault();

      const targetScrollLeft = container.offsetLeft;

      mainContainer.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    });
  }
});


// Modal functionality
const modal = document.getElementById("myModal");
const gallery = document.getElementById("gallery");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

if (gallery) {
  gallery.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      captionText.innerHTML = e.target.alt;
    }
  });
}

const span = document.getElementsByClassName("close")[0];

if (span) {
    span.onclick = function () {
        modal.style.display = "none";
    }
}


if (modal) {
    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    }
}
