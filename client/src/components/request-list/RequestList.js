import SongRequestItem from "../song-request/SongRequest";

const RequestList = ({songList}) => {
  return  (
    <div className="flex flex-col p-4 content-center">
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