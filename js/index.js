function add(val) {
	$(val).children('.block').css('display', 'block').siblings().css('display', 'none')
}

function add1(val) {
	$(val).children('.block').css('display', 'none').siblings().css('display', 'block')
}


/* fadeOut .fadeIn*/

/* function add(val) {
	$(val).children('.block').fadeOut(300).siblings().fadeIn(300)
}

function add1(val) {
	$(val).children('.block').fadeIn(300).siblings().fadeOut(300)
} */