import trialPhoto from '../assets/image1.jpg'

function unsplashFace(id) {
  return `https://images.unsplash.com/photo-${id}?w=240&h=240&fit=crop&crop=faces&q=80`
}

export const boardsCovered = ['CBSE', 'ICSE', 'State Board']

export const gradeFilters = [
  { value: 'all', label: 'All Grades' },
  { value: 8, label: 'Grade 8' },
  { value: 10, label: 'Grade 10' },
  { value: 12, label: 'Grade 12 / Boards' },
]

export const classFormats = [
  {
    icon: 'weekday',
    title: 'Weekday Batches',
    description: 'Mon–Fri, 4:00 PM – 7:00 PM — for regular after-school learning.',
  },
  {
    icon: 'weekend',
    title: 'Weekend Batches',
    description: 'Sat–Sun, 10:00 AM – 1:00 PM — for students with a busy weekday schedule.',
  },
  {
    icon: 'group',
    title: 'Small Group Classes',
    description: 'Max 8 students per batch, taught on-campus for focused, hands-on attention.',
  },
  {
    icon: 'one-on-one',
    title: 'One-on-One Sessions',
    description: 'Personalised 1:1 coaching available on request for focused exam preparation.',
  },
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
  { value: 300, suffix: '+', label: 'Top ranks achieved' },
]

export const whyChooseUs = [
  {
    icon: 'faculty',
    title: 'Experienced Faculty',
    description: 'Every subject is taught by educators with years of classroom and exam-coaching experience.',
  },
  {
    icon: 'batch',
    title: 'Small Batch Sizes',
    description: 'Max 8 students per batch — focused attention means no student is left behind.',
  },
  {
    icon: 'support',
    title: 'Structured Assessments & Doubt Support',
    description: 'Regular tests, dedicated doubt-clearing sessions, and updates so parents and teachers stay on the same page.',
  },
  {
    icon: 'results',
    title: 'Proven Results',
    description: 'A consistent track record of grade improvement and exam success across every batch.',
  },
]

export const facilities = [
  {
    icon: 'monitor',
    title: 'Smart Classrooms',
    description: 'Digital boards and projector-led lessons that make every concept easier to visualise.',
  },
  {
    icon: 'book',
    title: 'Library & Reading Room',
    description: 'A quiet, well-stocked space with reference books, past papers, and journals for self-study.',
  },
  {
    icon: 'science',
    title: 'Science & Computer Lab',
    description: 'Hands-on lab sessions and a dedicated computer lab for practical, syllabus-aligned learning.',
  },
  {
    icon: 'wifi',
    title: 'Free Wi-Fi Study Zone',
    description: 'A comfortable common area with free Wi-Fi for group study and project work between classes.',
  },
  {
    icon: 'seat',
    title: 'Air-Conditioned Classrooms',
    description: 'Comfortable, well-lit, air-conditioned rooms designed for focused, distraction-free learning.',
  },
  {
    icon: 'bus',
    title: 'Transport & Parking',
    description: 'Convenient parking for drop-offs and pick-ups, with local transport routes nearby.',
  },
]

export const activities = [
  {
    icon: 'test',
    title: 'Weekly & Monthly Tests',
    frequency: 'Weekly',
    description: 'Regular assessments that keep students exam-ready and track progress chapter by chapter.',
  },
  {
    icon: 'quiz',
    title: 'Inter-Batch Quiz Competitions',
    frequency: 'Monthly',
    description: 'Friendly subject quizzes that build confidence and healthy competition among batches.',
  },
  {
    icon: 'workshop',
    title: 'Career Guidance Workshops',
    frequency: 'Quarterly',
    description: 'Sessions on stream selection, entrance exams, and career paths for Grade 10 and 12 students.',
  },
  {
    icon: 'guest',
    title: 'Guest Lectures',
    frequency: 'Monthly',
    description: 'Talks from subject experts and alumni that connect classroom learning with the real world.',
  },
  {
    icon: 'sports',
    title: 'Annual Sports & Cultural Day',
    frequency: 'Annual',
    description: 'A yearly celebration of talent beyond academics — sports, music, and art.',
  },
  {
    icon: 'meet',
    title: 'Parent-Teacher Meets',
    frequency: 'Monthly',
    description: 'Regular one-on-one meetings to discuss each student\'s progress and next steps.',
  },
  {
    icon: 'trip',
    title: 'Educational Field Trips',
    frequency: 'Quarterly',
    description: 'Visits to science exhibitions, museums, and workshops that bring subjects to life.',
  },
  {
    icon: 'camp',
    title: 'Pre-Exam Doubt Clinics',
    frequency: 'Seasonal',
    description: 'Extra doubt-clearing sessions in the weeks leading up to board and school exams.',
  },
]

export const achievements = [
  {
    icon: 'trophy',
    title: 'State & District Rank Holders',
    description: 'Multiple students from Vidhyashram have secured top ranks in board examinations over the years.',
  },
  {
    icon: 'medal',
    title: 'Olympiad Qualifiers',
    description: 'Students regularly qualify for National Science and Mathematics Olympiads.',
  },
  {
    icon: 'star',
    title: 'Scholarship Recipients',
    description: 'Several students have earned merit scholarships based on their academic performance.',
  },
  {
    icon: 'award',
    title: 'Recognised Coaching Excellence',
    description: 'Vidhyashram has been recognised locally for its teaching quality and student outcomes since 2014.',
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
  email: 'hello@vidhyashramtuition.example',
}

export const admissionSteps = [
  {
    icon: 'trial',
    title: 'Book a Free Trial Class',
    description: 'Pick a date and time that works for you — no commitment, no payment required.',
  },
  {
    icon: 'meet',
    title: 'Meet Your Mentor',
    description: 'Attend a 30-minute demo class and get a quick assessment of your current level.',
  },
  {
    icon: 'enroll',
    title: 'Enroll & Get Study Material',
    description: 'Choose your batch and subjects, complete enrollment, and receive your study material.',
  },
  {
    icon: 'start',
    title: 'Start Classes',
    description: 'Join your batch and begin regular classes with tests, doubt support, and progress updates.',
  },
]

export const faqs = [
  {
    question: 'How is the fee paid, and are there any discounts?',
    answer: 'Fees can be paid monthly, quarterly, or for the full academic year, with a discount for quarterly and annual payments. We also offer a discount for siblings and for students taking more than two subjects — ask us during your free trial.',
  },
  {
    question: 'Is the trial class really free, with no commitment?',
    answer: 'Yes. The 30-minute demo class is completely free and does not require any payment or enrollment. It\'s a chance to meet the mentor and see how we teach before you decide.',
  },
  {
    question: 'What happens if my child misses a class?',
    answer: 'Missed classes can usually be made up in another batch of the same subject and grade, subject to availability, or covered through notes shared by the mentor.',
  },
  {
    question: 'Do you offer online classes, or only in-person?',
    answer: 'All regular weekday and weekend batches are conducted in-person at our campus for focused, hands-on learning. One-on-one online sessions are available on request for students who need flexibility.',
  },
  {
    question: 'Which boards and grades do you teach?',
    answer: 'We teach Grades 8, 10, and 12, with curriculum aligned to CBSE, ICSE, and State Board syllabi.',
  },
  {
    question: 'How do I book a free trial class?',
    answer: 'Scroll up to the "Book a 30-Minute Demo Class" section to pick a date and time slot, or reach out to us directly by phone or WhatsApp and we\'ll set it up for you.',
  },
]

export const offer = {
  eyebrow: 'Limited Time',
  title: 'Get 20% Off Your First Term',
  description: 'Enroll before the new batch closes and lock in early-bird pricing across every subject.',
  cta: 'Claim This Offer',
}

export const trialSlots = ['10:00 AM', '11:30 AM', '1:00 PM', '3:30 PM', '5:00 PM', '6:30 PM']

export const sectionPhotos = {
  trial: trialPhoto,
}
