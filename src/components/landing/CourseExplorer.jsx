import { useMemo, useState } from 'react'
import { FiDownload, FiBookOpen, FiCalendar, FiSun, FiUsers, FiUser, FiCheckCircle, FiStar } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import Modal from '../common/Modal'
import Button from '../common/Button'
import { courses, gradeFilters, classFormats, boardsCovered } from '../../data/siteContent'
import styles from './CourseExplorer.module.css'

const FORMAT_ICONS = {
  weekday: FiCalendar,
  weekend: FiSun,
  group: FiUsers,
  'one-on-one': FiUser,
}

function downloadCurriculum(course) {
  const lines = [
    `${course.title} — Curriculum Outline`,
    `Grades: ${course.grades.join(', ')}`,
    `Fees: ${course.fees}`,
    '',
    'Syllabus:',
    ...course.syllabus.map((topic) => `- ${topic}`),
  ]
  const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${course.title.replace(/\s+/g, '-').toLowerCase()}-curriculum.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export default function CourseExplorer() {
  const [gradeFilter, setGradeFilter] = useState('all')
  const [activeCourse, setActiveCourse] = useState(null)

  const filteredCourses = useMemo(() => {
    if (gradeFilter === 'all') return courses
    return courses.filter((course) => course.grades.includes(gradeFilter))
  }, [gradeFilter])

  return (
    <section id="courses" className={`section sectionAlt bg-ambient ${styles.section}`}>
      <div className="container">
        <SectionHeading
          eyebrow="Subjects"
          title="Explore Courses By Grade"
          description="Pick a grade to instantly see the relevant subjects, syllabus, and fee plan — no scrolling through everything."
          center
        />

        <div className={styles.boardsRow}>
          <span className={styles.boardsLabel}>Curriculum aligned with:</span>
          {boardsCovered.map((board) => (
            <span key={board} className={styles.boardChip}>
              <FiCheckCircle aria-hidden="true" />
              {board}
            </span>
          ))}
        </div>

        <div className={styles.formatRow}>
          {classFormats.map((format) => {
            const Icon = FORMAT_ICONS[format.icon]
            return (
              <div key={format.title} className={styles.formatCard}>
                <span className={styles.formatIcon}>
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <span className={styles.formatTitle}>{format.title}</span>
                  <p className={styles.formatText}>{format.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.filters} role="group" aria-label="Filter by grade">
          {gradeFilters.map((filter) => (
            <button
              key={filter.value}
              className={`${styles.filterPill} ${gradeFilter === filter.value ? styles.filterPillActive : ''}`}
              onClick={() => setGradeFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredCourses.map((course) => (
            <Reveal key={course.title} className={`${styles.cardWrap} ${course.featured ? styles.featured : ''}`}>
              <div className={styles.card}>
                {course.featured && (
                  <span className={styles.popularBadge}>
                    <FiStar aria-hidden="true" />
                    Most Popular
                  </span>
                )}
                <div className={styles.cardTop}>
                  <div className={styles.badges}>
                    {course.grades.map((grade) => (
                      <span key={grade} className={styles.badge}>{grade}</span>
                    ))}
                  </div>
                  <span className={styles.fees}>{course.fees}</span>
                </div>

                <h3 className={styles.title}>{course.title}</h3>
                <p className={styles.description}>{course.description}</p>

                <div className={styles.actions}>
                  <button className={styles.syllabusBtn} onClick={() => setActiveCourse(course)}>
                    <FiBookOpen aria-hidden="true" />
                    View Syllabus
                  </button>
                  <button
                    className={styles.downloadBtn}
                    onClick={() => downloadCurriculum(course)}
                    aria-label={`Download ${course.title} curriculum outline`}
                  >
                    <FiDownload aria-hidden="true" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(activeCourse)}
        onClose={() => setActiveCourse(null)}
        title={activeCourse ? `${activeCourse.title} Syllabus` : ''}
      >
        {activeCourse && (
          <>
            <p className={styles.modalMeta}>
              Grades {activeCourse.grades.join(', ')} · {activeCourse.fees}
            </p>
            <ul className={styles.syllabusList}>
              {activeCourse.syllabus.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <Button fullWidth variant="primary" onClick={() => downloadCurriculum(activeCourse)}>
              Download Curriculum Outline
            </Button>
          </>
        )}
      </Modal>
    </section>
  )
}
