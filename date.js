'use strict';

/**
 * @constructor
 */
function Dates() {

    /**
     *
     * @type {*}
     */
    let date = {};

    /**
     *
     * @return {number}
     */
    Date.prototype.timeStamp = function() {

        return Math.floor(this.getTime() / 1000);
    };

    /**
     *
     * @return {string}
     */
    Date.prototype.dateUs = function() {

        let m = this.getMonth() + 1;
        let d = this.getDate();

        return [
            this.getFullYear(),
            (m > 9 ? '' : '0') + m,
            (d > 9 ? '' : '0') + d
        ].join('-');
    };

    /**
     *
     * @return {string}
     */
    Date.prototype.dateTimeUs = function() {

        let s = this.getSeconds();
        let min = this.getMinutes();
        let h = this.getHours();
        let d = this.getDate();
        let m = this.getMonth() + 1;

        let date = [
            this.getFullYear(),
            (m > 9 ? '' : '0') + m,
            (d > 9 ? '' : '0') + d
        ].join('-');

        let time = [
            (h > 9 ? '' : '0') + h,
            (min > 9 ? '' : '0') + min,
            (s > 9 ? '' : '0') + s
        ].join(':');

        return date + ' ' + time;
    };

    /**
     *
     * @return {string}
     */
    Date.prototype.dateDe = function() {
        let m = this.getMonth() + 1;
        let d = this.getDate();

        return [
            (d > 9 ? '' : '0') + d,
            (m > 9 ? '' : '0') + m,
            this.getFullYear()
        ].join('.');
    };

    /**
     *
     * @return {string}
     */
    Date.prototype.dateTimeDe = function() {

        let s = this.getSeconds();
        let min = this.getMinutes();
        let h = this.getHours();
        let d = this.getDate();
        let m = this.getMonth() + 1;

        let date = [
            (d > 9 ? '' : '0') + d,
            (m > 9 ? '' : '0') + m,
            this.getFullYear()
        ].join('.');

        let time = [
            (h > 9 ? '' : '0') + h,
            (min > 9 ? '' : '0') + min,
            (s > 9 ? '' : '0') + s
        ].join(':');

        return date + ' ' + time;
    };

    /**
     *
     * @param {number} days
     * @return {Date}
     */
    Date.prototype.addDays = function(days) {

        if (days > 0) {

            this.setDate(this.getDate() + days);
        }
        return this;
    };

    /**
     *
     * @param {number} days
     * @return {Date}
     */
    Date.prototype.subDays = function(days) {

        if (days > 0) {
            this.setDate(this.getDate() - days);
        }
        return this;
    };

    /**
     *
     * @param {string|Date} d
     * @return {string}
     */
    date.getTimeDe = (d) => {

        let time = '';

        if (d.getHours() < 10)
            time += '0' + d.getHours();
        else
            time += d.getHours();

        if (d.getMinutes() < 10)
            time += ':0' + d.getMinutes();
        else
            time += ':' + d.getMinutes();

        if (d.getSeconds() < 10)
            time += ':0' + d.getSeconds();
        else
            time += ':' + d.getSeconds();

        if (d.getMilliseconds() < 10)
            time += '.00' + d.getMilliseconds();
        else if (d.getMilliseconds() >= 10 && d.getMilliseconds() < 100)
            time += '.0' + d.getMilliseconds();
        else
            time += '.' + d.getMilliseconds();

        return time;
    };

    /**
     *
     * @param {string|Date} ts
     * @return {number}
     */
    date.getJulian = function(ts) {

        let tstamp = new Date(ts);
        return (tstamp / 86400000) - (tstamp.getTimezoneOffset() / 1440) + 2440587.5;
    };

    /**
     *
     * @param {string|Date} start
     * @param {string|Date} end
     * @return {number}
     */
    date.calcJulianDays = function(start, end) {

        start = new Date(start);
        end = new Date(end);
        return this.getJulian(start) - this.getJulian(end);
    };

    /**
     *
     * @param {string|Date} dateStart
     * @param {string|Date} dateEnd
     * @return {number}
     */
    date.diff = (dateStart, dateEnd) => {

        dateStart = new Date(dateStart);
        dateEnd = new Date(dateEnd);
        //console.log('get date diff with params dateStart: ' + dateStart + ', dateEnd: ' + dateEnd, 'utils.date.diff');
        let diff = dateEnd.getTime() - dateStart.getTime();
        return parseInt(diff) / (24 * 60 * 60 * 1000);
    };

    return date;
}

module.exports = Dates;