"use client"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";
import { useState, useEffect, useRef } from "react";
import { ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ChartDataLabels);
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export const Token = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [chartSize, setChartSize] = useState<number>(500); // Default chart size
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const updateChartSize = () => {
    if (chartContainerRef.current) {
      const newSize = Math.min(
        chartContainerRef.current.clientWidth * 0.7,
        500
      );
      setChartSize(newSize);
    }
  };

  useEffect(() => {
    updateChartSize();
    window.addEventListener("resize", updateChartSize);
    window.addEventListener("orientationchange", updateChartSize);

    return () => {
      window.removeEventListener("resize", updateChartSize);
      window.removeEventListener("orientationchange", updateChartSize);
    };
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
          "#FF8C00", "#2E8B57", "#4169E1", "#DAA520", "#8A2BE2", "#FF6347", "#32CD32", "#FFD700",
        ],
        hoverOffset: 6,
        borderWidth: 6,
        borderColor: (context: any) => {
          const index = context.dataIndex;
          return highlightedIndex === index ? "white" : "transparent";
        },
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: true,
    animation: { duration: 1200, easing: "easeOutBounce" },
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false, position: "bottom", labels: { color: "#FFF", padding: 20 } },
      datalabels: { display: false },
    },
    onClick: (event: any, chartElement: any) => {
      if (chartElement.length > 0) setHighlightedIndex(chartElement[0].index);
    },
  };

  return (
    <section id="token">
      <div className="bg-black py-16 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-bold text-5xl sm:text-6xl text-white tracking-tighter">
            Token Allocation
          </h2>
          <p className="text-center text-xl text-white/70 mt-5 max-w-2xl mx-auto">
            The liquidity amount will be locked in the DEX liquidity pool for a period of 12 months.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            <div ref={chartContainerRef} className="flex justify-center items-center col-span-1 lg:col-span-2">
              <div style={{ width: chartSize, height: chartSize }} className="relative">
                <Pie data={data} options={options} className="transition-transform transform hover:scale-105 ease-out duration-300" />
              </div>
            </div>

            <div className="col-span-1 space-y-6">
              {data.labels.map((label, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg shadow-lg transition-all ease-in-out duration-300 cursor-pointer ${
                    highlightedIndex === index
                      ? "scale-105 bg-gray-800"
                      : "bg-gray-900"
                  }`}
                  onClick={() => setHighlightedIndex(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">{label.split(" ")[0]}</h3>
                    <span
                      className="text-lg font-semibold"
                      style={{
                        color: data.datasets[0].backgroundColor[index],
                      }}
                    >
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
    </section>
  );
};
