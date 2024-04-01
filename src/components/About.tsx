function About() {
  return (
    <div className="bg-primary " id="about">
      <div className="flex justify-start">
        <img src="../assets/leaf.svg" className="md:h- md:w- h-32 w-28" />
      </div>
      <div className="flex items-center justify-center">
        <div className="mx-auto text-white text-center">
          <h1 className="text-3xl font-semibold text-[#3887BE]">About us</h1>
          <p className="px-24 md:px-52">
            Mission Statement: Clearly articulate your mission in preventing and
            minimizing the impact of forest fires. Technology Overview: Briefly
            explain the technology you employ for early detection and the
            benefits it offers. Team: Introduce your team members and their
            expertise, building trust in your visitors.
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <img src="../assets/fire.svg" className="w-[180px] md:w-[300px]" />
      </div>
    </div>
  );
}

export default About;
