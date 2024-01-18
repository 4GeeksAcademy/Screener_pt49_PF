import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { User } from "./pages/users";
import { MovieDetails } from "./pages/moviedetails"; 
import { EditUser } from "./pages/editForm";
import { Movies } from "./pages/movies";
import { MoviesApi } from "./pages/moviesApi";
import { MovieForm } from "./pages/movieForm";
import { MovieEditForm } from "./pages/editmovie";
import { MoviesUser } from "./pages/moviesUser";
import Comment from "./component/comment"; 
import Comment_list from "./component/comment_list"; 
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";     MoviesUser

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<User />} path="/users" />
                        <Route element={< EditUser />} path="/editForm/:theid" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Movies />} path="/movies" />
                        <Route element={<MoviesApi />} path="/moviesApi" />
                        <Route element={<MovieForm />} path="/movieForm" />
                        <Route element={<MovieEditForm />} path="/editmovie/:theid" />
                        <Route element={<MovieDetails />} path="/moviedetails/:theid" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Comment />} path="/movies/comment" />
                        <Route element={<Comment_list />} path="/movies/comment_list" />
                        <Route element={<MoviesUser />} path="/moviesUser" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
