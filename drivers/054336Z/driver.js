"use strict";

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/145

module.exports = new ZwaveDriver(path.basename(__dirname), {
		debug : false,
		capabilities : {
			'onoff' : {
				'command_class' : 'COMMAND_CLASS_SWITCH_MULTILEVEL',
				'command_get' : 'SWITCH_MULTILEVEL_GET',
				'command_set' : 'SWITCH_MULTILEVEL_SET',
				'command_set_parser' : function (value) {
					return {
						'Value' : value ? 'on/enable' : 'off/disable',
						'Dimming Duration' : 1
					}
				},
				'command_report' : 'SWITCH_MULTILEVEL_REPORT',
				'command_report_parser' : function (report) {
					return report['Value (Raw)'][0] > 0;
				}
			},
			'dim' : {
				'command_class' : 'COMMAND_CLASS_SWITCH_MULTILEVEL',
				'command_get' : 'SWITCH_MULTILEVEL_GET',
				'command_set' : 'SWITCH_MULTILEVEL_SET',
				'command_set_parser' : function (value) {
					return {
						'Value' : Math.min(value * 100, 99),
						'Dimming Duration' : 1
					}
				},
				'command_report' : 'SWITCH_MULTILEVEL_REPORT',
				'command_report_parser' : function (report) {
					return report['Value (Raw)'][0] / 100;
				}
			}
		},
		settings : {
			"led_mode" : {
				"index" : 1,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"auto_off" : {
				"index" : 2,
				"size" : 2,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"rf_off_command" : {
				"index" : 3,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"start_level" : {
				"index" : 4,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"dimming_speed" : {
				"index" : 5,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"dimming_long_speed" : {
				"index" : 6,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"max_light_level_on_click" : {
				"index" : 7,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"baby_dimming_time" : {
				"index" : 8,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"target_dimming_level" : {
				"index" : 9,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"click_timeout" : {
				"index" : 10,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"invert_buttons" : {
				"index" : 11,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"switch_by_buttons" : {
				"index" : 12,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"action_on_single_press_or_hold" : {
				"index" : 13,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"action_on_double_press_or_hold" : {
				"index" : 14,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
			"switch_all_commands" : {
				"index" : 15,
				"size" : 1,
				"parser" : function (input) {
					return new Buffer([parseInt(input)]);
				}
			},
		}
	})
