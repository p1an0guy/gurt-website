export interface NavLink {
  href: string;
  label: string;
}

export interface ProblemPoint {
  description: string;
  kicker: string;
  title: string;
}

export interface StoryStep {
  description: string;
  eyebrow: string;
  highlights: string[];
  image: {
    alt: string;
    src: string;
  };
  kicker: string;
  number: string;
  title: string;
}

export interface FeatureCard {
  description: string;
  label: string;
  title: string;
}

export interface TrustPoint {
  description: string;
  title: string;
}

export interface FaqItem {
  answer: string;
  question: string;
}

export const siteConfig = {
  name: 'GURT',
  title: 'GURT | AI-powered Canvas study assistant',
  description:
    'Judge-facing marketing site for GURT, the AI-powered study assistant that ingests Canvas course context, returns cited answers, and centralizes review tools.',
  url: 'https://gurt-marketing.vercel.app',
} as const;

export const navLinks: NavLink[] = [
  { href: '#problem', label: 'Problem' },
  { href: '#story', label: 'GURT in action' },
  { href: '#features', label: 'Features' },
  { href: '#trust', label: 'Trust' },
  { href: '#demo', label: 'Demo' },
  { href: '#faq', label: 'FAQ' },
];

export const footerLinks: NavLink[] = [
  { href: '#story', label: 'Story' },
  { href: '#demo', label: 'Demo' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

export const heroChips = [
  'Canvas-native workflow',
  'Cited answers',
  'Chrome extension start',
  'Flashcards + practice exams',
];

export const problemPoints: ProblemPoint[] = [
  {
    kicker: 'Friction',
    title: 'Copy-paste study setups do not scale.',
    description:
      'Students bounce between Canvas pages, PDFs, notes, calendars, and chat tools before they can even ask a useful question.',
  },
  {
    kicker: 'Context',
    title: 'Generic chat tools lose the course context.',
    description:
      'Traditional prompting requires manually pasting fragments of a course, which limits context and weakens answer quality.',
  },
  {
    kicker: 'Trust',
    title: 'Uncited AI answers create academic risk.',
    description:
      'Judges and students need a way to inspect where an answer came from, not just accept polished language at face value.',
  },
];

export const storySteps: StoryStep[] = [
  {
    number: '01',
    kicker: 'Start inside Canvas',
    eyebrow: 'Chrome extension',
    title: 'Open the Chrome extension on your Canvas course',
    description: 'No setup. Open the extension while viewing your course page.',
    highlights: ['Launches where students already work', 'No separate dashboard to configure'],
    image: {
      src: '/media/story/01-extension-open.webp',
      alt: 'GURT extension opening on a Canvas course page',
    },
  },
  {
    number: '02',
    kicker: 'Pull course context',
    eyebrow: 'Ingestion',
    title: 'One-click ingestion',
    description: 'Slides, docs, links, and modules captured into a course knowledge base.',
    highlights: ['Ingests the whole course surface', 'Reduces manual upload friction'],
    image: {
      src: '/media/story/02-ingestion.webp',
      alt: 'Course materials being ingested into GURT',
    },
  },
  {
    number: '03',
    kicker: 'Grounded answers',
    eyebrow: 'Citations',
    title: 'Ask questions with citations',
    description: 'Every answer points back to the exact source in Canvas.',
    highlights: ['Reduces hallucination risk', 'Makes answers verifiable in context'],
    image: {
      src: '/media/story/03-citations.webp',
      alt: 'GURT chat answer with citations linked to Canvas sources',
    },
  },
  {
    number: '04',
    kicker: 'Source-aware workspace',
    eyebrow: 'Split view',
    title: 'Source-aware workspace',
    description: 'Chat with your course, and open cited sources instantly.',
    highlights: [
      'Side-by-side chat and source drawer',
      'Snippets or deep links back to source material',
    ],
    image: {
      src: '/media/story/04-source-drawer.webp',
      alt: 'GURT extension showing chat and a source drawer with citations',
    },
  },
  {
    number: '05',
    kicker: 'Review suite',
    eyebrow: 'Flashcards',
    title: 'Generate flashcards',
    description: 'Turn messy slides and notes into spaced repetition cards.',
    highlights: ['Course-scoped card generation', 'Supports long-term retention loops'],
    image: {
      src: '/media/story/05-flashcards.webp',
      alt: 'Flashcards generated from course materials in GURT',
    },
  },
  {
    number: '06',
    kicker: 'Exam prep',
    eyebrow: 'Practice exams',
    title: 'Generate practice exams',
    description: 'Course-scoped questions for real mastery.',
    highlights: ['Keeps prep tied to class materials', 'Moves from recall to applied practice'],
    image: {
      src: '/media/story/06-practice-exam.webp',
      alt: 'Practice exam questions generated from a GURT course knowledge base',
    },
  },
  {
    number: '07',
    kicker: 'Stay on schedule',
    eyebrow: 'Calendar sync',
    title: 'Calendar sync + review plan',
    description: 'Auto schedule study blocks and review sessions.',
    highlights: ['Turn deadlines into study sessions', 'Connect review flow to the real calendar'],
    image: {
      src: '/media/story/07-calendar.webp',
      alt: 'Calendar sync and study plan generated by GURT',
    },
  },
];

export const featureCards: FeatureCard[] = [
  {
    label: 'Canvas extension',
    title: 'AI Canvas assistant inside the course page',
    description:
      'Open the Chrome extension on a Canvas course and start the study workflow without leaving the LMS.',
  },
  {
    label: 'Review suite',
    title: 'Flashcards and practice exams in the same loop',
    description:
      'Turn course materials into review artifacts that move from quick recall to deeper exam practice.',
  },
  {
    label: 'RAG + citations',
    title: 'Canvas ingestion with source-linked answers',
    description:
      'GURT ingests the course context into a knowledge base and responds with citations that link back to course materials.',
  },
  {
    label: 'Planning',
    title: 'Calendar sync for review blocks and deadlines',
    description:
      'Sync deadlines and study plans into a real calendar workflow so review is easier to schedule and maintain.',
  },
];

export const trustPoints: TrustPoint[] = [
  {
    title: 'Not a ChatGPT wrapper',
    description:
      'GURT does not depend on students manually pasting context into a chat box. It ingests the Canvas course page and retrieves from that course-specific knowledge base.',
  },
  {
    title: 'Practically unlimited course context',
    description:
      'Because the course materials are ingested instead of copied by hand, the usable context is much broader than a normal one-off prompt.',
  },
  {
    title: 'Citations support trust and integrity',
    description:
      'Answers point back to the originating source so students and judges can verify claims, inspect the material, and reduce hallucination risk.',
  },
];

export const demoVideo = {
  title: 'GURT demo walkthrough',
  fallbackVideoId: 'dQw4w9WgXcQ',
} as const;

export const faqs: FaqItem[] = [
  {
    question: 'How is GURT different from a normal AI chatbot?',
    answer:
      'GURT starts from the Canvas course page, ingests the course materials into a knowledge base, retrieves from that context, and returns cited answers instead of relying on students to manually paste short fragments into a prompt.',
  },
  {
    question: 'Why do citations matter for academic integrity?',
    answer:
      'Citations give students a direct path back to the original material so they can verify answers, inspect the source, and avoid treating an AI response as an ungrounded black box.',
  },
  {
    question: 'What does the waitlist collect?',
    answer:
      'The waitlist captures an email address and an optional school or major so launch notifications can be sent when the free trial opens.',
  },
  {
    question: 'Is the prototype feasible to launch on a student-friendly budget?',
    answer:
      'Yes. The marketing site is intentionally lightweight: Next.js on Vercel, Formspree for the waitlist, and a lazy YouTube embed for the demo. The product story stays focused on workflow credibility rather than inflated metrics.',
  },
];
