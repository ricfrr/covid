window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    list_cases = []
    log_cases = []

    list_actual_positive = []
    log_actual_positive = []

    list_death = []
    log_death = []

    list_recovered = []
    log_recovered = []
    list_date = []

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data)
            data.forEach(element => {
                if (element.denominazione_regione == "Marche") {
                    list_cases.push(element.totale_casi)
                    log_cases.push(Math.log(parseInt(element.totale_casi)))

                    list_actual_positive.push(element.totale_attualmente_positivi)
                    log_actual_positive.push(Math.log(parseInt(element.totale_attualmente_positivi)))

                    list_recovered.push(element.dimessi_guariti)
                    log_recovered.push(Math.log(parseInt(element.dimessi_guariti)))

                    list_death.push(element.deceduti)
                    log_death.push(Math.log(parseInt(element.deceduti)))

                    date = new Date(element.data)
                    month = date.getMonth() + 1
                    list_date.push(date.getDate() + "-" + month)

                }
            });

            console.log(list_actual_positive[list_actual_positive.length - 1])
            var ctx_case = document.getElementById('general_situation').getContext('2d');
            var chart_case = new Chart(ctx_case, {
                type: 'doughnut',
                data: {
                    labels : ['positivi attuali','guariti','deceduti'],
                    datasets : [{
                        label: '# casi',
                        data: [list_actual_positive[list_actual_positive.length - 1],list_recovered[list_recovered.length - 1],list_death[list_death.length - 1]],
                        backgroundColor : ["#e90b3a", "#a0ff03", "#1ad5de"]
                    }]
                }
            })

            document.getElementById("data_total_case").innerHTML = list_cases[list_cases.length-1]
            diff_total_case = list_cases[list_cases.length-1] - list_cases[list_cases.length-2]
            document.getElementById("data_total_case_change").innerHTML = "(+"+ String(diff_total_case) + ")"

            document.getElementById("data_positive").innerHTML = list_actual_positive[list_actual_positive.length-1]
            diff_total_case = list_actual_positive[list_actual_positive.length-1] - list_actual_positive[list_actual_positive.length-2]
            pos = "+"
            if (diff_total_case < 0){
                pos = "-"
            }
            document.getElementById("data_positive_change").innerHTML = "("+pos+ String(diff_total_case) + ")"

            document.getElementById("data_recovered").innerHTML = list_recovered[list_recovered.length-1]
            diff_total_case = list_recovered[list_recovered.length-1] - list_recovered[list_recovered.length-2]
            document.getElementById("data_recovered_change").innerHTML = "(+"+ String(diff_total_case) + ")"

            document.getElementById("data_death").innerHTML = list_death[list_death.length-1]
            diff_total_case = list_death[list_death.length-1] - list_death[list_death.length-2]
            document.getElementById("data_death_change").innerHTML = "(+"+ String(diff_total_case) + ")"

        }
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json", true);
    xmlhttp.send();

}

