function Cards({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-5 md:p-6 max-w-sm md:w-auto mx-4 mb-4 rounded-2xl border border-primaryb bg-white bg-opacity-10 text-white h-48 w-96 hover:text-secondary">
      <div className="flex items-center ">
        <img src="../assets/icons/ai1.svg" alt="" />
        <h1 className="text-lg font-semibold mx-3">{title}</h1>
      </div>
      <p className="text-sm text-left mt-2 flex justify-center items-center">
        {description}
      </p>
    </div>
  );
}

export default Cards;
