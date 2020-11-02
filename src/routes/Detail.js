import React from "react";

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
                <div>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                    <div>
                        <h2>{location.state.title} ( {location.state.year} )</h2>
                        <ul>
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
            );
        } else {
            return null;
        }
    }
}

export default Detail;