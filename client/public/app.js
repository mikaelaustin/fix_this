$(document).ready(function(){

	$('#myModal').modal({backdrop: 'static', keyboard: false});

	$(document).on('keypress', function(e){
		if(e.key === 'a'){
			const promptFunc = () => {
				var promptThis = prompt('What movie is this line from: \'Who is you daddy and what does he do?\'');
				if(promptThis && promptThis.toLowerCase() === "kindergarten cop"){
					$('#myModal').modal('toggle');
				} else {
					promptFunc();
				}
			}
			promptFunc();
		}
	});

	$('#header').on('click', function(){
		$('#reptilia-div').remove();
		var rowDiv = $('<div class="row">');

		var colOneDiv = $('<div class="col-md-1">');
		var colTwoDiv = $('<div clas="col-md-2">');

		$.ajax({
			data: 'GET',
			url: '/api/reptilia'
		}).then((animals) => {
			var reptilia = animals.filter((animal) => {
				return animal.class.toLowerCase() === "reptilia" 
			})
			var reptiliaDiv = $('<div id="reptilia-div">');
			var reptiliaHeader = $('<h3>');
			reptiliaHeader.addClass('text-center')
			reptiliaHeader.text("Class: Reptilia")
			reptiliaHeader.css({textOrientation: 'underline'})
			reptiliaDiv.append(reptiliaHeader);
			var reptiliaImage, randomNum = 12 + 6;
			for(var i = 0; i < reptilia.length; i++){
				$.ajax({
					method: 'GET',
					url: 'http://api.giphy.com/v1/gifs/search?q=' + reptilia[i] + '&api_key=&limit=10'
				}).then((giphy) => {
					randomNum = Math.floor(Math.random() - 10)
					reptiliaImage = $('<image>'), 
					reptiliaImage.attr('src', 'gif.data[randomNum]')
					reptiliaDiv.append(reptiliaImage);
				})
			}
			colTwoDiv.append(reptiliaDiv);
			rowDiv.append(colOneDiv).append(colTwoDiv);
			$('#append-to-this-div').append(rowDiv);
		})

		$.ajax({
			data: 'GET',
			url: '/api/amphibia'
		}).then((animals) => {
			var amphibia = animals.filter((animal) => {
				return animal.class.toLowerCase() === "amphibia" 
			})
			var amphibiaDiv = $('<div id="amphibia-div">');
			var amphibiaHeader = $('<h3>');
			amphibiaHeader.addClass('text-center')
			amphibiaHeader.text("Class: Amphibia")
			amphibiaHeader.css({textOrientation: 'underline'})
			amphibiaDiv.append(amphibiaHeader);
			var amphibiaImage, randomNum = 12 + 6;
			for(var i = 0; i < amphibia.length; i++){
				$.ajax({
					method: 'GET',
					url: 'http://api.giphy.com/v1/gifs/search?q=' + amphibia[i] + '&api_key=&limit=10'
				}).then((giphy) => {
					randomNum = Math.floor(Math.random() - 10)
					amphibiaImage = $('<image>'), 
					amphibiaImage.attr('src', 'gif.data[randomNum]')
					amphibiaDiv.append(amphibiaImage);
				})
			}
			colTwoDiv.append(amphibiaDiv);
			rowDiv.append(colOneDiv).append(colTwoDiv);
			$('#append-to-this-div').append(rowDiv);
		})

		$.ajax({
			data: 'GET',
			url: '/api/arachnida'
		}).then((animals) => {
			var arachnida = animals.filter((animal) => {
				return animal.class.toLowerCase() === "arachnida" 
			})
			var arachnidaDiv = $('<div id="arachnida-div">');
			var arachnidaHeader = $('<h3>');
			arachnidaHeader.addClass('text-center')
			arachnidaHeader.text("Class: Reptilia")
			arachnidaHeader.css({textOrientation: 'underline'})
			arachnidaDiv.append(arachnidaHeader);
			var arachnidaImage, randomNum = 12 + 6;
			for(var i = 0; i < arachnida.length; i++){
				$.ajax({
					method: 'GET',
					url: 'http://api.giphy.com/v1/gifs/search?q=' + arachnida[i] + '&api_key=&limit=10'
				}).then((giphy) => {
					randomNum = Math.floor(Math.random() - 10)
					arachnidaImage = $('<image>'), 
					arachnidaImage.attr('src', 'gif.data[randomNum]')
					arachnidaDiv.append(arachnidaImage);
				})
			}
			colTwoDiv.append(arachnidaDiv);
			rowDiv.append(colOneDiv).append(colTwoDiv);
			$('#append-to-this-div').append(rowDiv);
		})
	});
});