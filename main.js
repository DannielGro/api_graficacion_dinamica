

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(dibujargrafica);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function dibujargrafica() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Champiñones', 2.5],
      ['Queso', 5],
      ['Pepperoni', 3],
      ['Jamón', 1],
      ['Piña', 3]
    ]);

    // Set chart options
    var options = {'title':'¿Cuanta pizza comiste?',
                   'width':450,
                   'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('grafica'));
    chart.draw(data, options);
  }
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(graficaB);
  
  function graficaB() {
  
        var data = google.visualization.arrayToDataTable([
          ['City', 'Población 2010',],
          ['New York City, NY', 8175000],
          ['Los Angeles, CA', 3792000],
          ['Chicago, IL', 2695000],
          ['Houston, TX', 2099000],
          ['Philadelphia, PA', 1526000]
        ]);
  
        var options = {
          title: 'Población de las ciudades más grandes de EE. UU.',
          chartArea: {width: '50%'},
          hAxis: {
            title: 'Población total',
            minValue: 0
          },
          vAxis: {
            title: 'Ciudad'
          }
        };
  
        var chart = new google.visualization.BarChart(document.getElementById('graficab'));
  
        chart.draw(data, options);
      }
      google.charts.setOnLoadCallback(burbujas);
      function burbujas() {
        var data = google.visualization.arrayToDataTable([
          ['ID', 'X', 'Y', 'Temperature'],
          ['',   80,  167,      120],
          ['',   79,  136,      130],
          ['',   78,  184,      50],
          ['',   72,  278,      230],
          ['',   81,  200,      210],
          ['',   72,  170,      100],
          ['',   68,  477,      80]
        ]);

        var options = {
          colorAxis: {colors: ['yellow', 'red']}
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('bur'));
        chart.draw(data, options);
      }
      google.charts.setOnLoadCallback(calendario);

      function calendario() {
        var data = google.visualization.arrayToDataTable([
          ['Mon', 20, 28, 38, 45],
          ['Tue', 31, 38, 55, 66],
          ['Wed', 50, 55, 77, 80],
          ['Thu', 77, 77, 66, 50],
          ['Fri', 68, 66, 22, 15]
          // Treat first row as data as well.
        ], true);
    
        var options = {
          legend:'none'
        };
    
        var chart = new google.visualization.CandlestickChart(document.getElementById('cal'));
    
        chart.draw(data, options);

      }
      google.charts.setOnLoadCallback(barrascolor);

      function barrascolor() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
          ['2004/05',  165,      938,         522,             998,           450,      614.6],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
          title : 'Monthly Coffee Production by Country',
          vAxis: {title: 'Cups'},
          hAxis: {title: 'Month'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('BC'));
        chart.draw(data, options);
      }
      google.charts.setOnLoadCallback(dona);
      function dona() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('don'));
        chart.draw(data, options);
      }