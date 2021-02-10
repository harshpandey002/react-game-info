//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentDay}-${currentMonth}`;
const lastYear = `${currentYear - 1}-${currentDay}-${currentMonth}`;
const nextYear = `${currentYear + 1}-${currentDay}-${currentMonth}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
