$(function () {
	var totalSteps = $('#intro .step').length

	var slider = noUiSlider.create(document.getElementById('stepSlider'), {
		start: 1,
		step: 1,
		connect: [true, true],
		range: {
			'min': 1,
			'max': totalSteps
		}
	});
	$('.noUi-connect:first-child').css('background', '#ff4b1f')
	$('.noUi-connect:last-child').css('background', '#b4b4b4')

	slider.on('slide', function(value) {
		$('#intro').find('.step').removeClass('active')
		$('#intro').find(`.step-${Number(value)}`).addClass('active')
		console.log(value)
	})
})