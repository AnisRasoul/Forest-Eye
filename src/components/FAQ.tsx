import Accordition from "./Accordition"
function FAQ() {
  return (
    <div className="FAQ bg-primary" id="FAQ">
        <div className="flex items-center justify-center mb-8 md:mb-10">
        <div className="mx-auto text-white text-center">
          <h1 className="text-3xl font-semibold text-[#3887BE] mb-5 md:mb-2">Frequently Asked Questions</h1>
          <p className="px-24 md:px-52">
          Explore our FAQ section for quick answers to common queries about our products services.Need more assistance? Contact our dedicated support team for personalized help.
          </p>
        </div>
      </div>
      <div id="accordion-collapse" data-accordion="collapse" className="flex flex-col items-center justify-center pb-16 space-y-5">
  <Accordition id="1" header="How does Forest's Eye utilize AI models to detect fires in streaming video?" body="first body"/>
  <Accordition id="2" header="What types of environments can we effectively monitor for fire detection?" body="second body"/>
  <Accordition id="3" header="Can Forest's Eye detect various types of fires?" body="third body"/>
  <Accordition id="4" header="How fast does Forest's Eye alert authorities upon fire detection?" body="fourth body"/>
</div>


        </div>
  
  )
}

export default FAQ