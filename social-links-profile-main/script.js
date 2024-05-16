// Counter to track the number of social links added
let socialLinkCounter = 1;

function addSocialLink() {
  socialLinkCounter++;

  // Create a new input field for the social link
  let socialLinkContainer = document.getElementById("socialLinksContainer");
  let newSocialLinkInput = document.createElement("input");
  newSocialLinkInput.type = "text";
  newSocialLinkInput.classList.add("social-link");
  newSocialLinkInput.id = "socialLink" + socialLinkCounter;
  newSocialLinkInput.placeholder = "Enter social link";
  socialLinkContainer.appendChild(newSocialLinkInput);
}

function getSocialMediaName(fullLink) {
  let domain = fullLink
    .replace(/(^\w+:|^)\/\//, "")
    .split("/")[0]
    .replace("www.", "");
  const platformNames = {
    "github.com": "GitHub",
    "frontendmentor.com": " Frontend Mentor",
    "linkein.com": "LinkedIn",
    "facebook.com": "Facebook",
    "twitter.com": "Twitter",
    "instagram.com": "Instagram",
  };
  return platformNames[domain] || domain;
}

function generateLink() {
  // Get values from input fields
  let name = document.getElementById("name").value.trim();
  let city = document.getElementById("city").value.trim();
  let country = document.getElementById("country").value.trim();
  let profession = document.getElementById("profession").value.trim();
  let profilePic = document.getElementById("profilePic").files[0];
  let socialLinks = [];

  // Get social links from input fields

  let socialLinkInputs = document.querySelectorAll(".social-link");
  socialLinkInputs.forEach(function (input) {
    let value = input.value.trim();
    if (value !== "") {
      socialLinks.push({
        fullLink: value,
        shortLink: getSocialMediaName(value),
      });
    }
  });

  // Validate inputs
  if (
    name === "" ||
    city === "" ||
    country === "" ||
    profession === "" ||
    socialLinks.length === 0
  ) {
    alert("Please fill in all fields and at least one social link.");
    return;
  }

  // Generate shareable link
  let shareableLink =
    "https://example.com/share?" +
    "name=" +
    encodeURIComponent(name) +
    "&location=" +
    encodeURIComponent(city + ", " + country) +
    "&profession=" +
    encodeURIComponent(profession) +
    (profilePic ? "&profilePic=" + encodeURIComponent(profilePic.name) : "") +
    (socialLinks.length > 0
      ? "&socialLinks=" + encodeURIComponent(JSON.stringify(socialLinks))
      : "");

  // Display the result
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML =
    '<div class="profile-info">' +
    '<img src="' +
    (profilePic ? URL.createObjectURL(profilePic) : "placeholder.png") +
    '" alt="Profile Picture">' +
    "<h2>" +
    name +
    "</h2>" +
    "<p><strong></strong> <span style='color: hsl(75, 84%, 47%)'>" +
    city +
    "</span>, <span style='color: hsl(75, 84%, 47%)'>" +
    country +
    "</span></p>" +
    "<p><strong></strong> " +
    profession +
    "</p>" +
    "</div>" +
    '<div class="social-links">' +
    socialLinks
      .map(
        (link) =>
          "<button onclick=\"window.open('" +
          link.fullLink +
          "', '_blank')\">" +
          link.shortLink +
          "</button>"
      )
      .join("") +
    "</div>" +
    "<button onclick=\"shareLink('" +
    shareableLink +
    "')\">Share</button>" +
    '<button onclick="createAnotherProfile()">Create New Profile</button>';

  resultDiv.style.display = "block";

  // Change the text of the button to "Create Profile"
  let resetButton = document.querySelector(
    "#formContainer button:nth-of-type(3)"
  );
  resetButton.textContent = "Create Profile";

  // Hide the form
  let formContainer = document.getElementById("formContainer");
  formContainer.style.display = "none";
}

// Function to extract social media name from URL
function getSocialMediaName(url) {
  let domain = url
    .replace(/(^\w+:|^)\/\//, "")
    .split("/")[0]
    .replace("www.", "");
  return domain.charAt(0).toUpperCase() + domain.slice(1);
}
// Function to share link
function shareLink(link) {
  // Check if the Web Share API is supported by the browser
  if (navigator.share) {
    // Share the link using the Web Share API
    navigator
      .share({
        title: "Share Profile",
        text: "Check out my profile!",
        url: link,
      })
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    // If Web Share API is not supported, fallback to copying the link to clipboard
    copyToClipboard(link);
  }
}

// Function to copy text to clipboard
function copyToClipboard(text) {
  // Create a temporary input element
  let input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  // Notify the user
  alert("Link copied to clipboard");
}

function createAnotherProfile() {
  // Reload the page
  window.location.reload();
}

// Function to reset the form
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("city").value = "";
  document.getElementById("country").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("profilePic").value = "";
  let socialLinkInputs = document.querySelectorAll(".social-link");
  socialLinkInputs.forEach(function (input) {
    input.remove();
  });

  // Reset social link counter
  socialLinkCounter = 1;

  // Hide the result
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.style.display = "none";

  // Display the form
  let formContainer = document.getElementById("formContainer");
  formContainer.style.display = "block";
}

// Function to extract URL parameters
function getURLParameters() {
  let searchParams = new URLSearchParams(window.location.search);
  let parameters = {};
  for (var param of searchParams.entries()) {
    parameters[param[0]] = param[1];
  }
  return parameters;
}

// Function to pre-fill form with URL parameters
function prefillForm() {
  let parameters = getURLParameters();
  if (Object.keys(parameters).length !== 0) {
    // Pre-fill form fields with extracted parameters
    document.getElementById("name").value = parameters.name || "";
    document.getElementById("city").value = parameters.city || "";
    document.getElementById("country").value = parameters.country || "";
    document.getElementById("profession").value = parameters.profession || "";
    // Add code to pre-fill social links if needed
  }
}

// Call the prefillForm function when the page loads
window.onload = prefillForm;
