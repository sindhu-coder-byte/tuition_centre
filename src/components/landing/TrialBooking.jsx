import { useMemo, useState } from 'react'
import { FiCheckCircle, FiCalendar, FiClock } from 'react-icons/fi'
import Reveal from '../common/Reveal'
import Button from '../common/Button'
import { trialSlots, sectionPhotos } from '../../data/siteContent'
import { saveTrialBooking } from '../../utils/dummyLeadStore'
import styles from './TrialBooking.module.css'

function getUpcomingDays(count) {
  const days = []
  const cursor = new Date()
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1)
    const isWeekend = cursor.getDay() === 0 || cursor.getDay() === 6
    if (!isWeekend) {
      days.push({
        iso: cursor.toISOString().slice(0, 10),
        weekday: cursor.toLocaleDateString('en-US', { weekday: 'short' }),
        day: cursor.getDate(),
        month: cursor.toLocaleDateString('en-US', { month: 'short' }),
      })
    }
  }
  return days
}

export default function TrialBooking() {
  const days = useMemo(() => getUpcomingDays(5), [])
  const [selectedDay, setSelectedDay] = useState(days[0].iso)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const activeDay = days.find((d) => d.iso === selectedDay)

  function handleSubmit(e) {
    e.preventDefault()
    if (!selectedSlot) return
    saveTrialBooking({ name, phone, date: selectedDay, slot: selectedSlot })
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.confirmWrap}`}>
          <Reveal>
            <div className={styles.confirmCard}>
              <FiCheckCircle className={styles.confirmIcon} aria-hidden="true" />
              <h3>Free Trial Booked!</h3>
              <p>
                {name ? `${name}, you're` : "You're"} confirmed for <strong>{activeDay.weekday}, {activeDay.month} {activeDay.day}</strong> at{' '}
                <strong>{selectedSlot}</strong>. We'll send a reminder to {phone || 'your phone'}.
              </p>
              <Button
                variant="secondary"
                onClick={() => {
                  setConfirmed(false)
                  setSelectedSlot(null)
                }}
              >
                Book Another Slot
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section id="trial" className={`section bg-ambient ${styles.section}`}>
      <div className="container">
        <Reveal>
          <div className={styles.card}>
            <div className={styles.intro}>
              <img
                src={sectionPhotos.trial}
                alt="Students celebrating together at Vidhyashram Tuition Centre"
                className={styles.introPhoto}
              />
              <span className={styles.eyebrow}>Free Trial Class</span>
              <h2 className={styles.title}>Book a 30-Minute Demo Class</h2>
              <p className={styles.subtitle}>
                Pick a slot that works for you — no commitment, meet a mentor, and see how we teach.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.pickerBlock}>
                <span className={styles.pickerLabel}><FiCalendar aria-hidden="true" /> Choose a Date</span>
                <div className={styles.dayRow}>
                  {days.map((day) => (
                    <button
                      key={day.iso}
                      type="button"
                      className={`${styles.dayBtn} ${selectedDay === day.iso ? styles.dayBtnActive : ''}`}
                      onClick={() => setSelectedDay(day.iso)}
                    >
                      <span className={styles.dayWeekday}>{day.weekday}</span>
                      <span className={styles.dayNum}>{day.day}</span>
                      <span className={styles.dayMonth}>{day.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.pickerBlock}>
                <span className={styles.pickerLabel}><FiClock aria-hidden="true" /> Choose a Time</span>
                <div className={styles.slotRow}>
                  {trialSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`${styles.slotBtn} ${selectedSlot === slot ? styles.slotBtnActive : ''}`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.contactRow}>
                <input
                  className={styles.input}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className={styles.input}
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <Button type="submit" variant="accent" disabled={!selectedSlot}>
                  Book Free Trial
                </Button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
