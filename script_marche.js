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

    xmlhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data)
        data.forEach(element => {
            if (element.denominazione_regione =="Marche"){
                list_cases.push(element.totale_casi)
                log_cases.push(Math.log(parseInt(element.totale_casi)))

                list_actual_positive.push(element.totale_attualmente_positivi)
                log_actual_positive.push(Math.log(parseInt(element.totale_attualmente_positivi)))

                list_recovered.push(element.dimessi_guariti)
                log_recovered.push(Math.log(parseInt(element.dimessi_guariti)))

                list_death.push(element.deceduti)
                log_death.push(Math.log(parseInt(element.deceduti)))
                
                date = new Date(element.data)
                month = date.getMonth()+1
                list_date.push(date.getDate()+"-"+month)

            }
        });
        

        var ctx_case = document.getElementById('trend').getContext('2d');
        var chart_case = new Chart(ctx_case ,{type :'line', 
                                            data: {
                    labels: list_date,
                    datasets: [{
                        label: '# casi',
                        data: list_cases,
                        backgroundColor: [
                            'rgba(205, 226, 15, 0.2)',
                        ],
                        borderWidth: 1
                    },
                    {
                        label: '# positivi',
                        data: list_actual_positive,
                        backgroundColor: [
                            'rgba(220,20,60,  0.2)',
                        ],
                        borderWidth: 1
                    },
                    {
                        label: '# guariti',
                        data: list_recovered,
                        backgroundColor: [
                            'rgba(127,255,0,  0.2)',
                        ],
                        borderWidth: 1
                    }, 
                    {
                        label: '# deceduti',
                        data: list_death,
                        backgroundColor: [
                            'rgba(0,0,0, 0.2)',
                        ],
                        borderWidth: 1
                    }
                
                ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
         })

         var ctx_log_case = document.getElementById('trend_log').getContext('2d');
         var chart_log_case = new Chart(ctx_log_case ,{type :'line', 
                                             data: {
                     labels: list_date,
                     datasets: [{
                         label: '# log_casi',
                         data: log_cases,
                         backgroundColor: [
                            'rgba(205, 226, 15, 0.2)',
                        ],
                         borderWidth: 1
                     },
                     {
                        label: '# log_positivi',
                        data: log_actual_positive,
                        backgroundColor: [
                            'rgba(220,20,60,  0.2)',
                       ],
                        borderWidth: 1
                    }, 
                    {
                        label: '# log_guariti',
                        data: log_recovered,
                        backgroundColor: [
                            'rgba(127,255,0,  0.2)',
                        ],
                        borderWidth: 1
                    }, 
                    {
                        label: '# log_deceduti',
                        data: log_death,
                        backgroundColor: [
                            'rgba(0,0,0, 0.2)',
                        ],
                        borderWidth: 1
                    }
                    ]
                 },
                 options: {
                     scales: {
                         yAxes: [{
                             ticks: {
                                 beginAtZero: true
                             }
                         }]
                     }
                 }
          })

    }};
    xmlhttp.open("GET", "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json", true);
    xmlhttp.send();

}

