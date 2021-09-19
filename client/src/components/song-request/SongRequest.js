import Song from "../song/Song"

const SongRequestItem = ({song}) => {
  return (
    <div className="bg-blue-request rounded-xl m-2">
      <Song isRequest={true} song={song}/>
    </div>
  )
}

export default SongRequestItem