/**
 * calculates sun position for a given date and latitude/longitude
 * @param {number|Date} dateValue Date object or timestamp for calculating sun-position
 * @param {number} lat latitude for calculating sun-position
 * @param {number} lng longitude for calculating sun-position
 * @return {ISunPosition} result object of sun-position
*/
export function getPosition(dateValue: number | Date, lat: number, lng: number): ISunPosition;
export var times: Array<ISunTimeNames>;
export var timesDeprecated: Array<[string, string]>;
/** adds a custom time to the times config
 * @param {number} angleAltitude - angle of Altitude/elevation above the horizont of the sun in degrees
 * @param {string} riseName - name of sun rise (morning name)
 * @param {string} setName  - name of sun set (evening name)
 * @param {number} [risePos]  - (optional) position at rise (morning)
 * @param {number} [setPos]  - (optional) position at set (evening)
 * @param {boolean} [degree=true] defines if the elevationAngle is in degree not in radians
 * @return {Boolean} true if new time could be added, false if not (parameter missing; riseName or setName already existing)
 */
export function addTime(angleAltitude: number, riseName: string, setName: string, risePos?: number, setPos?: number, degree?: boolean): boolean;
/**
 * add an alternate name for a sun time
 * @param {string} alternameName    - alternate or deprecated time name
 * @param {string} originalName     - original time name from SunCalc.times array
 * @return {Boolean} true if could be added, false if not (parameter missing; originalName does not exists; alternameName already existis)
 */
export function addDeprecatedTimeName(alternameName: string, originalName: string): boolean;
/**
 * calculates sun times for a given date and latitude/longitude
 * @param {number|Date} dateValue Date object or timestamp for calculating sun-times
 * @param {number} lat latitude for calculating sun-times
 * @param {number} lng longitude for calculating sun-times
 * @param {number} [height=0]  the observer height (in meters) relative to the horizon
 * @param {boolean} [addDeprecated=false] if true to times from timesDeprecated array will be added to the object
 * @param {boolean} [inUTC=false] defines if the calculation should be in utc or local time (default is local)
 * @param {boolean} [dateAsIs=false] use the provided `dateValue` as is, instead of using non-TZ friendly logic to set the time part of the value to noon.
 * @return {ISunTimeList} result object of sunTime
 */
export function getSunTimes(dateValue: number | Date, lat: number, lng: number, height?: number, addDeprecated?: boolean, inUTC?: boolean, dateAsIs?: boolean): ISunTimeList;
/**
 * calculates the time at which the sun will have a given elevation angle when rising and when setting for a given date and latitude/longitude.
 * @param {number|Date} dateValue Date object or timestamp for calculating sun-times
 * @param {number} lat latitude for calculating sun-times
 * @param {number} lng longitude for calculating sun-times
 * @param {number} elevationAngle sun angle for calculating sun-time
 * @param {number} [height=0]  the observer height (in meters) relative to the horizon
 * @param {boolean} [degree] defines if the elevationAngle is in degree not in radians
 * @param {boolean} [inUTC] defines if the calculation should be in utc or local time (default is local)
 * @return {ISunTimeSingle} result object of single sunTime
 */
export function getSunTime(dateValue: number | Date, lat: number, lng: number, elevationAngle: number, height?: number, degree?: boolean, inUTC?: boolean): ISunTimeSingle;
/**
 * calculates time for a given azimuth angle for a given date and latitude/longitude
 * @param {number|Date} dateValue Date object or timestamp for calculating sun-time
 * @param {number} nazimuth azimuth for calculating sun-time
 * @param {number} lat latitude for calculating sun-time
 * @param {number} lng longitude for calculating sun-time
 * @param {boolean} [degree] true if the angle is in degree and not in rad
 * @return {Date} result time of sun-time
*/
export function getSunTimeByAzimuth(dateValue: number | Date, lat: number, lng: number, nazimuth: number, degree?: boolean): Date;
/**
 * Calculaes the solar time of the given date in the given latitude and UTC offset.
 * @param {number|Date} dateValue Date object or timestamp for calculating solar time
 * @param {number} lng longitude for calculating sun-time
 * @param {number} utcOffset offset to the utc time
 * @returns {Date} Returns the solar time of the given date in the given latitude and UTC offset.
 */
export function getSolarTime(dateValue: number | Date, lng: number, utcOffset: number): Date;
/**
 * calculates moon position for a given date and latitude/longitude
 * @param {number|Date} dateValue Date object or timestamp for calculating moon-position
 * @param {number} lat latitude for calculating moon-position
 * @param {number} lng longitude for calculating moon-position
 * @return {IMoonPosition} result object of moon-position
 */
export function getMoonPosition(dateValue: number | Date, lat: number, lng: number): IMoonPosition;
export var moonCycles: {
    from: number;
    to: number;
    id: string;
    emoji: string;
    code: string;
    name: string;
    weight: number;
    css: string;
}[];
/**
 * calculations for illumination parameters of the moon,
 * based on http://idlastro.gsfc.nasa.gov/ftp/pro/astro/mphase.pro formulas and
 * Chapter 48 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
 * @param {number|Date} dateValue Date object or timestamp for calculating moon-illumination
 * @return {IMoonIllumination} result object of moon-illumination
 */
export function getMoonIllumination(dateValue: number | Date): IMoonIllumination;
/**
 * calculations moon position and illumination for a given date and latitude/longitude of the moon,
 * @param {number|Date} dateValue Date object or timestamp for calculating moon-illumination
 * @param {number} lat latitude for calculating moon-position
 * @param {number} lng longitude for calculating moon-position
 * @return {IMoonData} result object of moon-illumination
 */
export function getMoonData(dateValue: number | Date, lat: number, lng: number): IMoonData;
/**
 * calculations for moon rise/set times are based on http://www.stargazing.net/kepler/moonrise.html article
 * @param {number|Date} dateValue Date object or timestamp for calculating moon-times
 * @param {number} lat latitude for calculating moon-times
 * @param {number} lng longitude for calculating moon-times
 * @param {boolean} [inUTC] defines if the calculation should be in utc or local time (default is local)
 * @param {boolean} [dateAsIs=false] use the provided `dateValue` as is, instead of using non-TZ friendly logic to set the time part of the value to noon.
 * @return {IMoonTimes} result object of sunTime
 */
export function getMoonTimes(dateValue: number | Date, lat: number, lng: number, inUTC?: boolean, dateAsIs?: boolean): IMoonTimes;
/**
 * calculated the moon transit
 * @param {number|Date} rise rise time as Date object or timestamp for calculating moon-transit
 * @param {number|Date} set set time as Date object or timestamp for calculating moon-transit
 * @param {number} lat latitude for calculating moon-times
 * @param {number} lng longitude for calculating moon-times
 * @returns {{main: (Date|null), invert: (Date|null)}}
 */
export function moonTransit(rise: number | Date, set: number | Date, lat: number, lng: number): {
    main: (Date | null);
    invert: (Date | null);
};
export type ISunTimeDef = {
    /**
     * - The Name of the time
     */
    name: string;
    /**
     * - Date object with the calculated sun-time
     */
    value: Date;
    /**
     * - The time as timestamp
     */
    ts: number;
    /**
     * - The position of the sun on the time
     */
    pos: number;
    /**
     * - Angle of the sun on the time (except for solarNoon / nadir)
     */
    elevation?: number;
    /**
     * - The time as Julian calendar
     */
    julian: number;
    /**
     * - indicates if the time is valid or not
     */
    valid: boolean;
    /**
     * - indicates if the time is a deprecated time name
     */
    deprecated?: boolean;
    /**
     * - if it is a deprecated name, the original property name
     */
    nameOrg?: string;
    /**
     * - if it is a deprecated name, the original position
     */
    posOrg?: number;
};
export type ISunTimeSingle = {
    /**
     * - sun-time for sun rise
     */
    rise: ISunTimeDef;
    /**
     * - sun-time for sun set
     */
    set: ISunTimeDef;
    /**
     * - string of an error message if an error occurs
     */
    error?: string;
};
export type ISunTimeList = {
    /**
     * - The sun-time for the solar noon (sun is in the highest position)
     */
    solarNoon: ISunTimeDef;
    /**
     * - The sun-time for nadir (darkest moment of the night, sun is in the lowest position)
     */
    nadir: ISunTimeDef;
    /**
     * - The sun-time for morning golden hour (soft light, best time for photography)
     */
    goldenHourDawnStart: ISunTimeDef;
    /**
     * - The sun-time for morning golden hour (soft light, best time for photography)
     */
    goldenHourDawnEnd: ISunTimeDef;
    /**
     * - The sun-time for evening golden hour starts
     */
    goldenHourDuskStart: ISunTimeDef;
    /**
     * - The sun-time for evening golden hour starts
     */
    goldenHourDuskEnd: ISunTimeDef;
    /**
     * - The sun-time for sunrise starts (top edge of the sun appears on the horizon)
     */
    sunriseStart: ISunTimeDef;
    /**
     * - The sun-time for sunrise ends (bottom edge of the sun touches the horizon)
     */
    sunriseEnd: ISunTimeDef;
    /**
     * - The sun-time for sunset starts (bottom edge of the sun touches the horizon)
     */
    sunsetStart: ISunTimeDef;
    /**
     * - The sun-time for sunset ends (sun disappears below the horizon, evening civil twilight starts)
     */
    sunsetEnd: ISunTimeDef;
    /**
     * - The sun-time for blue Hour start (time for special photography photos starts)
     */
    blueHourDawnStart: ISunTimeDef;
    /**
     * - The sun-time for blue Hour end (time for special photography photos end)
     */
    blueHourDawnEnd: ISunTimeDef;
    /**
     * - The sun-time for blue Hour start (time for special photography photos starts)
     */
    blueHourDuskStart: ISunTimeDef;
    /**
     * - The sun-time for blue Hour end (time for special photography photos end)
     */
    blueHourDuskEnd: ISunTimeDef;
    /**
     * - The sun-time for dawn (morning nautical twilight ends, morning civil twilight starts)
     */
    civilDawn: ISunTimeDef;
    /**
     * - The sun-time for dusk (evening nautical twilight starts)
     */
    civilDusk: ISunTimeDef;
    /**
     * - The sun-time for nautical dawn (morning nautical twilight starts)
     */
    nauticalDawn: ISunTimeDef;
    /**
     * - The sun-time for nautical dusk end (evening astronomical twilight starts)
     */
    nauticalDusk: ISunTimeDef;
    /**
     * - The sun-time for amateur astronomical dawn (sun at 12° before sunrise)
     */
    amateurDawn: ISunTimeDef;
    /**
     * - The sun-time for amateur astronomical dusk (sun at 12° after sunrise)
     */
    amateurDusk: ISunTimeDef;
    /**
     * - The sun-time for night ends (morning astronomical twilight starts)
     */
    astronomicalDawn: ISunTimeDef;
    /**
     * - The sun-time for night starts (dark enough for astronomical observations)
     */
    astronomicalDusk: ISunTimeDef;
    /**
     * - Deprecated: alternate for civilDawn
     */
    dawn?: ISunTimeDef;
    /**
     * - Deprecated: alternate for civilDusk
     */
    dusk?: ISunTimeDef;
    /**
     * - Deprecated: alternate for astronomicalDawn
     */
    nightEnd?: ISunTimeDef;
    /**
     * - Deprecated: alternate for astronomicalDusk
     */
    night?: ISunTimeDef;
    /**
     * - Deprecated: alternate for astronomicalDusk
     */
    nightStart?: ISunTimeDef;
    /**
     * - Deprecated: alternate for goldenHourDuskStart
     */
    goldenHour?: ISunTimeDef;
    /**
     * - Deprecated: alternate for sunsetEnd
     */
    sunset?: ISunTimeDef;
    /**
     * - Deprecated: alternate for sunriseStart
     */
    sunrise?: ISunTimeDef;
    /**
     * - Deprecated: alternate for goldenHourDawnEnd
     */
    goldenHourEnd?: ISunTimeDef;
    /**
     * - Deprecated: alternate for goldenHourDuskStart
     */
    goldenHourStart?: ISunTimeDef;
};
export type ISunTimeNames = {
    /**
     * -   angle of the sun position in degrees
     */
    angle: number;
    /**
     * -   name of sun rise (morning name)
     */
    riseName: string;
    /**
     * -   name of sun set (evening name)
     */
    setName: string;
    /**
     * -   (optional) position at rise
     */
    risePos?: number;
    /**
     * -   (optional) position at set
     */
    setPos?: number;
};
export type ISunCoordinates = {
    /**
     * - The declination of the sun
     */
    dec: number;
    /**
     * - The right ascension of the sun
     */
    ra: number;
};
export type ISunPosition = {
    /**
     * - The azimuth above the horizon of the sun in radians
     */
    azimuth: number;
    /**
     * - The altitude of the sun in radians
     */
    altitude: number;
    /**
     * - The zenith of the sun in radians
     */
    zenith: number;
    /**
     * - The azimuth of the sun in decimal degree
     */
    azimuthDegrees: number;
    /**
     * - The altitude of the sun in decimal degree
     */
    altitudeDegrees: number;
    /**
     * - The zenith of the sun in decimal degree
     */
    zenithDegrees: number;
    /**
     * - The declination of the sun
     */
    declination: number;
};
export type IMoonPosition = {
    /**
     * - The moon azimuth in radians
     */
    azimuth: number;
    /**
     * - The moon altitude above the horizon in radians
     */
    altitude: number;
    /**
     * - The moon azimuth in degree
     */
    azimuthDegrees: number;
    /**
     * - The moon altitude above the horizon in degree
     */
    altitudeDegrees: number;
    /**
     * - The distance of the moon to the earth in kilometers
     */
    distance: number;
    /**
     * - The parallactic angle of the moon
     */
    parallacticAngle: number;
    /**
     * - The parallactic angle of the moon in degree
     */
    parallacticAngleDegrees: number;
};
export type IDateObj = {
    /**
     * - The Date as a ISO String YYYY-MM-TTTHH:MM:SS.mmmmZ
     */
    date: string;
    /**
     * - The Date as the milliseconds since 1.1.1970 0:00 UTC
     */
    value: number;
};
export type IPhaseObj = {
    /**
     * - The phase start
     */
    from: number;
    /**
     * - The phase end
     */
    to: number;
    /**
     * - id of the phase
     */
    id: ('newMoon' | 'waxingCrescentMoon' | 'firstQuarterMoon' | 'waxingGibbousMoon' | 'fullMoon' | 'waningGibbousMoon' | 'thirdQuarterMoon' | 'waningCrescentMoon');
    /**
     * - unicode symbol of the phase
     */
    emoji: string;
    /**
     * - name of the phase
     */
    name: string;
    /**
     * - weight of the phase
     */
    weight: number;
    /**
     * - a css value of the phase
     */
    css: string;
    /**
     * - an alernate name (not used by this library)
     */
    nameAlt?: string;
    /**
     * - additional tag (not used by this library)
     */
    tag?: string;
};
export type IMoonIlluminationNext = {
    /**
     * - The Date as a ISO String YYYY-MM-TTTHH:MM:SS.mmmmZ of the next phase
     */
    date: string;
    /**
     * - The Date as the milliseconds since 1.1.1970 0:00 UTC of the next phase
     */
    value: number;
    /**
     * - The name of the next phase [newMoon, fullMoon, firstQuarter, thirdQuarter]
     */
    type: string;
    /**
     * - Date of the next new moon
     */
    newMoon: IDateObj;
    /**
     * - Date of the next full moon
     */
    fullMoon: IDateObj;
    /**
     * - Date of the next first quater of the moon
     */
    firstQuarter: IDateObj;
    /**
     * - Date of the next third/last quater of the moon
     */
    thirdQuarter: IDateObj;
};
export type IMoonIllumination = {
    /**
     * - illuminated fraction of the moon; varies from `0.0` (new moon) to `1.0` (full moon)
     */
    fraction: number;
    /**
     * - moon phase as object
     */
    phase: IPhaseObj;
    /**
     * - The phase of the moon in the current cycle; varies from `0.0` to `1.0`
     */
    phaseValue: number;
    /**
     * - The midpoint angle in radians of the illuminated limb of the moon reckoned eastward from the north point of the disk;
     */
    angle: number;
    /**
     * - object containing information about the next phases of the moon
     */
    next: IMoonIlluminationNext;
};
export type IMoonDataInst = {
    /**
     * - The zenith angle of the moon
     */
    zenithAngle: number;
    /**
     * - object containing information about the next phases of the moon
     */
    illumination: IMoonIllumination;
};
export type IMoonData = IMoonPosition & IMoonDataInst;
export type IMoonTimes = {
    /**
     * - a Date object if the moon is rising on the given Date, otherwise NaN
     */
    rise: Date | number;
    /**
     * - a Date object if the moon is setting on the given Date, otherwise NaN
     */
    set: Date | number;
    /**
     * - is true if the moon never rises/sets and is always _above_ the horizon during the day
     */
    alwaysUp: boolean;
    /**
     * - is true if the moon is always _below_ the horizon
     */
    alwaysDown: boolean;
    /**
     * - Date of the highest position, only avalílable if set and rise is not NaN
     */
    highest?: Date;
};
//# sourceMappingURL=suncalc.d.ts.map