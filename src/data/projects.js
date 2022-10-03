import delivery from "../assets/delivery.jpg";
import stocks from "../assets/stocks.jpg";
import weather from "../assets/weather.jpg";

export const projectObject = [
    {
        "projectName": "DeliveryTracker",
        "description": "System designed in Microservice architerchure in Node.js that tracks deliveries over the world to Israel.",
        "tags": ["Node.js", "Kafka", "Postgres SQL", "REDIS"],
        "imageURL": delivery
    },
    {
        "projectName": "Weather Dashboard Telemetrics",
        "description": "A Fullstack project, developed in MERN architerchure to be used by the Observatory in Ariel university.",
        "tags": ["Node.js", "React.js", "REDUX", "MongoDB"],
        "imageURL": weather
    },
    {
        "projectName": "GetStock",
        "description": "A mobile app developed in JAVA, used to trade Stocks with brokers",
        "tags": ["JAVA", "Android Studio", "FireBase", "MongoDB"],
        "imageURL": stocks
    }
]