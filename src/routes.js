export const routes = {
  home: {
    hash: '#/',
    label: 'Home',
    title: 'Juan Miguel Santos | E-Portfolio',
  },
  'course-expectation': {
    hash: '#/course-expectation',
    label: 'Course Expectation',
    title: 'Course Expectation | Juan Miguel Santos',
  },
  prelim: {
    hash: '#/prelim',
    label: 'Prelim',
    title: 'Prelim | Juan Miguel Santos',
  },
}

export function getPageFromHash(hash) {
  return Object.entries(routes).find(([, route]) => route.hash === hash)?.[0] ?? 'home'
}

