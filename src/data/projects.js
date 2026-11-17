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
      duration: 'Feb 2026 – Nov 2026',
      platform: 'Web app',
    },
    stack: ['[Frontend]', '[Backend]', '[Database]'],
    context:
      'Our Software Engineering project, also written up as a concept note for the Philippine Startup Challenge XI under team Ctrl Alt Elite (CAE).',

    product:
      'Askademic is a web-based consultation system designed for college students to request appointment slots with faculty members. Instructors can approve requests and document the consultation details, while program chairs and department deans can review student feedback and ratings. Overall, the platform streamlines student–instructor communication and improves the consultation experience.',
    users: [
      { who: 'Students', need: 'need to know when an instructor is really available and book time with a clear purpose.' },
      { who: 'Instructors', need: 'need quick, recurring availability and a record of every consultation they held.' },
      { who: 'Program chairs & deans', need: 'need evidence of how consultations go and a fair basis for evaluating instructors.' },
    ],
    problem:
      'Students can’t tell when an instructor is really available, instructors have no record of consultations that happened or didn’t, and the department has no evidence of how consultations go.',
    goal:
      'Make booking clear, close every consultation with a recorded outcome, and give the department a fair basis for evaluating instructors.',

    myRole: {
      title: 'Architecture & Design Lead',
      contribution:
        'I planned how the system is structured and led its design direction, from user roles and flows to the interface.',
      responsibilities: ['System architecture', 'User roles & flows', 'UI design direction', 'Design guidance for the team'],
    },

    research:
      'The team assumed our target users were experiencing the problem. To prove it, we ran a survey and interviews with the college’s faculty members and students. The data confirmed our assumption, turning it into a confirmed hypothesis.',

    painPoints: [
      {
        title: 'Unclear availability for students',
        text: 'Students can’t tell when an instructor is actually free, so they chase them through chat or the faculty room and often find no one there. Every screen now shows real, bookable slots and clear request statuses, so a student never has to guess.',
      },
      {
        title: 'Part-time instructors can’t maintain a calendar',
        text: 'Part-timers have little time to update their availability every day, which leaves schedules outdated. Setting availability is quick and recurring by default, with the department’s blocked dates applied automatically, so instructors only handle exceptions.',
      },
      {
        title: 'No record of whether a consultation happened',
        text: 'Without an outcome, the department has no evidence of how consultations go, and a no-show looks the same as a held session. Every appointment now ends in a recorded outcome (“Closed · Held” or “Closed · No-show”).',
      },
      {
        title: 'Leaders who are also instructors',
        text: 'Program chairs and the dean teach too, so one account has to act as both a manager and an instructor without conflicts of interest. A role switcher separates the two views, and ratings of a chair or the dean go to the next level up.',
      },
    ],

    personas: [
      {
        name: 'Nilou',
        age: 23,
        occupation: 'Graduating college student',
        hometown: 'Olongapo City',
        quote: 'Deadline is coming! I badly need to get this done!',
        statement:
          'Nilou is a graduating student who needs to have her thesis consulted with her adviser because her final defense is coming up next week and she needs guidance.',
        goal: 'Have her project consulted with her instructor before the defense.',
        frustration: 'Not knowing if her adviser is available, so she spends hours waiting outside the faculty room.',
      },
      {
        name: 'Albedo Santos',
        age: 43,
        occupation: 'Full-time college instructor',
        hometown: 'Bataan',
        statement:
          'Albedo is a full-time college instructor who needs to meet his students’ expectations in providing support and guidance in the course.',
        goal: 'Give students prompt academic support without disrupting his daily workflow.',
        frustration: 'Ad-hoc walk-ins disrupt his day, and he struggles to track requests or tell students about sudden schedule changes.',
      },
    ],

    journeys: [
      {
        tab: 'Student: get a consultation',
        persona: 'Mika, a student who needs a consultation',
        goal: 'Get an appointment and feedback on her project.',
        steps: [
          { title: 'Find an instructor and open hours', feeling: 'Confused', mood: 2, opportunity: 'Show the fixed schedule and today’s live status side by side.' },
          { title: 'Request a slot with a purpose', feeling: 'Nervous', mood: 2.6, opportunity: 'Show seats left and ask for a short purpose.' },
          { title: 'Wait for approval', feeling: 'Anxious', mood: 2, opportunity: 'Notify on every decision. Expire stale requests so seats free up.' },
          { title: 'Attend the consultation', feeling: 'Reassured', mood: 4, opportunity: 'Remind before the slot. Show if the instructor is running late.' },
          { title: 'Rate the consultation', feeling: 'Heard', mood: 4.5, opportunity: 'A familiar paper-style form. Names are never shown to instructors.' },
        ],
      },
      {
        tab: 'Instructor: run a consultation',
        persona: 'Mr. Arnie, an instructor who runs consultations',
        goal: 'Help students without losing track of who came.',
        steps: [
          { title: 'Set weekly hours', feeling: 'Organized', mood: 4.5, opportunity: 'Choose own slot length and seats per slot.' },
          { title: 'Review requests', feeling: 'Pressed', mood: 2.8, opportunity: 'Pending list shows seats held and the purpose up front.' },
          { title: 'Approve or decline', feeling: 'In control', mood: 4, opportunity: 'Approve up to the seats. The rest are declined automatically.' },
          { title: 'Hold the consultation', feeling: 'Focused', mood: 4, opportunity: 'Status shows busy, then returns to available.' },
          { title: 'Record the outcome', feeling: 'Relieved', mood: 3.6, opportunity: 'One short form: held or no-show, resolved, follow-up. No-shows free the slot.' },
          { title: 'See ratings and remarks', feeling: 'Curious', mood: 3.6, opportunity: 'Scores per criterion. Comments appear only after enough responses.' },
        ],
      },
    ],

    usability: {
      intro:
        'We didn’t run lab sessions. Our usability studies were two rounds of review by the people who would judge and use the system: the final defense panel on May 8, 2026, and a follow-up from the faculty representative.',
      rounds: [
        {
          title: 'Round 1 findings',
          findings: [
            { title: 'Several students can want the same last slot.', text: 'Students can now request it, and once the instructor approves one, the others are cancelled automatically.' },
            { title: 'A no-show had no way to end a record.', text: 'Instructors can mark “No-show,” and “Completed” became “Closed” so it matches the remark chosen.' },
            { title: 'The hierarchy wasn’t clear.', text: 'Program chairs were view-only and the department dean’s role was missing, so we built interfaces for both.' },
          ],
        },
        {
          title: 'Round 2 findings',
          findings: [
            { title: 'Availability should be trackable per day.', text: 'The calendar now works like a familiar month view, with appointment counts per day and long names shortened.' },
            { title: 'A no-show needs a required note and clearer features.', text: 'The no-show flow is being tightened so the outcome is obvious to everyone.' },
            { title: 'Records need limits and a way out.', text: 'Chairs and the department dean get Reports, and history limits and export are being finalized.' },
          ],
        },
      ],
    },

    process: [
      { title: 'Set hours', text: 'Instructors set recurring weekly hours, slot length, and seats.' },
      { title: 'Book', text: 'Students pick a date and slot and add a purpose.' },
      { title: 'Approve', text: 'Instructors approve up to the seats; the rest are declined automatically.' },
      { title: 'Consult', text: 'Status shows busy, then returns to available.' },
      { title: 'Record outcome', text: 'Closed · Held or Closed · No-show, with follow-up notes.' },
      { title: 'Rate & review', text: 'Students rate the session; chairs and the dean review.' },
    ],

    features: [
      { group: 'Availability', items: ['Recurring weekly hours with slot length and seats', 'Department blocked dates applied automatically', 'Real-time status and next open schedule'] },
      { group: 'Booking', items: ['Date picker with slots left per day', 'Topic + short purpose for every request', 'Reference number; extra requests auto-declined when seats fill'] },
      { group: 'Outcomes', items: ['Every consultation closes as Held or No-show', 'Follow-up notes recorded by the instructor'] },
      { group: 'Feedback & oversight', items: ['Students rate sessions; names never shown to instructors', 'Program chair and dean views with Reports', 'Role switcher for leaders who also teach'] },
    ],

    accessibility: [
      'Not color alone: status badges and calendar legends carry words as well as color (Pending, Approved, Closed, Declined, Follow-up), so a color-blind user can still tell them apart.',
      'Forms that guide: every field has a visible label and an example, the active field gets a clear outline, and the password can be revealed so mistakes are easy to catch.',
      'Readable and reachable: dark navy text on light surfaces, generous spacing, and big touch targets. On phones, the navigation pairs each icon with a text label.',
    ],

    impact:
      'Askademic replaces chasing instructors with bookable slots and a recorded outcome for every consultation. Its dashboard already tracks 46 consultation requests across 8 faculty and 5 students, with 14 closed with a recorded outcome.',
    learned:
      'Understand how an organization is structured before designing for it. We built an admin because it was a familiar pattern, but the panel’s questions showed that the real structure was a chain of review: instructor, program chair, then department dean.',
    nextSteps: [
      'Integrate Google Calendar: students and instructors already plan their days there. Syncing approved consultations saves part-time instructors from keeping a second calendar, and answers the faculty representative’s call for a calendar they already know.',
      'Deploy across the whole campus: every department has the same problem. The system already supports roles, program views, and school-wide closed dates, so it can grow beyond the CCS department.',
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
      logo: 'tugma',
      logoNote:
        'Two rounded pieces that lock together like a puzzle, the same way Tugma matches a lost item with its found report. “Tugma” means “match” in Filipino.',
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
