async function fetchCreateProduct() {
    
	const newProduct = { "name": "miguel", "price": 25.5, "category":"vegetable"};
    const response = await fetch(
      "https://footballexpressherokuvercel.herokuapp.com/",
      {				
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': "application/json"
        },
		body: JSON.stringify(newProduct)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        
      })
      .catch((error) => console.log(error));
  }