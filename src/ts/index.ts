import {Board} from './Generator';
import '../scss/index.scss';
document.getElementById("Start").addEventListener("click", function(){StartGame();});

let board: Board;


function StartGame() :void
{
	var ptable = document.getElementById("PlayerBoard");
	while(ptable.hasChildNodes()) ptable.removeChild(ptable.firstChild);
	var atable = document.getElementById("AIBoard");
	while(atable.hasChildNodes()) atable.removeChild(atable.firstChild);

	board = new Board();
}