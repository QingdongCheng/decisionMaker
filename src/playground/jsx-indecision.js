const app = {
    title: 'Indecision',
    subtitle: 'makes decisions for you',
    options: ['One', 'Two']
};
const removeAll = () => {
    app.options = [];
    renderApp();
};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);

    alert(app.options[randomNum]);
};

let Visibility = false;
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {(app.options && app.options.length > 0 ) ? <p>Here are your options</p> : <p>No option</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((option) => {
                    return <p key={option}> {option}</p>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>

            <h1>Visibility Toggle</h1>
            <button onClick={onDetailToggle}>{Visibility ? 'Hide Detail' : 'Show detail'}</button>
            {Visibility ? <p>This is the detail now you can see.</p> : ''}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const onDetailToggle = () => {
    Visibility = !Visibility;
    renderApp();

};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};


const appRoot = document.getElementById('app');
renderApp();


