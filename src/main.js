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
        const userExpectancy = parseInt($('#expectancy').val());
        
        let userBirthday = new Birthday(userBirthyear, userBirthmonth, userBirthdate);
        
        let age = Birthday.getAge(userBirthday);
        let earthAge = Birthday.milisecondsToYears(age);
        let mercuryAge = Birthday.milisecondsToYears(Birthday.getMercuryAge(userBirthday));
        let venusAge = Birthday.milisecondsToYears(Birthday.getVenusAge(userBirthday));
        let marsAge = Birthday.milisecondsToYears(Birthday.getMarsAge(userBirthday));
        let jupiterAge = Birthday.milisecondsToYears(Birthday.getJupiterAge(userBirthday));
        let yearsLeft = Birthday.milisecondsToYears(Birthday.yearsLeft(age, userExpectancy));
        let mercuryYearsLeft = Math.floor(Birthday.milisecondsToYears(Birthday.yearsLeft(age, userExpectancy))/.24);
        let venusYearsLeft = Math.floor(Birthday.milisecondsToYears(Birthday.yearsLeft(age, userExpectancy))/.62);
        let marsYearsLeft = Math.floor(Birthday.milisecondsToYears(Birthday.yearsLeft(age, userExpectancy))/1.88);
        let jupiterYearsLeft = Math.floor(Birthday.milisecondsToYears(Birthday.yearsLeft(age, userExpectancy))/11.86);

        //let earthAge = userBirthday.getAge;
        console.log(earthAge);
        console.log(mercuryAge);
        console.log(venusAge);
        console.log(marsAge);
        console.log(jupiterAge);
        console.log(yearsLeft);
        console.log(mercuryYearsLeft);
        console.log(venusYearsLeft);
        console.log(marsYearsLeft);
        console.log(jupiterYearsLeft);
        console.log(new Date);
    });        
});