import React, { useState } from "react";
import axios from "axios";

import Nav from "./youtube-nav.components";
import Player from "./youtube-player.components";
import Sidebar from "./youtube-sidebar.components";

function Youtube() {
    const [videos, setVideos] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [playingVideoId, setPlayingVideoId] = useState("");

    const searchedValue = async (value) => {
        setSearchQuery(value);
    };

    const handleSearch = async (e) => {
        try {
            e.preventDefault();

            const baseUrl = "https://www.googleapis.com/youtube/v3/search";
            const key = "AIzaSyAIOF1EfeRoFfYBB-FH2j83fJ89ltJPC10";
            const type = "video";
            const part = "snippet";

            const res = await axios.get(
                `${baseUrl}?key=${key}&type=${type}&part=${part}&q=${searchQuery}`
            );
            setVideos(res.data.items);
        } catch (err) {
            console.log(err);
        }
    };

    const selectPlayingVideo = (id) => {
        setPlayingVideoId(id);
    };

    const video = videos.find((video) => video.id.videoId === playingVideoId);

    return (
        <div className="container">
            <Nav searchedValue={searchedValue} handleSearch={handleSearch} />
            <div className="container mt-5">
                <div className="row">
                    <Player
                        playingVideoId={playingVideoId}
                        title={video?.snippet?.title || ""}
                        description={video?.snippet?.description || ""}
                    />
                    <Sidebar
                        videos={videos}
                        selectPlayingVideo={selectPlayingVideo}
                    />
                </div>
            </div>
        </div>
    );
}

export default Youtube;
