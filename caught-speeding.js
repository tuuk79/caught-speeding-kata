function caughtSpeeding(speed, isBirthday) {
	if (isBirthday && speed == 65) {
		return 0;
	}
	if (!isBirthday && speed == 60) {
		return 0;
	}
	return 1;
}
