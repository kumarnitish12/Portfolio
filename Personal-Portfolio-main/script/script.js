const projects = [
    {
      imageSrc: 'path/to/projectImage1.jpg',
      githubLink: 'https://github.com/kumarnitish12?tab=repositories',
      demoLink: 'https://nitish-2006.netlify.app/',
      title: 'TourBuddy',
      description: ' A solution/ idea that can boost the current situation of tourism industries including hotels,travel and others',
    },
    {
      imageSrc: 'path/to/projectImage2.jpg',
      githubLink: 'https://github.com/kumarnitish12?tab=repositories',
      demoLink: 'https://nitish-portfolio12.netlify.app',
      title: 'Portfolio in React.',
      description: 'Enjoy and test your luck with the dice game.',
    },
    {
        imageSrc: 'path/to/projectImage2.jpg',
        githubLink: 'https://github.com/kumarnitish12/Refokus-ui-clone/tree/main/Refokus-UI-Clone-main',
        demoLink: 'https://refokus-ui-clone.netlify.app/',
        title: 'Refokus UI Clone',
        description: 'Refokus Agency website clone which has interesting animations and interactions.',
      },
      {
        imageSrc: 'path/to/projectImage2.jpg',
        githubLink: 'https://github.com/kumarnitish12/Apple-vision-clone/tree/main/Apple-vision-clone-main',
        demoLink: 'https://apple-vision-clone-mukuldev.netlify.app/',
        title: 'Apple Vision Clone',
        description: 'Apple vision  website clone which has good level scrolling animation and 3D design.',
      },
    // Add more projects here...
  ];
  
  const projectCardsContainer = document.getElementById('project-cards');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card', 'project-card');
  
    projectCard.innerHTML = `
      <section class="card-body d-flex-col">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.description}</p>
        <div class="card-footer d-flex space-between">
          <span class="card-tag">open-source</span>
          <a class="project-link d-flex" href="${project.githubLink}" target="_blank">Source</a>
          ${project.demoLink ? `<a class="project-link d-flex" href="${project.demoLink}" target="_blank">Live</a>` : ''}
        </div>
      </section>
    `;
  
    projectCardsContainer.appendChild(projectCard);
  });
  