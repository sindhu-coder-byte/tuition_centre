import analyticsPhoto from '../assets/image6.jpg'
import trialPhoto from '../assets/image1.jpg'

function unsplashFace(id) {
  return `https://images.unsplash.com/photo-${id}?w=240&h=240&fit=crop&crop=faces&q=80`
}

export const gradeFilters = [
  { value: 'all', label: 'All Grades' },
  { value: 8, label: 'Grade 8' },
  { value: 10, label: 'Grade 10' },
  { value: 12, label: 'Grade 12 / Boards' },
]

export const courses = [
  {
    title: 'Mathematics',
    grades: [8, 10, 12],
    fees: '₹4,500 / month',
    description: 'From foundational arithmetic to calculus, taught for deep understanding, not memorization.',
    syllabus: ['Number Systems & Algebra', 'Coordinate Geometry', 'Trigonometry', 'Calculus Foundations', 'Probability & Statistics'],
    featured: true,
  },
  {
    title: 'Physics',
    grades: [10, 12],
    fees: '₹5,000 / month',
    description: 'Concept-first physics with problem-solving practice for board and competitive exams.',
    syllabus: ['Mechanics', 'Electromagnetism', 'Optics', 'Modern Physics', 'Thermodynamics'],
  },
  {
    title: 'Chemistry',
    grades: [10, 12],
    fees: '₹5,000 / month',
    description: 'Organic, inorganic, and physical chemistry with lab-backed explanations.',
    syllabus: ['Atomic Structure', 'Chemical Bonding', 'Organic Chemistry Basics', 'Periodic Trends', 'Chemical Equilibrium'],
  },
  {
    title: 'English',
    grades: [8, 10, 12],
    fees: '₹3,500 / month',
    description: 'Grammar, comprehension, and writing skills for academic and everyday confidence.',
    syllabus: ['Grammar Fundamentals', 'Comprehension Skills', 'Essay & Letter Writing', 'Literature Analysis', 'Public Speaking'],
  },
  {
    title: 'Computer Science',
    grades: [10, 12],
    fees: '₹4,800 / month',
    description: 'Programming fundamentals, logic building, and exam-oriented computer science.',
    syllabus: ['Programming Basics', 'Data Structures', 'Database Fundamentals', 'Web Development Intro', 'Exam-oriented Practice'],
    featured: true,
  },
  {
    title: 'Biology',
    grades: [10, 12],
    fees: '₹5,000 / month',
    description: 'Human biology, genetics, and ecology explained with clear visual reasoning.',
    syllabus: ['Cell Biology', 'Human Physiology', 'Genetics', 'Ecology', 'Evolution Basics'],
  },
]

export const stats = [
  { value: 12, suffix: '+', label: 'Years of teaching' },
  { value: 1500, suffix: '+', label: 'Students mentored' },
  { value: 40, suffix: '+', label: 'Expert educators' },
  { value: 95, suffix: '%', label: 'Grade improvement rate' },
]

export const whyChooseUs = [
  {
    title: 'Experienced Faculty',
    description: 'Every subject is taught by educators with years of classroom and exam-coaching experience.',
  },
  {
    title: 'Small Batch Sizes',
    description: 'Focused attention in small groups means no student is left behind.',
  },
  {
    title: 'Personalised Progress Tracking',
    description: 'Teachers and students both get a dashboard to track assignments, tests, and growth.',
  },
  {
    title: 'Proven Results',
    description: 'A consistent track record of grade improvement and exam success across every batch.',
  },
]

export const mentors = [
  {
    name: 'Sunita Rao',
    subject: 'Physics',
    experience: '14 years experience',
    bio: 'Specialises in making mechanics and electromagnetism click for board and competitive exams.',
    fullBio: 'Sunita has coached over 1,200 students through board and entrance exams, with a focus on building physical intuition before formulas. She runs weekly doubt-clearing labs alongside regular classes.',
    photo: unsplashFace('1494790108377-be9c29b29330'),
  },
  {
    name: 'Rahul Kapoor',
    subject: 'Mathematics',
    experience: '11 years experience',
    bio: 'Known for breaking calculus and algebra into clear, confidence-building steps.',
    fullBio: 'Rahul previously taught at a national olympiad training camp and now focuses on making core mathematics approachable for every student, not just the naturally strong ones.',
    photo: unsplashFace('1507003211169-0a1dd7228f2d'),
  },
  {
    name: 'Ayesha Khan',
    subject: 'Chemistry',
    experience: '9 years experience',
    bio: 'Blends lab-based demonstrations with exam strategy for lasting understanding.',
    fullBio: 'Ayesha holds a Master\'s in Organic Chemistry and designs every lesson around a live demonstration or visual model before moving to exam technique.',
    photo: unsplashFace('1573497019940-1c28c88b4f3e'),
  },
  {
    name: 'Vikram Singh',
    subject: 'Computer Science',
    experience: '8 years experience',
    bio: 'Guides students from first line of code to exam-ready programming skills.',
    fullBio: 'A former software engineer, Vikram teaches programming the way it\'s used in the real world, then maps it back to exactly what the syllabus expects.',
    photo: unsplashFace('1560250097-0b93528c311a'),
  },
]

export const testimonials = [
  {
    quote: 'My daughter\'s grades in Mathematics went from a C to an A within two terms. The teachers genuinely care.',
    name: 'Priya Nair',
    role: 'Parent',
    rating: 5,
    course: 'Mathematics',
  },
  {
    quote: 'The small batch sizes made all the difference. I could finally ask questions without feeling rushed.',
    name: 'Arjun Mehta',
    role: 'Student, Grade 11',
    rating: 5,
    course: 'Physics',
  },
  {
    quote: 'As a teacher, the dashboard makes it so easy to track every student\'s progress in one place.',
    name: 'Sunita Rao',
    role: 'Faculty, Physics',
    rating: 5,
    course: 'Physics',
  },
  {
    quote: 'The syllabus outlines and free trial class helped us pick the right subjects before committing.',
    name: 'Karan Bhatt',
    role: 'Parent',
    rating: 4,
    course: 'Chemistry',
  },
  {
    quote: 'I went from dreading Computer Science to actually looking forward to class every week.',
    name: 'Neha Iyer',
    role: 'Student, Grade 10',
    rating: 5,
    course: 'Computer Science',
  },
  {
    quote: 'Clear communication, real progress tracking, and a genuinely supportive faculty team.',
    name: 'Rohan Desai',
    role: 'Parent',
    rating: 5,
    course: 'English',
  },
]

export const contactInfo = {
  address: '221B Learning Lane, Bengaluru, India',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@zenithtuition.example',
}

export const offer = {
  eyebrow: 'Limited Time',
  title: 'Get 20% Off Your First Term',
  description: 'Enroll before the new batch closes and lock in early-bird pricing across every subject.',
  cta: 'Claim This Offer',
}

export const trialSlots = ['10:00 AM', '11:30 AM', '1:00 PM', '3:30 PM', '5:00 PM', '6:30 PM']

export const growthTrajectory = [
  { month: 'Month 1', score: 58 },
  { month: 'Month 2', score: 64 },
  { month: 'Month 3', score: 71 },
  { month: 'Month 4', score: 78 },
  { month: 'Month 5', score: 85 },
  { month: 'Month 6', score: 91 },
]

export const sectionPhotos = {
  analytics: analyticsPhoto,
  trial: trialPhoto,
}

export const analyticsPreview = {
  overallProgress: 88,
  attendance: 96,
  testScores: [
    { test: 'Test 1', score: 62 },
    { test: 'Test 2', score: 70 },
    { test: 'Test 3', score: 75 },
    { test: 'Test 4', score: 83 },
    { test: 'Test 5', score: 89 },
  ],
}
