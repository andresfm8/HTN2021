import SignIn from '../../components/landing/Landing';
import Memphis1 from '../../svg/Memphis1.svg'
import Memphis2 from '../../svg/Memphis2.svg'
import SpotifyPhone from '../../svg/spotify-phone.png'
const SignInPage = () => {
  return (
    <div className="h-screen max-w-screen-2xl bg-gradient-to-r from-blue-light to-blue-dark">
      <div className="flex justify-between">
        <div className="p-6 text-white">Logo + Text</div>
        <button className="p-6 text-white">Login</button>
      </div>
      <div>
        <div className="max-w-screen-2xl flex justify-center pt-6">
          <div className="w-7/12 flex justify-center items-center" >
            <img src={Memphis1} alt="memphis1" className="mr-10 pb-32"/>
            <div className="w-7/12">
              <div className="flex justify-center text-center font-inconsolata text-white text-5xl">
              Welcome to <br/> (Placeholder)!
              </div>
              <div className="h-6"/>
              <div className="flex justify-center text-justify font-work-sans text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Diam ultrices felis massa suscipit. Nisi, integer orci blandit aliquet 
              lorem hac tortor, augue!
              </div>
            </div>
          </div>
          <img src={Memphis2} alt="memphis2" className="pr-10"/>
        </div>
        
        <div className="max-w-screen-2xl flex justify-center pt-6 text-white">
                <SignIn />
                
          </div>
          {/* <div className="max-w-screen-2xl flex justify-center pt-6 text-white">
          
          </div> */}
         
      <div className="flex justify-between ">
        <div className="p-4 text-white mt-80">Logo</div>
        <img src={SpotifyPhone} alt="spotify-phone" className="max-w-md max-h-sm sm:max-w-xs sm:max-h-xs  .w-1/3 .h-0.5/3 mr-15 ml-24 pl-15"/>
        <div>
          <button className="p-4 text-white mt-80">
            About
          </button>
          <button className="p-4 text-white mt-80">
            Help
          </button>
        
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default SignInPage;