const events = [
    {
      id: 'typing-master',
      title: 'Typing Master',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80',
      description: 'Test your typing speed and accuracy in this competitive event',
      rules: [
        'All participants will type a given paragraph with minimal errors and high speed.',
        'Round 1: Accuracy and Speed Test',
        'Round 2: Top 50 Accuracy and Speed Challenge',
        'Round 3: Top 10 Final Challenge',
      ],
      venue: 'VTU',
      timing: '10:00 AM - 12:00 PM',
      formLink: 'https://forms.gle/e22UzXFLoVA5LzYj7',
    },
    {
      id: 'poster-presentation',
      title: 'Poster Presentation',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80',
      description: 'Showcase your creativity through technical poster designs',
      rules: [
        'All participants must report to the venue by 9:30 AM.',
        'Themes will be announced at 9:30 AM and must be selected by the fishbowl method.',
        'Participants must bring their own stationery items for poster creation.',
        'Each team will have a maximum of 3 minutes to present their poster to the judges.',
      ],
      venue: 'VTU',
      timing: '10:00 AM - 1:00 PM',
      formLink: 'https://forms.gle/apXEyNqjxQEMHi6f6',
    },
    // Add more events as needed
    {
        id: 'technical-connections',
        title: 'Decode tech',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
        description: 'Connect technical concepts in this innovative challenge',
        rules: [
          'Round 1: Kahoot Qualifier (Point-Based)',
          'Round 2: Pictoword Face-Off (Head-to-Head)',
          'Round 3: Technical Pictoword (Computer Science Focus)',
          'Participants must adhere to the time limits for each round.',
        ],
        venue: 'Seminar Hall',
        timing: '2:00 PM - 5:00 PM',
        formLink: 'https://forms.gle/c1s16X7JS23J26oD8',
      },
      {
        id: 'power-point-styler',
        title: 'Art of Presentation',
        image: 'power_point_styer.jpg',
        description: 'Create stunning presentations with your creative skills',
        rules: [
          'Themes will be disclosed at the start of the event.',
          'Only PowerPoint should be used.',
          'Laptops are mandatory (systems will not be organized).',
          'Teams must submit their final presentation in the required format (.ppt, .pdf, etc.).',
        ],
        venue: 'VTU',
        timing: '10:00 AM - 1:00 PM',
        formLink: 'https://forms.gle/Z189WCz4ybGBzv4r8',
      },
      {
        id: 'jumbled-code',
        title: 'Jumbled Code',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
        description: 'Unscramble and fix the code to solve programming challenges',
        rules: [
          'Individual participation.',
          'Multiple programming languages allowed.',
          'Time limit: 45 minutes.',
          'No internet access.',
        ],
        venue: 'Computer Lab 3',
        timing: '11:00 AM - 1:00 PM',
        formLink: 'https://forms.gle/link5',
      },
      {
        id: 'tech-dance',
        title: 'Tech Dance',
        image: 'https://images.unsplash.com/photo-1535525153412-5a092c564c20?auto=format&fit=crop&q=80',
        description: 'Blend technology and dance in this unique performance',
        rules: [
          'Team of 4-6 members.',
          'Performance time: 5-7 minutes.',
          'Must incorporate a tech theme.',
          'Props allowed.',
        ],
        venue: 'Main Auditorium',
        timing: '4:00 PM - 6:00 PM',
        formLink: 'https://forms.gle/link6',
      },
      {
        id: 'project-expo',
        title: 'Project Expo',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
        description: 'Showcase your innovative technical projects',
        rules: [
          'Team of 2-4 members.',
          'Working prototype required.',
          'Presentation time: 15 minutes.',
          'Technical documentation mandatory.',
        ],
        venue: 'Exhibition Center',
        timing: '10:00 AM - 5:00 PM',
        formLink: 'https://forms.gle/link7',
      },
      {
        id: 'street-coding',
        title: 'Street Coding',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80',
        description: 'Code in unconventional settings with time pressure',
        rules: [
          'Individual participation.',
          'Coding challenges in outdoor settings.',
          'Time limit varies per round.',
          'Bring your own laptop.',
        ],
        venue: 'College Campus',
        timing: '9:00 AM - 12:00 PM',
        formLink: 'https://forms.gle/link8',
      },
      {
        id: 'tech-traditional',
        title: 'Tech Traditional',
        image: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?auto=format&fit=crop&q=80',
        description: 'Fusion of traditional wear with technological elements',
        rules: [
          'Individual participation.',
          'Must incorporate LED/tech elements.',
          'Presentation time: 3 minutes.',
          'Original designs only.',
        ],
        venue: 'Fashion Arena',
        timing: '3:00 PM - 5:00 PM',
        formLink: 'https://forms.gle/link9',
      },
      {
        id: 'technical-dumb',
        title: 'Technical Dumb Charades',
        image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80',
        description: 'Act out technical terms and concepts',
        rules: [
          'Team of 3 members.',
          'No speaking or writing.',
          'Technical terms only.',
          'Time limit: 2 minutes per term.',
        ],
        venue: 'Mini Auditorium',
        timing: '1:00 PM - 3:00 PM',
        formLink: 'https://forms.gle/link10',
      },
      {
        id: 'technical-quiz',
        title: 'Technical Quiz',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80',
        description: 'Test your technical knowledge across various domains',
        rules: [
          'Team of 2 members.',
          'Multiple rounds.',
          'Rapid fire round included.',
          'Topics: Programming, Hardware, Tech History.',
        ],
        venue: 'Seminar Hall 2',
        timing: '10:00 AM - 1:00 PM',
        formLink: 'https://forms.gle/link11',
      },
  ];
  
  function createEventCards() {
    const container = document.getElementById('events-container');
    events.forEach((event) => {
      const eventCard = `
        <div class="event-card">
          <div class="event-inner">
            <div class="event-front">
              <img src="${event.image}" alt="${event.title}" class="event-image">
              <div class="event-overlay">
                <h3 class="event-title">${event.title}</h3>
                <p>${event.description}</p>
              </div>
            </div>
            <div class="event-back">
              <h3 class="event-title">${event.title}</h3>
              <p>${event.description}</p>
              <button class="view-details" onclick="showEventDetails('${event.id}')">View Details</button>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += eventCard;
    });
  }
  
  function showEventDetails(eventId) {
    const event = events.find((e) => e.id === eventId);
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const registerLink = document.getElementById('register-link');
  
    modalTitle.textContent = event.title;
    modalBody.innerHTML = `
      <div class="modal-details">
        <h3>Description</h3>
        <p>${event.description}</p>
        
        <h3>Rules</h3>
        <ul>
          ${event.rules.map((rule) => `<li>${rule}</li>`).join('')}
        </ul>
        
        <h3>Venue</h3>
        <p>${event.venue}</p>
        
        <h3>Timing</h3>
        <p>${event.timing}</p>
      </div>
    `;
  
    registerLink.href = event.formLink;
  
    modal.style.display = 'block';
  }
  
  document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  document.addEventListener('DOMContentLoaded', createEventCards);
  















