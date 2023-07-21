cns = document.getElementById('game')
canvas = cns.getContext('2d')

var assa = setInterval(update, 1)

var temp_head = 1 // Лицо
var temp_face = 1 // Глаза
var temp_mouth = 1 // Рот
var temp_hear = 1 // Волосы
var temp_accs = 1 // Аксы

var head_max = 4 // Максимальное число голов
var face_max = 2 // Макс. число глаз
var mouth_max = 4 // Макс. число ртов
var hear_max = 4 // Макс. число волом
var accs_max = 3 // Макс. число аксов

// Text
canvas.fillStyle = '#000000'
canvas.font = '20px Impact'
canvas.fillText('1/2', cns.width/2-10, 435)

function update_person(){
	canvas.fillStyle = '#c9bee8'
	canvas.fillRect(0, 0, cns.width, cns.height)

	canvas.fillStyle = '#9e91bf'
	canvas.fillRect(cns.width/2-240, 10, cns.width/2+230, 880)

	///Buttons////
	canvas.fillStyle = '#dbdbdb'
	canvas.fillRect(cns.width/2-220, 400, cns.width/2-80, 50) // Pred
	canvas.fillStyle = '#000000'
	canvas.font = '30px Impact'
	canvas.fillText('<-', cns.width/2-150, 435)

	canvas.fillStyle = '#dbdbdb'
	canvas.fillRect(cns.width/2+50, 400, cns.width/2-80, 50) // Next
	canvas.fillStyle = '#000000'
	canvas.font = '30px Impact'
	canvas.fillText('->', cns.width/2+130, 435)

	canvas.fillStyle = '#dbdbdb'
	canvas.fillRect(cns.width/2-220, 470, cns.width/2-80, 50) // Pred
	canvas.fillStyle = '#000000'
	canvas.font = '30px Impact'
	canvas.fillText('<-', cns.width/2-150, 510)

	canvas.fillStyle = '#dbdbdb'
	canvas.fillRect(cns.width/2+50, 470, cns.width/2-80, 50) // Next
	canvas.fillStyle = '#000000'
	canvas.font = '30px Impact'
	canvas.fillText('->', cns.width/2+130, 510)	

	canvas.fillStyle = '#dbdbdb'
	canvas.fillRect(cns.width/2-220, 540, cns.width/2-80, 50) // Pred
	canvas.fillStyle = '#000000'
	canvas.font = '30px Impact'
	canvas.fillText('<-', cns.width/2-150, 575)

	canvas.fillStyle = '#dbdbdb'
	canvas.fillRect(cns.width/2+50, 540, cns.width/2-80, 50) // Next
	canvas.fillStyle = '#000000'
	canvas.font = '30px Impact'
	canvas.fillText('->', cns.width/2+130, 575)	

	canvas.fillStyle = '#dbdbdb'
	canvas.fillRect(cns.width/2-220, 610, cns.width/2-80, 50) // Pred
	canvas.fillStyle = '#000000'
	canvas.font = '30px Impact'
	canvas.fillText('<-', cns.width/2-150, 645)

	canvas.fillStyle = '#dbdbdb'
	canvas.fillRect(cns.width/2+50, 610, cns.width/2-80, 50) // Next
	canvas.fillStyle = '#000000'
	canvas.font = '30px Impact'
	canvas.fillText('->', cns.width/2+130, 645)	

	canvas.fillStyle = '#dbdbdb'
	canvas.fillRect(cns.width/2-220, 680, cns.width/2-80, 50) // Pred
	canvas.fillStyle = '#000000'
	canvas.font = '30px Impact'
	canvas.fillText('<-', cns.width/2-150, 715)

	canvas.fillStyle = '#dbdbdb'
	canvas.fillRect(cns.width/2+50, 680, cns.width/2-80, 50) // Next
	canvas.fillStyle = '#000000'
	canvas.font = '30px Impact'
	canvas.fillText('->', cns.width/2+130, 715)	
	//////////////

	///Text///////
	canvas.fillStyle = '#000000'
	canvas.font = '20px Impact'
	canvas.fillText(temp_head+'/'+head_max, cns.width/2-10, 435)

	canvas.fillStyle = '#000000'
	canvas.font = '20px Impact'
	canvas.fillText(temp_face+'/'+face_max, cns.width/2-10, 505)

	canvas.fillStyle = '#000000'
	canvas.font = '20px Impact'
	canvas.fillText(temp_mouth+'/'+mouth_max, cns.width/2-10, 570)

	canvas.fillStyle = '#000000'
	canvas.font = '20px Impact'
	canvas.fillText(temp_hear+'/'+hear_max, cns.width/2-10, 640)

	canvas.fillStyle = '#000000'
	canvas.font = '20px Impact'
	canvas.fillText(temp_accs+'/'+accs_max, cns.width/2-10, 710)
	/////////////

	var head = new Image()
	head.src = './images/head_'+temp_head+'.png' // Head
	head.onload = function(){
		canvas.drawImage(head, cns.width/2-200, 50, cns.width/2+150, 300)
	}

	setTimeout(draw_face, 50)
	setTimeout(draw_mouth, 50)
	setTimeout(draw_hear, 50)
	setTimeout(draw_accs, 50)
}

function draw_face(){
	var face = new Image()
	face.src = './images/face_'+temp_face+'.png' // Face
	face.onload = function(){
		canvas.drawImage(face, cns.width/2-200, 50, cns.width/2+150, 300)
	}
}

function draw_mouth(){
	var mouth = new Image()
	mouth.src = './images/mouth_'+temp_mouth+'.png' // Mouth
	mouth.onload = function(){
		canvas.drawImage(mouth, cns.width/2-200, 50, cns.width/2+150, 300)
	}
}

function draw_hear(){
	var hair = new Image()
	hair.src = './images/hair_'+temp_hear+'.png' // Hear
	hair.onload = function(){
		canvas.drawImage(hair, cns.width/2-200, 50, cns.width/2+150, 300)
	}
}

function draw_accs(){
	var accs = new Image()
	accs.src = './images/accs_'+temp_accs+'.png' // Accs
	accs.onload = function(){
		canvas.drawImage(accs, cns.width/2-200, 50, cns.width/2+150, 300)
	}
}

update_person()

function update(){

}

// Events
document.onmousedown = function(event){
	if (event.x > cns.width/2+50 && event.x < cns.width/2+50+cns.width/2-80 && event.y > 400 && event.y < 450){ // HEAD NEXT
		temp_head++
		if (temp_head == head_max+1){
			temp_head = 1
		}
		update_person()

	}
	if (event.x > cns.width/2-220 && event.x < cns.width/2-80+cns.width/2-220 && event.y > 400 && event.y < 450){ // HEAD PRED
		temp_head--
		if (temp_head == 0){
			temp_head = head_max
		}
		update_person()
	}
	if (event.x > cns.width/2+50 && event.x < cns.width/2+220+cns.width/2-80 && event.y > 470 && event.y < 520){ // FACE NEXT
		temp_face++
		if (temp_face == face_max+1){
			temp_face = 1
		}
		update_person()
	}
	if (event.x > cns.width/2-220 && event.x < cns.width/2-220+cns.width/2-80 && event.y > 470 && event.y < 520){ // FACE PRED
		temp_face--
		if (temp_face == 0){
			temp_face = face_max
		}
		update_person()
	}
	if (event.x > cns.width/2+50 && event.x < cns.width/2+50+cns.width/2-80 && event.y > 540 && event.y < 590){ // MOUTH NEXT
		temp_mouth++
		if (temp_mouth == mouth_max+1){
			temp_mouth = 1
		}
		update_person()
	}
	if (event.x > cns.width/2-220 && event.x < cns.width/2-220+cns.width/2-80 && event.y > 540 && event.y < 590){ // MOUTH PRED
		temp_mouth--
		if (temp_mouth == 0){
			temp_mouth = mouth_max
		}
		update_person()
	}
	if (event.x > cns.width/2+50 && event.x < cns.width/2+50+cns.width/2-80 && event.y > 610 && event.y < 660){ // HEAR NEXT
		temp_hear++
		if (temp_hear == hear_max+1){
			temp_hear = 1
		}
		update_person()
	}
	if (event.x > cns.width/2-220 && event.x < cns.width/2-220+cns.width/2-80 && event.y > 610 && event.y < 660){ // HEAR PRED
		temp_hear--
		if (temp_hear == 0){
			temp_hear = hear_max
		}
		update_person()
	}
	if (event.x > cns.width/2+50 && event.x < cns.width/2+50+cns.width/2-80 && event.y > 680 && event.y < 730){ // HEAR NEXT
		temp_accs++
		if (temp_accs == accs_max+1){
			temp_accs = 1
		}
		update_person()
	}
	if (event.x > cns.width/2-220 && event.x < cns.width/2-220+cns.width/2-80 && event.y > 680 && event.y < 730){ // HEAR PRED
		temp_accs--
		if (temp_accs == 0){
			temp_accs = accs_max
		}
		update_person()
	}
}
