
import $ from 'jquery';
import { Birthday } from './birthday';

$(document).ready(function() {

    $("#birthdayForm").submit(function(event) {
        event.preventDefault();
        const userBirthdate = parseInt($('#birthdate').val());
        const userBirthmonth = parseInt($('#birthmonth').val());
        const userBirthyear = parseInt($('#birthyear').val());
        const userExpectancy = parseInt($('#expectancy').val());
        
        let userBirthday = new Birthday(userBirthyear, userBirthmonth, userBirthdate);
        
        let age = Birthday.getAge(userBirthday);
        let earthAge = Birthday.milisecondsToYears(age);
        let mercuryAge = Birthday.milisecondsToYears(Birthday.getMercuryAge(age));
        let venusAge = Birthday.milisecondsToYears(Birthday.getVenusAge(age));
        let marsAge = Birthday.milisecondsToYears(Birthday.getMarsAge(age));
        let jupiterAge = Birthday.milisecondsToYears(Birthday.getJupiterAge(age));
        let yearsLeft = Birthday.milisecondsToYears(Birthday.yearsLeft(age, userExpectancy));
        let mercuryYearsLeft = Math.floor(Birthday.milisecondsToYears(Birthday.yearsLeft(age, userExpectancy))/.24);
        let venusYearsLeft = Math.floor(Birthday.milisecondsToYears(Birthday.yearsLeft(age, userExpectancy))/.62);
        let marsYearsLeft = Math.floor(Birthday.milisecondsToYears(Birthday.yearsLeft(age, userExpectancy))/1.88);
        let jupiterYearsLeft = Math.floor(Birthday.milisecondsToYears(Birthday.yearsLeft(age, userExpectancy))/11.86);

        console.log(`your earth age is ${earthAge}`);
        console.log(`your mercury age is ${mercuryAge}`);
        console.log(`your venus age is ${venusAge}`);
        console.log(`your mars age is ${marsAge}`);
        console.log(`your jupiter age is ${jupiterAge}`);
        
        if (yearsLeft>0) {
        console.log(`you have approximately ${yearsLeft} earth years left to live`);
        console.log(`you have approximately ${mercuryYearsLeft} mercury years left to live`);
        console.log(`you have approximately ${venusYearsLeft} venus years left to live`);
        console.log(`you have approximately ${marsYearsLeft} mars years left to live`);
        console.log(`you have approximately ${jupiterYearsLeft} jupiter years left to live`);
        }
        else {
        yearsLeft= -yearsLeft;
        mercuryYearsLeft= -mercuryYearsLeft;
        venusYearsLeft= -venusYearsLeft;
        marsYearsLeft = -marsYearsLeft;
        jupiterYearsLeft = -jupiterYearsLeft;
        console.log(`you have lived ${yearsLeft} earth years beyond your expected life span`);
        console.log(`you have lived ${mercuryYearsLeft} mercury years beyond your expected life span`);
        console.log(`you have lived ${venusYearsLeft} venus years beyond your expected life span`);
        console.log(`you have lived ${marsYearsLeft} mars years beyond your expected life span`);
        console.log(`you have lived ${jupiterYearsLeft} jupiter years beyond your expected life span`);
        }
    });        
});