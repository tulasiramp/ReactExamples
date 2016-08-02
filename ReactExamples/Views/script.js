/**
 * Created by srivadev on 8/2/2016.
 */
var Example = React.createClass({
    render : function (){
        var style={
            background:'yellow'
        };
        return (
            <div className='item1' style={style}>
            <h3>kldjfhjkdhfjd</h3>
            <h1>Hello {this.props.name}!</h1>
        <Secondcomponent/>
        </div>
        );
    }
});
var Secondcomponent = React.createClass({
    render : function () {
        return (
            <div className='item2'>
            <h1>this is my second component</h1>
        </div>
        );
    }
});
ReactDOM.render(<Example name="thulasi"/>,document.getElementById('example'));