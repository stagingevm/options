import OptionsTable from "./OptionsTable";

function ChartWindow() {
  return (
    <div className="p-4 border border-gray-800 bg-black rounded-md shadow-lg max-w-screen-lg mx-auto mt-8">
      <h2 className="text-2xl text-white font-bold mb-4">Options Table</h2>
      <OptionsTable />
    </div>
  );
}

export default ChartWindow;
