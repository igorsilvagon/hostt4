import React, { Component } from 'react'
// import '../external/airbnb_jssdk';

export default class AirbnbAd extends Component {
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://www.airbnb.com.br/embeddable/airbnb_jssdk";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
        const url = "https://www.airbnb.com.br/rooms/" + this.props.code //+ "?s=51"
        return (
            <div style={{display: 'inline-block', textAlign: "center"}}>
                <div className="airbnb-embed-frame" data-id={this.props.code} data-view="home" style={{width:'450px', height:'450px', margin:'auto'}}>
                    <a href={url}>
                        <span>Ver no Airbnb</span>
                    </a>
                    <a href={url} rel="nofollow">{this.props.title}</a>
                </div>
            </div>
            
          );
    }    
}

// <script async="" src="https://www.airbnb.de/embeddable/airbnb_jssdk"></script>