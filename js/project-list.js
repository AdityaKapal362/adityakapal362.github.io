document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.querySelector(".project-list");
  
    // Fetch projects from JSON file
    fetch("/mine/projects/list.json")
      .then((response) => response.json())
      .then((projects) => {
        projects.forEach((project) => {

          const projectItem = document.createElement("div");
          projectItem.classList.add("project-item");
  
          const thumbnail = document.createElement("img");
          thumbnail.classList.add("project-thumbnail");
          thumbnail.src = project.thumbnail;
          thumbnail.alt = `${project.title} Thumbnail`;
          projectItem.appendChild(thumbnail);
  
          const projectContent = document.createElement("div");
          projectContent.classList.add("project-content");

          const title = document.createElement("h3");
          const icon = document.createElement("img");
          icon.classList.add("project-icon");
          icon.src = project.icon;
          icon.alt = `${project.title} Icon`;
          title.appendChild(icon);
          title.appendChild(document.createTextNode(project.title));
          projectContent.appendChild(title);

          const description = document.createElement("p");
          description.textContent = project.description;
          projectContent.appendChild(description);

          const badgeContainer = document.createElement("div");
          badgeContainer.classList.add("project-badges");
          project.badges.forEach((badge) => {
            const badgeImg = document.createElement("img");
            badgeImg.src = badge.src;
            badgeImg.alt = badge.alt;
            badgeImg.classList.add("badge");
            badgeContainer.appendChild(badgeImg);
          });
          projectContent.appendChild(badgeContainer);

          projectItem.appendChild(projectContent);

          projectList.appendChild(projectItem);
        });
      })
      .catch((error) => console.error("Error loading projects:", error));
  });
  