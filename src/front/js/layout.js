import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Movies } from "./pages/movies";
import { MoviesApi } from "./pages/moviesApi";
import { MovieForm } from "./pages/movieForm";
import { MovieEditForm } from "./pages/editmovie";
import { Single } from "./pages/single"; 

import Comment from "./component/comment"; 
import Comment_list from "./component/comment_list"; 

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

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
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Movies />} path="/movies" />
                        <Route element={<MoviesApi />} path="/moviesApi" />
                        <Route element={<MovieForm />} path="/movieForm" />
                        <Route element={<MovieEditForm />} path="/editmovie/:theid" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Comment />} path="/movies/comment" />
                        <Route element={<Comment_list />} path="/movies/comment_list" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
