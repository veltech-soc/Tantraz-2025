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
    const scrolled = window.pageYOffset;
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

// Event data
const events = [
    {
        id: 'typing-master',
        type: 'technical',
        title: 'Quick Fingers',
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
        id: 'decode-tech',
        type: 'technical',
        title: 'Decode Tech',
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
        id: 'ui-magician',
        type: 'technical',
        title: 'UI Magician',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
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
        type: 'technical',
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
        id: 'rhythm-soul',
        type: 'non-technical',
        title: 'Rhythm of Soul',
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
        id: 'tech-fusion',
        type: 'technical',
        title: 'Tech Fusion',
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
        id: 'codechaos',
        type: 'technical',
        title: 'Codechaos',
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
        id: 'classy-genz',
        type: 'non-technical',
        title: 'ClassyGenz',
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
        id: 'clueless-coder',
        type: 'non-technical',
        title: 'The Clueless Coder',
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
        id: 'techtrivia',
        type: 'technical',
        title: 'TechTrivia',
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
    }
];

// Coordinator data
const coordinators = {
    tech: {
        name: 'John Doe',
        role: 'Technical Events Head',
        contact: '+1234567890'
    },
    'non-tech': {
        name: 'Jane Smith',
        role: 'Non-Technical Events Head',
        contact: '+1234567891'
    },
    overall: {
        name: 'Mike Johnson',
        role: 'Overall Coordinator',
        contact: '+1234567892'
    }
};

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
                    <h3>Venue</h3>
                    <p>${event.venue}</p>
                </div>
                <div>
                    <h3>Timing</h3>
                    <p>${event.timing}</p>
                </div>
            </div>
            

        </div>
    `;

    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Function to show coordinator details
function showCoordinator(type) {
    const coordinator = coordinators[type];
    if (coordinator) {
        alert(`${coordinator.role}\nName: ${coordinator.name}\nContact: ${coordinator.contact}`);
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

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
