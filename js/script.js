var mike = {
	hairColor: 'blue',
	height: '1.76m',
	weight: '74kg',
	gender: 'male',
	hobbies: ['football','basketball','gym','reading','meditation'],
	single: true,
	relationship: function (isOn){
		if (isOn == true) {
			this.single = false;
			alert('His gf name is Laura!!');
		}else{
			this.single = true;
			alert('He doesnt have a gf!!');
		}
	}
}
