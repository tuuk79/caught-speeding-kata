function caughtSpeeding(speed, isBirthday) {
	if (isBirthday && speed == 65) {
		return 0;
	}
	else if (isBirthday && (speed >= 60 && speed <= 65)) {
		return 0;
	}
	else if (!isBirthday && speed == 60) {
		return 0;
	}
	else {
		return 1;
	}
}
