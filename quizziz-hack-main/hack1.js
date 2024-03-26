if (window.location.href.indexOf('quizizz') > -1) {
        var quizizz = document.querySelectorAll('.quiz-question');

        for (var i = 0; i < quizizz.length; ++i) {
            var question = quizizz[i];

            question.addEventListener('click', function () {
                this.classList.toggle('active');
                this._answer_container_.classList.toggle('show');
            });

            // get answer container and add click event listener to it as well, so that clicking on the answers will not close the question box! :) !!! IMPORTANT !!! TODO: find a better solution for this! :D
            var _answer_container_ = document.getElementById(question['id'] + '-answers');

            _answer_container_.addEventListener('click', function (e) { e['stopPropagation'](); }); // prevent closing of question when clicking inside answer box! :) !!! IMPORTANT !!! TODO: find a better solution for this! :D

        } // end looping over questions in Quizizz page...  			    	    	    	    	    } else if (window.location == "https://www2b2b2c3a4d5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v0w1x0y0z111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273747576777879808182838485868788899091929394959697989910010110210310410510610710810911011111211311411511611711811811912022122232425262728293031"): */
