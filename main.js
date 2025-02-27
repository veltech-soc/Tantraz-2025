
// Event data
const events = [
    {
        id: 'typing-master',
        type: 'technical',
        title: 'Quick Fingers',
        image: 'media\\quick fingers.jpeg',
        description: 'Quick Fingers is a competitive typing event that highlights the importance of both accuracy and speed',
        rules: [
            'Round Instructions:',
            'Round 1: Accuracy and Speed Test All participants will type a given paragraph with minimal errors and high speed. Scores will be based on a combination of accuracy (first preference) words-per-minute (WPM).',
            'Round 2: Top 50 Accuracy and Speed Challenge The top 50 participants from Round 1 will compete in a similar typing challenge. Both accuracy and speed will be evaluated, with accuracy given higher weightage.',
            'Round 3: Top 10 Final Challenge The top 10 participants from Round 2 will compete in the final round. A more complex passage will be provided, and the final score will heavily emphasize accuracy along with speed',
        ],
        Organisers: ['Varada Sandeep -3<sup>rd</sup> year CSE', 'Somineni Pavithra -3<sup>rd</sup> year CSE'],
        Faculty_Coordinators: ['MR.D.MANNIVANAN', 'DR.N.K.MANIKANDAN'],
        timing: '10:30AM - 11:30AM',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/CtFBqZVWVGl2OReofBQnSQ',
        
    },
    {
        id: 'decode-tech',
        type: 'technical',
        title: 'Decode Tech',
        image: 'media\\decode tech.avif',
        description: 'Connect technical concepts in this innovative challenge',
        rules: [
            'Round 1 will be conducted using Kahoot, where participants answer multiple-choice questions based on pictorial representations.',
            'Top 25 participants from Round 1 will advance to Round 2 for a head-to-head Pictoword face-off.',
            'Finalists will test technical knowledge through pictorial representations of computer science concepts.',
        ],
        Organisers: ['Preetham Upputuri -3<sup>rd</sup> year CSE', 'R.Dhanush -3<sup>rd</sup> year CSE'],
        Faculty_Coordinators: ['DR. R. THANGA SELVI', 'DR. T. KUJANI'],
        timing: '2:00 PM - 3:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/GPFdoKDns9Q5re3iJbLGpN',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'ui-magician',
        type: 'technical',
        title: 'UI Magician',
        image: 'media\\ui magician.png',
        description: 'Put your front-end skills to the test in this exciting challenge! Participants must accurately replicate a given web page within a set time limit, ensuring precision in design, layout, and styling.',
        rules: [
            'Internet access is strictly prohibited during the competition.',
            'Only HTML and CSS are allowed; JavaScript is not required unless specified. Pre-written templates or code snippets are not allowed—everything must be coded from scratch',
            'Participants must match the layout, colors, and spacing as closely as possible. Text content should be replicated exactly as given in the reference page.',
        ],
        Organisers: ['B.Vikas Reddy -3<sup>rd</sup> year CSE', 'K.Raghavendra Reddy -3<sup>rd</sup> year CSE'],
        Faculty_Coordinators: ['MR.VASUDEVAN. S', 'MR.SIVA RAMA LINGAM'],
        timing: '10:30AM - 11:30AM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/IjlaE4u6KmbC5xYyLVyPpY',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'Chart it Out',
        type: 'technical',
        title: 'Chart it Out',
        image: 'media\\chart it out.jpg',
        description: 'Chart it Out is a poster presentation event that serves as an exciting platform where participants unleash their creativity and problem-solving skills.',
        rules: [
            'Themes will be announced at 11:30 AM and must be selected by the fishbowl method.',
            'Participants must create their posters manually, laptops and electronic devices are allowed up to 15 minutes after theme selection.',
            'Each theme will have an associated problem statement, and participants must base their poster on the given problem.',
            'Teams are allowed to have up to two members; single participation is also permitted. Plagiarism or copying will result in immediate disqualification.',
        ],
        Organisers: ['P.V.SASIBHUSHAN RAJU -3<sup>rd</sup> year CSE', 'B.SWAPNA MADHURI -3<sup>rd</sup> year CSE'],
        Faculty_Coordinators: ['MR.V JAGANRAJA', 'DR.ANGELINA LYDIA'],
        timing: '11:30AM - 1:00PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/KdFOGx7mpMKGQySRFHVuIg',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'Pop n hunt',
        type: 'technical',
        title: 'Pop N Hunt',
        image: 'media\\pop n hunt.avif',
        description: 'Hunting the accurate code from the given treasure box for the given problem statements.',
        rules: [
            'Each team consists of 2 members.',
            'Blow and pop a balloon to access the treasure box.',
            'Marks are allotted based on the code accuracy and the time taken by them.',
            'The team with the highest marks wins.',
        ],
        Organisers: ['Dhivya SV -2<sup>nd</sup> year CSE', 'A Mahtheline Rose -2<sup>nd</sup> year CSE'],
        Faculty_Coordinators: ['KIRUTHIGA. S', 'DR.G.PRABAHARAN'],
        timing: '11:30AM - 1:00PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/JrNP1NABjYR0XdjPYDQhLF',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'tech-fusion',
        type: 'technical',
        title: 'Tech Fusion',
        image: 'media\\tech fusion.avif',
        description: 'Tech Fusion is an innovative project expo showcasing groundbreaking student projects in technology, engineering, and automation.',
        rules: [
            'Prototype Requirement – A working prototype or simulation is mandatory for evaluation',
            'Team Size – Each team can have a maximum of 3 members',
            'Decision Finality – Judges decisions are final and cannot be contested.',
            'Code of Conduct – Participants must maintain professionalism and adhere to ethical',
        ],
        Organisers: ['GOKULAKANNAN V -2<sup>nd</sup> year CSE', 'M.P. SUDARSAN -2<sup>nd</sup> year CSE'],
        Faculty_Coordinators: ['DR.S.RAVIKUMAR', 'DR.T.THILAGAM'],
        timing: '10:30 AM - 1:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/BdTjURSkAd6CYpztS3wLxq',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'STREET CODE',
        type: 'technical',
        title: 'Street Coding',
        image: 'media\\street coding.avif',
        description: 'Street code is an event where programmers and coders participate in coding challenges while being exposed to external distractions like loud noises, random music, and other disturbances.',
        rules: [
            'Participants must bring their own laptops',
            'The coding environment will be set up in HackerEarth',
            'Participants must solve coding challenges while handling distractions.',
            'The event consists of 2 rounds, each with increasing difficulty and chaos: Round 1 (60 minutes) – Coding challenge with mild disturbances. Round 2 (45 minutes) – Advanced coding challenge with extreme chaos',
        ],
        Organisers: ['v.Hema sarayu -3<sup>rd</sup> year CSE', 'J.A.Bhavya Reddy -3<sup>rd</sup> year CSE'],
        Faculty_Coordinators: ['DR. PREMA. K', 'MRS.V.SUGANYA'],
        timing: '11:30 AM - 1:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/IS1fWp7yNHa44c6TMstSxH',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'clueless-coder',
        type: 'technical',
        title: 'The Clueless Coder',
        image: 'media\\cluless coder.jpg',
        description: 'Clueless code is a Dumb Charades event which is an exciting team-based event where participants act out words or phrases without speaking.',
        rules: [
            'Participants must act out the word or phrase without speaking.',
            'No props or gestures that can directly give away the word are allowed.',
            'Each team has a maximum of 1 minute to guess the word.',
            'Each team should have a maximum of 2 members.',
        ],
        Organisers: ['S.Ganesh Raj -2<sup>nd</sup> year CSE', 'Rahul S -2<sup>nd</sup> year CSE'],
        Faculty_Coordinators: ['DR.N.MANJUNATHAN', 'MRS.SWAPNA'],
        timing: '11:30 AM - 1:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/Gxo4mOPMbEQ4OyPNPQQejU',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'techtrivia',
        type: 'technical',
        title: 'TechTrivia',
        image: 'media\\tech triva.jpg',
        description: 'It is an event designed to test participants knowledge about technology, computers, programming, and the history of tech innovations.',
        rules: [
            'Participate in teams (2 members).',
            'No external help or resources allowed during the event.',
            'Provide clear and concise answers.',
            'Do not share solutions or details with others during the event.',
        ],
        Organisers: ['K Arun Kishore -2<sup>nd</sup> year CSE', 'J Yogesh -2<sup>nd</sup> year CSE'],
        Faculty_Coordinators: ['MRS.V.USHA', 'Mr.SANKAR GANESH'],
        timing: '10:30 AM - 11:30 AM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/EroTeg2lCluEfZgA5CixOA',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'Prompt-wars',
        type: 'technical',
        title: 'Prompt wars',
        image: 'media\\prompt wars.png',
        description: 'Given a set of AI-based prompts, your challenge is to generate the most unique and engaging responses.',
        rules: [
            'Each team can have 1 member.',
            'Teams will have a time limit to respond to each prompt.',
            'Judges will evaluate entries based on creativity, coherence, and relevance.',
            'No AI tools or external assistance is allowed during the challenge.',
        ],
        Organisers: ['Ganesh Balaji -2<sup>nd</sup> year CSE','Ukkas -2<sup>nd</sup> year CSE'],
        Faculty_Coordinators: ['DR.K.KISHORE KUMAR', 'DR.D.FEMI.'],
        timing: '11:30 AM - 1:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/DJhFKJvVzZ8CFsn1IM7xuo',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'BrainByte',
        type: 'technical',
        title: 'BrainByte',
        image: 'media\\brain bytes.webp',
        description: 'Get ready to test your brainpower at BrainByte! A thrilling event designed for computer science enthusiasts, where puzzles and riddles challenge your coding, problem solving, and logic skills.',
        rules: [
            'Participate in teams (2-4 members).',
            'No external help or resources allowed during the event.',
            'Provide clear and concise answers, explaining your approach if required.',
            'Do not share solutions or details with others during the event.',
        ],
        Organisers: ['Sharon Varghese -2<sup>nd</sup> year CSE', 'Shada ali khuzhikatil -2<sup>nd</sup> year CSE', 'Rushdha V -2<sup>nd</sup> year CSE', 'Sivani P -2<sup>nd</sup> year CSE'],
        Faculty_Coordinators: ['DR. K. ANTONY KUMAR', 'DR.S.THYLASHRI'],
        timing: '10:30 AM - 1:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/Hj1gGIuceXl33jFUJNrU5g',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'rhythm-soul',
        type: 'non-technical',
        title: 'Rhythm of Soul',
        image: 'media\\rythm of soul.png',
        description: 'Calling all dance enthusiasts! Get ready to groove and show off your moves at RHYTHM OF SOUL, the ultimate group dance competition! to Flaunt your dancing skills.',
        rules: [
            'A team can have a maximum of 6 members.',
            'The duration for each performance is 3 to 5 mins.',
            'Participants must come with their own tracks.',
            'Judges decision will be final.',
        ],
        Organisers: ['S.Sarika -2<sup>nd</sup> year CSE', 'M.Indrajith -2<sup>nd</sup> year CSE','Sanjay Kumar.R -3<sup>nd</sup> year CSE','Nizam khan.M -3<sup>nd</sup> year CSE'],
        Faculty_Coordinators: ['SHYAMALA KUMARI. C', 'DR. MARIAMMAL. G'],
        timing: '2:00 PM - 3:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/E2BPQ4OLadl91MbbdgdtyF',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
    {
        id: 'classy-genz',
        type: 'non-technical',
        title: 'ClassyGenz',
        image: 'media\\classy genz.avif',
        description: 'A ramp walk is more than just walking—it’s about confidence, body language, and making a lasting impression.',
        rules: [
            'Welcomed in a descent attire (no short dresses) where you can express yourself within duration: 60 secs.',
            'Any theme is encouraged like from a movie character, role models etc. that enhances your personality.',
            'Walk with Dance and showcase your moves within duration: 60 secs',
            'You can use properties as well.',
        ],
        Organisers: ['Ch. komala sri -3<sup>rd</sup> year CSE', 'R.Thanmayee -3<sup>rd</sup> year CSE'],
        Faculty_Coordinators: ['DR. KAVITHA. R', 'DR. DHINAKARAN. D'],
        timing: '2:00 PM - 3:00 PM',
        Whatsapp_Group_Link: 'https://chat.whatsapp.com/G2KEkKTcqvvDujWyHIn2Vz',
        register_now: 'https://forms.gle/dGwZ4UsVfpyFJpMg7',
    },
];




// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#8b5cf6'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#8b5cf6',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Animate logo letters with random delays
document.querySelectorAll('.logo-letter').forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`;
});

// Add mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = (clientX - centerX) / 50;
    const moveY = (clientY - centerY) / 50;

    document.querySelectorAll('.tech-element').forEach(element => {
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    document.querySelectorAll('.glow').forEach(glow => {
        const speed = glow.classList.contains('glow-1') ? 2 : 
                     glow.classList.contains('glow-2') ? -2 : 1;
        glow.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });
});

// Add scroll reveal animation
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelector('.hero-content').style.transform = `translateY(${scrolled * 0.5}px)`;
    document.querySelector('.scroll-indicator').style.opacity = 1 - scrolled / 300;
});

// Add interactive hover effect to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mousemove', (e) => {
        const { left, top } = ctaButton.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        ctaButton.style.setProperty('--x', `${x}px`);
        ctaButton.style.setProperty('--y', `${y}px`);
    });
}



// Function to create event cards
function createEventCards(filteredEvents = events) {
    const container = document.getElementById('events-container');
    container.innerHTML = ''; // Clear existing cards

    filteredEvents.forEach((event) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
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
        `;
        container.appendChild(eventCard);
    });
}


// Function to filter events
function filterEvents(type) {
    const filteredEvents = type === 'all' ? events : events.filter(event => event.type === type);
    createEventCards(filteredEvents);
    document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Function to show event details
function showEventDetails(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = event.title;
    modalBody.innerHTML = `
        <div class="modal-details">
            <img src="${event.image}" alt="${event.title}" class="modal-image">
            
            <div class="modal-section">
            <h3>Description</h3>
            <p>${event.description}</p>
            </div>
            
            <div class="modal-section">
            <h3>Rules</h3>
            <ul>
                ${event.rules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
            </div>
            
            <div class="modal-info">
            <div>
                <h3>Organisers: </h3>
                ${event.Organisers.map(organiser => `<p>${organiser}</p>`).join('')}
            </div>
             <div>
                    <h3>Faculty Coordinators: </h3>
                    ${event.Faculty_Coordinators.map(coordinator => `<p>${coordinator}</p>`).join('')}
                </div>
            <div>
                <h3>Timing</h3>
                <p>${event.timing}</p>
            </div>
            </div>
            <a href="${event.Whatsapp_Group_Link}" target="_blank" class="register-event-button">Join in ${event.title} Whatsapp Group</a>
           
        </div>
        <div style="margin-top: 15px;"></div>
        <div>
        <a href="${event.register_now}" target="_blank" class="register-event-button">  Register now</a> 
        </div>
        `;

    modal.style.display = 'block';
}




// Initialize event cards when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createEventCards();
    
    // Add rainbow effect to logo on hover
    const logoTexts = document.querySelectorAll('.logo-text');
    const colors = ['#8b5cf6', '#9f7aea', '#b794f4', '#c3dafe', '#a78bfa', '#8b5cf6'];
    
    logoTexts.forEach((text, index) => {
        text.addEventListener('mouseover', () => {
            text.style.color = colors[index % colors.length];
            text.style.textShadow = `0 0 20px ${colors[index % colors.length]}`;
        });
        
        text.addEventListener('mouseout', () => {
            text.style.color = '#8b5cf6';
            text.style.textShadow = '0 0 10px rgba(139, 92, 246, 0.5)';
        });
    });
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('menu-button');
const sidebar = document.querySelector('.sidebar');

if (mobileMenuButton && sidebar) {
    mobileMenuButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (sidebar && !sidebar.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const sidebar = document.querySelector(".sidebar");
    const closeButton = document.getElementById("close-button");

    // Show sidebar when clicking the menu button
    menuButton.addEventListener("click", function () {
        sidebar.classList.add("active");
    });

    // Hide sidebar when clicking the close button
    closeButton.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });
});

function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("show");
}





      // Add hover effect to registration button
      document.querySelector('.main-register-btn').addEventListener('mouseenter', function() {
        this.querySelector('.btn-glow').style.opacity = '1';
      });

      document.querySelector('.main-register-btn').addEventListener('mouseleave', function() {
        this.querySelector('.btn-glow').style.opacity = '0';
      });


// Set the date we're counting down to
var countDownDate = new Date("Mar 3, 2025 00:00:00").getTime();

 // Update the count down every 1 second
 var x = setInterval(function() {

 // Get today's date and time
 var now = new Date().getTime();

 // Find the distance between now and the count down date
 var distance = countDownDate - now;

 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Display the result in the element with id="countdown-timer"
 document.getElementById("days").innerHTML = days;
 document.getElementById("hours").innerHTML = hours;
 document.getElementById("minutes").innerHTML = minutes;
 document.getElementById("seconds").innerHTML = seconds;

 // If the count down is over, write some text 
 if (distance < 0) {
     clearInterval(x);
     document.getElementById("countdown-timer").innerHTML = "Registration Closed";
 }
 }, 1000);



 function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

document.addEventListener('scroll', function() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});
