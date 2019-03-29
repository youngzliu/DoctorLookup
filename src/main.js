import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { DoctorLookup } from './doctorLookup.js';

$(document).ready(function() {
  let name;
  let condition;
  let skip;
  $('#doctorForm').submit(function(event) {
    event.preventDefault();
    condition = $("#condition").val();
    name = $("#doctorName").val();
    if(condition === "" && name === ""){
      alert("Please fill in at least one of the fields!");
    }
    else{
      let doctorLookup = new DoctorLookup();
      doctorLookup.getDoctorInfo(condition, name).then(function(response){
        let body = JSON.parse(response);
        console.log(body);
      });
    }
  });
});
