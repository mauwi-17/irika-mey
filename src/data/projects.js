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
    icon: 'bubble',
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
      'Askademic is a web-based consultation platform for Gordon College. Students sign in with their school account, check each instructor’s real-time availability in the Faculty Directory, and request a specific date and time slot. Faculty then approve or decline, so every slot belongs to one request.',
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
      { title: 'Sign in', text: 'Gordon College account, student or faculty role.' },
      { title: 'Find faculty', text: 'Directory with real-time availability and next schedule.' },
      { title: 'Pick a slot', text: 'Choose a day and time; slots left are shown.' },
      { title: 'Add details', text: 'Consultation topic and optional notes.' },
      { title: 'Submit', text: 'Gets a reference number, pending approval.' },
      { title: 'Faculty review', text: 'Instructor approves or declines; tracked in My Appointments.' },
    ],

    features: [
      { group: 'Availability', items: ['Real-time availability per instructor', 'Next open schedule shown in the directory', 'Booking disabled when no schedule is set'] },
      { group: 'Booking', items: ['Date picker with slots left per day', 'No-hours and blocked days can’t be picked', 'Topic + optional notes'] },
      { group: 'Tracking', items: ['Reference number for every request', 'Pending until faculty approval', 'My Appointments page and notifications'] },
      { group: 'Access', items: ['Gordon College account sign-in', 'Role-based access (student / faculty)'] },
    ],

    accessibility: [
      'Availability and slot status are written in words (“Available”, “3 left”, “No hours”, “Blocked”), not shown by color alone.',
      'When an instructor has no schedule, the Book button is greyed out and the card says “No schedule set”, so students know why they can’t book.',
      'Form fields have visible labels with icons, and the password field has a show/hide toggle to reduce typing mistakes.',
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
    icon: 'hanger',
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
    stack: ['OpenWeatherMap API', 'K-Means clustering', '[Frontend]', '[Backend]'],    context:
      'A solo project combining my interest in fashion with full-stack development, aligned with UN SDG 12 (Responsible Consumption).',

    product:
      'WearWhat is a mobile-first app that acts as your personal AI-powered stylist. You add your clothes, pick an occasion, and it generates outfit combinations from your own wardrobe, scored for today’s weather, your favorite pieces, and color harmony.',
    users: [
      { who: 'Everyday dressers', need: 'want to decide what to wear quickly, using clothes they already own.' },
      { who: 'Conscious shoppers', need: 'want to get more wear out of their closet instead of buying new clothes.' },
    ],
    problem:
      "Deciding what to wear every day takes time, and many clothes go unworn because it's easy to forget what's in your closet. That leads to buying more and to textile waste.",
    goal:
      'Help people wear more of what they already own (SDG 12) with weather-aware, occasion-matched outfit suggestions from their real wardrobe.',

    myRole: {
      title: 'Full-stack Developer',
      contribution: 'Solo project: I handled the design, frontend, backend, and recommendation logic.',
      responsibilities: ['UI/UX design', 'Frontend', 'Backend', 'Recommendation algorithm', 'API integration'],
    },

    painPoints: [],

    process: [
      { title: 'Add clothing', text: 'Upload → detect color → remove background → save to wardrobe.' },
      { title: 'Pick occasion', text: 'Casual, formal, date, party, or sport.' },
      { title: 'Generate', text: 'Recommended pairs by color, weather, and preference.' },
      { title: 'Pick the best', text: 'Choose the highest-percentage recommendation.' },
      { title: 'Wear it!', text: 'Done. Saved to your history.' },
    ],

    features: [
      { group: 'Weather-smart recommendations', items: ['Outfits are scored on today’s temperature and conditions (OpenWeatherMap API).'] },
      { group: 'Preference-aware styling', items: ['Heart your favorite pieces to see them more often in recommendations.'] },
      { group: 'Occasion-matched outfits', items: ['Only items tagged for the chosen occasion appear: casual, formal, date, party, or sport.'] },
      { group: 'Recommendation engine', items: ['Weighted scoring: 40% weather fit, 30% preference, 30% color harmony.', 'Recommendations are ranked by compatibility score (e.g. 86%), so you can pick the highest one.'] },
      { group: 'Smart upload', items: ['Gallery or camera upload.', 'K-Means clustering detects each item’s dominant color, then the background is removed automatically.', 'Tag clothing type and every occasion an item fits.'] },
      { group: 'History & favorites', items: ['Track what you’ve worn and save outfits you love.'] },
    ],

    accessibility: [
      'Every item in an outfit is listed with its category and color in words (e.g. “Top · Gray”), not only as a photo.',
      'Bottom navigation and occasion buttons pair each icon with a text label.',
      'The compatibility score is shown as a clear number, so it does not rely on color or charts alone.',
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
    icon: 'puzzle',
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
