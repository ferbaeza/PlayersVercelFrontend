function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
async function fetchPlayersbyId(id){
    console.log(id);
    const response = await fetch(
        "https://footballexpressherokuvercel.herokuapp.com/players/"+id,
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
        let player = data.data;
        console.log(player);
            
        for(let i of player){

        }


        })
        .catch((error) => console.log(error));
    }


function getParameterByName(name, url = window.location.href) {
    console.log(url);
    
        name = name.replace(/[\[\]]/g, '\\$&');
    
    console.log(name);
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
fetchPlayersbyId(getParameterByName('id'));

//fetchPlayersbyId();
