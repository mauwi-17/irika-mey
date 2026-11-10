// All personal content lives here so the components stay reusable.
// Edit this file to update text on the site — no need to touch the components.
import photoHero from '../assets/me-pose.jpg';
import photoAbout from '../assets/me-plaid.jpg';

export const profile = {
  name: 'Erica Mae D. Camintoy',
  short: 'Erica Mae',
  nickname: 'Mauwey',
  role: 'Full-stack Developer & UI/UX Designer',
  degree: '3rd Year · BS Computer Science',
  school: 'Gordon College',
  location: 'Olongapo City, PH',
  tagline:
    'Full-stack developer and UI/UX designer building considerate, accessible interfaces.',
  photos: { hero: photoHero, about: photoAbout },

  bio: [
    "I'm a 3rd-year BS Computer Science student at Gordon College in Olongapo City, working as a full-stack developer with a heart for frontend and UI/UX design.",
    'I love turning ideas into interfaces: exploring layouts, colors, and the small details that make a system feel good to use. My goal is to design more considerate systems that work for everyone, especially people with visual impairments.',
  ],
  offScreen:
    "When I'm not designing, you'll find me putting outfits together, experimenting with makeup, or looking for a new song to have on repeat.",
  interests: ['Fashion', 'Makeup', 'Music'],

  toolkit: [
    {
      group: 'Design',
      items: ['Figma', 'UI/UX design', 'Wireframing & prototyping', 'Logo & brand design', 'Accessibility-first design'],
    },
    {
      group: 'Development',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Git & GitHub'],
    },
    {
      group: 'Collaboration',
      items: ['Design leadership', 'System architecture', 'Team design support', 'Documentation'],
    },
  ],

  email: 'ericamaecamintoy@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/mauwi-17' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erica-mae-camintoy-7ba3bb2b2' },
  ],
};
