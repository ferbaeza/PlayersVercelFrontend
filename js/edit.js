function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

async function fetchProduct(id) {
  const response = await fetch(
    "https://footballexpressherokuvercel.herokuapp.com/players/" + id,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let player = data.data;
      console.log(player);

      try {
        if (player != null) {
          document.getElementById("id").value = player._id;
          document.getElementById("name").value = player.name;
          document.getElementById("surname").value = player.surname;
          document.getElementById("age").value = player.age;
          document.getElementById("position").value = player.position;
          document.getElementById("team").value = player.team;
        }
      } catch (e) {
        // sentencias para manejar cualquier excepción
        console.log(e); // pasa el objeto de la excepción al manejador de errores
      }
    })
    .catch((error) => console.log(error));
}

function getParameterByName(name, url = window.location.href) {
  console.log(url);

  name = name.replace(/[\[\]]/g, "\\$&");

  console.log(name);
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

fetchProduct(getParameterByName("id"));

function selects() {
  const positions = ["GK", "DF", "MF", "FW"];
  const team = [
    "REAL MADRID",
    "FC BARCELONA",
    "PSG",
    "BAYERN MUNICH",
    "BORUSSIA DORTMUND",
  ];

  let select = document.getElementById("position");
  for (let position of positions) {
    let op = createNode("option");

    op.innerHTML = position;

    append(select, op);
  }

  let select2 = document.getElementById("team");
  for (let teamm of team) {
    let op = createNode("option");

    op.innerHTML = teamm;

    append(select2, op);
  }
}

selects();

const save = document.getElementById("save");
save.addEventListener("click", fetchEditProduct);

async function fetchEditProduct() {
  const idField = document.getElementById("idplayer").value;
  const nameField = document.getElementById("name").value;
  const surnameField = document.getElementById("surname").value;
  const ageField = document.getElementById("age").value;
  const positionField = document.getElementById("position").value;
  const teamField = document.getElementById("team").value;

  console.log(nameField + " " + surnameField + " " + ageField+""+positionField+teamField+"---"+idField);

  const newPlayer = {
    _id: idField,
    name: nameField,
    surname: surnameField,
    age: ageField,
    position: positionField,
    team: teamField,
  };

  const response = await fetch(
    "https://footballexpressherokuvercel.herokuapp.com/players/" +
      idField +
      "?_method=PUT",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.href = "index.html";
    })
    .catch((error) => console.log(error));
}
