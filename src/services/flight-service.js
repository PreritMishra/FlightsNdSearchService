const {FlightRepository, AirplaneRepository} = require('../repository/index');

class FlightService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }


    async createFlight(data){
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({
                ...data, totalSeats:airplane.capacity 
        
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async getFlightData(){
        //todo
    }
}

module.exports = FlightService;


/**
 * {
 *  flightNumber
 * airplaneId
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats -> airplane(we have to fetch from airplane only)
 * }
 */