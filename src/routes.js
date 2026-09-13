export const routes = {
  home: {
    hash: '#/',
    label: 'Home',
    title: 'Justine Bradley Tulio | E-Portfolio',
  },
  'course-expectation': {
    hash: '#/course-expectation',
    label: 'Course Expectation',
    title: 'Course Expectation | Justine Bradley Tulio',
  },
  prelim: {
    hash: '#/prelim',
    label: 'Prelim',
    title: 'Prelim | Justine Bradley Tulio',
  },
}

export function getPageFromHash(hash) {
  return Object.entries(routes).find(([, route]) => route.hash === hash)?.[0] ?? 'home'
}
