

const SessionsCreate = () => {

    return( 
    <div className="h-screen max-w-screen-2xl bg-gradient-to-r from-blue-light to-blue-dark">
        <div className="pt-14 pl-14">
                <a className="text-white" href="/signin">
                    Back
                </a>
        </div>
        <div className="max-w-screen-2xl flex justify-between pt-16">
            <div className="text-white pl-14 text-xl" >
                NEW SESSION
            </div>
            <div className="text-white">
                <div>
                    Unititled Session 1
                </div>
                <div>
                    Moderated Session
                </div>
            </div>
            <div className="text-white w-14">
                    <button>Start Session</button>
            </div>
        </div>

        <div className="max-w-screen-2xl flex justify-between">
            <div>
                Invite Your Friends 
            </div>
            <div> 
                Barcode
            </div>
            <div>
                <div>
                    <div>
                        Refresh
                    </div>
                    <div>
                        Download
                    </div>
                    <div>
                        Share
                    </div>
                </div>
                <div className="">
                Once it starts
                </div>
                <div>
                    Session Join Code
                </div>
                <div>
                    <div>
                        Text Field
                    </div>
                    <div>
                        <button>Copy</button>
                    </div>
                </div>
                <div>
                    Copy Link
                </div>
            </div>
       </div>
    </div>);

}

export default SessionsCreate;