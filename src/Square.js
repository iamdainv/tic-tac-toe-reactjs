import React from 'react';

const Square = ({ valueSquare, handleChangeValue, index, positionWin }) => {
	return (
		<div
			className='square'
			onClick={() => handleChangeValue(index)}
			style={{
				color: `${valueSquare === 'X' ? 'lightgreen' : 'red'}`,
				backgroundColor: `${
					positionWin['1'] === index ||
					positionWin['2'] === index ||
					positionWin['3'] === index
						? 'rgba(255, 255, 255, 0.1)'
						: ''
				}`,
			}}>
			<span>{valueSquare && valueSquare}</span>
		</div>
	);
};

export default Square;
