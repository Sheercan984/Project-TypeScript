import {Board} from './Generator';
import '../scss/index.scss';
document.getElementById("Start").addEventListener("click", function(){StartGame();});

let board: Board;


function StartGame() :void
{
	var table = document.getElementById("Board");
	while(table.hasChildNodes()) table.removeChild(table.firstChild);

	board = new Board();
}