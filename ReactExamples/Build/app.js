/**
 * Created by srivadev on 8/2/2016.
 */

var FirstComponent = React.createClass({
    render : function () {
        var inlineCss = {
            background : "green",
            margin:"40px"
        };
        return (
            <div className='item1' style={inlineCss}>
            <h1>ReactJs {this.props.name}!</h1>
            <h3>This my own creation example of ReactJs.</h3>
            <SecondComponent/>
            </div>
        );
    }
});

var SecondComponent = React.createClass({
    render : function () {
        var css = {
          background: "lightblue",
            padding: "20px"
        };
        return (
            <div className='item2' style={css}>
        <h3>This my own creation example of ReactJs.</h3>
        </div>
        );
    }
});
ReactDOM.render(<div><FirstComponent name="thulasi"/></div>,document.getElementById('example'));
