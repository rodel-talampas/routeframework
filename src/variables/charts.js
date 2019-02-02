// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

// ##############################
// // // general variables for charts
// #############################

const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 0,
      bottom: 0
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: true,
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: true
        },
        labels: {
          show: true
        },
        ticks: {
          display: true,
          padding: 20
        },
      }
    ],
    xAxes: [
      {
        display: true,
        ticks: {
          display: true,
          padding: 20
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: true
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 10, bottom: 10 }
  }
};

var gradientChartOptionsConfigurationWithLegends = {
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 0,
      bottom: 0
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        },
        ticks: {
          display: true,
          padding: 20
        },
      }
    ],
    xAxes: [
      {
        display: 1,
        ticks: {
          display: true,
          padding: 20
        },
        padding: 20,
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

// ##############################
// // // Dashboard view - Panel chart
// #############################
const dashboardPanelCombineChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#BDB76B";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    // gradientFill.addColorStop(0, "RGB(85, 107, 47)");
    // gradientFill.addColorStop(1, "RGB(218, 165, 32)");
    gradientFill.addColorStop(0, "#FFFFFF");
    gradientFill.addColorStop(1, "rgba(240, 230, 140, .0005)");


    var schartColor = "#FF00FF";
    var sgradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    sgradientStroke.addColorStop(0, "#FF00FF");
    gradientStroke.addColorStop(1, schartColor);
    var sgradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    sgradientFill.addColorStop(0, "#FFFFFF");
    sgradientFill.addColorStop(1, "RGBA(238, 130, 238, .0005)");


    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "CN",
          type: "line",
          borderColor: chartColor,
          pointBorderColor: "#FFFFFF",
          pointBackgroundColor: chartColor,
          pointHoverBackgroundColor: "#808000",
          pointHoverBorderColor: "#FFFFFF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [2150, 1150, 2100, 2190, 2130, 2290, 2350, 1560, 3220, 2340, 1590, 2495]
        },
        {
          label: "SON",
          type: "line",
          borderColor: schartColor,
          pointBorderColor: "#FFFFFF",
          pointBackgroundColor: schartColor,
          pointHoverBackgroundColor: "#808000",
          pointHoverBorderColor: "#FFFFFF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          backgroundColor: sgradientFill,
          borderWidth: 2,
          data: [2455, 1200, 3000, 2311, 2455, 1466, 1788, 1233, 2899, 1233, 3455, 1322]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithLegends
};

const dashboardPanelChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#BDB76B";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    // gradientFill.addColorStop(0, "RGB(85, 107, 47)");
    // gradientFill.addColorStop(1, "RGB(218, 165, 32)");
    gradientFill.addColorStop(0, "#FFFFFF");
    gradientFill.addColorStop(1, "RGB(240, 230, 140)");

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Data",
          borderColor: chartColor,
          pointBorderColor: "#FFFFFF",
          pointBackgroundColor: chartColor,
          pointHoverBackgroundColor: "#808000",
          pointHoverBorderColor: "#FFFFFF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [2150, 1150, 2100, 2190, 2130, 2290, 2350, 1560, 3220, 2340, 1590, 2495]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithLegends
  // {
  //   layout: {
  //     padding: {
  //       left: 20,
  //       right: 20,
  //       top: 0,
  //       bottom: 0
  //     }
  //   },
  //   maintainAspectRatio: false,
  //   tooltips: {
  //     backgroundColor: "#fff",
  //     titleFontColor: "#333",
  //     bodyFontColor: "#666",
  //     bodySpacing: 4,
  //     xPadding: 12,
  //     mode: "nearest",
  //     intersect: 0,
  //     position: "nearest"
  //   },
  //   legend: {
  //     position: "bottom",
  //     fillStyle: "#FFF",
  //     display: false
  //   },
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           fontColor: "rgba(255,255,255,0.4)",
  //           fontStyle: "bold",
  //           beginAtZero: true,
  //           maxTicksLimit: 5,
  //           padding: 10
  //         },
  //         gridLines: {
  //           drawTicks: true,
  //           drawBorder: false,
  //           display: true,
  //           color: "rgba(255,255,255,0.1)",
  //           zeroLineColor: "transparent"
  //         }
  //       }
  //     ],
  //     xAxes: [
  //       {
  //         gridLines: {
  //           display: false,
  //           color: "rgba(255,255,255,0.1)"
  //         },
  //         ticks: {
  //           padding: 10,
  //           fontColor: "rgba(255,255,255,0.4)",
  //           fontStyle: "bold"
  //         }
  //       }
  //     ]
  //   }
  // }
};

const dashboardPanelSonChart = {
  data: canvas => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FF00FF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#FF00FF");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "#FFFFFF");
    gradientFill.addColorStop(1, "RGB(238, 130, 238)");

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Data",
          borderColor: chartColor,
          pointBorderColor: "#FFFFFF",
          pointBackgroundColor: chartColor,
          pointHoverBackgroundColor: "#808000",
          pointHoverBorderColor: "#FFFFFF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [2455, 1200, 3000, 2311, 2455, 1466, 1788, 1233, 2899, 1233, 3455, 1322]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithLegends
};

// ##############################
// // // Dashboard view - Shipped Products - Card
// #############################

const dashboardShippedProductsChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      datasets: [
        {
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }
      ]
    };
  },
  options:  gradientChartOptionsConfigurationWithNumbersAndGrid
  //gradientChartOptionsConfiguration
};

// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
      datasets: [
        {
          label: "Email Stats",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
        }
      ]
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid
};

// ##############################
// // // Dashboard view - Bar Chart - Card
// #############################

const dashboard24HoursPerformanceChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Active Countries",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }
      ]
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 }
    }
  }
};

const serverCPUChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
      labels: [
        "0700",
        "0800",
        "0900",
        "1000",
        "1100",
        "1200",
        "1300",
        "1400",
        "1500",
        "1600",
        "1700",
        "1800"
      ],
      datasets: [
        {
          label: "CPU Usage",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [30, 60, 70, 80, 90, 95, 65, 0, 0, 0, 0, 0]
        }
      ]
    };
  },
  options:  gradientChartOptionsConfigurationWithNumbersAndGrid
  //gradientChartOptionsConfiguration
};

const serverDiskChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: [
        "0700",
        "0800",
        "0900",
        "1000",
        "1100",
        "1200",
        "1300",
        "1400",
        "1500",
        "1600",
        "1700",
        "1800"
      ],
      datasets: [
        {
          label: "Disk Usage",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [80, 80, 82, 83, 90, 91, 92, 0, 0, 0, 0, 0]
        }
      ]
    };
  },
  options:  gradientChartOptionsConfigurationWithNumbersAndGrid
  //gradientChartOptionsConfiguration
};

const databaseChart = {
  data: canvas => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: [
        "0700",
        "0800",
        "0900",
        "1000",
        "1100",
        "1200",
        "1300",
        "1400",
        "1500",
        "1600",
        "1700",
        "1800"
      ],
      datasets: [
        {
          label: "Database Usage",
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [20, 30, 50, 80, 90, 91, 92, 0, 0, 0, 0, 0]
        }
      ]
    };
  },
  options:  gradientChartOptionsConfigurationWithNumbersAndGrid
  //gradientChartOptionsConfiguration
};

module.exports = {
  dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
  dashboardPanelSonChart,dashboardPanelCombineChart,serverDiskChart,serverCPUChart,
  dashboardShippedProductsChart, databaseChart, // Chart for Dashboard view - Shipped Products Card
  dashboardAllProductsChart, // Chart for Dashboard view - All products Card
  dashboard24HoursPerformanceChart // Chart for Dashboard view - 24 Hours Performance Card
};
