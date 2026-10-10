import { useState } from 'react'
import './App.css'
import SongList from './SongList.jsx'

const Songs = [
    {
        id: 1,
        title: "Royals",
        description: "Music video by Lorde performing Royals. (C) 2013 Universal Music NZ Ltd.",
        link:"https://youtu.be/nlcIKh6sBtc?si=GWSiGPZXMWMJY7Ze"
    },
    {
        id: 2,
        title: "Just Give Me A Reason",
        description: "Official Video for 'Just Give Me A Reason' by P!NK feat. Nate Ruess.",
        link: "https://youtu.be/OpQFFLBMEPI?si=8gZv948t4oScxIb1"
    },
    {
        id: 3,
        title: "Dance Monkey",
        description: "Tones And I - Dance Monkey - Directed by: Liam Kelly & Nick.",
        link:"https://youtu.be/q0hyYWKXF0Q?si=9uL2y5UfH6KOLkhS"
    },
    {
        id: 4,
        title: "APT",
        description: "By ROSÉ & Bruno Mars 'rosie' - the first studio album by ROSÉ.",
        link:"https://youtu.be/ekr2nIex040?si=-QSaHf3241XOTX-_"
    },
    {
        id: 5,
        title: "This Is How We Do",
        description: "Official video for Katy Perry's 'This Is How We Do' directed by Joel Kefali.",
        link:"https://youtu.be/7RMQksXpQSk?si=Cb5N55RCWkmMGcic"
    },
    {
        id: 6,
        title: "Nicole Kidman",
        description: "Music video by ADÉLA performing Nicole Kidman.© 2026 UMG Recordings, Inc.",
        link:"https://youtu.be/3sB4Iv_tM7U?si=kVOiqTMBcv1BWMy0"
    }
];


function App() {
  const [showSongs, setShowSongs] = useState(true);

  return (
    <>
    <main className="container">
  
        <button className="button-85" onClick={function() {setShowSongs(previous => !previous);}}>{showSongs ? "Hide My Playlist" :"Show My Playlist"}
        </button>
  <section>
{showSongs && <SongList songs={Songs}/>}
  </section>

    </main>
    
    </>
  )
}

export default App
