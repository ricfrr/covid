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

    list_tamponi = []
    list_terapia_intensiva = []
    list_domiciliare = []

    list_nuovi_positivi = []

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            data.forEach(element => {
                list_cases.push(element.totale_casi)
                log_cases.push(Math.log(parseInt(element.totale_casi)))

                list_actual_positive.push(element.totale_positivi)
                log_actual_positive.push(Math.log(parseInt(element.totale_positivi)))

                list_recovered.push(element.dimessi_guariti)
                log_recovered.push(Math.log(parseInt(element.dimessi_guariti)))

                list_death.push(element.deceduti)
                log_death.push(Math.log(parseInt(element.deceduti)))

                list_tamponi.push(element.tamponi)
                list_terapia_intensiva.push(element.terapia_intensiva)
                list_domiciliare.push(element.isolamento_domiciliare)

                list_nuovi_positivi.push(element.variazione_totale_positivi)

                date = new Date(element.data)
                month = date.getMonth() + 1
                list_date.push(String(date.getDate()) + "-" + String(month))
            });


            var ctx_case = document.getElementById('line_overall').getContext('2d');
            var chart_case = new Chart(ctx_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# casi',
                        data: list_cases,
                        borderColor: "#e90b3a",
                        borderWidth: 1
                    },
                    {
                        label: '# positivi',
                        data: list_actual_positive,
                        borderColor: "#a0ff03",
                        borderWidth: 1
                    },
                    {
                        label: '# guariti',
                        data: list_recovered,
                        borderColor: "#1ad5de",
                        borderWidth: 1
                    },
                    {
                        label: '# deceduti',
                        data: list_death,
                        borderColor: "#f5f5f5",
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

            var ctx_log_case = document.getElementById('log_overall').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# log_casi',
                        data: log_cases,
                        borderColor: "#e90b3a",
                        borderWidth: 1
                    },
                    {
                        label: '# log_positivi',
                        data: log_actual_positive,
                        borderColor: "#a0ff03",
                        borderWidth: 1
                    },
                    {
                        label: '# log_guariti',
                        data: log_recovered,
                        borderColor: "#1ad5de",
                        borderWidth: 1
                    },
                    {
                        label: '# log_deceduti',
                        data: log_death,
                        borderColor: "#f5f5f5",
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

            // tamponi intensiva 

            var ctx_log_case = document.getElementById('tamponi_plot').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# tamponi',
                        data: list_tamponi,
                        borderColor: "#e90b3a",
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

            document.getElementById("data_tamponi_change").innerHTML = list_tamponi[list_tamponi.length - 1] + " (+" + String(list_tamponi[list_tamponi.length - 1] - list_tamponi[list_tamponi.length - 2]) + ")"

            // terapia intensiva 
            var ctx_log_case = document.getElementById('terapia_plot').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# terapia intensiva',
                        data: list_terapia_intensiva,
                        borderColor: "#a0ff03",
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


            change = list_terapia_intensiva[list_terapia_intensiva.length - 1] - list_terapia_intensiva[list_terapia_intensiva.length - 2]
            var sign = "+"
            if (change < 0) {
                sign = ""
            }

            document.getElementById("data_terapia_change").innerHTML = list_terapia_intensiva[list_terapia_intensiva.length - 1] + " (" + sign + + String(list_terapia_intensiva[list_terapia_intensiva.length - 1] - list_terapia_intensiva[list_terapia_intensiva.length - 2]) + ")"


            // domiciliare 
            var ctx_log_case = document.getElementById('domiciliare_plot').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# domiciliare',
                        data: list_domiciliare,
                        borderColor: "#1ad5de",
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

            change = list_domiciliare[list_domiciliare.length - 1] - list_domiciliare[list_domiciliare.length - 2]
            var sign = "+"
            if (change < 0) {
                sign = ""
            }

            document.getElementById("data_domiciliare_change").innerHTML = list_domiciliare[list_domiciliare.length - 1] + " (" + sign + String(list_domiciliare[list_domiciliare.length - 1] - list_domiciliare[list_domiciliare.length - 2]) + ")"

            // mortality
            death_ratio_list = []
            for (var i = 0, length = list_cases.length; i < length; i++) {
                death_ratio_list.push((list_death[i] / list_cases[i]) * 100)
            }

            var ctx_log_case = document.getElementById('mortalita_plot').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# mortalità',
                        data: death_ratio_list,
                        borderColor: "#f5f5f5",
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

            change_death = death_ratio_list[death_ratio_list.length - 1] - death_ratio_list[death_ratio_list.length - 2]
            var sign = "+"
            if (change_death < 0) {
                sign = ""
            }
            document.getElementById("data_mortalita_change").innerHTML = "%" + death_ratio_list[death_ratio_list.length - 1].toFixed(2) + " (" + sign + + String(change_death.toFixed(2)) + ")"

            // new positive cases
            sign="+"
            if (list_nuovi_positivi[list_nuovi_positivi.length - 1]<0){
                sign = ""
            }
            document.getElementById("nuovi_pos_change").innerHTML = "("+sign + list_nuovi_positivi[list_nuovi_positivi.length - 1] + ")"

            var ctx_log_case = document.getElementById('nuovi_pos_plot').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# Nuovi Positivi',
                        data: list_nuovi_positivi,
                        borderColor: "#a0ff03",
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

            // new cases 
            incremento_cases = [list_cases[0]]
            for (var i = 1, length = list_cases.length; i < length; i++) {
                incremento_cases.push(list_cases[i] - list_cases[i-1])
            }
            document.getElementById("incremento_change").innerHTML = "(+" + incremento_cases[incremento_cases.length - 1] + ")"

            var ctx_log_case = document.getElementById('incremento_plot').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# Nuovi Casi',
                        data: incremento_cases,
                        borderColor: "#e90b3a",
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

            // tamponi/tot cases 
            tamponi_casi_list = []
            tamponi_cange = [list_tamponi[0]]
            for (var i = 1, length = list_tamponi.length; i < length; i++) {
                tamponi_cange.push( Math.abs(list_tamponi[i] - list_tamponi[i - 1]))
            }

            for (var i = 0, length = list_tamponi.length; i < length; i++) {
                ratio = tamponi_cange[i] / incremento_cases[i]
                if (ratio == NaN){
                    ratio = 0 
                }
                tamponi_casi_list.push(ratio)
            }

            document.getElementById("tamponi_casi_change").innerHTML = "ogni " + tamponi_casi_list[tamponi_casi_list.length - 1].toFixed(2) + " tamponi un caso (N.B è solo un andamento, i tamponi di oggi sono i casi dei prossimi giorni)"

            var ctx_log_case = document.getElementById('tamponi_casi_plot').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# Tamponi/Incremento Casi ',
                        data: tamponi_casi_list,
                        borderColor: "#1ad5de",
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



        }
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json", true);
    xmlhttp.send();

}
