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
            data.forEach(element => {
                if (element.denominazione_provincia == "Ancona") {
                    list_cases_ancona.push(element.totale_casi)
                    log_cases_ancona.push(Math.log(parseInt(element.totale_casi)))

                    date = new Date(element.data)
                    month = date.getMonth() + 1
                    list_date.push(date.getDate() + "-" + month)

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

            document.getElementById("data_update").innerHTML = "Dati aggiornati al : "+ String(list_date[list_date.length-1])


            document.getElementById("data_total_case_ancona").innerHTML = list_cases_ancona[list_cases_ancona.length-1]
            diff_total_case = list_cases_ancona[list_cases_ancona.length-1] - list_cases_ancona[list_cases_ancona.length-2]
            document.getElementById("data_total_case_change_ancona").innerHTML = "(+"+ String(diff_total_case) + ")"


            document.getElementById("data_total_case_pu").innerHTML = list_cases_pu[list_cases_pu.length-1]
            diff_total_case = list_cases_pu[list_cases_pu.length-1] - list_cases_pu[list_cases_pu.length-2]
            document.getElementById("data_total_case_change_pu").innerHTML = "(+"+ String(diff_total_case) + ")"

            document.getElementById("data_total_case_fermo").innerHTML = list_cases_fermo[list_cases_fermo.length-1]
            diff_total_case = list_cases_fermo[list_cases_fermo.length-1] - list_cases_fermo[list_cases_fermo.length-2]
            document.getElementById("data_total_case_change_fermo").innerHTML = "(+"+ String(diff_total_case) + ")"

            document.getElementById("data_total_case_ascoli").innerHTML = list_cases_ascoli[list_cases_ascoli.length-1]
            diff_total_case = list_cases_ascoli[list_cases_ascoli.length-1] - list_cases_ascoli[list_cases_ascoli.length-2]
            document.getElementById("data_total_case_change_ascoli").innerHTML = "(+"+ String(diff_total_case) + ")"

            document.getElementById("data_total_case_macerata").innerHTML = list_cases_macerata[list_cases_macerata.length-1]
            diff_total_case = list_cases_macerata[list_cases_macerata.length-1] - list_cases_macerata[list_cases_macerata.length-2]
            document.getElementById("data_total_case_change_macerata").innerHTML = "(+"+ String(diff_total_case) + ")"
            
            

        }
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json", true);
    xmlhttp.send();

}

