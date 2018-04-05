function caughtSpeeding(speed, isBirthday) {
	if (isBirthday){
		if (speed <= 65) {
			return 0;
		}
		else if( speed <= 85){
			return 1;
		}
		else {
			return 2;
		}
	}
	else {
		if (speed > 60 && speed < 80) {
			return 1;
		}
		else if(speed > 79){
			return 2;
		}
		else {
			return 0;
		}
	}
}
