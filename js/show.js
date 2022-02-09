
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
        

        try{
            if(player != null){
                document.getElementById("idplayer").value = player._id; 
                document.getElementById('name').innerHTML=player.name;
                document.getElementById('surname').innerHTML=player.surname;
                document.getElementById('team').innerHTML=player.team;
                document.getElementById('age').innerHTML=player.age;
                document.getElementById('position').innerHTML=player.position;

                document.getElementById("edit").href = "edit.html?id="+player._id;
            }
        }catch (e) {
            // sentencias para manejar cualquier excepción
            console.log(e); // pasa el objeto de la excepción al manejador de errores
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

const deletebtn = document.getElementById("delete");
deletebtn.addEventListener("click",fetchDeletePlayer);

async function fetchDeletePlayer() {
  const idField = document.getElementById("idplayer").value;

  const response = await fetch(
    "https://footballexpressherokuvercel.herokuapp.com/players/"+ idField + "?_method=DELETE",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.href = "index.html";
    })
    .catch((error) => console.log(error));
}