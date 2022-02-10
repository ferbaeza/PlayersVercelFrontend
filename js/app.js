function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


async function fetchPlayers() {
    const response = await fetch(
      "https://footballexpressherokuvercel.herokuapp.com/players",
      {		
        method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"		  
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const ul = document.getElementById('players');
        let players = data.data.players;
        console.log(players);
        
        for(let pl of players){
            let p = createNode('p');
            p.setAttribute('class', 'is-size-4 notification is-info');
            p.setAttribute('href', "show.html?_id=" + "show info");
            let span = createNode('span');
            let a = createNode('a');
            a.setAttribute('href', "show.html?id=" + pl._id);
            let info= createNode('button');
            info.setAttribute('class', 'button is-warning');  
            info.innerHTML= "Ver info"
            span.innerHTML = `Player: ${pl.name} ${pl.surname} edad:${pl.age}  team:${pl.team} `;   
            append(p, span);
            append(p, a);
            append(a, info);
            append(ul, p);
        }
        
      })
      .catch((error) => console.log(error));
  }



fetchPlayers();