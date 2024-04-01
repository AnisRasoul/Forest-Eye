function Benifits() {
  return (
    <div className="bg-primary text-white flex justify-between " id="benefits">
      <div className="p-8 w-full flex flex-col md:flex-row items-center pt-0 pr-0 md:mx-12">
        <div className="md:w-1/2 flex flex-col justify-end">
          <h2 className="text-4xl font-bold mb-6 text-primaryb">
            Our Benefits
          </h2>
          <div className="space-y-4">
            <div className="bg-primary border-[1px] border-secondary p-4 rounded-2xl opacity-[0.5] w-5/6 hover:shadow-primaryb shadow-md hover:shadow-sm hover:opacity-[1]">
              <p>
                <span className="text-lg font-semibold text-primaryb mr-2">
                  Early Detection:
                </span>
                Rapid identification of potential fire outbreaks.
              </p>
            </div>
            <div className="bg-primary border-[1px] border-secondary p-4 rounded-2xl ml-12 md:ml-16 opacity-[0.5] w-5/6 hover:shadow-primaryb shadow-md hover:shadow-sm hover:opacity-[1]">
              <p>
                <span className="text-lg font-semibold text-primaryb mr-2">
                  Reduced Response Time:
                </span>
                Minimized response time for firefighting and evacuation efforts.
              </p>
            </div>
            <div className="bg-primary border-[1px] border-secondary p-4 rounded-2xl opacity-[0.5] w-5/6 hover:shadow-primaryb shadow-md hover:shadow-sm hover:opacity-[1]">
              <p>
                <span className="text-lg font-semibold text-primaryb mr-2">
                  Environmental Conservation:
                </span>
                Preservation of ecosystems and biodiversity.
              </p>
            </div>
          </div>
          <button className="md:max-w-52 max-w-64  bg-primaryb rounded-full hover:bg-[#3b82f6] text-white py-2 px-12 md:mt-16 mt-10 ">
            Try it now
          </button>
        </div>
        <div className="hidden md:block w-1/2">
          <img
            alt="Forest illustration"
            className="rounded-lg object-cover w-full h-2/3 "
            src="../assets/forestbg.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Benifits;
