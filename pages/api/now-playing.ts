import { resolveSoa } from "dns";
import { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../lib/spotify";

export default async function handler(req:NextApiRequest,res: NextApiResponse){
    const response = await getNowPlaying();
    
    if(response.status === 204 || response.status > 400){
        return res.status(200).json({isPlaying: false});
    }

    const song = await response.json();

    if(song.item === null){
        return res.status(200).json({isPlaying: false})
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map(_artist => _artist.name).join(', ');
    const album = song.item.album_name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-white-revalidate-30'
    )

    return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title
    })
}   