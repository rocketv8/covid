$(document).ready(() => {
    $.ajax({
      url: "https://hpb.health.gov.lk/api/get-current-statistical",
      type: "GET",
      dataType: "json", // added data type
      success: function(res) {
        if(res.success){
            const data = res.data;
            $('#lastUpdate').html(data.update_date_time)
            $('#hospitalTotal').html(data.local_total_number_of_individuals_in_hospitals)
            $('#confirmCases').html(data.local_total_cases)
            $('#recovered').html(data.local_recovered)
            $('#deaths').html(data.local_deaths)


            // ############## Data Population ##################3

            const hospitalData = data.hospital_data;

            let block= "";

            for(const itm of hospitalData){
                block += `<tr>
                    <td>${itm.hospital.name} - ${itm.hospital.name_si}</td>
                    <td>${itm.treatment_local}</td>
                    <td>${itm.treatment_foreign}</td>
                    <td>${itm.treatment_total}</td>
                    </tr>`
            }

            $("#treatmentBody").html(block)

        }

      }
    });
  });