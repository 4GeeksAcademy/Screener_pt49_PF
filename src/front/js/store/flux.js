const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			popularMovies: [],
			movies: [],
			moviePreApi: {},
			allComments: [],
			auth: false,
			isAdmin: false
		},
		
		actions: {

		
			//[POST] CREAR nuevo user

				postUser: (email, password, username,age) => {
				console.log(email)

					const requestOptions = {
							method: 'POST',
							headers:{"content-type": "application/json"},
							body: JSON.stringify(
						{
								"email": email,
								"password": password,
								"username": username,
								"age": age
						}
					)
				};

				fetch(process.env.BACKEND_URL + "/api/user", requestOptions)
				.then(response => response.json())
				.then(data => {
					console.log(data);
		
					if (response.status === 200) {
						alert("Usuario creado correctamente");
					}
				})
				.catch(error => {
					console.error("Error al crear usuario:", error);
				});
		},

			//[GET] TRAER users 
			
			getUser: () => {
				console.log( " i am working")

					const requestOptions = {
						method: 'GET',
						headers: {"content-type": "application/json"},
						
					};
					
					fetch(process.env.BACKEND_URL + "/api/user", requestOptions)
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
					
					fetch(process.env.BACKEND_URL +  `/api/user/${id}`, requestOptions)
					.then(response => response.json())
					.then((data) => 
							{   
							console.log(data),
							console.log("hello")
							})
					//incluimos el fetch de [GET[]  traer la Lista para que se nos vuelva a cargar la list actualizada después de eliminar user.
					fetch(process.env.BACKEND_URL + "/api/user")
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
									"username": userdata.username,
									"age": userdata.age
							}
						)
						
					};
					
					fetch(process.env.BACKEND_URL + `/api/user/${id}`, requestOptions)
					.then(response => response.json())
					.then((data) => 
							  console.log(data),
							  console.log("hello"),
							
							)
					//incluimos el fetch de [GET[]  traer la Lista para que se nos vuelva a cargar la list actualizada después de editar user.
					fetch(process.env.BACKEND_URL + "/api/user")
					.then( (response)=>response.json())
					.then( (data)=>setStore({ users:data }))
					

				},


			saveMovieToAPI: async (movieData) => {
				try {
				  const response = await fetch(process.env.BACKEND_URL + "/api/movies", {
					method: 'POST',
					headers: {
					  'Content-Type': 'application/json',

					},
					body: JSON.stringify(movieData),
				  });
				  if (response.ok){
					alert("La pelicula se agrego correctamente a la Api")

				  } if (!response.ok) {
					alert("ERROR: La pelicula no se pudo agregar a la api")
					throw new Error('Error al guardar la película en la API');					
				  }
			  
				  const data = await response.json();
				  console.log('Película guardada exitosamente:', data);
				} catch (error) {

				  console.error('Error al intentar guardar la película:', error.message);
				  console.error('Detalles del error:', error);
				}
			  },
			  


			saveMovie: (movie) => {
				setStore({moviePreApi : movie})
				console.log("Propiedades agregadas listo para pasar a la Api:", movie);
			},

			setStore: (data) => {
				setStore(data);
			},

			getPopularMovies: async () => {
				const options = {
					method: 'GET',
					headers: {
						accept: 'application/json',
						Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZhNzNkZjUyZTYyNWQ5NGQ1NzMyNGI1YTFlNDgzYSIsInN1YiI6IjY1OTQwNzAwY2U0ZGRjNmQzODdmMDIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNQabtAWxQcVNGg9_oMH8JWkdoAHIrOkmlBiwpj1oG8'
					}
				};
			
				try {
					const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1', options);
					const data = await response.json();
			
					if (data.results) {
						const moviesWithProperties = data.results.map(movie => ({
							...movie,
							comedy: false,
							couple: false,
							party: false,
							solitary: false,
							action: false,
							drama: false,
							family: false,
							kids: false,
							animation: false,
							violence: false,
							crime: false,
							historical: false,
							science_fiction: false,
							marathon: false,
							happy: false,
							hard_to_watch: false,
							light_film: false,
							motivating: false,
							war: false,
							disney: false,
							suspence: false,
							sunday_movie: false,
							terror: false,
							christmas: false,
							halloween: false,
							white_noise: false,
							plot_twits: false,
						}));
						setStore({ popularMovies: moviesWithProperties });
					} else {
						console.error('API response is missing the "results" field:', data);
					}
				} catch (error) {
					console.error('Error fetching popular movies:', error);
				}
			},

			getMoviesFromApi: async () => {
				fetch(process.env.BACKEND_URL + "/api/movies")
				.then(res => res.json())
				.then((data) => {
					console.log(data)
					setStore({ movies: data });
				})
				.catch(err => console.error(err))
			},
			deleteMovieFromAPI: async (movieId) => {
				try {

					if (!movieId) {
						console.error('Error: movieId no es válido.');
						return;
					}
			
					const response = await fetch(process.env.BACKEND_URL + `/api/movies/${movieId}`, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
						},
					});
			
					if (response.ok) {
						alert("La película se eliminó correctamente de la API");
					} else {
						alert("ERROR: La película no se pudo eliminar de la API");
						throw new Error('Error al eliminar la película de la API');
					}
				} catch (error) {
					console.error('Error al intentar eliminar la película:', error.message);
					console.error('Detalles del error:', error);
				}
			},
			getMessage: async () => {
				try{

					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},


			postComment: async (comment, userID, movieID) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/movies/comment", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ "comment_body": comment, "user_id": userID, "movie_id": movieID }),
					});
			
					if (response.ok) {
						alert("Your comment has been added");
					} else {
						console.error("Error posting comment:", response.status, response.statusText);
						// Puedes mostrar un mensaje de error más específico si lo deseas
						alert("Error posting comment. Please try again later.");
					}
				} catch (error) {
					console.error("Unexpected error posting comment:", error);
					// Puedes mostrar un mensaje de error más específico si lo deseas
					alert("Unexpected error posting comment. Please try again later.");
				}
			},

			getComments: async() => {
				try{
					var requestOptions = {
						method: 'GET',
						headers: { 'Content-Type': 'application/json', }
					};	
						fetch(process.env.BACKEND_URL + "/api/movies/allComments",requestOptions) 
						.then( (response)=> response.json())
						.then( (data)=> {setStore({allComments: data}, console.log(data))})
					}	catch(error){
						console.log("hasnt been added")
					}
			},
			delComment: (id) => {
				fetch(process.env.BACKEND_URL + `/api/movies/comment/${id}`,{method: 'DELETE'})
				alert("Comment deleted")			
			},
			editComment: (id,comment_body) => {
				const editOptions = {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json', },
				body: JSON.stringify({"comment_body": comment_body})
			};
				fetch(process.env.BACKEND_URL + `/api/movies/comment/${id}`,editOptions)
				.then(response => response.json())
				.then(data => {
					console.log(`Comentario editado exitosamente: ${data}`);
					alert("El comentario se editó correctamente");
				})
				.catch(error => {
					console.error('Error al editar el comentario', error);
					alert("Error al editar la comentario");
				});
			},

//  ---------------------------------------------------------------------------------------------- LOGIN SECTION BELOW

			loginData (e,email,password){
				e.preventDefault()

				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				};
				const response = fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
				.then(response => {
					console.log(response.status)
					if(response.status === 200){
						setStore({auth : true})
					}
					return  response.json()
				})
				.then(data => { 
					localStorage.setItem("token", data.access_token);
					}
				)
			},

			logOut(){
				setStore({ auth: false })
				localStorage.removeItem("token");
			},

//  ---------------------------------------------------------------------------------------------- EDIT MOVIE BELOW

			editMovie: (editmovie, id) => {

				const editOptions = {
					method: "PUT",
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"title": editmovie.title,
						"release_date": editmovie.release_date,
						"poster_path": editmovie.poster_path,
						"adult": editmovie.adult,
						"backdrop_path": editmovie.backdrop_path,
						"genre_ids": editmovie.genre_ids,
						"original_language": editmovie.original_language,
						"original_title": editmovie.original_title,
						"video": editmovie.video,
						"vote_average": editmovie.vote_average,
						"vote_count": editmovie.vote_count,
						"overview": editmovie.overview,
						"christmas": editmovie.christmas,
						"comedy": editmovie.comedy,
						"animation": editmovie.animation,
						"couple": editmovie.couple,
						"crime": editmovie.crime,
						"disney": editmovie.disney,
						"drama": editmovie.drama,
						"action": editmovie.action,
						"family": editmovie.family,
						"halloween": editmovie.halloween,
						"happy": editmovie.happy,
						"hard_to_watch": editmovie.hard_to_watch,
						"historical": editmovie.historical,
						"kids": editmovie.kids,
						"light_film": editmovie.light_film,
						"marathon": editmovie.marathon,
						"motivating": editmovie.motivating,
						"party": editmovie.party,
						"plot_twits": editmovie.plot_twits,
						"popularity": editmovie.popularity,
						"science_fiction": editmovie.science_fiction,
						"solitary": editmovie.solitary,
						"sunday_movie": editmovie.sunday_movie,
						"suspence": editmovie.suspence,
						"terror": editmovie.terror,
						"war": editmovie.war,
						"violence": editmovie.violence,
						"white_noise": editmovie.white_noise,
						})
				};
				fetch(process.env.BACKEND_URL + `/api/movies/${id}`, editOptions)
				.then(response => response.json())
				.then(data => {
					console.log(`Película editada exitosamente: ${data}`);
					alert("La película se editó correctamente");
				})
				.catch(error => {
					console.error('Error al editar la película:', error);
					alert("Error al editar la película");
				});
		},  
		}
	};
};

export default getState;
