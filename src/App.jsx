import React from "react";
import MovieBox from "./components/movieBox";

// 가상 데이터
const movies = [
    {
        title: "声の形",
        score: 10,
        poster: 
        "https://i.pinimg.com/474x/de/66/2d/de662dcb9075264769eb3297c48c5a3c.jpg"
    },
    {
        title: "帰滅の刃",
        score: 10,
        poster: 
        "https://maxmovie.cdnsave.com/images/1620014022753AOJ0T.jpg"
    },
    {
        title: "あなたの膵臓を食べたい",
        score: 10,
        poster: 
        "https://ww.namu.la/s/3e4281f70e444746c42f9edced80316e1b1d8c1ef9612621d1130bc39fd0007603b4a25f8cebff563e43e4fff67d1df14e108d07f4a854a330ce2fd1c0ac94f770084b0c5e940ffe48d2d78ac72c8a3e32a33724868f725321740b5c78f5584b"
    },
    {
        title: "ハウルの動く城",
        score: 10,
        poster: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Y2_eAMZCAN45mhxVkYp6LZv7bvTkWeu1QA&usqp=CAU"
    },
];

class App extends React.Component {
    //Virtual Movie Datums

    render() {
        return (
            <main className="main">
                <section className="content">
                    {movies.map((movie) => {
                        return <MovieBox movie={movie} />
                    })}
                </section>
            </main>        
        );
    };
};

export default App;