import React from "react"
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return <h4>{title}</h4>
}

Movie.ProTypes = {
    id: PropTypes.number.isRequired,
    yesr: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;