window.onload = function () {
    var xmlhttp = new XMLHttpRequest();

    region_l = ["Abruzzo", "Basilicata", "P.A. Bolzano", "Calabria", "Campania", "Emilia-Romagna", "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "P.A. Trento", "Umbria", "Valle d'Aosta", "Veneto"]

    cases_region = {}

    region_l.forEach(element => {
        cases_region[element] = {
            "list_cases": [],
            "log_cases": [],
            "list_actual_positive": [],
            "log_actual_positive": [],

            "list_death": [],
            "log_death": [],

            "list_recovered": [],
            "log_recovered": [],

            "list_date": []
        }
    })


    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            data.forEach(element => {
                if (region_l.includes(element.denominazione_regione)) {

                    cases_region[element.denominazione_regione].list_cases.push(element.totale_casi)
                    cases_region[element.denominazione_regione].log_cases.push(Math.log(parseInt(element.totale_casi)))

                    cases_region[element.denominazione_regione].list_actual_positive.push(element.totale_positivi)
                    cases_region[element.denominazione_regione].log_actual_positive.push(Math.log(parseInt(element.totale_positivi)))

                    cases_region[element.denominazione_regione].list_recovered.push(element.dimessi_guariti)
                    cases_region[element.denominazione_regione].log_recovered.push(Math.log(parseInt(element.dimessi_guariti)))

                    cases_region[element.denominazione_regione].list_death.push(element.deceduti)
                    cases_region[element.denominazione_regione].log_death.push(Math.log(parseInt(element.deceduti)))

                    date = new Date(element.data)
                    month = date.getMonth() + 1
                    cases_region[element.denominazione_regione].list_date.push(date.getDate() + "-" + month)
                }
            });


            document.getElementById("data_update").innerHTML = "Dati aggiornati al : " + cases_region.Lombardia.list_date[cases_region.Lombardia.list_date.length - 1]
            region_pair = ""
            region_html_list = ""
            regio_c = 0
            for (const [key, value] of Object.entries(cases_region)) {
                url_param = key
                if (url_param =="Valle d'Aosta"){
                    url_param = "Valle d%27Aosta"
                }
                diff_total_case = value.list_cases[value.list_cases.length - 1] - value.list_cases[value.list_cases.length - 2]
                if ( regio_c == 0){
                    region_pair += "<div class='row'>"
                        region_pair += "<div class='col-sm-6 container'>"+
                                            "<div class='square_container'>" +
                                                "<div class='data_text_container'> " +
                                                    "<div class='header_data'>" +
                                                        key+ 
                                                    "</div>" +
                                                    "<div class='data'>" +
                                                        value.list_cases[value.list_cases.length - 1] +
                                                    "</div>" +
                                                    "<div class='prev_day_change'>"+
                                                        "(+" + String(diff_total_case) + ")" + 
                                                    " </div>" + 
                                                    "<a href='region_details/region_details.html?region="+url_param+"' " +
                                                    "style='color: inherit;'>Statistiche dettagliate ></a>"+
                                                "</div>"+
                                            "</div> "+
                                        "</div > "
                    regio_c  =1
                    continue
                }else if (regio_c== 1){
                    region_pair += "<div class='col-sm-6 container'>"+
                                    "<div class='square_container'>" +
                                        "<div class='data_text_container'> " +
                                            "<div class='header_data'>" +
                                                key+ 
                                            "</div>" +
                                            "<div class='data'>" +
                                                value.list_cases[value.list_cases.length - 1] +
                                            "</div>" +
                                            "<div class='prev_day_change'>"+
                                                "(+" + String(diff_total_case) + ")" + 
                                            " </div>" + 
                                            "<a href='region_details/region_details.html?region="+key+"' " +
                                            "style='color: inherit;'>Statistiche dettagliate ></a>"+
                                        "</div>"+
                                    "</div> "+
                                "</div >"
                    region_pair += "</div>"
                    region_html_list += region_pair
                    region_pair = ""
                    regio_c  =0
                    continue
                }
            }

            document.getElementById("region_data").innerHTML = region_html_list

        }
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json", true);
    xmlhttp.send();

}

