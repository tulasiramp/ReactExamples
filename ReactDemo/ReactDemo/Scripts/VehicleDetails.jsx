
var VehicleCardUIComponent = React.createClass({
    render : function (){

        return (<div>
                <VehicleHeadSubComponent/>
                <CRButtonSubComponent/>
                <BodySubComponent/>
                <FooterActionsSubComponent/>
                </div> );
    }
});
var VehicleHeadSubComponent = React.createClass({
    render : function () {
        var style={
            background:'#6492BD',
            color : 'white',
            padding:'1px',
			width:'240px'
			};
		
    return (
		<div className="heading"  style = {style}>
	        <div className="col-sm-4">
                <p id="header">2011 CHEVROLET</p>
                <p id="header">CORVETIE PREMIUM L</p>
			</div>
        </div>
		
        );
    }
});

var CRButtonSubComponent = React.createClass({
    render : function () {

        return (
                <div className='item3'>
                    <span><img src="/Content/Images/Vehicle_Image.png"/></span>
                    <span id="number">#10032</span>
			        <span>
			            <button type = "button" id="button-small" value = "submit">CR</button>
			        </span>
		        </div> );
    }
});


var FooterActionsSubComponent = React.createClass({
    render : function () {
    return (
            <div className='item5' id="transbox">
             <div id="bottom">
                <span className="fa fa-eye" id="eye"><br/><a href=""><span id="watchlist">Watchlist</span></a></span>
                <span className="fa fa-list" id="list"><br/><a href=""><span id="whishlist">Whishlists</span></a></span>
                <span className="fa fa-money" id="money"><br/><a href=""><span id="bid">Bid/Buy</span></a></span>
            </div>
        </div> );
    }
});

var BodySubComponent = React.createClass({

    getInitialState: function() {
        return {
            Vehicle1: []
        }
    },

    componentDidMount: function() {

        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://api.myjson.com/bins/z12t', true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            this.setState({Vehicle1: data.Vehicle1});
        }.bind(this);
      
        xhr.send();
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (
            <div className='item4'>
                <span id="buy">Buy :<span id="buynow">{this.state.Vehicle1.buynow}</span> </span>
                <span id="highBid">High Bid: <span id="highid">{this.state.Vehicle1.high_bid}</span></span><br />
                <span id="miles">Miles: {this.state.Vehicle1.miles}</span>
                <span id="vehicle_color">Color:<span id="colorid">{this.state.Vehicle1.color}</span></span><br />
                <span id="seller">Seller: <span id="vehicle_seller">{this.state.Vehicle1.seller}</span></span> <br />
                <span id="duration"> {this.state.Vehicle1.duration}</span><br/>
            </div>);
    }
});

ReactDOM.render(<VehicleCardUIComponent />,document.getElementById('VehicleCard'));