import React , {useState} from "react";

const Square = ({value, onSquareClick, color}) => {
    return (
        <button className="p-4 border border-black " onClick={onSquareClick}>
            {value}
        </button>
    )
}

const TicTacToe = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        //check winner
        if(winner ===  null) {
            if(squares[index] === null) {
                const newSquares = [...squares];
                newSquares[index] = turn;
                setTurn((turn === 'X' ? 'O' : 'X'));
                setSquares(newSquares);
                calculateWinner(newSquares);
            }
        }
    }

    const calculateWinner = (squaresToWin) => {
        
        // Define winning combinations (indices in the array)
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        // Check each winning combination
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            // Check if the values at the combination indices are the same and not null
            if (squaresToWin[a] && squaresToWin[a] === squaresToWin[b] && squaresToWin[a] === squaresToWin[c]) {                
                if(squaresToWin[a] !== 'B') {
                    console.log('winner found');
                    setWinner("Winner is: " + squaresToWin[a]);
                }
            }
            
        }
        //Check for draw
        if(!squaresToWin.includes(null)){
            setWinner('Game Ended in a Draw');
            console.log('draw found');
            return 
        }

        // No winner yet
        return null;
    }

    const handleRestart = () => {
        setTurn('X');
        setWinner(null);
        setSquares(Array(9).fill(null));
    }

    return(
        <div>
            {winner && <h2>{winner}</h2>}
            <div className="flex justify-center max-w max-h">
                <div className="text-xl  grid grid-cols-3 gap-0 p-0 m-0">
                        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>                
                        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>                
                        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>                
                </div>
            </div>

            <button onClick={handleRestart}>Restart</button>
        </div>
    );
}

export default TicTacToe;