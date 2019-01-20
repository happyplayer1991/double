$(function () {
	$('.range').rangeslider({
		polyfill: false,
		onSlide: function(position, value) {
			stepAnimations(value)
		}
	})

	var getSteps = function() {
		var steps = [],step
		$('#intro').find('.step').each(function() {
			step = {
				selector: `.step-${$(this).data('step-id')}`,
				start: $(this).data('animation-start'),
				end: $(this).data('animation-end')
			}
			steps.push(step)
		})
		return steps
	}

	var steps = getSteps()

	var getCurrentStep = function(stepValue) {
		var currentStep = steps.find(function(s) {
			var _current = false
			if (!s.start && stepValue <= s.end) {
				_current = true
			}
			if (!s.end && s.start <= stepValue) {
				_current = true
			}
			if (s.start <= stepValue && stepValue <= s.end) {
				_current = true
			}
			return _current
		})

		return currentStep
	}

	var stepAnimations = function(stepValue) {
		var currentStep = getCurrentStep(stepValue)
		if (!$(currentStep.selector).hasClass('active')) {
			$('#intro').find('.step').removeClass('active')
			$(currentStep.selector).addClass('active')
		}
		if (!currentStep.start) {
			$(currentStep.selector).css({ opacity: 1 })
		}
		if (currentStep.start) {
			if (stepValue <= currentStep.start + 10) {
				$(currentStep.selector).css({ opacity: (stepValue - currentStep.start) / 10 })
			}
		}
		if (currentStep.end) {
			if (currentStep.end - 10 <= stepValue) {
				$(currentStep.selector).css({ opacity: (currentStep.end - stepValue) / 10 })
			}
		}
	}

	stepAnimations(0)
})