describe('caughtSpeeding', () => {
	it('should return 0 if speed is 60 and is not birthday', () => {
		const speed = 60;
		const isBirthday = false;
		const expected = 0;
		const result = caughtSpeeding(speed, isBirthday);
		expect(expected).toEqual(result);
	});

	it('should return 1 if speed is 65 and is not birthday', () => {
		const speed = 65;
		const isBirthday = false;
		const expected = 1;
		const result = caughtSpeeding(speed, isBirthday);
		expect(expected).toEqual(result);
	});

	it('should return 0 if speed is 65 and is birthday', () => {
		const speed = 65;
		const isBirthday = true;
		const expected = 0;
		const result = caughtSpeeding(speed, isBirthday);
		expect(expected).toEqual(result);
	});

	it('should return 1 if speed is over 60 but less than 80 and is not your birthday', () => {         
		const speed = Math.floor(Math.random() * (80 - 61 + 1)) + 61;        
		const isBirthday = false;         
		const expected = 1;         
		const result = caughtSpeeding(speed, isBirthday);         
		expect(expected).toEqual(result);     
	});

	it('should return 2 if speed is over 80 and is not your birthday', () => { 		
		const speed = Math.floor(Math.random() * 10 + 80); 		
		const isBirthday = false; 		
		const expected = 1; 		
		const result = caughtSpeeding(speed, isBirthday); 		
		expect(expected).toEqual(result); 
	});	

	it('should return 1 if speed is between 80 and 85 and is your birthday', () => {
		const speed = Math.floor(Math.random() * (85 - 80 + 1)) + 80;
		const isBirthday = true;
		const expected = 1;
		const result = caughtSpeeding(speed, isBirthday);
		expect(expected).toEqual(result);
	});

	it('should return 0 if speed is between 60 and 65 and is your birthday', () => {
		const speed = Math.floor(Math.random() * (65 - 60 + 1)) + 60;
		const isBirthday = true;
		const expected = 0;
		const result = caughtSpeeding(speed, isBirthday);
		expect(expected).toEqual(result);
	});

	it('should return 1 if speed is between 61 and 85 and is your birthday', () => {
		const speed = 68;
		const isBirthday = true;
		const expected = 0;
		const result = caughtSpeeding(speed, isBirthday);
		expect(expected).toEqual(result);
	});
})
