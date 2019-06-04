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

}) (Drupal, jQuery);
