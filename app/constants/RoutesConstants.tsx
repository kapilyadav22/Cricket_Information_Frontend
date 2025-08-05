export const ROUTES = {
  HOME: '/',
  LIVE_MATCHES: '/liveMatches',
  MATCH_SCHEDULE: '/matchSchedule',
  POINTS_TABLE: '/pointsTable',
  TEAMS: '/teams',
  // CONTACT: '/contact',
};

export const NAVIGATION_MENU_ITEMS = {
  LIVE_MATCHES: 'Live Matches',
  MATCH_SCHEDULE: 'Match Schedule',
  POINTS_TABLE: 'Points Table',
  TEAMS: 'Teams',
  // CONTACT: 'Contact',
} as const

export const PAGE_NAMES = {
  ...NAVIGATION_MENU_ITEMS,
  HOME: 'Home',
} as const



