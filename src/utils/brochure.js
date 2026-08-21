import { SITE_NAME, SITE_NAME_MAIN, SITE_NAME_SUFFIX } from './constants'
import {
  courses,
  classFormats,
  boardsCovered,
  facilities,
  activities,
  achievements,
  admissionSteps,
  mentors,
  stats,
  contactInfo,
} from '../data/siteContent'

// Mirrors the CSS custom properties in src/index.css so the PDF reads as an
// extension of the site rather than a generic document.
const C = {
  primary: [75, 46, 131],
  primaryDark: [53, 32, 94],
  primaryLight: [239, 233, 249],
  accent: [202, 160, 46],
  accentDark: [166, 122, 30],
  heading: [26, 23, 38],
  text: [44, 42, 58],
  textMuted: [110, 107, 128],
  border: [230, 227, 238],
  white: [255, 255, 255],
}

// jsPDF's standard 14 fonts only support WinAnsi (Latin-1) encoding, which
// has no glyph for ₹ — it would render as a garbled character in any PDF
// viewer, not just this preview, so swap it for plain text before drawing.
function pdfSafe(text) {
  return text.replace(/₹/g, 'Rs. ')
}

const PAGE_W = 210
const MARGIN = 16
const CONTENT_W = PAGE_W - MARGIN * 2
const CONTENT_BOTTOM = 275
const HEADER_H = 15

function setFill(doc, color) {
  doc.setFillColor(color[0], color[1], color[2])
}

function setDraw(doc, color) {
  doc.setDrawColor(color[0], color[1], color[2])
}

function setText(doc, color) {
  doc.setTextColor(color[0], color[1], color[2])
}

function drawSlimHeader(doc) {
  setFill(doc, C.primary)
  doc.rect(0, 0, PAGE_W, HEADER_H, 'F')
  setFill(doc, C.accent)
  doc.roundedRect(MARGIN, 3, 9, 9, 2, 2, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  setText(doc, C.white)
  doc.text(SITE_NAME_MAIN.charAt(0), MARGIN + 4.5, 8.6, { align: 'center' })
  doc.setFontSize(10.5)
  doc.text(SITE_NAME.toUpperCase(), MARGIN + 13, 8.6)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  setText(doc, [220, 210, 238])
  doc.text('Institute Brochure', PAGE_W - MARGIN, 8.6, { align: 'right' })
}

function drawFooters(doc) {
  const total = doc.getNumberOfPages()
  for (let i = 1; i <= total; i++) {
    doc.setPage(i)
    setDraw(doc, C.border)
    doc.setLineWidth(0.3)
    doc.line(MARGIN, 283, PAGE_W - MARGIN, 283)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    setText(doc, C.textMuted)
    doc.text(`${contactInfo.phone}  •  ${contactInfo.email}`, MARGIN, 288)
    doc.text(`Page ${i} of ${total}`, PAGE_W - MARGIN, 288, { align: 'right' })
  }
}

function ensureSpace(ctx, needed) {
  if (ctx.y + needed > CONTENT_BOTTOM) {
    ctx.doc.addPage()
    drawSlimHeader(ctx.doc)
    ctx.y = 28
  }
}

function forceNewPage(ctx) {
  ctx.doc.addPage()
  drawSlimHeader(ctx.doc)
  ctx.y = 28
}

function sectionHeader(ctx, title) {
  ensureSpace(ctx, 16)
  ctx.doc.setFont('helvetica', 'bold')
  ctx.doc.setFontSize(15)
  setText(ctx.doc, C.heading)
  ctx.doc.text(title, MARGIN, ctx.y)
  setDraw(ctx.doc, C.accent)
  ctx.doc.setLineWidth(1)
  ctx.doc.line(MARGIN, ctx.y + 2.4, MARGIN + 22, ctx.y + 2.4)
  ctx.y += 11
}

function wrap(doc, text, maxWidth, size, font = 'normal') {
  doc.setFont('helvetica', font)
  doc.setFontSize(size)
  return doc.splitTextToSize(text, maxWidth)
}

function paragraph(ctx, text, { size = 10, color = C.text, font = 'normal', lh = 4.6, x = MARGIN, maxWidth = CONTENT_W } = {}) {
  const lines = wrap(ctx.doc, text, maxWidth, size, font)
  ensureSpace(ctx, lines.length * lh)
  setText(ctx.doc, color)
  ctx.doc.text(lines, x, ctx.y)
  ctx.y += lines.length * lh
  return lines.length * lh
}

// ---- Cover page ----

function drawCover(doc) {
  // Hero band with a diagonal two-tone fill approximating the site's gradient.
  setFill(doc, C.primary)
  doc.rect(0, 0, PAGE_W, 92, 'F')
  setFill(doc, C.primaryDark)
  doc.triangle(0, 92, 0, 40, PAGE_W, 92, 'F')

  // Logo lockup
  setFill(doc, C.primary)
  doc.roundedRect(MARGIN, 20, 20, 20, 4, 4, 'F')
  doc.triangle(MARGIN, 40, MARGIN + 20, 40, MARGIN + 20, 20, 'F')
  setFill(doc, C.accent)
  doc.triangle(MARGIN, 40, MARGIN + 20, 20, MARGIN, 20, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(15)
  setText(doc, C.white)
  doc.text(SITE_NAME_MAIN.charAt(0), MARGIN + 10, 32.5, { align: 'center' })

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  setText(doc, C.white)
  doc.text(SITE_NAME_MAIN, MARGIN + 26, 30)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  setText(doc, [225, 215, 240])
  doc.text(SITE_NAME_SUFFIX.toUpperCase(), MARGIN + 26, 37)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(19)
  setText(doc, C.white)
  const headline = doc.splitTextToSize('Where Ambitious Students Become Top Performers', 140)
  doc.text(headline, MARGIN, 58)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  setText(doc, [225, 215, 240])
  doc.text('Coaching Excellence Since 2014  •  Curriculum aligned with CBSE, ICSE & State Board', MARGIN, 74)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  setText(doc, C.accent)
  doc.text('INSTITUTE BROCHURE', MARGIN, 84)

  // At-a-glance stats
  let y = 112
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  setText(doc, C.heading)
  doc.text('At a Glance', MARGIN, y)
  setDraw(doc, C.accent)
  doc.setLineWidth(1)
  doc.line(MARGIN, y + 2.2, MARGIN + 20, y + 2.2)
  y += 14

  const colW = CONTENT_W / stats.length
  stats.forEach((stat, i) => {
    const x = MARGIN + colW * i
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(20)
    setText(doc, C.accentDark)
    doc.text(`${stat.value}${stat.suffix}`, x, y)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    setText(doc, C.textMuted)
    const label = doc.splitTextToSize(stat.label, colW - 8)
    doc.text(label, x, y + 6)
    if (i > 0) {
      setDraw(doc, C.border)
      doc.setLineWidth(0.3)
      doc.line(x - 6, y - 12, x - 6, y + 12)
    }
  })

  // Boards chip row
  y += 30
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9.5)
  setText(doc, C.textMuted)
  doc.text('Curriculum aligned with:', MARGIN, y + 5.5)
  let chipX = MARGIN + 46
  boardsCovered.forEach((board) => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9.5)
    const w = doc.getTextWidth(board) + 10
    setFill(doc, C.primaryLight)
    setDraw(doc, C.border)
    doc.roundedRect(chipX, y, w, 8, 4, 4, 'FD')
    setText(doc, C.primary)
    doc.text(board, chipX + w / 2, y + 5.5, { align: 'center' })
    chipX += w + 5
  })

  // Intro paragraph
  y += 22
  const ctx = { doc, y }
  paragraph(ctx, `${SITE_NAME} pairs expert educators with small batch sizes and personalised progress tracking — for Grades 8 to 12, across Math, Science, English, and Computer Science. This brochure covers everything a parent or student needs to know before enrolling: courses and fees, class formats, campus facilities, activities, achievements, faculty, and how to get started.`, { size: 10.5, color: C.text, lh: 5.4 })
}

// ---- Section builders ----

function drawCourses(ctx) {
  forceNewPage(ctx)
  sectionHeader(ctx, 'Courses Offered')

  courses.forEach((course) => {
    const descLines = wrap(ctx.doc, course.description, CONTENT_W - 10, 10)
    const syllabusText = `Syllabus: ${course.syllabus.join(', ')}`
    const syllabusLines = wrap(ctx.doc, syllabusText, CONTENT_W - 10, 9, 'italic')
    const boxH = 8 + 6 + descLines.length * 4.6 + syllabusLines.length * 4.1 + 6

    ensureSpace(ctx, boxH + 4)
    setDraw(ctx.doc, C.border)
    ctx.doc.setLineWidth(0.3)
    setFill(ctx.doc, C.white)
    ctx.doc.roundedRect(MARGIN, ctx.y, CONTENT_W, boxH, 2.5, 2.5, 'FD')

    const padX = MARGIN + 5
    let cy = ctx.y + 8
    ctx.doc.setFont('helvetica', 'bold')
    ctx.doc.setFontSize(12.5)
    setText(ctx.doc, C.heading)
    ctx.doc.text(course.title, padX, cy)
    ctx.doc.setFont('helvetica', 'bold')
    ctx.doc.setFontSize(11)
    setText(ctx.doc, C.accentDark)
    ctx.doc.text(pdfSafe(course.fees), MARGIN + CONTENT_W - 5, cy, { align: 'right' })

    cy += 6
    ctx.doc.setFont('helvetica', 'normal')
    ctx.doc.setFontSize(9)
    setText(ctx.doc, C.primary)
    ctx.doc.text(`Grades: ${course.grades.join(', ')}`, padX, cy)

    cy += 5
    setText(ctx.doc, C.text)
    ctx.doc.setFontSize(10)
    ctx.doc.text(descLines, padX, cy)
    cy += descLines.length * 4.6

    setText(ctx.doc, C.textMuted)
    ctx.doc.setFont('helvetica', 'italic')
    ctx.doc.setFontSize(9)
    ctx.doc.text(syllabusLines, padX, cy)

    ctx.y += boxH + 5
  })
}

function drawTwoColumnCards(ctx, title, items, descKey = 'description') {
  sectionHeader(ctx, title)
  const gap = 6
  const colW = (CONTENT_W - gap) / 2

  for (let i = 0; i < items.length; i += 2) {
    const pair = [items[i], items[i + 1]].filter(Boolean)
    const heights = pair.map((item) => {
      const lines = wrap(ctx.doc, item[descKey], colW - 10, 9)
      return 8 + lines.length * 4.2 + 6
    })
    const rowH = Math.max(...heights)
    ensureSpace(ctx, rowH + 5)

    pair.forEach((item, idx) => {
      const x = MARGIN + idx * (colW + gap)
      setDraw(ctx.doc, C.border)
      ctx.doc.setLineWidth(0.3)
      setFill(ctx.doc, C.white)
      ctx.doc.roundedRect(x, ctx.y, colW, rowH, 2.5, 2.5, 'FD')

      const padX = x + 5
      let cy = ctx.y + 7
      ctx.doc.setFont('helvetica', 'bold')
      ctx.doc.setFontSize(10.5)
      setText(ctx.doc, C.heading)
      ctx.doc.text(item.title, padX, cy)

      cy += 5.5
      const lines = wrap(ctx.doc, item[descKey], colW - 10, 9)
      setText(ctx.doc, C.textMuted)
      ctx.doc.text(lines, padX, cy)
    })

    ctx.y += rowH + 5
  }
}

function drawActivities(ctx) {
  sectionHeader(ctx, 'Activities Beyond the Syllabus')
  activities.forEach((item) => {
    const lines = wrap(ctx.doc, item.description, CONTENT_W - 10, 9)
    const rowH = 5 + lines.length * 4.2 + 3
    ensureSpace(ctx, rowH)

    setFill(ctx.doc, C.accent)
    ctx.doc.rect(MARGIN, ctx.y - 3, 2.5, 2.5, 'F')

    ctx.doc.setFont('helvetica', 'bold')
    ctx.doc.setFontSize(10)
    setText(ctx.doc, C.heading)
    ctx.doc.text(item.title, MARGIN + 6, ctx.y)

    ctx.doc.setFont('helvetica', 'normal')
    ctx.doc.setFontSize(9)
    setText(ctx.doc, C.textMuted)
    ctx.doc.text(lines, MARGIN + 6, ctx.y + 4.4)

    ctx.y += rowH + 3.5
  })
}

function drawAchievements(ctx) {
  sectionHeader(ctx, 'Achievements')
  achievements.forEach((item) => {
    const lines = wrap(ctx.doc, item.description, CONTENT_W - 14, 9.5)
    const boxH = 6 + lines.length * 4.4 + 6
    ensureSpace(ctx, boxH + 4)

    setFill(ctx.doc, C.primaryLight)
    ctx.doc.rect(MARGIN, ctx.y, CONTENT_W, boxH, 'F')
    setFill(ctx.doc, C.accent)
    ctx.doc.rect(MARGIN, ctx.y, 2, boxH, 'F')

    const padX = MARGIN + 7
    let cy = ctx.y + 7
    ctx.doc.setFont('helvetica', 'bold')
    ctx.doc.setFontSize(11)
    setText(ctx.doc, C.primaryDark)
    ctx.doc.text(item.title, padX, cy)

    cy += 5.5
    ctx.doc.setFont('helvetica', 'normal')
    ctx.doc.setFontSize(9.5)
    setText(ctx.doc, C.text)
    ctx.doc.text(lines, padX, cy)

    ctx.y += boxH + 5
  })
}

function drawAdmissionSteps(ctx) {
  sectionHeader(ctx, 'How Admission Works')
  admissionSteps.forEach((step, i) => {
    const lines = wrap(ctx.doc, step.description, CONTENT_W - 20, 9.5)
    const rowH = Math.max(10, lines.length * 4.4 + 4)
    ensureSpace(ctx, rowH + 4)

    setFill(ctx.doc, C.accent)
    ctx.doc.circle(MARGIN + 4, ctx.y + 1, 4, 'F')
    ctx.doc.setFont('helvetica', 'bold')
    ctx.doc.setFontSize(9)
    setText(ctx.doc, C.white)
    ctx.doc.text(String(i + 1), MARGIN + 4, ctx.y + 2.3, { align: 'center' })

    ctx.doc.setFont('helvetica', 'bold')
    ctx.doc.setFontSize(11)
    setText(ctx.doc, C.heading)
    ctx.doc.text(step.title, MARGIN + 13, ctx.y + 2)

    ctx.doc.setFont('helvetica', 'normal')
    ctx.doc.setFontSize(9.5)
    setText(ctx.doc, C.textMuted)
    ctx.doc.text(lines, MARGIN + 13, ctx.y + 7)

    ctx.y += rowH + 6
  })
}

function drawFaculty(ctx) {
  sectionHeader(ctx, 'Faculty')
  mentors.forEach((mentor) => {
    ensureSpace(ctx, 11)
    const initials = mentor.name.split(' ').map((w) => w.charAt(0)).join('').slice(0, 2)

    setFill(ctx.doc, C.primaryLight)
    ctx.doc.circle(MARGIN + 4, ctx.y - 1, 4, 'F')
    ctx.doc.setFont('helvetica', 'bold')
    ctx.doc.setFontSize(8)
    setText(ctx.doc, C.primaryDark)
    ctx.doc.text(initials, MARGIN + 4, ctx.y + 0.3, { align: 'center' })

    ctx.doc.setFont('helvetica', 'bold')
    ctx.doc.setFontSize(10.5)
    setText(ctx.doc, C.heading)
    ctx.doc.text(mentor.name, MARGIN + 13, ctx.y)

    const nameWidth = ctx.doc.getTextWidth(mentor.name)
    ctx.doc.setFont('helvetica', 'normal')
    ctx.doc.setFontSize(9.5)
    setText(ctx.doc, C.textMuted)
    ctx.doc.text(`  —  ${mentor.subject} (${mentor.experience})`, MARGIN + 13 + nameWidth, ctx.y)

    ctx.y += 9
  })
}

function drawContact(ctx) {
  // Needs room for 3 label/value rows + the closing CTA box; break to a
  // fresh page only if the current one can't actually fit it.
  ensureSpace(ctx, 111)
  sectionHeader(ctx, 'Contact Us')

  const rows = [
    ['Address', contactInfo.address],
    ['Phone', contactInfo.phone],
    ['Email', contactInfo.email],
  ]
  rows.forEach(([label, value]) => {
    ensureSpace(ctx, 12)
    ctx.doc.setFont('helvetica', 'bold')
    ctx.doc.setFontSize(8.5)
    setText(ctx.doc, C.textMuted)
    ctx.doc.text(label.toUpperCase(), MARGIN, ctx.y)
    ctx.doc.setFont('helvetica', 'normal')
    ctx.doc.setFontSize(11)
    setText(ctx.doc, C.heading)
    ctx.doc.text(value, MARGIN, ctx.y + 6)
    ctx.y += 15
  })

  ctx.y += 6
  ensureSpace(ctx, 40)
  const ctaH = 36
  setFill(ctx.doc, C.primary)
  ctx.doc.roundedRect(MARGIN, ctx.y, CONTENT_W, ctaH, 3, 3, 'F')
  ctx.doc.setFont('helvetica', 'bold')
  ctx.doc.setFontSize(14)
  setText(ctx.doc, C.white)
  ctx.doc.text('Ready to get started?', MARGIN + CONTENT_W / 2, ctx.y + 14, { align: 'center' })
  ctx.doc.setFont('helvetica', 'normal')
  ctx.doc.setFontSize(10)
  setText(ctx.doc, [225, 215, 240])
  ctx.doc.text('Book a free 30-minute trial class — no commitment, no payment required.', MARGIN + CONTENT_W / 2, ctx.y + 22, { align: 'center' })
  ctx.doc.setFont('helvetica', 'bold')
  ctx.doc.setFontSize(10)
  setText(ctx.doc, C.accent)
  ctx.doc.text(`Call or WhatsApp: ${contactInfo.phone}`, MARGIN + CONTENT_W / 2, ctx.y + 30, { align: 'center' })

  ctx.y += ctaH + 8
}

export async function downloadBrochure() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  doc.setProperties({
    title: `${SITE_NAME} — Institute Brochure`,
    subject: 'Institute Brochure',
    creator: SITE_NAME,
  })

  drawCover(doc)

  const ctx = { doc, y: 28 }
  drawCourses(ctx)
  drawTwoColumnCards(ctx, 'Class Formats', classFormats)
  drawTwoColumnCards(ctx, 'Facilities', facilities)
  drawActivities(ctx)
  drawAchievements(ctx)
  drawAdmissionSteps(ctx)
  drawFaculty(ctx)
  drawContact(ctx)

  drawFooters(doc)

  doc.save(`${SITE_NAME.replace(/\s+/g, '-').toLowerCase()}-brochure.pdf`)
}
