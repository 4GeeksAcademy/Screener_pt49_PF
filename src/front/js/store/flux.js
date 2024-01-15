const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			comment: null,
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

			popularMovies: [],
			movies: [],
			moviePreApi: {},
		},
		actions: {

			saveMovieToAPI: async (movieData) => {
				try {
				  const response = await fetch('https://sturdy-halibut-jx96pjv7pvp2pr7-3001.app.github.dev/api/movies', {
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
				  // Puedes manejar el error según tus necesidades
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
					const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1', options);
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
				fetch("https://sturdy-halibut-jx96pjv7pvp2pr7-3001.app.github.dev/api/movies")
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
			
					const response = await fetch(`https://sturdy-halibut-jx96pjv7pvp2pr7-3001.app.github.dev/api/movies/${movieId}`, {
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

			postComment: (comment,commentID,movieID) => {
				try {
				  const response = fetch('https://curly-umbrella-jx66v5vqx49fp4xv-3001.app.github.dev/api/movies/comment', {
					method: 'POST',
					headers: {
					  'Content-Type': 'application/json',
					},
					body: JSON.stringify({"actual_comment": comment,"comment_id": commentID, "movie_id": movieID}),
				  });
				  if (response.ok){
					alert("El comentario se agrego correctamente a la Api")

				  } if (!response.ok) {
					alert("ERROR: El comentario no se pudo agregar a la api")
					throw new Error('Error al guardar el comentario en la API');
				  }
				  const data = response.json();
				} catch (error) {
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
