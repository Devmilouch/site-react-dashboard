import { Line } from "react-chartjs-2";



export default function BarChart(props) {
  return (
    <div className="chart-container">
      <Line
        redraw={true}
        data={{
          labels: [
            1,
            2,
            3,
            4,
            5,
            6,
          ],
          datasets: [
            {
              label: props.name,
              data: props.data,
              backgroundColor: ["rgba(255, 99, 132, 0.8)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 20,
                },
              },
            ],
          },
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        }}
      />
    </div>
  );
}
