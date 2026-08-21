export const ROLES = {
  TEACHER: 'teacher',
  STUDENT: 'student',
}

export const DASHBOARD_PATH = {
  [ROLES.TEACHER]: '/teacher/dashboard',
  [ROLES.STUDENT]: '/student/dashboard',
}

export const SITE_NAME_MAIN = 'Vidhyashram'
export const SITE_NAME_SUFFIX = 'Tuition Centre'
export const SITE_NAME = `${SITE_NAME_MAIN} ${SITE_NAME_SUFFIX}`
