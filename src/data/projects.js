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
      team: 'Team project (Ctrl Alt Elite)',
      duration: 'Feb 2026 – Nov 2026',
      platform: 'Web app',
    },
    // Verified from the live site's build (React bundle, Vite PWA files, Supabase API URL).
    stack: ['React', 'Vite (installable PWA)', 'React Router', 'Supabase', 'Vercel'],
    context:
      'Our Software Engineering project at Gordon College, College of Computer Studies.',

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
      'As the Architecture & Design Lead, I learned to understand how an organization actually works before deciding how a system should be structured. We started with a single admin role because it was a familiar pattern, but the defense panel’s questions showed that the real structure is a chain of review: instructor, program chair, then department dean. Rebuilding the roles around that chain taught me that architecture is not only about screens and data, but about the people and decisions behind them. It also taught me to design for the moments when things go wrong, like no-shows, so every consultation ends with a clear record.',
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
    // Verified from the WearWhat repo (requirements.txt, main.py, js/, render.yaml).
    stack: ['HTML · CSS · JavaScript', 'Python · Flask', 'scikit-learn (K-Means)', 'Supabase', 'Open-Meteo API', '@imgly background removal', 'Vercel + Render'],
    context:
      'A solo project that started as my UX Strategy & Research Practices exercise and became a full system. It is aligned with three UN Sustainable Development Goals: SDG 12 (Responsible Consumption and Production), SDG 3 (Good Health and Well-being), and SDG 9 (Industry, Innovation and Infrastructure).',

    product:
      'WearWhat is a smart wardrobe organizer with adaptive outfit recommendation. You digitize your wardrobe through photo upload, and it generates personalized outfit suggestions from your own clothes based on real-time weather, your preferences, and color-harmony principles, so getting dressed feels effortless.',
    users: [
      { who: 'College students', need: 'juggle class schedules, social events, and different dress codes, and need to decide quickly.' },
      { who: 'Busy professionals', need: 'need to look put-together every day without spending much time and energy on it.' },
    ],
    problem:
      'Daily outfit selection causes unnecessary decision fatigue, wastes time, encourages impulse buying, and leads to underutilized wardrobes, all of which affect a person’s mental well-being, daily routine, and consumption habits.',
    goal:
      'Remove the stress and wasted time of deciding what to wear, and encourage more sustainable fashion habits by helping people get more out of the clothes they already own.',

    myRole: {
      title: 'Full-stack Developer',
      contribution: 'Solo project: I handled the UX research, design, frontend, backend, and recommendation logic.',
      responsibilities: ['UX research', 'UI/UX design', 'Frontend', 'Backend', 'Recommendation algorithm', 'API integration'],
    },

    research:
      'I used two methods with target users (students and busy professionals): an online survey with five multiple-choice and rating questions, answered by four respondents, and online interviews over Google Meet with four participants, using five open-ended questions about their daily dressing habits.',
    researchStats: [
      { value: '4.0/5', label: 'average likelihood to use an AI outfit app; no one rated below 3' },
      { value: '75%', label: 'said the weather sometimes made their outfit uncomfortable; 25% said very often' },
      { value: '50%', label: 'always repeat the same outfits; nobody said rarely or never' },
      { value: '75%', label: 'are comfortable uploading clothing photos; 25% unsure, none uncomfortable' },
    ],

    painPoints: [
      {
        title: 'Getting dressed looks simple, but the mental effort adds up',
        text: 'No respondent spends more than 15 minutes deciding, but words like “stressed,” “last minute,” and “stuck” kept coming up in interviews. WearWhat replaces the daily “what would look good in this situation?” with: pick an occasion, generate, wear.',
      },
      {
        title: 'Everyone sticks to their favorites',
        text: 'All four respondents said they stick to a few favorite pieces, matching research that people regularly wear only about 20–30% of what they own. A digital wardrobe keeps every item visible and in the mix.',
      },
      {
        title: 'Weather is a known factor, but not planned around',
        text: 'Every respondent has felt uncomfortable because their outfit didn’t suit the weather. That’s why weather fit carries the biggest weight (40%) in the recommendation score.',
      },
      {
        title: 'People buy duplicates they can’t see',
        text: 'Three of four respondents had bought something only to find they already owned something similar at home. A searchable digital wardrobe shows what you already have before you buy.',
      },
      {
        title: 'Ready to use it, as long as it knows their style',
        text: 'All four said they would use an app like WearWhat if it “matches my style, the weather, and the clothes I already have.” Users want suggestions that feel personalized and trustworthy, not generic.',
      },
    ],

    personas: [
      {
        name: 'Jocelyn Docena',
        occupation: 'Busy professional · Junior Marketing Associate',
        hometown: 'Olongapo City',
        quote: 'That way I won’t second-guess if the outfits I’ll be wearing looks good.',
        quoteSource: '— actual interview respondent',
        statement:
          'Jocelyn is a busy professional who needs to look presentable at work and social events without spending too much time deciding what to wear every morning.',
        goal: [
          'Look presentable and put-together at work and social events without spending too much time deciding.',
          'Actually use all the clothes she owns instead of the same few outfits.',
          'Feel confident in her outfits and stop second-guessing herself.',
        ],
        frustration: [
          'Gets stuck every morning asking “what would look good in this situation?” and defaults to the safest outfit.',
          'Has a full closet but feels like she has nothing to wear.',
          'Has bought clothes online, only to find something almost identical at home.',
          'Has shown up over- or under-dressed because she thought about the dress code too late.',
          'On rainy or very hot days, her outfit feels completely wrong for the weather.',
        ],
        behavior: [
          'Uses her smartphone for almost everything, including checking the weather.',
          'Grabs her “safe” outfits on busy mornings.',
          'Browses outfit inspiration online but struggles to recreate it with what she owns.',
          'Comfortable uploading clothing photos if it’s quick and worth it.',
        ],
      },
    ],

    journeys: [
      {
        tab: 'User: get dressed with WearWhat',
        persona: 'Jocelyn, getting ready for a date night',
        goal: 'Find a good outfit fast from her own closet.',
        steps: [
          { title: 'Add clothes', feeling: 'Curious', mood: 3.2, opportunity: 'Color detection and background removal happen automatically.' },
          { title: 'Pick an occasion', feeling: 'Undecided', mood: 2.6, opportunity: 'Five big occasion buttons with labels.' },
          { title: 'Generate outfits', feeling: 'Hopeful', mood: 3.6, opportunity: 'Scored by color harmony, today’s weather, and her favorites.' },
          { title: 'Pick the best', feeling: 'Confident', mood: 4.3, opportunity: 'Each option shows a clear percentage; the highest is marked.' },
          { title: 'Wear it', feeling: 'Satisfied', mood: 4.7, opportunity: 'Saved to history, so tomorrow’s picks stay fresh.' },
        ],
      },
    ],

    usability: {
      intro:
        'Before development, I reviewed WearWhat’s content and navigation and found three issues, each with a recommended improvement. The finished system was then evaluated at the project defense and shared with fellow students.',
      rounds: [
        {
          title: 'Content review',
          findings: [
            { title: 'Recommendations need to explain themselves.', text: 'An outfit with no reason feels arbitrary, so users won’t trust it. Recommendation: show why each outfit was chosen, e.g. warm day, casual outing, colors that go together.' },
            { title: 'A full wardrobe setup can feel overwhelming.', text: 'Uploading everything before seeing value causes drop-off. Recommendation: let users start with a few items and add more over time.' },
            { title: 'One category per item is too rigid.', text: 'A blouse can be both casual and semi-formal. Recommendation: allow multiple tags per item. Clothes can now be tagged with every occasion that applies.' },
          ],
        },
        {
          title: 'Defense & sharing',
          findings: [
            { title: 'Fully accepted and approved.', text: 'The panel reviewed the system during the project defense, and it was fully accepted and approved.' },
            { title: 'Shared with fellow students.', text: 'I shared WearWhat with classmates so they could try it with their own clothes.' },
          ],
        },
      ],
    },

    process: [
      { title: 'Add clothing', text: 'Upload → detect color → remove background → save to wardrobe.' },
      { title: 'Pick occasion', text: 'Casual, formal, date, party, or sport.' },
      { title: 'Generate', text: 'Recommended pairs by color, weather, and preference.' },
      { title: 'Pick the best', text: 'Choose the highest-percentage recommendation.' },
      { title: 'Wear it!', text: 'Done. Saved to your history.' },
    ],

    features: [
      { group: 'Weather-smart recommendations', items: ['Outfits are scored on today’s temperature and conditions (Open-Meteo API).'] },
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

    impact:
      'WearWhat went from research to a working system: all four interview participants said they would use an app like it, survey respondents rated their likelihood 4.0 out of 5 on average, it was fully accepted and approved at the project defense, and fellow students have tried it with their own wardrobes.',
    learned:
      'WearWhat taught me that UX is not just about making something look good. It is about understanding the people who will actually use it. Before this, I thought of design as a mostly visual process. Talking to real people about their dressing habits gave answers that were more honest and emotionally layered than I expected: words like “stressed,” “last minute,” and “stuck” came up naturally, and those words became the foundation of everything I designed afterward. I also learned to turn raw user data into structured insights, personas, and design decisions, and that a technically sound app that users find confusing is not a successful one.',
    nextSteps: [
      'Plan ahead: suggest outfits for the week using the weather forecast, not just today’s.',
      'Rediscover unworn clothes: highlight pieces that haven’t been worn in a while to support SDG 12.',
    ],
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
    // Verified from the live site: single-page HTML/JS app calling Vercel serverless API routes.
    stack: ['HTML · CSS · JavaScript', 'Vercel serverless API', 'Rule-based similarity matching', 'Supabase'],
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

    research:
      'We studied how lost-and-found works in Barangay Sta. Rita today and gathered input from both sides who would use the system: barangay staff and residents. After our adviser approved the system, they tried it hands-on and answered a survey about it.',

    painPoints: [
      {
        title: 'Personal data exposed online',
        text: 'Found items, especially government IDs, are often posted on Facebook to find the owner, exposing personal information without consent (RA 10173). In Tugma, names and numbers are visible to barangay staff only and never appear in match results.',
      },
      {
        title: 'Slow, manual records',
        text: 'Reporting and searching through manual records takes time and effort, so items stay unclaimed. A Records page with live counts, search, and filters lets staff see every open report at once.',
      },
      {
        title: 'Same item, different words',
        text: 'People describe things differently: “cellphone” or “phone”, English or Taglish (“Samsung na may clear case”). Matching scores category, color, description, location, and date instead of looking for the exact same words.',
      },
      {
        title: 'Proving real ownership',
        text: 'Before returning an item, staff must be sure the person is the real owner. “Mark as claimed” records who claimed it and what proof they showed, then locks both reports.',
      },
    ],

    personas: [
      {
        name: 'Lea',
        age: 20,
        occupation: 'College student',
        hometown: 'Barangay Sta. Rita',
        quote: 'I just want my ID back, not posted for everyone to see.',
        statement:
          'Lea is a resident who lost her wallet with her school ID at the covered court and needs a safe way to get it back without her details being posted online.',
        goal: 'Report the lost item quickly and get it back.',
        frustration: 'She doesn’t know where to report, and worries her ID photo will end up on Facebook.',
      },
      {
        name: 'Mr. Dante',
        age: 47,
        occupation: 'Barangay staff',
        hometown: 'Barangay Sta. Rita',
        quote: 'I know it’s here somewhere in the logbook.',
        statement:
          'Mr. Dante is a barangay staff member who handles lost-and-found and needs to match items with their owners without digging through paper records.',
        goal: 'Match and return items fast while following data privacy rules.',
        frustration: 'Manual records are hard to search, and it’s hard to tell if a claimant is the real owner.',
      },
    ],

    journeys: [
      {
        tab: 'Resident: report a lost item',
        persona: 'Lea, a resident who lost her wallet',
        goal: 'Get her wallet and ID back safely.',
        steps: [
          { title: 'Realize the item is lost', feeling: 'Worried', mood: 1.8, opportunity: 'One clear place to report, instead of posting online.' },
          { title: 'Report the item', feeling: 'Unsure', mood: 2.8, opportunity: 'Category cards, helper hints, and a privacy notice before submitting.' },
          { title: 'Wait for a match', feeling: 'Anxious', mood: 2.3, opportunity: 'Staff compare it against everything on file and contact her.' },
          { title: 'Claim the item', feeling: 'Relieved', mood: 4.6, opportunity: 'Staff verify ownership and note what proof was shown.' },
        ],
      },
      {
        tab: 'Staff: match and return',
        persona: 'Mr. Dante, barangay staff',
        goal: 'Return items to their real owners without exposing anyone’s data.',
        steps: [
          { title: 'Open the records', feeling: 'Organized', mood: 4, opportunity: 'Live counts of lost, found, matched, and claimed items.' },
          { title: 'Review new reports', feeling: 'Busy', mood: 2.8, opportunity: 'Search and filters; test data kept separate.' },
          { title: 'Find matches', feeling: 'Hopeful', mood: 3.8, opportunity: 'Scores out of 100; only 50% and up shown, with a confidence label.' },
          { title: 'Confirm the match', feeling: 'Confident', mood: 4.2, opportunity: 'Contact details visible to staff only.' },
          { title: 'Mark as claimed', feeling: 'Relieved', mood: 4.6, opportunity: 'Record the claimant and proof; both reports are locked.' },
        ],
      },
    ],

    usability: {
      intro:
        'Testing happened in two stages: our adviser reviewed and approved the system, then barangay staff and residents used it hands-on and answered a survey about it.',
      rounds: [
        {
          title: 'Stage 1 · Adviser review',
          findings: [
            { title: 'System approved for testing.', text: 'Our adviser reviewed the system’s flow and design and approved it before we ran the survey with real users.' },
          ],
        },
        {
          title: 'Stage 2 · Hands-on survey',
          findings: [
            { title: 'Real users, real tasks.', text: 'Barangay staff and residents used the system themselves: residents filed reports, and staff reviewed records and found matches.' },
            { title: 'Survey after use.', text: 'Right after using it, they answered a survey about how easy and useful the system was.' },
          ],
        },
      ],
    },

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

    impact:
      'Tugma was tested by the people it is built for: barangay staff and residents of Barangay Sta. Rita used it hands-on and answered a survey about it. Lost items can now be matched with their owners without anyone’s personal details being posted online.',
    learned:
      'Creating Tugma’s design concept and logo taught me that a brand for a public service has to feel trustworthy before it feels stylish. I chose two simple pieces that fit together in calm teal and green, so the idea of “matching” is clear at a glance, even for residents who rarely use apps. Watching the interface come together with the team also showed me how small design choices, like a plain-language privacy notice, build that same trust inside the system.',
    nextSteps: [
      'SMS alerts: text the owner as soon as staff confirm a match, so residents don’t have to keep checking.',
      'Grow beyond one barangay: share the same privacy-first matching with nearby barangays in Olongapo City.',
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
