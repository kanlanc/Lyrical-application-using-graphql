import React, { Component } from "react";
import songQuery from "../queries/songQuery";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import LyricCreate from "./LyricCreate";
import LyricList from './LyricList';

class SongDetail extends Component {


  render() {
    const { song } = this.props.data;
    if (!song) return <div>Loading.......</div>;
    return (
      <div>
        <Link to="/">back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate songId={this.props.match.params.id} />
      </div>
    );
  }
}

export default graphql(songQuery, {
  options: props => {
    return {
      variables: {
        id: props.match.params.id
      }
    };
  }
})(SongDetail);
