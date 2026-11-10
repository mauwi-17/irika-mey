// Case study content. The structure follows the class "Case Study Slide Deck Template":
// overview -> problem & goal -> my role -> understanding the user -> process
// -> features -> accessibility -> takeaways (what I learned + next steps).
//
// Anything inside [square brackets] is a placeholder still waiting for real info.

export const projects = [
  {
    slug: 'askademic',
    index: '01',
    title: 'Askademic',
    featured: true,
    kind: 'Software Engineering · Team project',
    demo: 'askademic',
    tagline: 'Real-time faculty consultation booking for students and instructors.',
    summary:
      'Students see live faculty availability and book consultations instantly. No more chasing instructors through chats and hallways.',
    live: 'https://askademic1.vercel.app/',
    meta: {
      role: 'Architecture & Design Lead',
      team: 'Team project · Ctrl Alt Elite',
      duration: 'Mar 2026 – Present (in progress)',
      platform: 'Web app',
    },
    stack: ['[Frontend]', '[Backend]', '[Database]'],
    context:
      'Our Software Engineering project, also written up as a concept note for the Philippine Startup Challenge XI under team Ctrl Alt Elite (CAE).',

    product:
      'Askademic is a web-based consultation platform. Students browse a live board of faculty availability and request slots in real time, while faculty approve or decline requests without double-booking.',
    users: [
      { who: 'Students', need: 'need a quick, reliable way to know when an instructor is free and to book time with them.' },
      { who: 'Faculty', need: 'need to share their availability and manage incoming requests in one organized place.' },
    ],
    problem:
      'Students have no centralized way to check faculty availability or request consultations. Scheduling happens through messaging apps, email, and walk-ins, which leads to missed appointments, double-bookings, and time wasted waiting outside offices.',
    goal:
      'Give students and faculty a single source of truth for consultations: live availability, instant requests, and a clear approval workflow.',

    myRole: {
      title: 'Architecture & Design Lead',
      contribution:
        'I planned how the system is structured and led its design direction, from user roles and flows to the interface.',
      responsibilities: ['System architecture', 'User roles & flows', 'UI design direction', 'Design guidance for the team'],
    },

    painPoints: [
      {
        title: 'No visibility',
        text: "Students can't tell when an instructor is actually free, so they wait outside offices hoping for the best. This led us to a live availability board.",
      },
      {
        title: 'Scattered channels',
        text: 'Requests go through personal chats, emails, and walk-ins, so messages get missed or go unanswered for days. One request inbox replaces all of them.',
      },
      {
        title: 'Double-bookings',
        text: 'Two students can unknowingly claim the same time slot. An approve/decline workflow keeps each slot owned by one request.',
      },
      {
        title: 'Sudden changes',
        text: 'Meetings and events force faculty to move consultations, and students are often not told. Status tracking and notifications keep both sides updated.',
      },
    ],

    process: [
      { title: 'Post', text: 'Faculty set their availability status.' },
      { title: 'Browse', text: 'Students view the real-time faculty schedule.' },
      { title: 'Request', text: 'Students submit a consultation request.' },
      { title: 'Review', text: 'Faculty approve or decline.' },
      { title: 'Track', text: 'Both sides monitor the status.' },
      { title: 'Record', text: 'The finished consultation is recorded.' },
    ],

    features: [
      { group: 'Availability', items: ['Real-time status (Available / Busy)', 'Live schedule board'] },
      { group: 'Request', items: ['Instant submission', 'Approve / decline workflow'] },
      { group: 'Tracking', items: ['Status updates: Pending → Approved → Completed', 'Notifications'] },
      { group: 'Access', items: ['Institution-verified login', 'Role-based access (faculty / student)'] },
    ],

    accessibility: [
      'Statuses are never shown by color alone. Every state has a text label and an icon, so it still reads clearly for color-blind users.',
      'High-contrast text and large, clear tap targets on the booking flow.',
      '[Add another accessibility decision your team made, e.g. keyboard navigation or readable font sizes.]',
    ],

    learned:
      '[What you learned as Architecture & Design Lead, e.g. how planning the structure early made it easier for the team to build in parallel, or how designing for two user roles changed your decisions.]',
    nextSteps: [
      'Calendar sync so approved consultations appear in faculty and student calendars automatically.',
      'Push or email reminders before a consultation starts.',
      '[Another improvement you would add next.]',
    ],
  },

  {
    slug: 'wearwhat',
    index: '02',
    title: 'WearWhat',
    featured: false,
    kind: 'Individual project',
    demo: 'wearwhat',
    tagline: 'Your AI-powered personal stylist.',
    summary:
      'Digitizes your wardrobe and recommends outfits based on the weather, your preferences, and color harmony.',
    live: 'https://wear-what-six.vercel.app/',
    meta: {
      role: 'Full-stack Developer (solo)',
      team: 'Individual project',
      duration: 'Apr 2026 – Present (in progress)',
      platform: 'Mobile-first web app',
    },
    stack: ['OpenWeatherMap API', 'K-Means clustering', '[Frontend]', '[Backend]'],
    context: 'A solo project combining my interest in fashion with full-stack development.',

    product:
      'WearWhat is a mobile-first app that acts as your personal AI-powered stylist. You upload your clothes, and it recommends outfit combinations tailored to the weather, your preferences, and color-harmony principles.',
    users: [
      { who: 'Everyday dressers', need: 'want to decide what to wear quickly, using clothes they already own.' },
    ],
    problem:
      "[Confirm] Deciding what to wear every day takes time. It's easy to forget what's in your closet or to pick clothes that don't suit the weather.",
    goal:
      'Make getting dressed effortless by turning your real wardrobe into weather-aware, color-matched outfit suggestions.',

    myRole: {
      title: 'Full-stack Developer',
      contribution: 'Solo project: I handled the design, frontend, backend, and recommendation logic.',
      responsibilities: ['UI/UX design', 'Frontend', 'Backend', 'Recommendation algorithm', 'API integration'],
    },

    painPoints: [],

    process: [
      { title: 'Upload clothing', text: 'Photo + AI color detection.' },
      { title: 'Fetch weather', text: 'OpenWeatherMap API.' },
      { title: 'AI recommendation', text: 'Weighted scoring algorithm.' },
      { title: 'Wear it!', text: 'Save favorites & history.' },
    ],

    features: [
      { group: 'K-Means color detection', items: ['Clusters pixel data to auto-detect the dominant colors of each uploaded item. No manual input needed.'] },
      { group: 'Weather-adaptive filtering', items: ['Real-time weather filters outfits by temperature, rain, and conditions automatically.'] },
      { group: 'Recommendation engine', items: ['Weighted scoring: 40% weather fit, 30% category preference, 30% color harmony.'] },
      { group: 'Favorites & history', items: ["Save loved outfits and track what you've worn, so the model learns your style over time."] },
      { group: 'Category-based wardrobe', items: ['Organize by type (tops, bottoms, shoes) and occasion (casual, formal, date, party, sport).'] },
    ],

    accessibility: [
      'Detected colors are shown with their names and hex codes, not just as swatches.',
      '[Add an accessibility decision you made in WearWhat.]',
    ],

    learned: '[What you learned building a full system on your own.]',
    nextSteps: ['[An improvement you would add next.]'],
  },

  {
    slug: 'tugma',
    index: '03',
    title: 'Tugma',
    featured: false,
    kind: 'Team project',
    demo: 'tugma',
    tagline: 'Privacy-first lost-and-found matching for the barangay.',
    summary:
      'Matches lost items with found ones using a transparent, rule-based approach, without posting anyone’s personal information online.',
    live: 'https://tugma-barangay-system.vercel.app/',
    meta: {
      role: 'Design Concept & Logo',
      team: 'Team project',
      duration: 'Sep 2026 – Present (in progress)',
      platform: 'Web app',
    },
    stack: ['Rule-based similarity matching', '[Frontend]', '[Backend]'],
    context: 'A community lost-and-found system for Barangay Sta. Rita, Olongapo City.',

    product:
      'Tugma is a community lost-and-found system. Residents report what they lost or found, and barangay staff compare each report against everything on file using a rule-based scoring system, then contact the owner. Names and numbers are only visible to staff.',
    users: [
      { who: 'Residents', need: 'need a quick, safe way to report a lost or found item without posting their details publicly.' },
      { who: 'Barangay staff', need: 'need one place to review reports, find likely matches, and verify claims.' },
    ],
    problem:
      'Found items, especially government IDs, are often posted on Facebook to find the owner, exposing personal data without consent (RA 10173). Manual records also make reporting and searching slow.',
    goal:
      'Match lost and found items with a lightweight, transparent approach: no AI models, no complex infrastructure, and no public posting of personal information.',

    myRole: {
      title: 'Design Concept & Logo',
      contribution: "I created Tugma's design concept and logo, and helped the team design the interface.",
      responsibilities: ['Design concept', 'Logo & brand identity', 'UI design support'],
    },

    painPoints: [],

    process: [
      { title: 'Report', text: 'Residents choose “I lost something” or “I found something”.' },
      { title: 'Describe', text: 'Item type, color, description, place, and date.' },
      { title: 'Review', text: 'Staff sign in to see all open reports.' },
      { title: 'Find matches', text: 'Each candidate is scored out of 100.' },
      { title: 'Confirm', text: 'Staff confirm the match and contact the owner.' },
      { title: 'Claim', text: 'Owner verified, item marked claimed, both reports locked.' },
    ],

    features: [
      { group: 'Guided reporting', items: ['Separate lost / found paths', 'Five item categories with examples', 'Helper text on every field'] },
      { group: 'Transparent scoring', items: ['Category 30 · Color 20 · Description 30 · Location 10 · Date 10', 'Only candidates at 50% or higher are shown, with a confidence label'] },
      { group: 'Staff records', items: ['Live counts: lost, found, matched, claimed, archived', 'Filter, search, and status tracking per report'] },
      { group: 'Verified claims', items: ['Staff record who claimed the item, with an optional note (e.g. showed a school ID)', 'Once claimed, both reports are locked and cannot be changed or deleted'] },
      { group: 'Privacy by design', items: ['Names and numbers visible to staff only (RA 10173)', 'Contact details never appear in match results', 'Test mode keeps practice reports apart from real ones'] },
    ],

    accessibility: [
      'Every field has a visible label and a helper hint (e.g. “11 digits, starting with 09”), so residents know exactly what to type.',
      'Item categories are large cards with plain-language examples (“Phone, laptop, charger”) instead of a small dropdown.',
      'The privacy notice is written in simple words right above the submit button, so people know who can see their details before sending.',
    ],

    learned: '[What you learned creating the design concept and logo for a community system.]',
    nextSteps: ['[An improvement you would add next.]'],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
