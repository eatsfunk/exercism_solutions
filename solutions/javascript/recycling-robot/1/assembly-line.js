// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
export function isNumber(value) {
  console.log('now inside isNumber()')
  if ( value === Infinity ) return false;
  if ( Number.isNaN(value) ) return false;
  if ( typeof value === 'bigint' ) return true;
  return typeof value === 'number';
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an object.
 */
export function isObject(value) {
  console.log('now inside isObject()')
  if ( value === null ) return false;
  return typeof value === 'object';
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
  console.log('now inside isNumericString()')
  console.log('value =', value, 'value instanceof String =', value instanceof String);
  
  if (value === '' || value === '-' || !value || !value instanceof String || typeof value === 'symbol' || value instanceof Array || typeof value === 'boolean' ) return false;
let dashCount = 0;

  if (typeof value === 'string') {
    value.split('').forEach((char) => {if (char === '-') dashCount++})
  }
  if (dashCount > 1) return false;
  let numStr = "-0123456789";
  let isNumStr
  if (typeof value === 'string') {
      isNumStr = value.split('').every( char =>  typeof char === 'string'  && numStr.includes(char));
  }
  
  console.log('isNumStr =', isNumStr);
  return isNumStr;
}

/**
 * Checks if an object is an instance of the `ElectronicDevice` class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the `ElectronicDevice` class or one of its children.
 */
export function isElectronic(object) {
  console.log('now inside isElectronic()')
  return object instanceof ElectronicDevice;
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
  console.log('now inside isNonEmptyArray()')
  return Array.isArray(value) && value.length > 0;
}

/**
 * Checks if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
  console.log('now inside isEmptyArray()')
  return Array.isArray(value) && value.length <= 0;
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property or method.
 */
export function hasType(object) {
  console.log('now inside hasType()')
  return 'type' in object;
}

/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {never|void} undefined if the input has an "id" property or method, otherwise throws an error.
 */
export function assertHasId(object) {
  console.log('now inside assertHasId()')
 if ('id' in object) return;
  
  throw new Error("Object is missing the 'id' property");
}

/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has an "id" property.
 */
export function hasIdProperty(object) {
  console.log('now inside hasIdProperty()')
  return Object.hasOwn(object, 'id');
}

/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
  console.log('now inside hasDefinedType()')
  return Object.hasOwn(object, 'type') && object.type !== undefined;
}
