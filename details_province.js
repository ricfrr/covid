window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    list_cases_ancona = []
    log_cases_ancona = []

    list_cases_pu = []
    log_cases_pu = []

    list_cases_fermo = []
    log_cases_fermo = []

    list_cases_ascoli = []
    log_cases_ascoli = []

    list_cases_macerata = []
    log_cases_macerata = []

    list_date = []

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data)
            data.forEach(element => {
                if (element.denominazione_provincia == "Ancona") {
                    list_cases_ancona.push(element.totale_casi)
                    log_cases_ancona.push(Math.log(parseInt(element.totale_casi)))
                    date = new Date(element.data)
                    month = date.getMonth() + 1
                    list_date.push(String(date.getDate()) + "-" + String(month))
                }
                if (element.denominazione_provincia == "Pesaro e Urbino") {
                    list_cases_pu.push(element.totale_casi)
                    log_cases_pu.push(Math.log(parseInt(element.totale_casi)))
                }
                if (element.denominazione_provincia == "Fermo") {
                    list_cases_fermo.push(element.totale_casi)
                    log_cases_fermo.push(Math.log(parseInt(element.totale_casi)))
                }
                if (element.denominazione_provincia == "Ascoli Piceno") {
                    list_cases_ascoli.push(element.totale_casi)
                    log_cases_ascoli.push(Math.log(parseInt(element.totale_casi)))
                }
                if (element.denominazione_provincia == "Macerata") {
                    list_cases_macerata.push(element.totale_casi)
                    log_cases_macerata.push(Math.log(parseInt(element.totale_casi)))
                }
            });


            var ctx_log_case = document.getElementById('line_overall_ancona').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# ancona',
                        data: list_cases_ancona,
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


            var ctx_log_case = document.getElementById('line_overall_log_ancona').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# log ancona',
                        data: log_cases_ancona,
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


            var ctx_log_case = document.getElementById('line_overall_pu').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# Pesaro e Urbino',
                        data: list_cases_pu,
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


            var ctx_log_case = document.getElementById('line_overall_log_pu').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# log Pesaro e Urbino',
                        data: log_cases_pu,
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


            var ctx_log_case = document.getElementById('line_overall_ascoli').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# Ascoli Piceno',
                        data: list_cases_ascoli,
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


            var ctx_log_case = document.getElementById('line_overall_log_ascoli').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# log Ascoli Piceno',
                        data: log_cases_ascoli,
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


            var ctx_log_case = document.getElementById('line_overall_macerata').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# Macerata',
                        data: list_cases_macerata,
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


            var ctx_log_case = document.getElementById('line_overall_log_macerata').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# log Macerata',
                        data: log_cases_macerata,
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



            var ctx_log_case = document.getElementById('line_overall_fermo').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# Fermo',
                        data: list_cases_fermo,
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


            var ctx_log_case = document.getElementById('line_overall_log_fermo').getContext('2d');
            var chart_log_case = new Chart(ctx_log_case, {
                type: 'line',
                data: {
                    labels: list_date,
                    datasets: [{
                        label: '# log Fermo',
                        data: log_cases_fermo,
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
            

        }
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json", true);
    xmlhttp.send();

}

