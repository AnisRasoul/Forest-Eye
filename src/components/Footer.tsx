
export default function Footer() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto  max-w-4xl px-2 md:px-6">
        <div className="text-center text-[#3887BE]">
          <h2 className="text-4xl font-extrabold ">We are waiting for you to contact us</h2>
          <p className="mt-2 text-lg ">You can write to us at any time and get an instant response.</p>
        </div>
        <div className="mt-6 flex justify-center mb-6 md:mb-4 ">
          <div className="w-44 md:w-72">
            <input placeholder="Enter your Email" type="email" className="pr-11 md:pr-36 rounded-full bg-primary text-white"  />
          </div>
          <button className="bg-[#38419D] text-white py-2 px-5 rounded-full">Join</button>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center text-[#3887BE]">
            <div>
                <a href="#">© Copyrighting</a>
            </div>
            <div className="flex flex-col md:flex-row items-center my-3">
    <a href="#" className="mx-1 md:mx-3 mb-1 md:mb-0">Partners</a>
    <a href="#" className="mx-1 md:mx-3 mb-1 md:mb-0">How we work</a>
    <a href="#" className="mx-1 md:mx-3 mb-1 md:mb-0">Review</a>
    <a href="#" className="mx-1 md:mx-3 mb-1 md:mb-0">Charity</a>
</div>

        <div className="flex items-center md:my-5 ">
                <a href="" className="mx-3"><img src="https://cdn.hugeicons.com/icons/instagram-stroke-rounded.svg" alt="instagram" width="24" height="24" /></a>
                <a href="" className="mx-3"><img src="https://cdn.hugeicons.com/icons/linkedin-01-stroke-rounded.svg" alt="linkedin-01" width="24" height="24" /></a>
                <a href="" className="mx-3"><img src="https://cdn.hugeicons.com/icons/facebook-01-stroke-rounded.svg" alt="facebook-01" width="24" height="24" /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

