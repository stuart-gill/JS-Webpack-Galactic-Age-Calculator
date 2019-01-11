//import './styles.css';
import $ from 'jquery';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Birthday } from './birthday';

$(document).ready(function() {
    // let char;
    // let monster;
    // let charClass;
    $("#birthdayForm").submit(function(event) {
        event.preventDefault();
        const userBirthdate = $('#birthdate').val();
        const userBirthmonth = $('#birthmonth').val()-1;
        const userBirthyear = $('#birthyear').val();
        
        let userBirthday = new Birthday(userBirthyear, userBirthmonth, userBirthdate);
        //let earthAge = userBirthday.getAge;
        console.log(userBirthday);
    });        
});