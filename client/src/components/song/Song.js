import Doggo from '../../assets/happydoggo.jpg';

const Song = ({isRequest}) => (
  <div className="flex justify-between border">
    {/* Left: IMG, Name, Artist */}
    <div className="flex">
      <div className="inline-block self-center p-4">1</div>
      <div className="inline-block self-center">
        <img className="h-10 w-10" src={Doggo}/>
      </div>
      <div className="inline-block self-center px-4 leading-5">
        <div className="font-bold">Oxytocin</div>
        <div>Billie Eilish</div>
      </div>
    </div>
    {/* Middle: Album */}
    <div className="inline-block self-center">
      AlbumName
    </div>
    {/* Right: IF request > accept/reject, ELSE song time */}
    <div className="inline-block w-16 self-center">
    {
      isRequest
      ? <div>ye/no</div>
      : <div>1:45</div>
    }
    </div>
  </div>
)

export default Song;