document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''
        list.forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2'

            col.innerHTML = `
           <div class="card h-100 shadow-sm">
                    <img src="${p.photo}" alt="${p.firstName} ${p.lastName}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
                        <div class="badge badge-position badge-pos-${p.position}">${p.position}</div>
                        <p class="small text-muted mb-0">Age ${p.age}</p>
                    </div>

            </div>
           
            
            
            `
            grid.appendChild(col)
        })


    }










render(players)    
})



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

    { date: '2025-03-02', opponent: 'Toronto Maple Leaves', result: 'L 3-2' },
    { date: '2025-03-02', opponent: 'Toronto Maple Leaves', result: 'L 3-2' },
    { date: '2025-03-02', opponent: 'Toronto Maple Leaves', result: 'L 3-2' },
    { date: '2025-03-02', opponent: 'Toronto Maple Leaves', result: 'L 3-2' },
    { date: '2025-03-02', opponent: 'Toronto Maple Leaves', result: 'L 3-2' },
    { date: '2025-03-02', opponent: 'Toronto Maple Leaves', result: 'L 3-2' },


  // Add all other games here
    { date: '2025-04-17', opponent: 'Tampa Bay Lightning', result: 'W 4-0' }
];

let currentMonth = 8; 
let currentYear = 2024;

const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');

function loadCalendar(month, year) {
  const firstDay = new Date(year, month).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  calendarBody.innerHTML = '';
  monthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');

      if (i === 0 && j < firstDay) {
        cell.textContent = '';
      } else if (date > daysInMonth) {
        break;
      } else {
        const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
        const game = games.find(g => g.date === fullDate);

        cell.textContent = date;

        if (game) {
          const gameInfo = document.createElement('div');
          gameInfo.textContent = `${game.opponent} (${game.result})`;
          cell.appendChild(gameInfo);

          cell.classList.add(game.result.startsWith('W') ? 'game-win' : 'game-loss');
        }

        date++;
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

document.getElementById('prevMonth').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  loadCalendar(currentMonth, currentYear);
});

document.getElementById('nextMonth').addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  loadCalendar(currentMonth, currentYear);
});

loadCalendar(currentMonth, currentYear);