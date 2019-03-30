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
  $('#doctorForm').submit(function(event) {
    event.preventDefault();
    condition = $("#condition").val();
    name = $("#doctorName").val();
    distance = $("#distance").val();
    if(condition === "" && name === ""){
      $(".invalid-feedback").show();
      $("#condition").addClass("is-invalid");
      $("#doctorName").addClass("is-invalid");
    }
    else{
      $(".invalid-feedback").hide();
      $("#condition").removeClass("is-invalid");
      $("#doctorName").removeClass("is-invalid");
      let doctorLookup = new DoctorLookup();
      doctorLookup.getDoctorInfo(condition, name, distance).then(function(response){
        let body = JSON.parse(response);
        console.log(body);
      }, function(error){

      });
    }
  });
});
