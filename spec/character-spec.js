

import { Birthday } from './../src/birthday';



describe('Birthday', function () {

  it('should return one year when inputted one year in miliseconds', function () {
    const oneYear = 31556952000;
    expect(Birthday.milisecondsToYears(oneYear)).toBe(1);
  });

  it('should return one year when asked age difference between now and a year from now, margin of error 1 day', function () {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const userBirthday = new Birthday(year - 1, month + 1, day);
    expect(Birthday.getAge(userBirthday) - 31556952000).toBeLessThan(8.64e+7);
  });

  it('should return about 4.16 when one year is entered', function () {
    expect(Birthday.getMercuryAge(1)).toBeCloseTo(4.16, 1);
  });

  it('should return about 1.61 when one year is entered', function () {
    expect(Birthday.getVenusAge(1)).toBeCloseTo(1.61, 1);
  });

  it('should return about .53 when one year is entered', function () {
    expect(Birthday.getMarsAge(1)).toBeCloseTo(.53, 1);
  });

  it('should return about .08 when one year is entered', function () {
    expect(Birthday.getJupiterAge(1)).toBeCloseTo(.08, 1);
  });

  it('should return zero years left to live', function () {
    expect(Birthday.yearsLeft(31556952000, 1)).toEqual(0);
  });

});