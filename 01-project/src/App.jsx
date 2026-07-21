
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="max-w-fit text-red-500 text-5xl border-2 p-4 rounded-lg mt-10">
          Tailwind Working
        </h1>
      </div>

      <div className="flex justify-center gap-4">
        <Card
          cardTitle="Reat.js"
          buttonText="React.js course"
          imageUrl="https://i.pinimg.com/736x/e6/95/88/e69588cea343ad7033d13f1bf282ed9d.jpg"
        />
        <Card
          cardTitle="Next.js"
          buttonText="Next.js course"
          imageUrl="https://i.pinimg.com/1200x/bd/b4/ed/bdb4edcca1bee1ed1bd38678c20c447c.jpg"
        />
        <Card
          cardTitle="code 💻"
          buttonText=""
          imageUrl="https://i.pinimg.com/736x/18/80/66/188066d580cf161d68c7efdd1a96941e.jpg"
        />
      </div>
    </>
  );
}

export default App;
