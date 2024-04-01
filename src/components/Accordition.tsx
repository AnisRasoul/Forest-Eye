function Accordition({ header, body, id }: { header: string; body: string; id: string }) {
    return (
      <>
        <h2 id={`accordion-collapse-heading-${id}`}>
          <button
            type="button"
            className="flex items-center justify-center p-3 font-medium rtl:text-right bg-primary border-secondary text-secondary border border-1 rounded-full gap-3 w-[350px] md:w-[561px]"
            data-accordion-target={`#accordion-collapse-body-${id}`}
            aria-expanded="false"
            aria-controls={`accordion-collapse-body-${id}`}
          >
            <span>{header}</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id={`accordion-collapse-body-${id}`}
          className="hidden"
          aria-labelledby={`accordion-collapse-heading-${id}`}
        >
          <div className="p-5 bg-secondary border-secondary text-secondary border border-1 rounded-full gap-3 w-[350px] md:w-[561px]">
            <p className="mb-2 text-primary text-center font-semibold">{body}</p>
          </div>
        </div>
      </>
    );
  }
  
  export default Accordition;
  