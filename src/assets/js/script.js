// Set dark theme as default unless user chose light
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const userTheme = localStorage.getItem('theme');
if (userTheme === 'light') {
    body.classList.remove('dark');
    if (themeToggle) themeToggle.textContent = '🌙';
} else {
    body.classList.add('dark');
    if (themeToggle) themeToggle.textContent = '☀️';
}
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Enhanced skill bar animation with intersection observer
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const skill = bar.getAttribute('data-skill');
                const progressBar = bar.closest('.goal-card')?.querySelector('.progress-fill');
                
                if (skill) {
                    // Animate skill level bar
                    setTimeout(() => {
                        bar.style.setProperty('--skill-width', skill + '%');
                        bar.classList.add('animate');
                    }, 200);
                }
                
                if (progressBar) {
                    // Animate progress bar
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 300);
                }
                
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });
    
    skillBars.forEach(bar => observer.observe(bar));
    progressBars.forEach(bar => observer.observe(bar));
}

// Initialize skill animations when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
    
    // Fallback animation for older browsers
    document.querySelectorAll('.skill-level').forEach(bar => {
        const level = bar.getAttribute('data-skill');
        if (level) {
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = level + '%';
            }, 300);
        }
    });
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Simple form handler
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out!');
        form.reset();
    });
}

// Custom subject functionality for contact form
const subjectSelect = document.getElementById('subject');
const customSubjectGroup = document.getElementById('customSubjectGroup');
const customSubjectInput = document.getElementById('customSubject');

if (subjectSelect && customSubjectGroup && customSubjectInput) {
    subjectSelect.addEventListener('change', function() {
        if (this.value === 'custom') {
            customSubjectGroup.style.display = 'block';
            customSubjectInput.required = true;
        } else {
            customSubjectGroup.style.display = 'none';
            customSubjectInput.required = false;
            customSubjectInput.value = '';
        }
    });
}

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Auto-update footer year
const yearSpan = document.getElementById('footer-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Typing effect for hero section (homepage tagline)
const typedText = document.getElementById('typed-text');
const cursor = document.querySelector('.typed-cursor');
const homeTitles = [
    'Software Engineer...',
    'Student...',
    'Content Creator...',
    'Future Doctor...',
    'Volleyball Player...',
    'Purpose Driven Missionary...'
];
let homeTitleIndex = 0;
let homeCharIndex = 0;
let homeTyping = true;

function typeHomeTitle() {
    if (!typedText) return;
    
    if (homeTyping) {
        if (homeCharIndex === 0) {
            typedText.textContent = '';
        }
        if (homeCharIndex < homeTitles[homeTitleIndex].length) {
            typedText.textContent += homeTitles[homeTitleIndex][homeCharIndex];
            homeCharIndex++;
            setTimeout(typeHomeTitle, 80);
        } else {
            homeTyping = false;
            setTimeout(typeHomeTitle, 1200);
        }
    } else {
        if (homeCharIndex > 0) {
            typedText.textContent = homeTitles[homeTitleIndex].slice(0, homeCharIndex - 1);
            homeCharIndex--;
            setTimeout(typeHomeTitle, 40);
        } else {
            homeTyping = true;
            homeTitleIndex = (homeTitleIndex + 1) % homeTitles.length;
            setTimeout(typeHomeTitle, 400);
        }
    }
}

// Initialize typing effect when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    if (typedText) {
        typeHomeTitle();
    }
});

// Smooth scroll for scroll-down arrow
const scrollDown = document.querySelector('.scroll-down');
if (scrollDown) {
    scrollDown.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    });
}

// Fade-in animation for stats and featured sections on scroll
function fadeInOnScroll(selector) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;
    
    function checkFade() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.style.opacity = 1;
                el.style.transform = 'none';
            }
        });
    }
    window.addEventListener('scroll', checkFade);
    window.addEventListener('DOMContentLoaded', checkFade);
}
fadeInOnScroll('.gateway-stats, .gateway-featured');

// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mainContent = document.getElementById('main-content');

if (sidebar && sidebarToggle && mainContent) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        if (window.innerWidth <= 900) {
            sidebar.classList.toggle('open');
        }
        mainContent.classList.toggle('sidebar-collapsed');
    });
}

// Dropdowns in sidebar
const dropdownLinks = document.querySelectorAll('.has-dropdown > a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;
        if (parent) {
            parent.classList.toggle('open');
        }
    });
});

// Smooth scroll for sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Calculate offset for better positioning
                const offset = 100; // Adjust this value as needed
                const targetPosition = target.offsetTop - offset;
                
                // Smooth scroll to target with offset
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close sidebar on mobile after clicking
                if (sidebar && window.innerWidth <= 900) {
                    sidebar.classList.remove('open');
                }
                
                // Add active state to clicked link
                sidebarLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Highlight the target section briefly
                target.style.transition = 'background-color 0.3s ease';
                target.style.backgroundColor = 'rgba(0,188,212,0.1)';
                setTimeout(() => {
                    target.style.backgroundColor = '';
                }, 2000);
            }
        }
    });
});

// Update active sidebar link based on scroll position
function updateActiveSidebarLink() {
    const sections = document.querySelectorAll('section[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
    
    let current = '';
    const scrollPosition = window.scrollY + 150; // Offset for better detection
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Add scroll event listener for updating active sidebar link
window.addEventListener('scroll', updateActiveSidebarLink);
window.addEventListener('DOMContentLoaded', updateActiveSidebarLink);

// Newsletter form handler
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('newsletter-name').value;
        const email = document.getElementById('newsletter-email').value;
        
        // Show success message
        alert(`Thank you ${name}! You've been subscribed to the newsletter.`);
        newsletterForm.reset();
    });
}

// Enhanced search functionality
const searchInput = document.getElementById('sidebar-search');
const searchClear = document.getElementById('search-clear');

if (searchInput && searchClear) {
    let searchResults = [];
    let currentResultIndex = -1;
    
    // Show/hide clear button
    searchInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            searchClear.classList.add('visible');
        } else {
            searchClear.classList.remove('visible');
            clearSearchHighlights();
        }
    });

    // Clear search
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.focus();
        searchClear.classList.remove('visible');
        clearSearchHighlights();
        hideSearchResults();
    });

    // Enhanced search functionality
    searchInput.addEventListener('keyup', function(e) {
            const query = this.value.toLowerCase().trim();
        
        if (e.key === 'Enter' && query) {
            performSearch(query);
        } else if (e.key === 'Escape') {
            clearSearch();
        } else if (query.length >= 2) {
            // Real-time search as user types (with debouncing)
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                performSearch(query);
            }, 300);
        } else if (query.length === 0) {
            clearSearchHighlights();
            hideSearchResults();
        }
    });

    // Search through all content
    function performSearch(query) {
        clearSearchHighlights();
        searchResults = [];
        currentResultIndex = -1;

        // Define searchable elements with their priorities
        const searchableElements = [
            { selector: 'h1', priority: 5, type: 'Page Title' },
            { selector: 'h2', priority: 4, type: 'Section Heading' },
            { selector: 'h3', priority: 4, type: 'Subsection' },
            { selector: 'h4, h5, h6', priority: 3, type: 'Subheading' },
            { selector: '.card-content h3, .profile-card h3, .pillar-card h3, .mission-card h3, .project-card h3, .skill-card h3, .academic-card h3, .area-card h3, .program-card h3', priority: 4, type: 'Card Title' },
            { selector: '.card-content p, .profile-card p, .pillar-card p, .mission-card p, .background-section p, .relationship-section p, .project-description, .skill-description, .academic-content p', priority: 3, type: 'Description' },
            { selector: '.info-value, .info-label, .stat-number, .stat-label', priority: 2, type: 'Information' },
            { selector: '.project-tags .tag, .skill-highlights .highlight-tag, .academic-highlights .highlight-tag', priority: 2, type: 'Tags' },
            { selector: '.project-purpose, .skill-purpose, .academic-purpose', priority: 3, type: 'Purpose' },
            { selector: 'p, span, div', priority: 1, type: 'General Text' }
        ];

        // Search through each element type
        searchableElements.forEach(({ selector, priority, type }) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes(query)) {
                    // Calculate relevance score
                    const relevance = calculateRelevance(text, query, priority);
                    
                    // Get the page context
                    const pageContext = getPageContext(element);
                    
                    searchResults.push({
                        element: element,
                        relevance: relevance,
                        type: type,
                        text: element.textContent.trim(),
                        pageContext: pageContext
                    });
                }
            });
        });

        // Sort results by relevance
        searchResults.sort((a, b) => b.relevance - a.relevance);

        if (searchResults.length > 0) {
            displaySearchResults(query);
            highlightResults();
            showSearchSummary(query);
        } else {
            showNoResults(query);
        }
    }

    // Get page context for search results
    function getPageContext(element) {
        // Determine which page we're on
        const path = window.location.pathname;
        let pageName = 'Home';
        
        if (path.includes('about.html')) pageName = 'About Me';
        else if (path.includes('projects.html')) pageName = 'Projects';
        else if (path.includes('faith.html')) pageName = 'Faith';
        else if (path.includes('skills.html')) pageName = 'Skills';
        else if (path.includes('academics.html')) pageName = 'Academics';
        else if (path.includes('media.html')) pageName = 'Media';
        else if (path.includes('skill-tree.html')) pageName = 'Skill Tree';
        else if (path.includes('mentorship.html')) pageName = 'Mentorship';
        else if (path.includes('contact.html')) pageName = 'Contact';
        
        // Try to get section context
        const section = element.closest('section');
        if (section && section.id) {
            const sectionName = section.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            return `${pageName} > ${sectionName}`;
        }
        
        return pageName;
    }

    // Calculate relevance score
    function calculateRelevance(text, query, priority) {
        let score = priority * 10;
        
        // Exact match gets bonus
        if (text.includes(query)) {
            score += 5;
        }
        
        // Word boundary matches get bonus
        const words = query.split(' ');
        words.forEach(word => {
            if (text.includes(word)) {
                score += 2;
            }
        });
        
        // Shorter text gets slight bonus (more specific)
        if (text.length < 100) {
            score += 1;
        }
        
        return score;
    }

    // Display search results
    function displaySearchResults(query) {
        // Create or update results display
        let resultsContainer = document.getElementById('search-results');
        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'search-results';
            resultsContainer.className = 'search-results';
            document.body.appendChild(resultsContainer);
        }

        const topResults = searchResults.slice(0, 5); // Show top 5 results
        resultsContainer.innerHTML = `
            <div class="search-results-header">
                <h4>Search Results for "${query}"</h4>
                <button class="close-search" onclick="hideSearchResults()">×</button>
            </div>
            <div class="search-results-list">
                ${topResults.map((result, index) => `
                    <div class="search-result-item" onclick="scrollToResult(${index})">
                        <div class="result-header">
                            <div class="result-type">${result.type}</div>
                            <div class="result-location">${result.pageContext}</div>
                        </div>
                        <div class="result-text">${highlightQueryInText(result.text, query)}</div>
                    </div>
                `).join('')}
            </div>
            <div class="search-results-footer">
                <span>${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} found</span>
                <div class="search-navigation">
                    <button onclick="navigateResults('prev')" disabled>↑ Previous</button>
                    <button onclick="navigateResults('next')">↓ Next</button>
                </div>
            </div>
        `;

        resultsContainer.style.display = 'block';
    }

    // Highlight query in text
    function highlightQueryInText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // Highlight search results on page
    function highlightResults() {
        searchResults.forEach(result => {
            result.element.style.backgroundColor = 'rgba(0,188,212,0.1)';
            result.element.style.border = '1px solid rgba(0,188,212,0.3)';
            result.element.style.borderRadius = '4px';
        });
    }

    // Clear search highlights
    function clearSearchHighlights() {
        document.querySelectorAll('[style*="rgba(0,188,212,0.1)"]').forEach(element => {
            element.style.backgroundColor = '';
            element.style.border = '';
            element.style.borderRadius = '';
        });
    }

    // Show search summary
    function showSearchSummary(query) {
        const summary = document.createElement('div');
        summary.className = 'search-summary';
        summary.innerHTML = `
            <div class="search-summary-content">
                <i class="fa-solid fa-search"></i>
                <span>Found ${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} for "${query}"</span>
                <button onclick="clearSearch()">Clear</button>
            </div>
        `;
        
        // Remove existing summary
        const existingSummary = document.querySelector('.search-summary');
        if (existingSummary) {
            existingSummary.remove();
        }
        
        document.body.appendChild(summary);
        
        // Auto-hide after 3 seconds
        setTimeout(() => {
            if (summary.parentNode) {
                summary.remove();
            }
        }, 3000);
    }

    // Show no results message
    function showNoResults(query) {
        const noResults = document.createElement('div');
        noResults.className = 'search-no-results';
        noResults.innerHTML = `
            <div class="no-results-content">
                <i class="fa-solid fa-search"></i>
                <span>No results found for "${query}"</span>
                <p>Try different keywords or check your spelling</p>
            </div>
        `;
        
        // Remove existing no results
        const existingNoResults = document.querySelector('.search-no-results');
        if (existingNoResults) {
            existingNoResults.remove();
        }
        
        document.body.appendChild(noResults);
        
        // Auto-hide after 3 seconds
        setTimeout(() => {
            if (noResults.parentNode) {
                noResults.remove();
            }
        }, 3000);
    }

    // Clear search completely
    function clearSearch() {
        searchInput.value = '';
        searchClear.classList.remove('visible');
        clearSearchHighlights();
        hideSearchResults();
        const summary = document.querySelector('.search-summary');
        if (summary) summary.remove();
        const noResults = document.querySelector('.search-no-results');
        if (noResults) noResults.remove();
    }

    // Hide search results
    window.hideSearchResults = function() {
        const resultsContainer = document.getElementById('search-results');
        if (resultsContainer) {
            resultsContainer.style.display = 'none';
        }
    };

    // Scroll to specific result
    window.scrollToResult = function(index) {
        if (searchResults[index]) {
            const element = searchResults[index].element;
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            // Highlight the selected result
            clearSearchHighlights();
            element.style.backgroundColor = 'rgba(0,188,212,0.2)';
            element.style.border = '2px solid var(--accent)';
            element.style.borderRadius = '4px';
            
            // Reset highlight after 2 seconds
            setTimeout(() => {
                element.style.backgroundColor = 'rgba(0,188,212,0.1)';
                element.style.border = '1px solid rgba(0,188,212,0.3)';
            }, 2000);
        }
    };

    // Navigate through results
    window.navigateResults = function(direction) {
        if (direction === 'next' && currentResultIndex < searchResults.length - 1) {
            currentResultIndex++;
        } else if (direction === 'prev' && currentResultIndex > 0) {
            currentResultIndex--;
        }
        
        if (currentResultIndex >= 0) {
            scrollToResult(currentResultIndex);
        }
    };
}

// Scroll progress indicator
const scrollProgress = document.getElementById('scroll-progress');
if (scrollProgress) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// Family Tree Functionality
function initializeFamilyTree() {
    const treeBtns = document.querySelectorAll('.tree-btn');
    const treeGenerations = document.querySelectorAll('.tree-generation');
    const familyMembers = document.querySelectorAll('.family-member');

    // Tree filtering functionality
    treeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filterType = this.getAttribute('data-generation');
            
            // Update active button
            treeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter based on type
            if (filterType === 'all') {
                // Show all generations and members
                treeGenerations.forEach(gen => gen.classList.remove('hidden'));
                familyMembers.forEach(member => member.classList.remove('hidden'));
            } else if (filterType === 'immediate') {
                // Show only immediate family generations
                treeGenerations.forEach(gen => {
                    if (gen.getAttribute('data-generation') === 'immediate') {
                        gen.classList.remove('hidden');
                    } else {
                        gen.classList.add('hidden');
                    }
                });
                familyMembers.forEach(member => {
                    if (member.getAttribute('data-generation') === 'immediate') {
                        member.classList.remove('hidden');
                    } else {
                        member.classList.add('hidden');
                    }
                });
            } else if (filterType === 'extended') {
                // Show extended family (all except immediate)
                treeGenerations.forEach(gen => {
                    if (gen.getAttribute('data-generation') === 'extended') {
                        gen.classList.remove('hidden');
                    } else {
                        gen.classList.add('hidden');
                    }
                });
                familyMembers.forEach(member => {
                    if (member.getAttribute('data-generation') === 'extended') {
                        member.classList.remove('hidden');
                    } else {
                        member.classList.add('hidden');
                    }
                });
            } else if (filterType === 'maternal') {
                // Show maternal line only
                treeGenerations.forEach(gen => gen.classList.remove('hidden'));
                familyMembers.forEach(member => {
                    const lineage = member.getAttribute('data-lineage');
                    if (lineage === 'maternal' || lineage === 'both') {
                        member.classList.remove('hidden');
                    } else {
                        member.classList.add('hidden');
                    }
                });
                // Hide empty generations
                hideEmptyGenerations();
            } else if (filterType === 'paternal') {
                // Show paternal line only
                treeGenerations.forEach(gen => gen.classList.remove('hidden'));
                familyMembers.forEach(member => {
                    const lineage = member.getAttribute('data-lineage');
                    if (lineage === 'paternal' || lineage === 'both') {
                        member.classList.remove('hidden');
                    } else {
                        member.classList.add('hidden');
                    }
                });
                // Hide empty generations
                hideEmptyGenerations();
            }
        });
    });

    // Function to hide generations that have no visible members
    function hideEmptyGenerations() {
        treeGenerations.forEach(gen => {
            const visibleMembers = gen.querySelectorAll('.family-member:not(.hidden)');
            if (visibleMembers.length === 0) {
                gen.classList.add('hidden');
            } else {
                gen.classList.remove('hidden');
            }
        });
    }

    // Family member expansion functionality
    familyMembers.forEach(member => {
        member.addEventListener('click', function() {
            // Close other expanded members
            familyMembers.forEach(m => {
                if (m !== this) {
                    m.classList.remove('expanded');
                }
            });
            
            // Toggle current member
            this.classList.toggle('expanded');
        });
    });

    // Add hover effects for family members
    familyMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        member.addEventListener('mouseleave', function() {
            if (!this.classList.contains('expanded')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Animate family members on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    familyMembers.forEach(member => {
        observer.observe(member);
    });
}

// Initialize family tree when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.family-tree-section')) {
        initializeFamilyTree();
    }
});
