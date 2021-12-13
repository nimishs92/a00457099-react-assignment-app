import React, { Component } from "react" 

class ShowWeather extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTemp: "C"
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.props.city+"&appid=614a8ae936cde996adcc6864cb46b560")
        .then(res => {return res.json()})
        .then(res => {this.setState({
            temp_k: res.main.temp,
            temp_c: res.main.temp - 273.15, 
            temp_f: (res.main.temp - 273.15) * 9/5 + 32
        })})
    }

    render(){
        return(
            <div>
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                {this.state.temp_c < 10 ? <img src="cold.png" height="100" width="100" /> : undefined}
                                {this.state.temp_c > 10 && this.state.temp_c < 20 ? <img src="mild.png" height="100" width="100" /> : undefined}
                                {this.state.temp_c > 20 ? <img src="sunny.png" height="100" width="100" /> : undefined}

                            </div>
                            <div className="col-3 align-self-center">
                                <h1>{this.state.selectedTemp === 'C' ? Math.round(this.state.temp_c) : Math.round(this.state.temp_f)}</h1>
                            </div>
                            <div className="col-3">
                                <button class={this.state.selectedTemp === 'C' ? "btn btn-primary" : "btn btn-light"} onClick={() => this.setState({ selectedTemp: "C" })}>C</button>
                                <button class={this.state.selectedTemp === 'F' ? "btn btn-primary" : "btn btn-light"} onClick={() => this.setState({ selectedTemp: "F" })}>F</button>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }

    componentDidMount() {
        this.fetchData()
    }
}

export default ShowWeather