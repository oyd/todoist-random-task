window.onload = function () {
    // Wait for the page to load
    let checkExist = setInterval(function () {
      // Check if the Todoist's top interface menu element exists
      let topInterfaceMenu = document.querySelector('.left_control');
      if (topInterfaceMenu) {
        // If it exists, clear the interval
        clearInterval(checkExist);
        // Create a button
        let button = document.createElement('button');
        button.id = 'randomTaskButton';
        button.className = 'top_bar_btn'
        button.innerHTML = `<svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-48.5 -48.5 582.00 582.00" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.9099999999999997"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"></path> <path d="M118.75,401.25c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S99.451,401.25,118.75,401.25z"></path> <path d="M118.75,153.75c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S99.451,153.75,118.75,153.75z"></path> <path d="M242.5,277.5c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S223.201,277.5,242.5,277.5z"></path> <path d="M366.25,401.25c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S346.951,401.25,366.25,401.25z"></path> <path d="M366.25,153.75c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S346.951,153.75,366.25,153.75z"></path> </g> </g></svg>`;
        // Append the button to the top interface menu element
        topInterfaceMenu.appendChild(button);
        // Add a click listener to the button
        button.addEventListener('click', function () {
          // Here you would add the logic to select a random task
          let tasks = document.getElementsByClassName('task_list_item__content');
          tasks[Math.floor(Math.random()*tasks.length)].click();
        });
      }
    }, 100); // check every 100ms
  };
  