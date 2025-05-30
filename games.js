const games = [
  { date: '2024-09-22', opponent: 'Boston Bruins', result: 'W 3-2' },
  { date: '2024-09-24', opponent: 'New York Islanders', result: 'W 6-4' },
  { date: '2024-09-26', opponent: 'Boston Bruins', result: 'W 5-2' },
  { date: '2024-09-30', opponent: 'New Jersey Devils', result: 'L 3-1' },
  { date: '2024-10-01', opponent: 'New Jersey Devils', result: 'W 5-4' },
  { date: '2024-10-04', opponent: 'New York Islanders', result: 'L 5-2' },
  { date: '2024-10-09', opponent: 'Pittsburgh Penguins', result: 'W 6-0' },
  { date: '2024-10-12', opponent: 'Utah Hockey Club', result: 'L 5-6' },
  { date: '2024-10-14', opponent: 'Detroit Red Wings', result: 'W 4-1' },
  { date: '2024-10-19', opponent: 'Toronto Maple Leaves', result: 'W 4-1' },
  { date: '2024-10-22', opponent: 'Montreal Canadiens', result: 'W 7-2' },
  { date: '2024-10-24', opponent: 'Florida Panthers', result: 'L 3-1' },
  { date: '2024-10-26', opponent: 'Anaheim Ducks', result: 'W 2-1' },
  { date: '2024-10-29', opponent: 'Washington Capitals', result: 'L 5-3' },
  { date: '2024-11-01', opponent: 'Ottawa Senators', result: 'W 2-1' },
  { date: '2024-11-03', opponent: 'New York Islanders', result: 'W 5-2' },
  { date: '2024-11-07', opponent: 'Buffalo Sabres', result: 'L 6-1' },
  { date: '2024-11-09', opponent: 'Detroit Red Wings', result: 'W 4-0' },
  { date: '2024-11-12', opponent: 'Winnipeg Jets', result: 'L 6-3' },
  { date: '2024-11-14', opponent: 'San Jose Sharks', result: 'W 3-2' },
  { date: '2024-11-17', opponent: 'Seattle Kraken', result: 'W 2-0' },
  { date: '2024-11-19', opponent: 'Vancouver Canucks', result: 'W 4-3' },
  { date: '2024-11-21', opponent: 'Calgary Flames', result: 'L 3-2' },
  { date: '2024-11-23', opponent: 'Edmonton Oilers', result: 'L 6-2' },
  { date: '2024-11-25', opponent: 'St. Louis Blues', result: 'L 5-2' },
  { date: '2024-11-27', opponent: 'Carolina Hurricanes', result: 'L 4-3' },
  { date: '2024-11-29', opponent: 'Philadelphia Flyers', result: 'L 3-1' },
  { date: '2024-11-30', opponent: 'Montreal Canadiens', result: 'L 4-3' },
  { date: '2024-12-02', opponent: 'New Jersey Devils', result: 'L 5-1' },
  { date: '2024-12-06', opponent: 'Pittsburgh Penguins', result: 'W 4-2' },
  { date: '2024-12-08', opponent: 'Seattle Kraken', result: 'L 7-5' },
  { date: '2024-12-09', opponent: 'Chicago Blackhawks', result: 'L 2-1' },
  { date: '2024-12-11', opponent: 'Buffalo Sabres', result: 'W 3-2' },
  { date: '2024-12-14', opponent: 'Los Angeles Kings', result: 'L 5-1' },
  { date: '2024-12-15', opponent: 'St. Louis Blues', result: 'L 3-2' },
  { date: '2024-12-17', opponent: 'Nashville Predators', result: 'L 2-0' },
  { date: '2024-12-20', opponent: 'Dallas Stars', result: 'W 3-1' },
  { date: '2024-12-22', opponent: 'Carolina Hurricanes', result: 'L 3-1' },
  { date: '2024-12-27', opponent: 'New Jersey Devils', result: 'L 5-0' },
  { date: '2024-12-28', opponent: 'Tampa Bay Lightning', result: 'L 6-2' },
  { date: '2024-12-30', opponent: 'Florida Panthers', result: 'L 5-3' },
  { date: '2025-01-02', opponent: 'Boston Bruins', result: 'W 2-1' },
  { date: '2025-01-04', opponent: 'Washington Capitals', result: 'L 7-4' },
  { date: '2025-01-05', opponent: 'Chicago Blackhawks', result: 'W 6-2' },
  { date: '2025-01-07', opponent: 'Dallas Stars', result: 'L 5-4' },
  { date: '2025-01-09', opponent: 'New Jersey Devils', result: 'W 3-2' },
  { date: '2025-01-11', opponent: 'Vegas Golden Knights', result: 'W 2-1' },
  { date: '2025-01-14', opponent: 'Colorado Avalanche', result: 'L 3-2' },
  { date: '2025-01-16', opponent: 'Utah Hockey Club', result: 'W 5-3' },
  { date: '2025-01-18', opponent: 'Columbus Blue Jackets', result: 'W 1-0' },
  { date: '2025-01-19', opponent: 'Montreal Canadiens', result: 'L 5-4' },
  { date: '2025-01-21', opponent: 'Ottawa Senators', result: 'W 5-0' },
  { date: '2025-01-23', opponent: 'Philadelphia Flyers', result: 'W 6-1' },
  { date: '2025-01-26', opponent: 'Colorado Avalanche', result: 'L 5-4' },
  { date: '2025-01-28', opponent: 'Carolina Hurricanes', result: 'L 4-0' },
  { date: '2025-02-01', opponent: 'Boston Bruins', result: 'L 6-3' },
  { date: '2025-02-02', opponent: 'Vegas Golden Knights', result: 'W 4-2' },
  { date: '2025-02-05', opponent: 'Boston Bruins', result: 'W 3-2' },
  { date: '2025-02-07', opponent: 'Pittsburgh Penguins', result: 'L 3-02' },
  { date: '2025-02-08', opponent: 'Columbus Blue Jackets', result: 'W 4-3' },
  { date: '2025-02-22', opponent: 'Buffalo Sabres', result: 'L 8-2' },
  { date: '2025-02-23', opponent: 'Pittsburgh Penguins', result: 'W 5-3' },
  { date: '2025-02-25', opponent: 'New York Islanders', result: 'W 5-1' },
  { date: '2025-02-28', opponent: 'Toronto Maple Leaves', result: 'L 3-2' },
  { date: '2025-03-02', opponent: 'Nashville Predators', result: 'W 4-0' },
  { date: '2025-03-03', opponent: 'New York Islanders', result: 'W 4-0' },
  { date: '2025-03-05', opponent: 'Washington Capitals', result: 'L 3-2' },
  { date: '2025-03-08', opponent: 'Ottawa Senators ', result: 'L 4-3' },
  { date: '2025-03-09', opponent: 'Columbus Blue Jackets', result: 'L 7-3' },
  { date: '2025-03-11', opponent: 'Winnipeg Jets', result: 'L 2-1' },
  { date: '2025-03-13', opponent: 'Minnesota Wild', result: 'W 3-2' },
  { date: '2025-03-15', opponent: 'Columbus Blue Jackets', result: 'W 4-0' },
  { date: '2025-03-16', opponent: 'Edmonton Oilers', result: 'L 7-3' },
  { date: '2025-03-18', opponent: 'Calgary Flames', result: 'L 2-1' },
  { date: '2025-03-20', opponent: 'Toronto Maple Leafs', result: 'L 4-3' },
  { date: '2025-03-22', opponent: 'Vancouver Canucks', result: 'W 5-3' },
  { date: '2025-03-25', opponent: 'Los Angeles Kings', result: 'L 3-1' },
  { date: '2025-03-28', opponent: 'Anaheim Ducks', result: 'L 5-4' },
  { date: '2025-03-29', opponent: 'San Jose Sharks', result: 'W 6-1' },

  { date: '2025-04-02', opponent: 'Minnesota Wild', result: 'W 5-4' },
  { date: '2025-04-05', opponent: 'New Jersey Devils', result: 'L 4-0' },
  { date: '2025-04-07', opponent: 'Tampa Bay Lightning', result: 'L 5-1' },
  { date: '2025-04-09', opponent: 'Philadelphia Flyers', result: 'L 8-5' },
  { date: '2025-04-10', opponent: 'New York Islanders', result: 'W 9-2' },
  { date: '2025-04-12', opponent: 'Carolina Hurricanes', result: 'L 7-3' },
  { date: '2025-04-14', opponent: 'Florida Panthers', result: 'W 5-3' },
  { date: '2025-04-17', opponent: 'Tampa Bay Lightning', result: 'W 4-0' }
];

// Initial current month and year for the calendar
let currentMonth = 8; // September (0-based index)
let currentYear = 2024; // Year 2024

// DOM elements for displaying the current month and year, and the calendar body
const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');

// Function to load the calendar for a given month and year
function loadCalendar(month, year) {
  // Get the first day of the month and the total number of days in the month
  const firstDay = new Date(year, month).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Clear the calendar body to prepare for new entries
  calendarBody.innerHTML = '';

  // Update the displayed month and year
  monthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

  let date = 1; // Start with the 1st day of the month

  // Loop to create calendar rows (weeks)
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr'); // Create a new table row

    // Loop to create calendar cells (days)
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td'); // Create a new table cell

      // Add empty cells before the first day of the month
      if (i === 0 && j < firstDay) {
        cell.textContent = ''; // Leave cell blank
      } else if (date > daysInMonth) {
        break; // Stop creating cells if we've gone past the last day
      } else {
        // Format the current date as YYYY-MM-DD
        const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;

        // Find if there's a game scheduled on this date
        const game = games.find(g => g.date === fullDate);

        // Set the cell text to the current date
        cell.textContent = date;

        // If there's a game, display game info and add styling for win/loss
        if (game) {
          const gameInfo = document.createElement('div');
          gameInfo.textContent = `${game.opponent} (${game.result})`; // Display opponent and result
          cell.appendChild(gameInfo); // Add game info to the cell

          // Add class based on whether the game was a win or loss
          cell.classList.add(game.result.startsWith('W') ? 'game-win' : 'game-loss');
        }

        date++; // Increment the date
      }

      row.appendChild(cell); // Add the cell to the row
    }

    calendarBody.appendChild(row); // Add the row to the calendar body
  }
}

// Event listener for "Previous Month" button
document.getElementById('prevMonth').addEventListener('click', () => {
  currentMonth--; // Move to the previous month
  if (currentMonth < 0) { // If January is passed, go to December of the previous year
    currentMonth = 11;
    currentYear--;
  }
  loadCalendar(currentMonth, currentYear); // Reload the calendar
});

// Event listener for "Next Month" button
document.getElementById('nextMonth').addEventListener('click', () => {
  currentMonth++; // Move to the next month
  if (currentMonth > 11) { // If December is passed, go to January of the next year
    currentMonth = 0;
    currentYear++;
  }
  loadCalendar(currentMonth, currentYear); // Reload the calendar
});

// Initial call to load the calendar for the current month and year
loadCalendar(currentMonth, currentYear);