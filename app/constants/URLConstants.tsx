const TWITTER = "https://twitter.com";
const FACEBOOK = "https://facebook.com";
const INSTAGRAM = "https://instagram.com";  

// const BASE_URL = "http://localhost:4000"; 
const BASE_URL = "https://www.lccoordinator.com:4000"; 
export const TEAM_LOGO_BASE_URL = "https://scores.iplt20.com/ipl/teamlogos/";

export const API_ENDPOINTS = {
    GET_POINTS_TABLE: `${BASE_URL}/pointsTable`,
    GET_MATCH_SCHEDULE: `${BASE_URL}/matchSchedule`,
    GET_TEAM_DETAILS: `${BASE_URL}/team-details?`,
};

//Live Matches API 
export const HOST = "cricket-live-data.p.rapidapi.com";
export const LIVE_MATCHES_HOST =  "cricbuzz-cricket.p.rapidapi.com";
export const LIVE_MATCHES= "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live"
export const LIVE_MATCHES_URL = "/api/livescores/";

export const FIXTURES = "https://cricket-live-data.p.rapidapi.com/fixtures";
export const FIXTURES_URL = "/api/fixtures/";


//Images Base URL
export const CRICBUZZ_BASE_IMAGE_URL = "https://www.cricbuzz.com/a/img/v1/192x192/i1/c";

export const SOCIAL_MEDIA_LINKS = {
    TWITTER,
    FACEBOOK,
    INSTAGRAM,
};


//for demo purposes
const ESPN_IMAGE_BASE_URL = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/";
const ENGLAND_IMAGE = ESPN_IMAGE_BASE_URL+"313200/313261.logo.png";
const INDIA_IMAGE = ESPN_IMAGE_BASE_URL+"381800/381895.png";

export const TEAM_IMAGES = {
    ENGLAND: ENGLAND_IMAGE,
    INDIA: INDIA_IMAGE,
};