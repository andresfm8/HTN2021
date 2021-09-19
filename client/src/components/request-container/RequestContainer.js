import songList from './songData';

import RequestList from "../request-list/RequestList"

const RequestContainer = () => {
  return (
    <div className="w-7/12">
      <div className="font-extrabold text-xl px-8">
        Song requests
      </div>
      <div>
        <RequestList songList={songList}/>
      </div>
    </div>
  )
}

export default RequestContainer;