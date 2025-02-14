import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" id="city" placeholder="City"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;