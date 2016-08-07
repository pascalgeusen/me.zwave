"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/145

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: true,
	capabilities: {
		onoff: 
		[
				{
					command_class			: 'COMMAND_CLASS_SWITCH_BINARY',
					command_get				: 'SWITCH_BINARY_GET',
					command_set				: 'SWITCH_BINARY_SET',
					command_set_parser		: value => {
						return { 'Switch Value': value }
					}
				},
				{
					command_class			: "COMMAND_CLASS_SWITCH_BINARY",
					command_report			: 'SWITCH_BINARY_REPORT',
					command_report_parser	: report => {
						return report['Value'] === 'on/enable';
					}
				}
		]/*,
		measure_power: {
			command_class: 'COMMAND_CLASS_METER',
			command_get: 'METER_GET',
			command_get_parser: () => {
				return {
					'Sensor Type': 'Electric meter',
					'Properties1': {
						'Rate Type': 0,
						'Scale': 2
					}
				}
			},
			command_report: 'METER_REPORT',
			command_report_parser: report => report['Meter Value (Parsed)']
		}*/
	},
	settings: {
		"switch_first_channel_off_after": {
			"index": 2,
			"size": 2,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
		"energy_consumption_first_channel": {
			"index": 20,
			"size": 2,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
		"switch_second_channel_off_after": {
			"index": 22,
			"size": 2,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
		"energy_consumption_second_channel": {
			"index": 40,
			"size": 2,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		}
	}
})
