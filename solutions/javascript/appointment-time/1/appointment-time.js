// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  console.log(now)
  let msDays = days*24*60*60*1000;
  let msNow = now !== undefined ? now : Date.now();
  return new Date(msNow + msDays);
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let date = new Date(timestamp);
  console.log(date)
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const oldAppointment = new Date(timestamp);
  let newAppointment = new Date(timestamp);
  newAppointment.setFullYear(options.year === 0 ? 0 : options.year || oldAppointment.getFullYear())
  newAppointment.setMonth(options.month === 0 ? 0 : options.month || oldAppointment.getMonth());
  newAppointment.setDate(options.date === 0 ? 0 : options.date || oldAppointment.getDate());
  newAppointment.setHours(options.hour === 0 ? 0 : options.hour || oldAppointment.getHours());
  newAppointment.setMinutes(options.minute === 0 ? 0 : options.minute || oldAppointment.getMinutes());
  
  return {
    year: newAppointment.getFullYear(),
    month: newAppointment.getMonth(),
    date: newAppointment.getDate(),
    hour: newAppointment.getHours(),
    minute: newAppointment.getMinutes()
  }
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  return Math.round((new Date(timestampB).getTime() - new Date(timestampA).getTime()) / 1000)
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(appointmentTimestamp).getTime() > new Date(currentTimestamp).getTime();
}
