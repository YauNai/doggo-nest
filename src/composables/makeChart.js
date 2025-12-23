import Chart from "chart.js/auto";

let chart = null;

export default function makeChart(el, labels, data, type = "bar", label) {
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(el, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: [
            "hsl(225 80% 20%)",
            "hsl(225 80% 22%)",
            "hsl(225 80% 24%)",
            "hsl(225 80% 26%)",
            "hsl(225 80% 28%)",
            "hsl(225 80% 30%)",
            "hsl(225 80% 32%)",
            "hsl(225 80% 34%)",
            "hsl(225 80% 36%)",
            "hsl(225 80% 38%)",
            "hsl(225 80% 40%)",
            "hsl(225 80% 42%)",
            "hsl(225 80% 44%)",
            "hsl(225 80% 46%)",
            "hsl(225 80% 48%)",
            "hsl(225 80% 50%)",
            "hsl(225 80% 52%)",
            "hsl(225 80% 54%)",
            "hsl(225 80% 56%)",
            "hsl(225 80% 58%)",
            "hsl(225 80% 60%)",
            "hsl(225 80% 62%)",
            "hsl(225 80% 64%)",
            "hsl(225 80% 66%)",
            "hsl(225 80% 68%)",
            "hsl(225 80% 70%)",
            "hsl(225 80% 72%)",
            "hsl(225 80% 74%)",
            "hsl(225 80% 76%)",
            "hsl(225 80% 78%)",
            "hsl(225 80% 80%)",
            "hsl(225 80% 82%)",
            "hsl(225 80% 84%)",
            "hsl(225 80% 86%)",
            "hsl(225 80% 88%)",
            "hsl(225 80% 90%)",
          ],
          borderColor: 'hsl(225 80% 100%)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
