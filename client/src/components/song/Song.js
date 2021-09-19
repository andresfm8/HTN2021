import Doggo from '../../assets/happydoggo.jpg';

const Song = ({isRequest}) => {
  return (
    <div className="container sm inline-block space-x-4 bg-blue">
      {/* Left: IMG, Name, Artist */}
      <div>1,</div>
      <div>
        <img src={Doggo}/>
      </div>
      <div>
        <div>Name</div>
        <div>Artist</div>
      </div>
      {/* Middle: Album */}
      <div>
        AlbumName
      </div>
      {/* Right: IF request > accept/reject, ELSE song time */}
      {
        isRequest
        ? <div>accept/reject</div>
        : <div>1:45</div>
      }

    </div>
  )
}

export default Song;