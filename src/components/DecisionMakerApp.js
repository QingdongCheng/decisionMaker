import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class DecisionMakerApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options,
            selectedOption: undefined
        };
    }

    componentDidMount() {
        try {
            const optionsStr = localStorage.getItem('options');
            const options = JSON.parse(optionsStr);
            if (options) {
                this.setState(() => ({
                    options
                }));
            }

            } catch(e) {

            }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log("component will unmount.");
    }

    handleDeleteOptions() {
        //return the object directly
        //need parentheses to inlcude the object
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionRemove) {
        this.setState((previousState) => ({
            options: previousState.options.filter((option) => option!== optionRemove )
        }));
    }

    handleModal = () => {
      this.setState((prevState) => ({
        selectedOption: undefined
      }));
    };

    handleAddOption(option) {
        if (!option) {
            console.log("Error. invalid.");
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            console.log("Error. Already exists.");
            return 'This option already exists.';
        }

        this.setState((previousState) => ({
            options: previousState.options.concat(option)
        }));
    }

    handlePick() {
        const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        //console.log("From handle pick.");
        this.setState((prevState) => ({
          selectedOption: option
        }));
    }
    render() {
        const subtitle = 'helps you make decisions!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                  <Action
                      hasOptions={this.state.options.length > 0}
                      handlePick = {this.handlePick}
                  />
                  <div className="widget">
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption}/>
                  </div>

                </div>

                <OptionModal
                  selectedOption={this.state.selectedOption}
                  handleModal = {this.handleModal}
                />
            </div>
        );
    }
}

DecisionMakerApp.defaultProps = {
    options: []
};
