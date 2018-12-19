class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.onDetailToggle = this.onDetailToggle.bind(this);
        this.state = {
            visibility: false
        }
    }

    onDetailToggle() {
        this.setState((previousState) => {
            return {
                visibility: !previousState.visibility
            };
        });
        // alert("Hiiii");
    };

    render() {
        return (<div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.onDetailToggle}>{this.state.visibility ? 'Hide details':'Show details'}</button>
            {this.state.visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
            
        </div>);
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);
