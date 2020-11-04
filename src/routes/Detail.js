import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history} = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return (
                <section className="detail__container">
                    <div className="detail__movie">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                        <div>
                            <h2>{location.state.title} ( {location.state.year} )</h2>
                            <ul className="detail__genres">
                                {typeof location.state.genres !== 'undefined' ? (
                                    location.state.genres.map((genre, index) => (
                                        <li key={index} >{genre}</li>
                                    ))) : (
                                        <li></li>
                                    )
                                }
                            </ul> 
                            <p>{location.state.summary}</p>                       
                        </div>
                    </div>
                </section>
            );
        } else {
            return null;
        }
    }
}

export default Detail;