var numsquares=6;
var colors=[];
var picked;
var squares=document.querySelectorAll(".square");
var colordisplay=document.querySelector("#colordisplayed");
var message=document.querySelector("#message");
var resetbutton=document.querySelector("#reset");
var btn=document.querySelectorAll(".mode");
resetbutton.addEventListener("click",resetinator);
colordisplay.textContent=picked;
init();
function init()
{
	modesetup();
	working();
	resetinator();
}
function changecolors(color)
{
	if(numsquares==3)
	{	
		for (var i =0;i<squares.length;i++) 
		{
		 	if(colors[i])
				squares[i].style.background=color;
			else
		    	squares[i].style.background="none";
		}
	}
	else
	{
		for (i=0;i<squares.length;i++) 
		{
			squares[i].style.background=color;
		}
	}
	document.querySelector("h1").style.background=color;

}
function pickcolor()
{
	return colors[Math.floor(Math.random()*colors.length)];
}
function generatecolors(num)
{
	var cols=[];
	for (var i = 0; i <num; i++) 
	{
		cols.push(randomcolor());
	}
	return cols;
}
function randomcolor()
{
	var r=Math.floor(Math.random()*256),g=Math.floor(Math.random()*256),b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function resetinator()
{
	colors=generatecolors(numsquares);
	picked=pickcolor();
	for (var i =squares.length - 1; i >= 0; i--) 
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else
			squares[i].style.display="none";
	}
	colordisplay.textContent=picked;
	document.querySelector("h1").style.background="steelblue";
	resetbutton.textContent="New Colors";
	message.textContent="";
}
function modesetup()
{
	for (var i =btn.length - 1; i >= 0; i--) 
	{
 		btn[i].addEventListener("click",function()
 		{
	 		btn[0].classList.remove("selected");
			btn[1].classList.remove("selected");
	 		this.classList.add("selected");
	 		this.textContent==="EASY"?numsquares=3:  numsquares=6;
	 		resetinator();
	 	})
	}
}
function working()
{
	for(i=0;i<squares.length;i++)
	{
		squares[i].addEventListener("click",function()
		{
			var chosen=this.style.background;
			console.log(chosen,picked);
			if(chosen===picked)
			{
				message.textContent="Correct!";
				changecolors(chosen);
				resetbutton.textContent="Play Again";
			}
			else
			{
				this.style.background="#232323";
				message.textContent="Try Again";
			}
		})
	}
}