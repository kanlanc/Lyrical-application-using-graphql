import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import query from "../queries/fetchSongs";
class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({
        variables: {
          id
        }
      })
      .then(() => {
        this.props.data.refetch();
      });
  }
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li className="collection-item" key={song.id}>
          <Link to={`/songdetail/${song.id}`}>{song.title}</Link>
          <i
            className="material-icons"
            onClick={() => {
              this.onSongDelete(song.id);
            }}
          >
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading === true) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/addsong" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
