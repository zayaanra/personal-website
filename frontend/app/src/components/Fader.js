import React from 'react-native';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

const Fader = props => {
    const [fadeProp, setFadeProp] = useState({
        fade: "fade-in",
    });
    return (
        <p> test </p>
    )
}

Fader.defaultProps = {
    text: "Test"
}

Fader.propTypes = {
    text: ""
}