import React, { Component } from 'react'
import '../../App.css'
import { Row, Col } from 'react-bootstrap'
import './style.css'

class ArtistInfo extends Component {
    render() {
        let artist = { name: '', followers: { total: '' }, images: [{ url: '' }], genres: [] }
        artist = this.props.artist !== null ? this.props.artist : artist
        return (
            <Row>
                <Col md={6}>
                    <img
                        alt="Profile"
                        className="big-artist"
                        src={artist.images[0].url}
                    />
                </Col>
                <Col className="track-details-col" md={6}>
                    <Row className="artist-subinfo">
                        {artist.name}
                    </Row>
                    <Row className="album-title">
                        {artist.followers.total.toLocaleString(undefined, { minimumFractionDigits: 0 })} followers
                    </Row>
                    <Row className="genres">
                        <strong>Genres:</strong>
                        {
                            artist.genres.map((genre, index) => {
                                genre = genre !== artist.genres[artist.genres.length - 1]
                                    ? ` ${genre},`
                                    : ` & ${genre}`
                                return <span key={`genres_${index}`} > {genre}</span>
                            })
                        }
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default ArtistInfo