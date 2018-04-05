describe('caughtSpeeding', () => {
	it('should return 0 if speed is 60 and it is not birthday', () => {
		const speed = 60;
		const isBirthday = false;
		const expected = 0;
		const result = caughtSpeeding(speed, isBirthday);
		expect(expected).toEqual(result);
	});

	it('should return 1 if speed is 65 and it is not birthday', () => {
		const speed = 65;
		const isBirthday = false;
		const expected = 1;
		const result = caughtSpeeding(speed, isBirthday);
		expect(expected).toEqual(result);
	});

	it('should return 0 if speed is 65 and it is birthday', () => {
		const speed = 65;
		const isBirthday = true;
		const expected = 0;
		const result = caughtSpeeding(speed, isBirthday);
		expect(expected).toEqual(result);
	});

	it('should return 1 if speed is over 60 but less than 80 and it is not your birthday', () => {         
		const speed = Math.floor(Math.random() * (80 - 61 + 1)) + 61;        
		const isBirthday = false;         
		const expected = 1;         
		const result = caughtSpeeding(speed, isBirthday);         
		expect(expected).toEqual(result);     
	});

	it('should return 2 if speed is over 80 and it is not your birthday', () => { 		
		const speed = Math.floor(Math.random() * 10 + 80); 		
		const isBirthday = false; 		
		const expected = 2; 		
		const result = caughtSpeeding(speed, isBirthday); 		
		expect(expected).toEqual(result); 
	});	

	it('should return 1 if speed is between 80 and 85 and it is your birthday', () => {
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

	it('should return 1 if speed is between 65 and 85 and is your birthday', () => {
		const speed = Math.floor(Math.random() * (85 - 65 + 1)) + 65;
		const isBirthday = true;
		const expected = 1;
		const result = caughtSpeeding(speed, isBirthday);
		expect(expected).toEqual(result);
	});
})
