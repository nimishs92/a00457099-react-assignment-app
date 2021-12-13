import ShowWeather from "./ShowWeather";

function MyTown() {
    return(
        <div class="p-5">
            <img 
            src = "https://www.ctvnews.ca/polopoly_fs/1.2649208.1447081689!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg" 
            height = "200"
            width = "300" class = "p-2"/>
            <h1 class = "p-2"> I live in Halifax</h1> 
            <h2 class = "p-2"> 
                Halifax is a city on the east coast of Canada. It is the capital of the maritime province of Nova Scotia.
                People from Halifax call themselves Haligonian.
            </h2>
            <ShowWeather city="Halifax"></ShowWeather>
            <img 
            src = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Mumbai_skyline_BWSL.jpg" 
            height = "200"
            width = "300" class = "p-2"/>
            <h1 class = "p-2">I am from Mumbai</h1>
            <h2 class = "p-2"> 
                Mumbai is located on western coast of India. It is the captial city of the state of Maharashtra. 
                People from Mumbai call themselves Mumbaikars.
            </h2>

            <ShowWeather city="Mumbai"></ShowWeather>
        </div>
    );
}

export default MyTown