<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!-- Metas -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- General -->
    <title>IW - Charts</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <!-- Main -->
    <main>
        <h1>Google Charts</h1>
        <div id="mychart" style="width: 900px; height: 500px"></div>
    </main>

    <?php
        // PHP Section
        $vendas = [15, 30, 25, 56, 45];
        $mes = ['jan', 'fev', 'mar', 'abr', 'mai'];
        $tam = count($vendas);
    ?>

    <!-- Application -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script>
        
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Ano', 'Vendas'],

                <?php 
                    for ($i = 0; $i < $tam; $i++) {
                ?>
                    ['<?= $mes[$i]; ?>', <?= $vendas[$i]; ?>],
                <?php
                    }
                ?>
            ]);

            var options = {
                title: 'Performance da empresa',
                curveType: 'function',
                legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('mychart'));

            chart.draw(data, options);
        }
</script>
</body>
</html>