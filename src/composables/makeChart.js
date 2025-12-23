import Chart from "chart.js/auto";

export default function makeChart(el, labels, data, type = "bar", label) {

  const colors = data.map((_, index) => {
    const lightness = 30 + index * 2; 
    return `hsl(225, 80%, ${lightness}%)`;
  });

  return new Chart(el, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: colors,
          borderColor: 'hsl(225 80% 100%)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            font: {
              size: 24
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
