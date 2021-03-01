const tickets = [
    //USA, BRA, UAE, USA, JPN, PHL
    ["JPN", "PHL"],
    ["BRA", "UAE"],
    ["USA", "BRA"],
    ["UAE", "USA"],
    ["USA", "JPN"]
  ];
  const sources = tickets.map((ticket) => ticket[0]);
  const destinations = tickets.map((ticket) => ticket[1]);
  let location = sources.filter((a) => !destinations.includes(a));
  let target = destinations.filter((a) => !sources.includes(a));
  const visiting_path = [];
  visiting_path.push(target);
  
  let index;
  for (let i = 0; i < sources.length; i++) {
    index = destinations.indexOf(String(target));
    visiting_path.push(sources[index]);
    target = sources[index];
  }
  visiting_path.reverse()

  console.log(visiting_path)