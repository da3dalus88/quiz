		let correctCount = 0 ;
		const totalQuestions = 24;
		const quizFiles =['quiz1.html','quiz2.html','quiz3.html','quiz4.html','quiz5.html','quiz6.html','quiz7.html',
						'quiz8.html','quiz9.html','quiz10.html','quiz11.html','quiz12.html','quiz13.html','quiz14.html',
						'quiz15.html','quiz16.html','quiz17.html','quiz18.html','quiz19.html','quiz20.html','quiz21.html',]
		
		function checkanswer(questionNumber, correctAnswer) {
            let selectedAnswer;
            if (Array.isArray(correctAnswer)) {
                selectedAnswer = Array.from(document.querySelectorAll('input[name="question' + questionNumber + '"]:checked')).map(el => el.value);
                correctAnswer = correctAnswer.sort().join('');
                selectedAnswer = selectedAnswer.sort().join('');
            } else {
                selectedAnswer = document.querySelector('input[name="question' + questionNumber + '"]:checked').value;
            }

            let result = document.getElementById('result' + questionNumber);
			if (selectedAnswer === correctAnswer) {
				correctCount++;
				result.innerHTML = `Correct! The answer is ${correctAnswer}.`;
				result.className = 'correct-answer';
				} else {
					result.innerHTML = `Incorrect. The correct answer is ${correctAnswer}.`;
					result.className = 'incorrect-answer';
				}
        }
		function disablebuttons(){
			var checkboxes = document.getElementsByClassName("checkbox");
			var i;
			for (i = 0; i < checkboxes.length; i++) {
				checkboxes[i].disabled = true;
			}
			var radios = document.getElementsByClassName("radio");
			var i;
			for (i = 0; i < radios.length; i++) {
				radios[i].disabled = true;
			}
		}
        function showresults(correctAnswers) {  
			correctCount = 0 ;
			disablebuttons();
			for (i=0;i<correctAnswers.length;i++)
				try {
					checkanswer(i+1,correctAnswers[i]);
				}
				catch (error) {
				}
            const percentage = (correctCount / totalQuestions) * 100;
            const resultMessage = percentage > 75 ? 'Congratulations, you passed!' : 'Sorry, you failed. Try again!';
            document.getElementById('final-result').innerHTML = `You scored ${percentage}%. ${resultMessage}`;
        }
		function nextquiz(){
			var randomUrl = quizFiles[Math.floor(Math.random() * quizFiles.length )];
			console.log(randomUrl);
			window.location.replace(randomUrl);
		}