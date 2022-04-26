var bingoRes;
var checkColumn = {
	0: [0, 5, 10, 15, 20],
	1: [1, 6, 11, 16, 21],
	2: [2, 7, 12, 17, 22],
	3: [3, 8, 13, 18, 23],
	4: [4, 9, 14, 19, 24],
};
var checkLines = {
	0: [0, 1, 2, 3, 4],
	1: [5, 6, 11, 16, 21],
	2: [2, 7, 12, 17, 22],
	3: [3, 8, 13, 18, 23],
	4: [4, 9, 14, 19, 24],
};
var checkDiagonals = {
	0: [0, 6, 12, 18, 24],
	1: [4, 8, 12, 16, 20],
};


$('#bingo .card').on('click', function(){
	if(!$(this).hasClass('bingo')){
		$(this).toggleClass('checked');
		var id = $(this).attr('id').split('card-')[1];
		if($(this).hasClass('checked') && !checkBingoCard(id)){
		}
	}
	
});

$('#popup-bingo').on('click', function(){
	$(this).slideToggle();
});


$('#btn-infos').on('click', function(){
	$('#informations').slideToggle();
});



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function checkBingoCard(cardId){
	var res = false;
	
	res = checkBingoColumn(cardId) || res;
	res = checkBingoLines(cardId) || res;
	if(checkDiagonals[0].indexOf(parseInt(cardId)) > -1){
		res = checkBingoDiagonally(0, cardId) || res;
	}
	if(checkDiagonals[1].indexOf(parseInt(cardId)) > -1){
		res = checkBingoDiagonally(1, cardId) || res;
	}
	
	if(res){
		triggerBingo();
	}
	
	return res;
}


function checkBingoColumn(cardId){
	for(var i = 0; i < checkColumn[cardId%5].length; i++){
		var idCheck = 'card-' + checkColumn[cardId%5][i];
		if(!$('#' + idCheck).hasClass('checked')){
			return false;
		}
	}
	
	for(var i = 0; i < checkColumn[cardId%5].length; i++){
		var idCheck = 'card-' + checkColumn[cardId%5][i];
		if(!$('#' + idCheck).hasClass('bingo')){
			$('#' + idCheck).addClass('bingo')
		}
	}
	
	return true;
}

function checkBingoLines(cardId){
	var max = 5 * Math.ceil((parseInt(cardId)+1) / 5);
	for(var i = (max - 5); i < max; i++){
		var idCheck = 'card-' + i;
		if(!$('#' + idCheck).hasClass('checked')){
			return false;
		}
	}
	
	for(var i = (max - 5); i < max; i++){
		var idCheck = 'card-' + i;
		if(!$('#' + idCheck).hasClass('bingo')){
			$('#' + idCheck).addClass('bingo')
		}
	}
	
	return true;
}

function checkBingoDiagonally(id, cardId){
	for(var i = 0; i < checkDiagonals[id].length; i++){
		var idCheck = 'card-' + checkDiagonals[id][i];
		if(!$('#' + idCheck).hasClass('checked')){
			return false;
		}
	}
	
	for(var i = 0; i < checkDiagonals[id].length; i++){
		var idCheck = 'card-' + checkDiagonals[id][i];
		if(!$('#' + idCheck).hasClass('bingo')){
			$('#' + idCheck).addClass('bingo')
		}
	}
	
	return true;
}

function triggerBingo(){
	$('#popup-bingo').slideToggle();
}