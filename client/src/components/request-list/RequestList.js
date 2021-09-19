import SongRequestItem from "../song-request/SongRequest";

const RequestList = ({songList}) => {
  return  (
    <div className="container">
      {
        songList.length
        ? songList.map(song => 
          <SongRequestItem song={song} /> 
        )
        
        : "nope"
      }
    </div>
  )
}

export default RequestList;