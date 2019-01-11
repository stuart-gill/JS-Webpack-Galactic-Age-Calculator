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
        const userBirthdate = parseInt($('#birthdate').val());
        const userBirthmonth = parseInt($('#birthmonth').val());
        const userBirthyear = parseInt($('#birthyear').val());
        
        let userBirthday = new Birthday(userBirthyear, userBirthmonth, userBirthdate);
        let age = Birthday.getAge(userBirthday);
        //let earthAge = userBirthday.getAge;
        console.log(age);
    });        
});