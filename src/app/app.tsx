import Card from "components/card";
import Navbar from "components/navbar";


const features = [
  {
    name: "Vite",
    description:
      "Faster and leaner development experience for modern web projects.",

    docs: "https://vitejs.dev/",
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces.",

    docs: "https://reactjs.org/",
  },
];

function App() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-purple-400">
          Data
        </h1>
      </header>

      {/* Features Section */}
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
        {features.map((props, index) => (
          <div key={index} className="col-span-10 sm:col-span-5">
            <Card
              title={props.name}
              description={props.description}

              href={props.docs}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
