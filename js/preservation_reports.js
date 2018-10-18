/*
@file
Javascript that renders a Chart.js chart.
*/

(function (Drupal, $) {
  "use strict";
  var preservationReportsChartCanvas = document.getElementById('preservation-reports-chart');
  var preservationReportsData = drupalSettings.preservation_reports.chart_data;

  // Render the chart using the Chart.js API.
  var preservationReportsPieChart = new Chart(preservationReportsChartCanvas,{
    type: 'pie',
    data: preservationReportsData,
  });

}) (Drupal, jQuery);
