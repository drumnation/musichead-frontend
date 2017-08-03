import React, { Component } from 'react'
import {
    FormGroup,
    FormControl,
    InputGroup,
    Glyphicon,
    Panel,
    Row
} from 'react-bootstrap'
import '../../../App.css'
import { connect } from 'react-redux'
import * as actions from '../../../actions/apiActions'
import ArtistInfo from './../../artist/artistInfo'
import TopTracksList from './../../artist/topTracksList'

class SearchForArtist extends Component {
    constructor(props) {
        super(props)
        this.state = { query: '' }
    }

    renderAlbums() {
        if (this.props.store.api.albums) {
            let albums = this.props.store.api.albums.items
            if (albums.length !== 0) {
                return albums.map((album, index) => {
                    return (
                        <Row key={`albums_${index}`} className="track">
                            <img
                                alt="related-track-cover"
                                className="track-img"
                                src={album.images[0].url}
                            />
                            <Row className="track-text">
                                {`${album.name}`}
                            </Row>
                        </Row>
                    )
                })
            } else {
                return null
            }
        } else {
            return null
        }
    }

    renderRelatedArtists() {
        if (this.props.store.api.relatedArtists.artists) {
            let relatedArtists = this.props.store.api.relatedArtists.artists
            if (relatedArtists.length !== 0) {
                return relatedArtists.map((artist, index) => {
                    return (
                        <Row key={`related_artists_${index}`} className="track">
                            <img
                                alt="related-track-cover"
                                className="track-img"
                                src={artist.images[0].url}
                            />
                            <Row className="track-text">
                                {`${artist.name}`}
                            </Row>
                        </Row>
                    )
                })
            } else {
                return null
            }
        } else {
            return null
        }
    }

    render() {
        return (
            <div>
                <Panel>
                    <FormGroup>
                        <InputGroup >
                            <FormControl
                                type="text"
                                className="big_search"
                                placeholder="Search for an Artist"
                                value={this.state.query}
                                onChange={event => {
                                    this.setState({ query: event.target.value })
                                }}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        this.props.artistSearchPage(this.state.query)
                                    }
                                }}
                            />

                            <InputGroup.Addon onClick={() => this.props.artistSearchPage(this.state.query)}>
                                <Glyphicon glyph="search"></Glyphicon>
                            </InputGroup.Addon>

                        </InputGroup>
                    </FormGroup>
                </Panel>
                {
                    this.props.store.api.loading === false
                        ?
                        <div>
                            <Panel>
                                <ArtistInfo artist={this.props.store.api.artist} />
                            </Panel>
                            <TopTracksList />
                            <Panel header={albums}>
                                {this.renderAlbums()}
                            </Panel>
                            <Panel header={artists}>
                                {this.renderRelatedArtists()}
                            </Panel>
                        </div>
                        :
                        null
                }
            </div>
        )
    }
}

const albums = (
    <p>
        <img src='/assets/music-record-7.png' alt="record" /><br />
        <strong>ALBUMS</strong>
    </p>
)

const artists = (
    <p>
        <img src='/assets/guitar-5.png' alt="guitar" /><br />
        <strong>RELATED ARTISTS</strong>
    </p>
)

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connect(mapStateToProps, actions)(SearchForArtist)