"use client"
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useState, useEffect, useRef } from "react";
import { ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ChartDataLabels);



// Registering the chart components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export const ProductShowcase = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [chartSize, setChartSize] = useState<number>(400); // Default size
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateChartSize = () => {
      if (chartContainerRef.current) {
        setChartSize(Math.min(chartContainerRef.current.clientWidth * 0.7, 500));
      }
    };
    updateChartSize();
    window.addEventListener("resize", updateChartSize);
    return () => window.removeEventListener("resize", updateChartSize);
  }, []);

  const data = {
    labels: [
      "Seed (0% TGE, 12 Months Lockup & 24 Months Linear Vesting)",
      "Private (5% TGE, 12 Month Lockup & 24 Months Linear Vesting)",
      "Public Sale (10% TGE, 3 Months Lockup & 12 Months Linear Vesting)",
      "Team (0% TGE, 12 Months Lockup & 24 Months Linear Vesting)",
      "Advisors (0% TGE, 12 Months Lockup & 24 Months Linear Vesting)",
      "Community and Marketing (5% TGE, 0 Months Lockup & 60 Months Linear Vesting)",
      "Treasury/Seed Network (100% TGE, 0 Months Lockup & 12 Months Linear Vesting)",
      "Liquidity (10% TGE, 0 Months Lockup & 18 Months Linear Vesting)",
    ],
    datasets: [
      {
        data: [17.65, 17.65, 8.82, 11.76, 2.94, 23.53, 8.82, 8.82],
        backgroundColor: [
          "#FF8C00",
          "#2E8B57",
          "#4169E1",
          "#DAA520",
          "#8A2BE2",
          "#FF6347",
          "#32CD32",
          "#FFD700",
        ],
        hoverOffset: 6,
        borderWidth: 2,
        // Type 'any' for context to avoid TypeScript error
        borderColor: (context: any) => {
          const index = context.dataIndex;
          return highlightedIndex === index ? "#FFFFFF" : "transparent"; // Highlight effect
        },
      },
    ],
  };


  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1200,
      easing: "easeOutBounce" as "easeOutBounce", // Explicitly assert type
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "white",
          padding: 20,
        },
      },
      datalabels: {
        display: true,
        color: "white",
        font: {
          weight: "bold",
          size: 14,
        },
        align: "center",
        anchor: "center",
      },
    },
    onClick: (event: any, chartElement: any) => {
      if (chartElement.length > 0) {
        setHighlightedIndex(chartElement[0].index);
      }
    },
  };
  

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#315BA7] py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Token Allocation
        </h2>
        <p className="text-center text-xl text-white/70 mt-5 max-w-2xl mx-auto">
          The liquidity amount will be locked in the DEX liquidity pool for a period of 12 months.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center t-1 gap-12">
          <div ref={chartContainerRef} className="flex-1 flex justify-center items-center">
            <div style={{ width: chartSize, height: chartSize }} className="relative ">
              <Pie data={data} options={options} className="transition-transform transform hover:scale-105 ease-out duration-300" />
            </div>
          </div>

          <div className="flex-1 space-y-5">
            {data.labels.map((label, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-lg transition-all ease-in-out duration-300 cursor-pointer ${highlightedIndex === index ? "scale-105 bg-gray-700" : "bg-gray-800"}`}
                onClick={() => setHighlightedIndex(index)}
              >
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">{label.split(" ")[0]}</h3>
                  <span className="text-lg font-semibold" style={{ color: data.datasets[0].backgroundColor[index] }}>
                    {data.datasets[0].data[index]}%
                  </span>
                </div>
                <p className="text-sm text-white/70 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
