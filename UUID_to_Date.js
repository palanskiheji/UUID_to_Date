(function() {
	var GREGORIAN_OFFSET = 122192928000000000;
	this.UUID_to_Date = {
		uuid__to__time_int: function (uuid_str) {
			// uuid_str like	=>		'11111111-2222-#333-4444-555555555555'
			var uuid_arr = uuid_str.split('-'),
			
				time_str = [
					uuid_arr[2].substring(1),
					uuid_arr[1],
					uuid_arr[0]
				].join('');
				// time_str is convert  '11111111-2222-#333-4444-555555555555'  to  '333222211111111'
			
			return parseInt( time_str, 16 );
		},
		
		uuid__to__date_obj: function (uuid_str) {
			// uuid_str like	=>		'11111111-2222-#333-4444-555555555555'
			// set_TZO: Boolean	=>		if set True, add client Timezone, you can use 
			var int_time = this.uuid__to__time_int( uuid_str ) - GREGORIAN_OFFSET,
				int_millisec = Math.floor( int_time/10000 );
			return new Date( int_millisec );
		}
	};
}).call(this);
