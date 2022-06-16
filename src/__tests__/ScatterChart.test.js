import ScatterChart from "../components/ScatterChart";

describe('ScatterChart', function () {
    describe('getCityFromLocation', function () {
        it('should extract the city when the city is seperated from the county by comma', () => {
            expect(ScatterChart.getCityFromLocation("Munich, Germany")).toEqual("Munich");
        });

        it('should extract the city when the city is seperated from the county by dash', () => {
            expect(ScatterChart.getCityFromLocation("Dubai - UE")).toEqual("Dubai");
        });
    });
});