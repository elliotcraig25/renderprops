import React from 'react';
import PropTypes from 'prop-types';

const RenderProp = ({render}) => (
    render((genre, list) => {
        const filteredList = genre ? list.filter((artist) => artist.genre === genre) : list;
        return (
            <div>
                {filteredList.map((artist) => (
                    <div className="artist-container" key={artist.name}>
                        <img className="artist-img" src={artist.artistImg} alt={artist.name} />
                        <div className="artist-info">
                            <h3>{artist.name}</h3>
                            <p>{artist.genre}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    })
);

RenderProp.propTypes = {
    render: PropTypes.func.isRequired
};

export default RenderProp;