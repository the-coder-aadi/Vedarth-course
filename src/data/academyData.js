import { academyConfig } from '../config/academyConfig'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Program', href: '#program' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Internship', href: '#internship' },
  { label: 'Why Vedarth', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const keyFacts = [
  { value: academyConfig.batchSize, suffix: '', label: 'Students per batch', note: 'Small batch' },
  { value: academyConfig.fee, prefix: '₹', label: 'Program fee', note: 'One program, no upsells' },
  { value: null, display: academyConfig.batchStartShort, label: 'Next batch starts', note: 'Applications open' },
  { value: 1, label: 'Free demo class', note: 'Before you decide' },
  { value: 1, label: 'Paid internship opportunity', note: 'Per batch, top performer' },
]

export const smallBatchBenefits = [
  { title: 'Live doubt solving', body: 'Ask questions during the session instead of queueing in a comment thread.' },
  { title: 'Code reviews', body: 'Get feedback on how you implemented something, not just whether it runs.' },
  { title: 'Project guidance', body: 'Build projects with structured guidance from idea to deployment.' },
  { title: 'Individual attention', body: 'Five learners means the session can adapt to where you actually are.' },
  { title: 'Interview preparation', body: 'Practise through practical problem-solving and a real evaluation round.' },
]

export const whatYouGet = [
  { title: 'Live interactive classes', body: 'Taught live, with space to interrupt and ask.', icon: 'live' },
  { title: 'MERN stack training', body: 'MongoDB, Express, React and Node as one working system.', icon: 'stack' },
  { title: 'Generative AI integration', body: 'Wire AI models into real application features.', icon: 'ai' },
  { title: 'Real-world projects', body: 'Full applications, not disconnected code exercises.', icon: 'project' },
  { title: 'Git & GitHub', body: 'Branches, commits and a repository you can show.', icon: 'git' },
  { title: 'APIs & databases', body: 'Design endpoints and model data you can query.', icon: 'api' },
  { title: 'Deployment', body: 'Take an application from localhost to a live URL.', icon: 'deploy' },
  { title: 'Assignments', body: 'Regular practice that builds on the previous session.', icon: 'task' },
  { title: 'Project reviews', body: 'Structured review of what you built and why.', icon: 'review' },
  { title: 'Portfolio guidance', body: 'Present your work so it reads clearly to a recruiter.', icon: 'portfolio' },
  { title: 'Final evaluation', body: 'A transparent assessment of your skills at the end.', icon: 'chart' },
  { title: 'Completion certificate', body: 'Issued on successful completion of the program.', icon: 'certificate' },
]

export const promises = [
  'Live learning, every session',
  'Practical projects you keep',
  'Real-time doubt solving',
  'Small batch interaction',
  'Transparent evaluation',
  'A clear internship selection process',
]

export const audience = [
  { title: 'BCA students', note: 'Build the practical layer your syllabus skips.' },
  { title: 'BTech / BE students', note: 'Turn coursework into shippable applications.' },
  { title: 'MCA students', note: 'Go deeper on full-stack architecture.' },
  { title: 'BSc CS / IT students', note: 'Get hands-on with modern web development.' },
  { title: 'Beginners', note: 'Start from foundations with live support.' },
  { title: 'Fresh graduates', note: 'Close the gap between degree and development work.' },
  { title: 'Portfolio builders', note: 'Produce projects worth putting on a résumé.' },
  { title: 'AI-curious developers', note: 'Learn to build with Generative AI, not just about it.' },
]

export const howItWorks = [
  { step: '01', title: 'Explore the program', body: 'Read the curriculum, the fee and how the internship is selected.' },
  { step: '02', title: 'Attend the free demo', body: 'Sit in on a live class and see how sessions actually run.' },
  { step: '03', title: 'Apply for the batch', body: 'Share your background and goals through the application form.' },
  { step: '04', title: 'Join the 5-student cohort', body: 'Start live classes with four other learners.' },
  { step: '05', title: 'Learn, build, prove', body: 'Finish projects, complete the evaluation, earn the opportunity.' },
]

export const evaluationCriteria = [
  'Coding ability',
  'Project quality',
  'Problem solving',
  'Assignment performance',
  'Consistency',
  'Interview performance',
]

export const internshipJourney = [
  { label: '5 students', note: 'One batch' },
  { label: 'Live training', note: 'Sessions and doubt solving' },
  { label: 'Real projects', note: 'Full-stack and AI-integrated' },
  { label: 'Evaluation', note: 'Six transparent criteria' },
  { label: 'Top performer', note: 'One eligible student' },
  { label: '2-month paid internship', note: '₹3,000 / month' },
]

export const pricingIncludes = [
  'Live online classes',
  'Small batch — 5 students',
  'Real-world projects',
  'Generative AI integration',
  'Assignments',
  'Live doubt solving',
  'Git & GitHub',
  'Deployment',
  'Course completion certificate',
  '1 free demo class',
  'Installment support',
  'Internship opportunity for the top performer',
]

export const demoIncludes = [
  'A live session, not a recording',
  'Real coding on screen',
  'Ask your questions directly',
  'See the teaching style',
  'Understand how projects are taught',
  'Decide afterwards, with no pressure',
]
