

import { Birthday } from './../src/birthday';



describe('Birthday', function() {

  // afterEach(function() {
  //   userBirthday= undefined;
  // });    

  it('should return one year when inputted one year in miliseconds', function(){
    const oneYear = 31556952000;
    const result = Birthday.milisecondsToYears(oneYear);
    expect(result).toBe(1);
  });

  it('should return one year when asked age difference between now and a year from now, margin of error 1 day', function() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const userBirthday = new Birthday(year-1, month+1, day);
    const roughAge = Birthday.getAge(userBirthday);
    expect(roughAge - 31556952000).toBeLessThan(8.64e+7);
  });


});