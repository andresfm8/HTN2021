const Song = ({isRequest, song}) => (
  <div className="flex justify-between h-20">
    {/* Left: IMG, Name, Artist */}
    <div className="flex">
      <div className="inline-block self-center p-4 text-white">{song.order}</div>
      <div className="inline-block self-center">
        <img className="h-10 w-10" src={song.photo}/>
      </div>
      <div className="inline-block self-center px-4 leading-5">
        <div className="font-bold text-white">{song.title}</div>
        <div className="text-gray-artist">{song.artist}</div>
      </div>
    </div>
    {/* Middle: Album */}
    <div className="inline-block self-center text-gray-album">
      {song.album}
    </div>
    {/* Right: IF request > accept/reject, ELSE song time */}
    <div className="inline-block w-16 self-center">
    {
      isRequest
      ? <div>ye/no</div>
      : <div>{song.duration}</div>
    }
    </div>
  </div>
)

export default Song;