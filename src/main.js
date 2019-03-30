import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorLookup } from './doctorLookup.js';

$(document).ready(function() {
  let name;
  let condition;
  let skip;
  let distance;
  const perPage = 10;
  let total;
  let doctorLookup = new DoctorLookup();

  $('#doctorForm').submit(function(event) {
    event.preventDefault();
    if($("#condition").val() === "" && $("#doctorName").val() === ""){
      $(".invalid-feedback").show();
      $("#condition").addClass("is-invalid");
      $("#doctorName").addClass("is-invalid");
    }
    else{
      condition = $("#condition").val();
      name = $("#doctorName").val();
      distance = $("#distance").val();
      skip = 0;
      total = 0;
      if(distance === ""){
        distance = "100";
      }
      $("#results").hide();
      $("#results").empty();
      $("#error").empty();
      $("#next").hide();
      $("#previous").hide();
      $(".invalid-feedback").hide();
      $("#condition").removeClass("is-invalid");
      $("#doctorName").removeClass("is-invalid");
      doctorLookup.getDoctorInfo(condition, name, distance, perPage).then(function(response){
        let body = JSON.parse(response);
        console.log(body);
        if(body.meta.total == 0){
          $("#results").prepend(`<h3>There were unfortunately no doctors that matched you requirements. Sorry!</h3>`);
          $("#results").show();
        }
        else{
          total = body.meta.total;
          $("#results").append(`<h3>We have found ${body.meta.total} doctors within ${distance} miles that match your query. Here they are, sorted by how far they are from you. Information is based on their practice closest to your location.</h3>`);
          $("#results").append("<table id='resultsTable'></table>");
          updateTable(body);
          $("#results").show();
          updateButtons();
        }
      }, function(error){
        $('#error').html(`Something went wrong processing you request! Here is the error message: ${error.message}`);
      });
    }
  });

  function updateButtons(){
    if ((skip + perPage) < total){
      $("#next").show();
    }
    if(skip !== 0){
      $("#previous").show();
    }
    $("#pageNum").html(`<strong>Page ${(skip/perPage) + 1} of ${Math.floor(total/perPage) + 1}</strong>`);
  }

  $("#next").click(function(){
    skip += perPage;
    doctorLookup.getDoctorInfo(condition, name, distance, perPage, skip).then(function(response){
      let body = JSON.parse(response);
      $("#next").hide();
      $("#previous").hide();
      $("#resultsTable").empty();
      updateTable(body);
      updateButtons();
    }, function(error){
      $('#error').html(`Something went wrong processing you request! Here is the error message: ${error.message}`);
    });
  });

  $("#previous").click(function(){
    skip -= perPage;
    doctorLookup.getDoctorInfo(condition, name, distance, perPage, skip).then(function(response){
      let body = JSON.parse(response);
      $("#next").hide();
      $("#previous").hide();
      $("#resultsTable").empty();
      updateTable(body);
      updateButtons();
    }, function(error){
      $('#error').html(`Something went wrong processing you request! Here is the error message: ${error.message}`);
    });
  });

  function updateTable(body){
    $("#resultsTable").append("<tr><th>Name</th><th>Closest Practice</th><th>Address</th><th>Phone Number</th><th>Website</th><th>Accepting new patients?</th><th>Distance from you</th></tr>")
    body.data.forEach(function(doctor){
      let practice = doctorLookup.getClosestPractice(doctor.practices);
      let rowString = ""
      rowString += `<tr><td>${doctor.profile.first_name} ${doctor.profile.last_name}</td>`;
      let website = practice.website;
      if(website === undefined)
      { website = "None"; }
      let accept = practice.accepts_new_patients;
      if(accept === true)
      { accept = "Yes"; }
      else
      { accept = "No"; }
      rowString += `<td>${practice.name}</td>`;
      rowString += `<td>${practice.visit_address.street}, ${practice.visit_address.city} ${practice.visit_address.state}</td>`;
      rowString += `<td>${practice.phones[0].number}</td>`;
      rowString += `<td>${website}</td>`;
      rowString += `<td>${accept}</td>`;
      rowString += `<td>${parseFloat(practice.distance).toFixed(2)} miles</tr>`
      $("#resultsTable").append(rowString);
    });
  }
});
