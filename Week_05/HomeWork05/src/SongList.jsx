import './App.css'
import SongCard from './SongCard.jsx'

// Map array objects and pass props to SongCard Components

function SongList({songs}) {

  return (
    <section className="course-list">

        {songs.map(function(song){

            return(
                <SongCard
                    key={song.id}
                    title={song.title}
                    description={song.description}
                    link={song.link}
                /> 
                );
        })}

    </section>

  );
}

export default SongList
