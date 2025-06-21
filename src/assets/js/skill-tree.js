// Skill Tree JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Skill data with detailed information
    const skillData = {
        'medical-foundation': {
            name: 'Medical Foundation',
            icon: 'fa-user-md',
            level: 'Expert',
            progress: 95,
            description: 'Comprehensive understanding of medical fundamentals, including anatomy, physiology, and clinical reasoning.',
            achievements: [
                'Completed pre-medical coursework with honors',
                'Participated in medical shadowing programs',
                'Achieved high scores in medical entrance exams',
                'Completed medical terminology certification'
            ],
            nextSteps: [
                'Apply to medical schools',
                'Complete MCAT preparation',
                'Gain clinical experience',
                'Develop research portfolio'
            ]
        },
        'anatomy': {
            name: 'Anatomy',
            icon: 'fa-brain',
            level: 'Advanced',
            progress: 85,
            description: 'Deep knowledge of human anatomy, including musculoskeletal, cardiovascular, and nervous systems.',
            achievements: [
                'Completed advanced anatomy courses',
                'Participated in cadaver lab sessions',
                'Achieved top scores in anatomy exams',
                'Created detailed anatomical diagrams'
            ],
            nextSteps: [
                'Study clinical anatomy applications',
                'Learn surgical anatomy',
                'Explore radiological anatomy',
                'Practice anatomical modeling'
            ]
        },
        'physiology': {
            name: 'Physiology',
            icon: 'fa-heart-pulse',
            level: 'Advanced',
            progress: 80,
            description: 'Understanding of human body functions and physiological processes across all organ systems.',
            achievements: [
                'Completed physiology coursework',
                'Conducted physiological experiments',
                'Analyzed physiological data',
                'Presented research findings'
            ],
            nextSteps: [
                'Study pathophysiology',
                'Learn clinical physiology',
                'Explore exercise physiology',
                'Research physiological adaptations'
            ]
        },
        'biochemistry': {
            name: 'Biochemistry',
            icon: 'fa-dna',
            level: 'Intermediate',
            progress: 65,
            description: 'Knowledge of biochemical processes, molecular biology, and cellular mechanisms.',
            achievements: [
                'Completed biochemistry courses',
                'Performed laboratory experiments',
                'Analyzed biochemical pathways',
                'Studied molecular interactions'
            ],
            nextSteps: [
                'Advanced biochemistry courses',
                'Molecular biology techniques',
                'Biochemical research methods',
                'Clinical biochemistry applications'
            ]
        },
        'clinical-skills': {
            name: 'Clinical Skills',
            icon: 'fa-stethoscope',
            level: 'Beginner',
            progress: 30,
            description: 'Basic clinical assessment skills and patient interaction techniques.',
            achievements: [
                'Completed basic clinical training',
                'Practiced patient communication',
                'Learned vital signs assessment',
                'Participated in clinical simulations'
            ],
            nextSteps: [
                'Advanced clinical rotations',
                'Patient assessment training',
                'Clinical reasoning development',
                'Medical procedure practice'
            ]
        },
        'programming': {
            name: 'Programming',
            icon: 'fa-code',
            level: 'Advanced',
            progress: 85,
            description: 'Proficient in multiple programming languages and software development practices.',
            achievements: [
                'Built multiple web applications',
                'Contributed to open-source projects',
                'Completed programming certifications',
                'Developed automation tools'
            ],
            nextSteps: [
                'Learn advanced algorithms',
                'Study software architecture',
                'Explore AI/ML programming',
                'Contribute to larger projects'
            ]
        },
        'web-development': {
            name: 'Web Development',
            icon: 'fa-globe',
            level: 'Advanced',
            progress: 90,
            description: 'Full-stack web development skills including frontend and backend technologies.',
            achievements: [
                'Built responsive websites',
                'Implemented modern frameworks',
                'Optimized performance',
                'Deployed production applications'
            ],
            nextSteps: [
                'Learn advanced frameworks',
                'Study cloud architecture',
                'Explore mobile development',
                'Master DevOps practices'
            ]
        },
        'python': {
            name: 'Python',
            icon: 'fa-brands fa-python',
            level: 'Intermediate',
            progress: 70,
            description: 'Proficient in Python programming for data analysis, automation, and web development.',
            achievements: [
                'Built data analysis scripts',
                'Created automation tools',
                'Developed web applications',
                'Completed Python projects'
            ],
            nextSteps: [
                'Advanced Python frameworks',
                'Data science libraries',
                'Machine learning with Python',
                'Python optimization techniques'
            ]
        },
        'data-analysis': {
            name: 'Data Analysis',
            icon: 'fa-chart-line',
            level: 'Intermediate',
            progress: 75,
            description: 'Skills in data collection, cleaning, analysis, and visualization.',
            achievements: [
                'Analyzed complex datasets',
                'Created data visualizations',
                'Applied statistical methods',
                'Presented data insights'
            ],
            nextSteps: [
                'Advanced statistical analysis',
                'Machine learning applications',
                'Big data processing',
                'Predictive modeling'
            ]
        },
        'machine-learning': {
            name: 'Machine Learning',
            icon: 'fa-robot',
            level: 'Beginner',
            progress: 40,
            description: 'Basic understanding of machine learning algorithms and applications.',
            achievements: [
                'Completed ML courses',
                'Built simple ML models',
                'Studied ML algorithms',
                'Applied ML to datasets'
            ],
            nextSteps: [
                'Advanced ML algorithms',
                'Deep learning frameworks',
                'ML model deployment',
                'Specialized ML applications'
            ]
        },
        'leadership': {
            name: 'Leadership',
            icon: 'fa-crown',
            level: 'Advanced',
            progress: 85,
            description: 'Proven leadership abilities in team management, project coordination, and strategic planning.',
            achievements: [
                'Led multiple teams successfully',
                'Managed complex projects',
                'Mentored team members',
                'Achieved organizational goals'
            ],
            nextSteps: [
                'Executive leadership training',
                'Strategic planning skills',
                'Change management',
                'Organizational development'
            ]
        },
        'team-management': {
            name: 'Team Management',
            icon: 'fa-users',
            level: 'Advanced',
            progress: 80,
            description: 'Effective team coordination, conflict resolution, and performance optimization.',
            achievements: [
                'Managed diverse teams',
                'Improved team performance',
                'Resolved team conflicts',
                'Built team culture'
            ],
            nextSteps: [
                'Advanced team dynamics',
                'Remote team management',
                'Cross-cultural leadership',
                'Team development strategies'
            ]
        },
        'public-speaking': {
            name: 'Public Speaking',
            icon: 'fa-microphone',
            level: 'Intermediate',
            progress: 70,
            description: 'Confident presentation skills and audience engagement techniques.',
            achievements: [
                'Presented to large audiences',
                'Delivered keynote speeches',
                'Conducted workshops',
                'Received speaking awards'
            ],
            nextSteps: [
                'Advanced presentation techniques',
                'Storytelling skills',
                'Audience engagement',
                'Professional speaking'
            ]
        },
        'mentorship': {
            name: 'Mentorship',
            icon: 'fa-chalkboard-user',
            level: 'Intermediate',
            progress: 75,
            description: 'Guiding and supporting others in their personal and professional development.',
            achievements: [
                'Mentored multiple individuals',
                'Developed mentorship programs',
                'Provided career guidance',
                'Supported skill development'
            ],
            nextSteps: [
                'Advanced mentorship techniques',
                'Group mentorship programs',
                'Mentorship training',
                'Mentorship evaluation'
            ]
        },
        'conflict-resolution': {
            name: 'Conflict Resolution',
            icon: 'fa-handshake',
            level: 'Beginner',
            progress: 50,
            description: 'Basic skills in identifying, addressing, and resolving conflicts effectively.',
            achievements: [
                'Resolved team conflicts',
                'Mediated disagreements',
                'Applied conflict resolution techniques',
                'Maintained team harmony'
            ],
            nextSteps: [
                'Advanced conflict resolution',
                'Mediation training',
                'Negotiation skills',
                'Organizational conflict management'
            ]
        },
        'content-creation': {
            name: 'Content Creation',
            icon: 'fa-video',
            level: 'Advanced',
            progress: 85,
            description: 'Creating engaging digital content across multiple platforms and formats.',
            achievements: [
                'Created viral content',
                'Built engaged audience',
                'Monetized content',
                'Collaborated with brands'
            ],
            nextSteps: [
                'Advanced content strategies',
                'Content monetization',
                'Brand partnerships',
                'Content analytics'
            ]
        },
        'video-editing': {
            name: 'Video Editing',
            icon: 'fa-film',
            level: 'Advanced',
            progress: 90,
            description: 'Professional video editing skills using modern software and techniques.',
            achievements: [
                'Edited professional videos',
                'Mastered editing software',
                'Created visual effects',
                'Optimized video quality'
            ],
            nextSteps: [
                'Advanced visual effects',
                'Color grading mastery',
                'Motion graphics',
                'Video production'
            ]
        },
        'graphic-design': {
            name: 'Graphic Design',
            icon: 'fa-palette',
            level: 'Intermediate',
            progress: 70,
            description: 'Creating visually appealing designs for various media and platforms.',
            achievements: [
                'Designed marketing materials',
                'Created brand identities',
                'Produced digital graphics',
                'Collaborated with clients'
            ],
            nextSteps: [
                'Advanced design software',
                'UI/UX design',
                'Brand strategy',
                'Design systems'
            ]
        },
        'writing': {
            name: 'Writing',
            icon: 'fa-pen',
            level: 'Intermediate',
            progress: 75,
            description: 'Effective written communication across various formats and audiences.',
            achievements: [
                'Published articles',
                'Created content strategies',
                'Edited written materials',
                'Received writing recognition'
            ],
            nextSteps: [
                'Advanced writing techniques',
                'Content strategy',
                'Copywriting skills',
                'Writing for different audiences'
            ]
        },
        'photography': {
            name: 'Photography',
            icon: 'fa-camera',
            level: 'Beginner',
            progress: 45,
            description: 'Basic photography skills and image composition techniques.',
            achievements: [
                'Captured quality images',
                'Learned composition rules',
                'Edited photos',
                'Built photography portfolio'
            ],
            nextSteps: [
                'Advanced photography techniques',
                'Professional equipment',
                'Photo editing mastery',
                'Photography business'
            ]
        },
        'volleyball': {
            name: 'Volleyball',
            icon: 'fa-volleyball',
            level: 'Expert',
            progress: 95,
            description: 'Elite volleyball skills with competitive experience and coaching abilities.',
            achievements: [
                'Competed at high levels',
                'Won championships',
                'Received MVP awards',
                'Coached youth teams'
            ],
            nextSteps: [
                'Professional opportunities',
                'Advanced coaching',
                'Sports management',
                'Youth development programs'
            ]
        },
        'teamwork': {
            name: 'Teamwork',
            icon: 'fa-people-group',
            level: 'Expert',
            progress: 95,
            description: 'Exceptional collaboration skills and team dynamics understanding.',
            achievements: [
                'Led successful teams',
                'Collaborated on major projects',
                'Built team cohesion',
                'Achieved team goals'
            ],
            nextSteps: [
                'Team building expertise',
                'Cross-functional collaboration',
                'Virtual team management',
                'Team performance optimization'
            ]
        },
        'physical-fitness': {
            name: 'Physical Fitness',
            icon: 'fa-dumbbell',
            level: 'Advanced',
            progress: 85,
            description: 'Maintaining high physical fitness levels and athletic performance.',
            achievements: [
                'Achieved fitness goals',
                'Maintained consistent training',
                'Improved athletic performance',
                'Inspired others to fitness'
            ],
            nextSteps: [
                'Advanced training programs',
                'Nutrition optimization',
                'Recovery techniques',
                'Fitness coaching'
            ]
        },
        'sports-strategy': {
            name: 'Sports Strategy',
            icon: 'fa-chess',
            level: 'Intermediate',
            progress: 70,
            description: 'Understanding of game strategies, tactics, and competitive analysis.',
            achievements: [
                'Developed game strategies',
                'Analyzed opponents',
                'Made tactical decisions',
                'Improved team performance'
            ],
            nextSteps: [
                'Advanced strategy development',
                'Sports analytics',
                'Performance analysis',
                'Strategic coaching'
            ]
        },
        'coaching': {
            name: 'Coaching',
            icon: 'fa-person-chalkboard',
            level: 'Beginner',
            progress: 40,
            description: 'Basic coaching skills and youth development techniques.',
            achievements: [
                'Coached youth teams',
                'Developed training programs',
                'Mentored young athletes',
                'Improved player skills'
            ],
            nextSteps: [
                'Advanced coaching certification',
                'Performance psychology',
                'Youth development expertise',
                'Coaching methodology'
            ]
        }
    };

    // Initialize skill tree functionality
    initializeSkillTree();

    function initializeSkillTree() {
        // Add click event listeners to skill nodes
        const skillNodes = document.querySelectorAll('.skill-node');
        skillNodes.forEach(node => {
            node.addEventListener('click', function() {
                const skillId = this.getAttribute('data-skill');
                showSkillDetails(skillId);
            });
        });

        // Add click event listeners to control buttons
        const controlBtns = document.querySelectorAll('.control-btn');
        controlBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const branch = this.getAttribute('data-branch');
                filterSkills(branch);
                
                // Update active button
                controlBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Add click event listener to close panel
        const closePanel = document.getElementById('closePanel');
        if (closePanel) {
            closePanel.addEventListener('click', hideSkillDetails);
        }

        // Add animation on scroll
        animateSkillNodes();
    }

    function showSkillDetails(skillId) {
        const skill = skillData[skillId];
        if (!skill) return;

        const panel = document.getElementById('skillInfoPanel');
        const details = document.getElementById('skillDetails');

        // Create skill detail content
        const detailContent = `
            <div class="skill-detail-content active">
                <div class="skill-detail-header">
                    <i class="skill-detail-icon ${skill.icon}"></i>
                    <div class="skill-detail-title">
                        <h4>${skill.name}</h4>
                        <span class="skill-detail-level ${skill.level.toLowerCase()}">${skill.level}</span>
                    </div>
                </div>
                
                <div class="skill-detail-description">
                    ${skill.description}
                </div>
                
                <div class="skill-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${skill.progress}%"></div>
                    </div>
                    <div class="progress-text">
                        <span>Progress</span>
                        <span>${skill.progress}%</span>
                    </div>
                </div>
                
                <div class="skill-achievements">
                    <h5>Achievements</h5>
                    <ul class="achievements-list">
                        ${skill.achievements.map(achievement => `<li><i class="fa-solid fa-check"></i>${achievement}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="skill-next-steps">
                    <h5>Next Steps</h5>
                    <ul>
                        ${skill.nextSteps.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        details.innerHTML = detailContent;
        panel.style.display = 'block';

        // Animate panel appearance
        setTimeout(() => {
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
        }, 10);
    }

    function hideSkillDetails() {
        const panel = document.getElementById('skillInfoPanel');
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            panel.style.display = 'none';
        }, 300);
    }

    function filterSkills(branch) {
        const skillBranches = document.querySelectorAll('.skill-branch');
        
        skillBranches.forEach(skillBranch => {
            if (branch === 'all' || skillBranch.getAttribute('data-category') === branch) {
                skillBranch.style.display = 'block';
                skillBranch.style.opacity = '1';
                skillBranch.style.transform = 'scale(1)';
            } else {
                skillBranch.style.opacity = '0';
                skillBranch.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    skillBranch.style.display = 'none';
                }, 300);
            }
        });
    }

    function animateSkillNodes() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        const skillNodes = document.querySelectorAll('.skill-node');
        skillNodes.forEach((node, index) => {
            node.style.opacity = '0';
            node.style.transform = 'translateY(20px)';
            node.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(node);
        });
    }

    // Add hover effects for skill nodes
    const skillNodes = document.querySelectorAll('.skill-node');
    skillNodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
        });
        
        node.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Add progress bar animation
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    }

    // Initialize progress bar animations when skill details are shown
    const originalShowSkillDetails = showSkillDetails;
    showSkillDetails = function(skillId) {
        originalShowSkillDetails(skillId);
        setTimeout(animateProgressBars, 600);
    };
}); 