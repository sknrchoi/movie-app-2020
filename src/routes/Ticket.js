import React from "react";
import axios from "axios";
import "./Ticket.css";

class Ticket extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }
    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json"
        );
        this.setState({movies, isLoading: false});
    }
    componentDidMount() {
        this.getMovies();
    }

    selectMovie = () => {
        console.log("movie!");
    };
    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className="ticket__container">
            {isLoading ? (
                <div className="loader">
                    <span className="loader__text">Loading...</span>
                </div>
            ) : (
                <article className="step">
                    <div className="step__movie">
                        <div className="head">
                            MOVIE
                        </div>
                        <div className="body">
                            <ul>
                                {movies.map(movie => (
                                <li key={movie.id} title={movie.title} onClick={this.selectMovie}>
                                    {movie.title}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="step__date">
                        <div className="head">
                            DATE
                        </div>
                        <div className="body">

                        </div>

                    </div>
                </article>
            )}
            </section>
        );
    }
}

export default Ticket;