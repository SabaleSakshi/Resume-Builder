// Retrieve resume number from localStorage (if needed)
const resumeNumber = Number(JSON.parse(localStorage.getItem("val")));
console.log(resumeNumber);

// Add Project Function
function addInputProject() {
  const projectDiv = document.createElement("div");
  projectDiv.className = "grid grid-cols-1 md:grid-cols-2 gap-4 project-block";

  projectDiv.innerHTML = `
    <input type="text" class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Project Name" name="project_name[]" />
    <textarea class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Description" name="project_description[]"></textarea>
    <input type="url" class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Project Link" name="project_link[]" />
    <button type="button" class="remove-btn mt-2 text-red-500 hover:text-red-700 text-sm" onclick="removeBlock(this)">Remove</button>
  `;

  document.getElementById("projects").appendChild(projectDiv);
}

// Add Experience Function
function addInputExperience() {
  const expDiv = document.createElement("div");
  expDiv.className = "grid grid-cols-1 md:grid-cols-3 gap-4 experience-block";

  expDiv.innerHTML = `
    <input type="text" class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Company Name" name="experience_company[]" />
    <textarea class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Description" name="experience_description[]"></textarea>
    <input type="text" class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Years Served" name="experience_years[]" />
    <button type="button" class="remove-btn mt-2 text-red-500 hover:text-red-700 text-sm" onclick="removeBlock(this)">Remove</button>
  `;

  document.getElementById("experience").appendChild(expDiv);
}

// Add Skills Function
function addInputSkills() {
  const skillDiv = document.createElement("div");
  skillDiv.className = "space-y-4 input";

  skillDiv.innerHTML = `
    <input type="text" class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Skill" name="skills[]" />
    <button type="button" class="remove-btn mt-2 text-red-500 hover:text-red-700 text-sm" onclick="removeBlock(this)">Remove</button>
  `;

  document.getElementById("skills").appendChild(skillDiv);
}

// Add Education Function
function addInputEducation() {
  const eduDiv = document.createElement("div");
  eduDiv.className =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 input-block";

  eduDiv.innerHTML = `
    <input type="text" class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Course" name="education_course[]" />
    <input type="text" class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Institute Name" name="education_institute[]" />
    <input type="text" class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Marks" name="education_marks[]" />
    <input type="text" class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Year" name="education_year[]" />
    <button type="button" class="remove-btn mt-2 text-red-500 hover:text-red-700 text-sm" onclick="removeBlock(this)">Remove</button>
  `;

  document.getElementById("education").appendChild(eduDiv);
}

// Add Certificate Function
function addInputCertificate() {
  const certificateDiv = document.createElement("div");
  certificateDiv.className = "space-y-4";

  certificateDiv.innerHTML = `
    <input type="text" class="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300" placeholder="Certificate Name" name="certificates[]" />
    <button type="button" class="remove-btn mt-2 text-red-500 hover:text-red-700 text-sm" onclick="removeBlock(this)">Remove</button>
  `;

  document.getElementById("certificates").appendChild(certificateDiv);
}

// Generic Remove Block Function
function removeBlock(removeBtn) {
  const block = removeBtn.parentElement;
  block.remove();
}

// Form Submit Handler
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const formData = {
    name: document.getElementById("Username").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phoneno").value,
    address: document.getElementById("address").value,
    portfolio: document.getElementById("plink").value,
    summary: document.getElementById("summarytext").value,
    projects: [],
    experiences: [],
    skills: [],
    education: [],
    certificates: [],
  };

  console.log("Name:", formData.name);
  console.log("email:", formData.email);
  console.log("phone:", formData.phone);
  console.log("address:", formData.address);
  console.log("summary:", formData.summary);
  console.log("portfolio:", formData.portfolio);

  document.querySelectorAll("#projects .project-block").forEach((block) => {
    const projectName = block.querySelector(
      'input[name="project_name[]"]'
    ).value;
    const projectDescription = block.querySelector(
      'textarea[name="project_description[]"]'
    ).value;
    const projectLink = block.querySelector(
      'input[name="project_link[]"]'
    ).value;

    // Push project data into formData.projects
    formData.projects.push({
      name: projectName,
      description: projectDescription,
      link: projectLink,
    });
  });

  console.log("Projects:", formData.projects);

  document
    .querySelectorAll("#experience .experience-block")
    .forEach((block) => {
      const experienceCompany = block.querySelector(
        'input[name="experience_company[]"]'
      ).value;
      const experienceDescription = block.querySelector(
        'textarea[name="experience_description[]"]'
      ).value;
      const experienceYears = block.querySelector(
        'input[name="experience_years[]"]'
      ).value;

      // Push experience data into formData.experiences
      formData.experiences.push({
        company: experienceCompany,
        description: experienceDescription,
        years: experienceYears,
      });
    });

  console.log("Experiences:", formData.experiences);
  // Collect skills
  document
    .querySelectorAll("#skills input[name='skills[]']")
    .forEach((skillInput) => {
      formData.skills.push(skillInput.value);
    });

  console.log("skills:", formData.skills);

  // Collect education data
  document.querySelectorAll("#education .input-block").forEach((block) => {
    formData.education.push({
      course: block.querySelector('input[name="education_course[]"]').value,
      institute: block.querySelector('input[name="education_institute[]"]')
        .value,
      marks: block.querySelector('input[name="education_marks[]"]').value,
      year: block.querySelector('input[name="education_year[]"]').value,
    });
  });

  console.log("education:", formData.education);
  // Collect certificates
  document
    .querySelectorAll("#certificates input[name='certificates[]']")
    .forEach((certInput) => {
      formData.certificates.push(certInput.value);
    });

  console.log("certificates:", formData.certificates);

  // Store form data in localStorage
  localStorage.setItem("formData", JSON.stringify(formData));

  switch (resumeNumber) {
    case 1:
      window.location.href = "resume1.html";
      break;
    case 2:
      window.location.href = "resume2.html";
      break;
    default:
      console.error("Invalid resume number:", resumeNumber);
  }

  // // Redirect to display page
  // window.location.href = "display.html";
});
