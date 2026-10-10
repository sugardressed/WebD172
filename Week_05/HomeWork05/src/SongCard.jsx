import './App.css'

function SongCard({ title, description, link }) {

  return (
    <article className="course-card">
      <h2>{title}</h2>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Play
        </a>
      )}
    </article>
  )
}

export default SongCard
