

// 1.Jelly beans  2.Lollipops are Candy is picked



describe("Candy Counter", function() {
// the function below gets the amount of Jellybeans removed from the bin
    function getJellyBeans(remove) {
        const Jellybeans = 510;
        let newJellybeans = Jellybeans - remove;
        return newJellybeans;
    }
    getJellyBeans(20);
    
// the function below gets the amount of Lollopops added to the bin
    function getLollipops(add) {
        const Lollipops = 4;
        let newLollipops = Lollipops + add;
        return newLollipops;
    }
    
    getLollipops(600);
   
   
   
    describe("when someone removes 20 Jelly beans candies from a candy bin of 510 Jelly beans", function() {
        it("should automatically decrease by 20", function() {
            expect(getJellyBeans(20)).toEqual(490);
        };
    });
    describe("when an employee adds 600 Lollipops candies to a candy bin of 4 Lollipops", function() {
        it("should automatically increases by 600", function() {
            expect(getLollipops(20)).toEqual(604);
        };
    });

    describe("when some candy is taken from a particular type of candy", function() {
        it("should automatically only decrease from that particular type of candy ", function() {
            expect(getBothJellyAndLollipops(20,0)).toEqual(490);
            expect(getBothJellyAndLollipops(0,2)).toEqual(2);
        };
    });
});