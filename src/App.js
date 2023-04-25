import React, { useState } from 'react';

function App() {
    const [color1, setColor1] = useState('red');
    const [color2, setColor2] = useState('blue');

    const handleColorChange = (index) => {
        if (index === 1) {
            setColor1(color1 === 'red' ? 'blue' : 'red');
        } else if (index === 2) {
            setColor2(color2 === 'blue' ? 'red' : 'blue');
        }
    };

    return (
        <div>
            <div
                style={{ width: '100px', height: '100px', backgroundColor: color1 }}
                onClick={() => handleColorChange(1)}
            />
            <div
                style={{ width: '100px', height: '100px', backgroundColor: color2 }}
                onClick={() => handleColorChange(2)}
            />
        </div>
    );
}

export default App;


