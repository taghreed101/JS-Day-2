
//alert("Good luck!"); // Of course you can remove this line
const mines=5;
const row = 4;
const columns = 4;
var remaining = mines;
var tile=[];
var  board = [];
var revealed = 0;
var index = 0;
var rowIndex =0;
var placed=0;
var creatTable =  init();
document.getElementById("status").innerHTML = ("Click on the tile") ;
document.getElementById("status").addEventListener("mousedown",creatTable);


// function Board() {

// }
function check(x1,y1)
{
  if ((x1>=0)&&(y1>=0)&&(x1<columns)&&(y1<row))
    return board[x1+y1*columns] ;
}

function init()

{
  
  var gameTable=document.getElementById("minesweeper");
  while (index < row) {
    var tablRow=document.createElement("tr");
    gameTable.appendChild(tablRow);
    index += 1;
  } 
  for (var i=0; i<(columns*row);i++)
  {
    tile[i]= document.createElement("td");
    tile[i].className="unopened";
    tile[i].addEventListener("mousedown",click);
    tile[i].id = i;
  
    gameTable.children[rowIndex].appendChild(tile[i]);
    if ((i+1)%row == 0) rowIndex = rowIndex+1;
  }
 

  do {
    i=Math.floor(Math.random()*columns*row);
    if (board[i]!= "mine" )
    {
      board[i]="mine";
      placed++;
    }
  } while (placed<mines);
 
  //===========================================
  for (var x=0; x<columns; x++)
    for (var y=0; y<row+1;y++)
    {
      if(check(x,y)!="mine")
      {
        board[x+y*columns]=
           ((check(x,y+1)=="mine")|0)
           + ((check(x-1,y+1)=="mine")|0)
           + ((check(x+1,y+1)=="mine")|0)
           + ((check(x,y-1)=="mine")|0)
           + ((check(x-1,y-1)=="mine")|0)
           + ((check(x+1,y-1)=="mine")|0)
           + ((check(x-1,y)=="mine")|0)
           +  ((check(x+1,y)=="mine")|0);
      }
    }  
}
function click(event)
{
  var source = event.target;
  var id = source.id;
  if (event.which==3)
  {
    switch( tile[id].className)
    {
    case "unopened": tile[id].className="flagged"; remaining--; break;
    case "flagged" : tile[id].className="question"; remaining++; break;
    case "question": tile[id].className="unopened";break;
    }
    event.preventDefault();
  }
  document.getElementById("status").innerHTML = ("Mines remaining: "+remaining) ;

  if (event.which == 1 && tile[id].className!="flagged")
  {
    if (board[id]=="mine")
    {
      for (var i=0;i<row*columns;i++)
      {
        if(board[i]=="mine") tile[i].className = "mine";
        //  if (board[i]!= "mine" && tile[i].className =="flagged") tile[i].className = "error";   
      }
      document.getElementById("status").innerHTML = ("Game Over<br><br>Click here to restart") ;
      for ( i=0;i<row*columns;i++)
      { document.getElementsByTagName("td")[i].removeEventListener("mousedown",click);}
    }
    else
    if (tile[id].className =="unopened") reveal(id);
  }
  if (revealed == row*columns-mines)
  { document.getElementById("status").innerHTML = ("You Win!<br><br>Click here to restart") ;}

}


function reveal(index)
{
  if (board[index]!="mine" && tile[index].className =="unopened")
    revealed++;
  if (board[index]==0) tile[index].className ="opened";
  else
    tile[index].className ="mine-neighbour-"+board[index];

}
