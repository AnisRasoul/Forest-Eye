import Cards from "./Cards";

function Features() {
  return (
    <section className="py-12 bg-primary pt-0" id="features">
      <div className="container mx-auto">
        <h2 className="text-center text-primaryb text-3xl font-semibold mb-10">
          Features
        </h2>
        <div className="flex flex-wrap justify-center items-center">
  <div className="card hover:scale-105 transition-transform duration-300">
    <Cards
      title="Detection Mechanism"
      description="Detail how your system detects forest fires - whether it's through satellite imagery, sensor networks, or other innovative methods."
    />
  </div>

  <div className="card hover:scale-105 transition-transform duration-300">
    <Cards
      title="Notification System"
      description="Allow users to subscribe to notifications for fire alerts in specific regions, ensuring timely information dissemination."
    />
  </div>

  <div className="card hover:scale-105 transition-transform duration-300">
    <Cards
      title="Real-time Monitoring"
      description="Highlight the real-time monitoring capabilities of your solution to emphasize its effectiveness."
    />
  </div>
</div>

      </div>
    </section>
  );
}

export default Features;
