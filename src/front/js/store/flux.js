const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			users:[],
		},
		
		actions: {

		
			//[POST] CREAR nuevo user

				postUser: (email, password, username) => {
				console.log("Hola desde flux")

				console.log(email, password)

					const requestOptions = {
							method: 'POST',
							headers:{"content-type": "application/json"},
							body: JSON.stringify(
						{

								"email": email,
								"password": password,
								"username": username
						}
					)
				};

					fetch("https://stunning-trout-4j77wgq5j46w2qg9g-3001.app.github.dev/api/user", requestOptions)
					.then(response => response.json())
					.then(data => console.log(data))
						
					},

			//[GET] TRAER users 
			
			getUser: () => {
				console.log( " i am working")

					const requestOptions = {
						method: 'GET',
						headers: {"content-type": "application/json"},
						
					};
					
					fetch("https://stunning-trout-4j77wgq5j46w2qg9g-3001.app.github.dev/api/user", requestOptions)
					.then(response => response.json())
					.then(data => 
							{
							console.log(data);
							setStore({ users: data })
							}
				)},

			//[DELETE] BORRAR user 

			deleteUser: (id) => {
				console.log( " i am working")

					const requestOptions = {
						method: 'DELETE',
						headers: {"content-type": "application/json"},
						
					};
					
					fetch(`https://stunning-trout-4j77wgq5j46w2qg9g-3001.app.github.dev/api/user/${id}`, requestOptions)
					.then(response => response.json())
					.then((data) => 
							{   
							console.log(data),
							console.log("hello")
							})
					//incluimos el fetch de [GET[]  traer la Lista para que se nos vuelva a cargar la list actualizada después de eliminar user.
					fetch("https://stunning-trout-4j77wgq5j46w2qg9g-3001.app.github.dev/api/user")
					.then( (response)=>response.json())
					.then( (data)=>setStore({ users:data }))
					

				},

			
            //[PUT] EDITAR user 

			editUser: (id,userdata) => {
				

					const requestOptions = {
						method: 'PUT',
						headers: {"content-type": "application/json"},
						body: JSON.stringify(
							{
	
									"email": userdata.email,
									"password":userdata.password,
									"username": userdata.username
							}
						)
						
					};
					
					fetch(`https://stunning-trout-4j77wgq5j46w2qg9g-3001.app.github.dev/api/user/${id}`, requestOptions)
					.then(response => response.json())
					.then((data) => 
							  console.log(data),
							  console.log("hello"),
							
							)
					//incluimos el fetch de [GET[]  traer la Lista para que se nos vuelva a cargar la list actualizada después de editar user.
					fetch("https://stunning-trout-4j77wgq5j46w2qg9g-3001.app.github.dev/api/user")
					.then( (response)=>response.json())
					.then( (data)=>setStore({ users:data }))
					

				},



			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
