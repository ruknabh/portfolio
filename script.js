document.addEventListener("DOMContentLoaded", function () {

  // Select all navigation links with 'a' tags
  const navLinks = document.querySelectorAll('nav ul li a');

  // Select all sections that correspond to the nav links
  const sections = document.querySelectorAll('section');

  const hireMe = document.getElementById("button_1");
  const aboutMe = document.getElementById("button_2");

  // Offset to fine-tune scroll position for the first section (adjust as needed)
  const firstSectionOffset = 130; 

  // Function to remove 'active' class from all nav links
  function removeActiveClass() {
    navLinks.forEach(link => link.classList.remove('active'));
  }

  // Function to add 'active' class to the link of the section currently in view
  function addActiveClass() {
    let index = sections.length;

    // Loop through each section to see which is in view
    while (--index && window.scrollY + firstSectionOffset < sections[index].offsetTop) {}

    removeActiveClass();
    navLinks[index].classList.add('active');
  }

  // Event listener for scrolling
  window.addEventListener('scroll', addActiveClass);

  // Smooth scroll function with an optional offset
  function smoothScroll(target, offset = 0) {
    const targetSection = document.querySelector(target);
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  // Smooth scrolling when clicking on nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default behavior

      const targetId = this.getAttribute('href'); // Get target section

      // Apply offset only when scrolling to the first section
      if (targetId === "#home") {
        smoothScroll(targetId, firstSectionOffset); // Apply offset to first section
      } else {
        smoothScroll(targetId, 0); // No offset for other sections
      }
    });
  });

  // Smooth scroll for the 'Hire Me' button
  hireMe.addEventListener('click', function (event) {
    event.preventDefault();

    smoothScroll("#sixthsection", 0); // No offset needed for 'Hire Me'
  });

  // Smooth scroll for the 'About Me' button
  aboutMe.addEventListener('click', function (event) {
    event.preventDefault();

    smoothScroll("#secondsection", 0); // No offset needed for 'About Me'
  });

});
