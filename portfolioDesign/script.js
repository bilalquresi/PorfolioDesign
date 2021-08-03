const slidercontainer = document.querySelector('.Slider-container')
const slideright = document.querySelector('.Right-slider')
const sliderleft = document.querySelector('.Left-slider')
const upbutton = document.querySelector('.up-button')
const downbutton = document.querySelector('.down-button')
const slidelength = slideright.querySelectorAll('div').length
const leftdiv = sliderleft.querySelectorAll('div')
var colorarray = []
const array = leftdiv.forEach((element) => colorarray.push(element.style.backgroundColor));
colorarray = colorarray.reverse()

let slideindex = 0;
let previousindex = 0;
sliderleft.style.top = `-${(slidelength-1) * 100}vh`


downbutton.addEventListener("mouseleave" , ()=>downbutton.style.color = '#A7BBC7')
upbutton.addEventListener("mouseleave" , ()=>upbutton.style.color = '#A7BBC7')
upbutton.addEventListener('click', ()=>changeslide('up'))
downbutton.addEventListener('click', () =>changeslide('down'))
downbutton.addEventListener("mouseover" , ()=>colorchange(downbutton))
upbutton.addEventListener("mouseover" , ()=>colorchange(upbutton))

function colorchange(direction){
	
		direction.style.color = colorarray[slideindex]
}
function changeslide(direction){

	const sliderheight = slidercontainer.clientHeight

	if(direction === "up"){
		slideindex++
		if(slideindex > slidelength - 1){
			slideindex = 0
			
		}
	}
	else if(direction === "down"){
		    slideindex--
			if(slideindex < 0){
				
				slideindex = slidelength - 1
			}
	}
	slideright.style.transform = `translateY(-${slideindex * sliderheight}%)`
	sliderleft.style.transform = `translateY(${slideindex * sliderheight}%)`
	}
