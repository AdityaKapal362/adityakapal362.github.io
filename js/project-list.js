document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.querySelector(".project-list");
  
    fetch("/mine/projects/list.json")
      .then((response) => response.json())
      .then((projects) => {
        projects.forEach((project) => {

          const projectItem = document.createElement("div");
          projectItem.classList.add("project-item");
  
          const thumbnail = document.createElement("img");
          thumbnail.classList.add("project-thumbnail");
          thumbnail.src = `/mine/projects/${project.id}/thumbnail.jpg`;
          projectItem.appendChild(thumbnail);
  
          const projectContent = document.createElement("div");
          projectContent.classList.add("project-content");

          const title = document.createElement("h3");
          const icon = document.createElement("img");
          icon.classList.add("project-icon");
          icon.src = `/mine/projects/${project.id}/icon.png`;
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
  