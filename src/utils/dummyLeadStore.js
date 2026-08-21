const BOOKINGS_KEY = 'vidhyashram_trial_bookings'
const INQUIRIES_KEY = 'vidhyashram_inquiries'

function readList(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || []
  } catch {
    return []
  }
}

function appendEntry(key, entry) {
  const list = readList(key)
  list.push({ ...entry, id: crypto.randomUUID(), createdAt: new Date().toISOString() })
  localStorage.setItem(key, JSON.stringify(list))
}

export function saveTrialBooking(booking) {
  appendEntry(BOOKINGS_KEY, booking)
}

export function saveInquiry(inquiry) {
  appendEntry(INQUIRIES_KEY, inquiry)
}
