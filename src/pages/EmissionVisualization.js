import { useState } from "react";
import CountriesSelect from "../components/CountriesSelect";
import ChartByCountry from "../components/Visualizations/ChartByCountry";

function EmissionPage() {
  const [country, setCountry] = useState("Nepal");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 mt-5">
      <h1 className="text-3xl font-bold text-gray-900">
        CO<sub>2</sub> Emission Visualization of different countries from year
        1960 to 2022
      </h1>

      <div className="mt-4 flex flex-col items-start">
        {/* <span className="inline-block bg-black px-3 py-1 text-sm font-semibold text-white mr-2">
          USA
        </span> */}

        <CountriesSelect country={country} setCountry={setCountry} />

        <ChartByCountry country={country} />
      </div>
    </div>
  );
}

export default EmissionPage;
