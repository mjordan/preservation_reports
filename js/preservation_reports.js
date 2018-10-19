/*
@file
Javascript that renders a Chart.js chart.
*/

(function (Drupal, $) {
  "use strict";

  // For the example pie chart.
  var preservationReportsPieChartCanvas = document.getElementById('preservation-reports-pie-chart');
  var preservationReportsPieChartData = drupalSettings.preservation_reports.piechart_data;

  // Render the chart using the Chart.js API.
  var preservationReportsPieChart = new Chart(preservationReportsPieChartCanvas, {
    type: 'pie',
    data: preservationReportsPieChartData,
    options: {
      layout: {
        padding: {
          top: 50,
          bottom: 100,
        }
      }
    }
  });

  // Hard-coded size limits, for now.
  // preservationReportsPieChart.canvas.parentNode.style.width = '1000px';
  // preservationReportsPieChart.canvas.parentNode.style.height = '1000px'

  // For the example line chart.
  var preservationReportsLineChartCanvas = document.getElementById('preservation-reports-line-chart');
  var preservationReportsLineChartData = drupalSettings.preservation_reports.linechart_data;

  var preservationReportsLineChart = new Chart(preservationReportsLineChartCanvas, {
    type: 'line',
    data: preservationReportsLineChartData
  });


}) (Drupal, jQuery);
