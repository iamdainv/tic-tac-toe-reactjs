import './App.css';
import Square from './Square';
import { useState } from 'react';

function App() {
	const [turn, setTurn] = useState('X');
	const [winner, setWinner] = useState(undefined);
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [positionWin, setPositionWin] = useState({
		1: null,
		2: null,
		3: null,
	});

	const handleChangeValue = ii => {
		if (!winner) {
			let newS = squares;
			newS[ii] = turn;
			setSquares(newS);
			if (turn === 'X') {
				setTurn('O');
			} else {
				setTurn('X');
			}
		}
		const [a, b, c] = calculateWinner(squares);

		if (a !== null && b !== null && c !== null) {
			setWinner(squares[a]);
			setPositionWin({
				1: a,
				2: b,
				3: c,
			});
		}
	};
	const calculateWinner = squares => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return [a, b, c];
			}
		}
		return [null, null, null];
	};

	const replayGame = () => {
		setWinner(undefined);
		setSquares(Array(9).fill(null));
		setTurn('X');
		setPositionWin({
			1: null,
			2: null,
			3: null,
		});
	};

	return (
		<div className='App'>
			<div className='game-tic-tac-toe'>
				<div className='title-game'>
					<p> Tic Tac Toe</p>
					<p>Current turn: {turn}</p>
				</div>
				<div className='main-game'>
					<div className='first-floor'>
						{' '}
						<Square
							handleChangeValue={handleChangeValue}
							valueSquare={squares[0]}
							index={0}
							positionWin={positionWin}
						/>{' '}
						<Square
							valueSquare={squares[1]}
							handleChangeValue={handleChangeValue}
							index={1}
							positionWin={positionWin}
						/>
						<Square
							handleChangeValue={handleChangeValue}
							valueSquare={squares[2]}
							index={2}
							positionWin={positionWin}
						/>
					</div>
					<div className='second-floor'>
						<Square
							handleChangeValue={handleChangeValue}
							valueSquare={squares[3]}
							index={3}
							positionWin={positionWin}
						/>
						<Square
							valueSquare={squares[4]}
							handleChangeValue={handleChangeValue}
							index={4}
							positionWin={positionWin}
						/>
						<Square
							valueSquare={squares[5]}
							handleChangeValue={handleChangeValue}
							index={5}
							positionWin={positionWin}
						/>
					</div>
					<div className='third-floor'>
						<Square
							valueSquare={squares[6]}
							handleChangeValue={handleChangeValue}
							index={6}
							positionWin={positionWin}
						/>
						<Square
							valueSquare={squares[7]}
							handleChangeValue={handleChangeValue}
							index={7}
							positionWin={positionWin}
						/>
						<Square
							valueSquare={squares[8]}
							handleChangeValue={handleChangeValue}
							index={8}
							positionWin={positionWin}
						/>
					</div>
				</div>

				<div className='end-game' style={{ opacity: `${winner ? '1' : '0'}` }}>
					<p> {winner} WIN !!!</p>
					<button onClick={replayGame}>Replay ???</button>
				</div>
			</div>
		</div>
	);
}

export default App;
