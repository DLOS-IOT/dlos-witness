/*jslint node: true */
"use strict";

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.storage = 'sqlite';

exports.admin_email='witness';
exports.from_email='witness';

exports.hub = 'dlos.cn/ds';
exports.deviceName = 'Witness';
exports.permanent_pairing_secret = 'randomstring';
exports.control_addresses = ['DEVICE ALLOWED TO CHAT'];
exports.payout_address = 'XQ7PQ3ZLE5MEESCX2CV3PPKIWHFKQ3H6';

exports.bSingleAddress = true;
exports.THRESHOLD_DISTANCE = 50;
exports.MIN_INTERVAL = 60*1000; // min interval between witnessings in milliseconds
exports.MIN_AVAILABLE_WITNESSINGS = 100;

exports.KEYS_FILENAME = 'keys.json';

console.log('finished witness conf');
