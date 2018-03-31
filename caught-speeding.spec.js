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
})