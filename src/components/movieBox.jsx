import React from "react";

class MovieBox extends React.Component {
    constructor(props) {
        super(props);
    };

render() {
    return (
        <section className="movieBox">
            <section className="movieBox__left">
                <img src={this.props.movie.poster} alt="poster" />
            </section>
            <section className="movieBox__right mr">
                <article className="mr__title">{this.props.movie.title}</article>
                <article className="mr__score">🐰{this.props.movie.score}</article>
                <article className="mr__summary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Nostrum fugit autem fugiat quas sequi officia eligendi minima ipsa, amet ullam, quam nam?
                    Labore adipisci aut quisquam incidunt reiciendis sunt autem. 
                </article>
            </section>
        </section>               
        );
    };    
};

export default MovieBox;