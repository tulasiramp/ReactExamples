﻿
var VehicleCardUIComponent = React.createClass({
    render : function (){

        return (
            <div className='item1'>
            <VehicleHeadSubComponent/>
        <CRButtonSubComponent/>
        <BodySubComponent/>
        <FooterActionsSubComponent/>
        </div>
        );
    }
});
var VehicleHeadSubComponent = React.createClass({
    render : function () {
        var style={
            background:'royalblue',
            color : 'white',
            padding:'1px',
			width:'240px'
			};
		
    return (
		<div className="row"  style = {style}>
	        <div className="col-sm-4">
                <h1>2011 CHEVROLET</h1>
                <h2>CORVETIE PREMIUM L</h2>
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
			   <p>
			    <span className="fa fa-eye" id='eye'></span>
                <span className="fa fa-list" id='list'></span>
                <button type = "button" id="button-small" value = "submit">CR</button>
			   </p>
			
            </div>
        );
    }
});

var BodySubComponent = React.createClass({
    render : function () {
        return (
            <div className='item4'>
            <p>1G1YG3DW5A5103037</p>
            <p> Miles:5,375</p>
            <p> Color: Red/Grey</p>
            <p> Seller: GM Financial</p>
            <p>  Ends in 4d 2hrs</p>
            <p> Buy Now:$48,800</p>
        </div>
        );
    }
});

var FooterActionsSubComponent = React.createClass({
    render : function () {

        return (
            <div className='item5' id="transbox">
             <span>
                <button type = "button" value = "submit" id='button'><span className="fa fa-info-circle"></span><br/>Detials</button>
                <button type = "button" value = "submit" id='button'><span className="fa fa-plus"></span><br/>Add</button>
                <button type = "button" value = "submit" id='button'><span className="fa fa-money"></span><br/>Bid/Buy</button>

            </span>
        </div>
        );
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
        xhr.open('get', 'https://api.myjson.com/bins/52urd', true);
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
                <span key={this.state.Vehicle1.vehicle_id}>
                          {this.state.Vehicle1.vehicle_id}<br/>
                 Miles:   {this.state.Vehicle1.miles}<br/>
                 Color:   {this.state.Vehicle1.color}<br/>
                 Seller:  {this.state.Vehicle1.seller}<br/>
				          {this.state.Vehicle1.duration}<br/>
                 Buy Now: {this.state.Vehicle1.buynow}
                </span>
            </div>

    );
    }
});

ReactDOM.render(<VehicleCardUIComponent />,document.getElementById('VehicleCard'));