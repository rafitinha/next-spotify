import {useEffect, useState} from 'react';

type NowPlayingSong = {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
}

export default function NowPlaying() {
    const [song,setSong] = useState<NowPlayingSong>();
    
    useEffect(()=>{
        async function getData(){
            const response = await fetch('/api/now-playing');
            const data: NowPlayingSong = await response.json();

            setSong(data);
        }

        getData();
    },[])

    return(
        <div className="flex flex-row-reverse items-center sm:flex-row mb-8 space-x-0 sm:space-x-2 border-2 p-2 rounded-md">
         <div className='inline-flex flex-col sm:flex-row w-full max-w-full truncate'>
             {song?.songUrl ? (
                 <a className='capsize text-gray-800 font-medium max-w-mx truncate' href={song.songUrl} target='_blank' rel="noreferrer noopener">{song.title}</a>
             ): (
                 <p className='capsize text-gray-800 font-medium'>Nenhuma Música Tocando no Momento...</p>
             )}
             {song?.artist && (
                 <>
                 <span className='max-2 text-gray-500 hidden sm:block'>{' - '}</span>
                 <p className='capsize text-gray-500 max-w-max truncate'>{song.artist ?? 'Spotify'}</p>
                 </>
             )}
         </div>
        </div>
    )
}