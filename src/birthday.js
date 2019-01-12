

export class Birthday {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    static birthdayToDate(birthday) {
        const birthdate = new Date(birthday.year, birthday.month - 1, birthday.day)
        return birthdate;
    }

    static getAge(birthday) {
        const today = new Date();
        const birthdate = Birthday.birthdayToDate(birthday);
        const age = today - birthdate;
        return age;
    }

    static getMercuryAge(age) {
        age = age / .24;
        return age;
    }

    static getVenusAge(age) {
        age = age / .62;
        return age;
    }

    static getMarsAge(age) {
        age = age / 1.88;
        return age;
    }

    static getJupiterAge(age) {
        age = age / 11.86;
        return age;
    }

    static milisecondsToYears(age) {
        const convertedAge = Math.floor(age / 31556952000);
        return convertedAge;
    }

    static yearsLeft(age, expectancy) {
        const expectancyMili = expectancy * 31556952000;
        const yearsLeft = expectancyMili - age;
        return yearsLeft;
    }
}
