$(document).ready(function () {
    var dataSet = [
      {
        "id": 1,
        "title": "Accident Man",
        "genre": "Action",
        "stock": "5",
        "rate": "3.4"
      },
      {
        "id": 2,
        "title": "Little Man",
        "genre": "Comedy",
        "stock": "9",
        "rate": "4.3"
      },
      {
        "id": 3,
        "title": "Death Wish",
        "genre": "Thriller",
        "stock": "6",
        "rate": "2"
      },
      {
        "id": 4,
        "title": "Man of the Year",
        "genre": "Comedy",
        "stock": "8",
        "rate": "4.5"
      },
      {
        "id": 5,
        "title": "Mission Impossible",
        "genre": "Action",
        "stock": "7",
        "rate": "3.5"
      },
      {
        "id": 6,
        "title": "The neighbour",
        "genre": "Thriller",
        "stock": "4",
        "rate": "5"
      }
    ]

    
      function addDataToTable(nl, data) {
        data.forEach((d, i) => {
          var tr = nl.insertRow(i);
          Object.keys(d).forEach((k, j) => {
            var cell = tr.insertCell(j);
            cell.innerHTML = d[k];
          });
          var cell = tr.insertCell();
          cell.innerHTML = "<input type='button'  value='Delete Row' onclick='deleteRow(" + i + ")'>";
          nl.appendChild(tr);
        })
      }
      var resultTbody = document.querySelector("#result tbody");
      addDataToTable(resultTbody, dataSet);

      $("#myInput").on("keyup", function () {
       
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("result");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      });
    });
      
    function genreFilter(input) {
      $("#myInput").val("");
      var input, filter, table, tr1, td, i, txtValue;
      filter = input.toUpperCase();
      table = document.getElementById("result");
      tr1 = table.getElementsByTagName("tr");
      for (i = 0; i < tr1.length; i++) {
        td = tr1[i].getElementsByTagName("td")[2];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr1[i].style.display = "";
          } else {
            tr1[i].style.display = "none";
          }
        }
      }
    }
   
        

    function deleteRow(id) {
      id++;
      var index = -1;
      table = document.getElementById("result");
      tr1 = table.getElementsByTagName("tr");
      for (i = 0; i < tr1.length; i++) {
        td = tr1[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue == id) {
            index = i;
            break;
          }
        }
      }
      document.getElementById('result').deleteRow(index);
    }



