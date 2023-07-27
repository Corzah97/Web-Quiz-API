
var decrease_time = 5;
var timeleft = 80;
var score = 0
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished";
    } else {
        document.getElementById("countdown").innerHTML = timeleft + " s";
    }
    timeleft -= 1;
}, 1000);

let divs = document.querySelectorAll('div')


function selectOption(id) {

    switch (id) {

        case "view0_button":
            var view1 = document.getElementById("view1");
            // q1.classList.toggle("block");
            view1.style.display = "none";

            var q1 = document.getElementById("q1");
            if (q1.style.display === "block") {
                q1.style.display = "none";
            } else {
                q1.style.display = "block";
            }

            break;

        // -------------------------------------------------------------------

        case "first_Option_Q1":

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q1 = document.getElementById("q1");
                q1.style.display = "none";

                let finished = document.querySelector(".view2");
                finished.style.display = "block";
            } else {
                score += 10;
                console.log(score);
                var q1 = document.getElementById("q1");
                // q1.classList.toggle("block");
                q1.style.display = "none";

                var q2 = document.getElementById("q2");
                if (q2.style.display === "block") {
                    q2.style.display = "none";
                } else {
                    q2.style.display = "block";
                }

            }


            break;

        case "second_Option_Q1":
            text = "Wrong Attempt";

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                var q1 = document.getElementById("q1");
                q1.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q1 = document.getElementById("q1");
            // q1.classList.toggle("block");
            q1.style.display = "none";

            var q2 = document.getElementById("q2");
            if (q2.style.display === "block") {
                q2.style.display = "none";
            } else {
                q2.style.display = "block";
            }



            break;

        case "third_Option_Q1":

            text = "Wrong Attempt";

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q1 = document.getElementById("q1");
                q1.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q1 = document.getElementById("q1");
            // q1.classList.toggle("block");
            q1.style.display = "none";

            var q2 = document.getElementById("q2");
            if (q2.style.display === "block") {
                q2.style.display = "none";
            } else {
                q2.style.display = "block";
            }



            break;

        case "forth_Option_Q1":

            text = "Wrong Attempt";

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q1 = document.getElementById("q1");
                q1.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q1 = document.getElementById("q1");
            // q1.classList.toggle("block");
            q1.style.display = "none";

            var q2 = document.getElementById("q2");
            if (q2.style.display === "block") {
                q2.style.display = "none";
            } else {
                q2.style.display = "block";
            }



            break;

        // -------------------------------------------------------------------

        case "first_Option_Q2":

            text = "Wrong Attempt";

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q2 = document.getElementById("q2");
                q2.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q2 = document.getElementById("q2");
            // q1.classList.toggle("block");
            q2.style.display = "none";

            var q3 = document.getElementById("q3");
            if (q3.style.display === "block") {
                q3.style.display = "none";
            } else {
                q3.style.display = "block";
            }



            break;

        case "second_Option_Q2":

            text = "Wrong Attempt";

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q2 = document.getElementById("q2");
                q2.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q2 = document.getElementById("q2");
            // q1.classList.toggle("block");
            q2.style.display = "none";

            var q3 = document.getElementById("q3");
            if (q3.style.display === "block") {
                q3.style.display = "none";
            } else {
                q3.style.display = "block";
            }



            break;



        case "third_Option_Q2":

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q2 = document.getElementById("q2");
                q2.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            } else {
                score += 10;
                console.log(score);

                var q2 = document.getElementById("q2");
                q2.style.display = "none";

                var q3 = document.getElementById("q3");
                if (q3.style.display === "block") {
                    q3.style.display = "none";
                } else {
                    q3.style.display = "block";
                }
            }


            break;



        case "fourth_Option_Q2":

            text = "Wrong Attempt";

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q2 = document.getElementById("q2");
                q2.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q2 = document.getElementById("q2");
            // q1.classList.toggle("block");
            q2.style.display = "none";

            var q3 = document.getElementById("q3");
            if (q3.style.display === "block") {
                q3.style.display = "none";
            } else {
                q3.style.display = "block";
            }

        // -------------------------------------------------------------------

        case "first_Option_Q3":
            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q3 = document.getElementById("q3");
                q3.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }
            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q3 = document.getElementById("q3");
            // q1.classList.toggle("block");
            q3.style.display = "none";

            var q4 = document.getElementById("q4");
            if (q4.style.display === "block") {
                q4.style.display = "none";
            } else {
                q4.style.display = "block";
            }



            break;

        case "second_Option_Q3":
            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q3 = document.getElementById("q3");
                q3.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q3 = document.getElementById("q3");
            // q1.classList.toggle("block");
            q3.style.display = "none";

            var q4 = document.getElementById("q4");
            if (q4.style.display === "block") {
                q4.style.display = "none";
            } else {
                q4.style.display = "block";
            }



            break;


        case "third_Option_Q3":

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q3 = document.getElementById("q3");
                q3.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            } else {
                score += 10;
                console.log(score);
                var q3 = document.getElementById("q3");
                // q1.classList.toggle("block");
                q3.style.display = "none";

                var q4 = document.getElementById("q4");
                if (q4.style.display === "block") {
                    q4.style.display = "none";
                } else {
                    q4.style.display = "block";
                }
            }



            break;

        case "forth_Option_Q3":

            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q3 = document.getElementById("q3");
                q3.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q3 = document.getElementById("q3");
            // q1.classList.toggle("block");
            q3.style.display = "none";

            var q4 = document.getElementById("q4");
            if (q4.style.display === "block") {
                q4.style.display = "none";
            } else {
                q4.style.display = "block";
            }



            break;

        // -------------------------------------------------------------------

        case "first_Option_Q4":
            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q4 = document.getElementById("q4");
                q4.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }
            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q4 = document.getElementById("q4");
            // q1.classList.toggle("block");
            q4.style.display = "none";

            var q5 = document.getElementById("q5");
            if (q5.style.display === "block") {
                q5.style.display = "none";
            } else {
                q5.style.display = "block";
            }



            break;

        case "second_Option_Q4":
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q4 = document.getElementById("q4");
                q4.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            } else {
                score += 10;
                console.log(score);
                var q4 = document.getElementById("q4");
                // q1.classList.toggle("block");
                q4.style.display = "none";

                var q5 = document.getElementById("q5");
                if (q5.style.display === "block") {
                    q5.style.display = "none";
                } else {
                    q5.style.display = "block";
                }
            }

            break;

        case "third_Option_Q4":
            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q4 = document.getElementById("q4");
                q4.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q4 = document.getElementById("q4");
            // q1.classList.toggle("block");
            q4.style.display = "none";

            var q5 = document.getElementById("q5");
            if (q5.style.display === "block") {
                q5.style.display = "none";
            } else {
                q5.style.display = "block";
            }


            break;

        case "forth_Option_Q4":

            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q4 = document.getElementById("q4");
                q4.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }
            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q4 = document.getElementById("q4");
            // q1.classList.toggle("block");
            q4.style.display = "none";

            var q5 = document.getElementById("q5");
            if (q5.style.display === "block") {
                q5.style.display = "none";
            } else {
                q5.style.display = "block";
            }



            break;

        // -------------------------------------------------------------------


        case "first_Option_Q5":

            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q5 = document.getElementById("q5");
                q5.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q5 = document.getElementById("q5");
            // q1.classList.toggle("block");
            q5.style.display = "none";

            var q6 = document.getElementById("q6");
            if (q6.style.display === "block") {
                q6.style.display = "none";
            } else {
                q6.style.display = "block";
            }



            break;

        case "second_Option_Q5":
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q5 = document.getElementById("q5");
                q5.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            } else {
                score += 10
                console.log(score);
                var q5 = document.getElementById("q5");
                // q5.classList.toggle("block");
                q5.style.display = "none";

                var q6 = document.getElementById("q6");
                if (q6.style.display === "block") {
                    q6.style.display = "none";
                } else {
                    q6.style.display = "block";
                }
            }

            break;

        case "third_Option_Q5":

            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q5 = document.getElementById("q5");
                q5.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q5 = document.getElementById("q5");
            // q1.classList.toggle("block");
            q5.style.display = "none";

            var q6 = document.getElementById("q6");
            if (q6.style.display === "block") {
                q6.style.display = "none";
            } else {
                q6.style.display = "block";
            }



            break;

        case "forth_Option_Q5":

            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q5 = document.getElementById("q5");
                q5.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q5 = document.getElementById("q5");
            // q1.classList.toggle("block");
            q5.style.display = "none";

            var q6 = document.getElementById("q6");
            if (q6.style.display === "block") {
                q6.style.display = "none";
            } else {
                q6.style.display = "block";
            }



            break;

        // -------------------------------------------------------------------

        case "first_Option_Q6":

            text = "Wrong Attempt";

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q6 = document.getElementById("q6");
                q6.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }
            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q6 = document.getElementById("q6");
            // q1.classList.toggle("block");
            q6.style.display = "none";

            var q7 = document.getElementById("q7");
            if (q7.style.display === "block") {
                q7.style.display = "none";
            } else {
                q7.style.display = "block";
            }



            break;

        case "second_Option_Q6":
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q6 = document.getElementById("q6");
                q6.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            } else {
                score += 10;
                console.log(score);
                var q6 = document.getElementById("q6");
                // q5.classList.toggle("block");
                q6.style.display = "none";

                var q7 = document.getElementById("q7");
                if (q7.style.display === "block") {
                    q7.style.display = "none";
                } else {
                    q7.style.display = "block";
                }
            }

            break;

        case "third_Option_Q6":

            text = "Wrong Attempt";

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q6 = document.getElementById("q6");
            // q1.classList.toggle("block");
            q6.style.display = "none";

            var q7 = document.getElementById("q7");
            if (q7.style.display === "block") {
                q7.style.display = "none";
            } else {
                q7.style.display = "block";
            }



            break;

        case "forth_Option_Q6":

            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q6 = document.getElementById("q6");
                q6.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q6 = document.getElementById("q6");
            // q1.classList.toggle("block");
            q6.style.display = "none";

            var q7 = document.getElementById("q7");
            if (q7.style.display === "block") {
                q7.style.display = "none";
            } else {
                q7.style.display = "block";
            }



            break;

        // -------------------------------------------------------------------

        case "first_Option_Q7":

            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q7 = document.getElementById("q7");
                q7.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q7 = document.getElementById("q7");
            // q1.classList.toggle("block");
            q7.style.display = "none";

            var q8 = document.getElementById("q8");
            if (q8.style.display === "block") {
                q8.style.display = "none";
            } else {
                q8.style.display = "block";
            }



            break;

        case "second_Option_Q7":
            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q7 = document.getElementById("q7");
                q7.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }
            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q7 = document.getElementById("q7");
            // q1.classList.toggle("block");
            q7.style.display = "none";

            var q8 = document.getElementById("q8");
            if (q8.style.display === "block") {
                q8.style.display = "none";
            } else {
                q8.style.display = "block";
            }



            break;

        case "third_Option_Q7":
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q7 = document.getElementById("q7");
                q7.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            } else {
                score += 10;
                console.log(score);
                var q7 = document.getElementById("q7");
                // q5.classList.toggle("block");
                q7.style.display = "none";

                var q8 = document.getElementById("q8");
                if (q8.style.display === "block") {
                    q8.style.display = "none";
                } else {
                    q8.style.display = "block";
                }
            }

            break;

        case "fourth_Option_Q7":

            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q7 = document.getElementById("q7");
                q7.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q7 = document.getElementById("q7");
            // q1.classList.toggle("block");
            q7.style.display = "none";

            var q8 = document.getElementById("q8");
            if (q8.style.display === "block") {
                q8.style.display = "none";
            } else {
                q8.style.display = "block";
            }



            break;

        // -------------------------------------------------------------------

        case "first_Option_Q8":

            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q8 = document.getElementById("q8");
                q8.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q8 = document.getElementById("q8");
            // q1.classList.toggle("block");
            q8.style.display = "none";

            var view2 = document. querySelector(".view2");
            if (view2.style.display === "block") {
                view2.style.display = "none";
            } else {
                view2.style.display = "block";
            }



            break;

        case "second_Option_Q8":
            text = "Wrong Attempt";
            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q8 = document.getElementById("q8");
                q8.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }

            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q8 = document.getElementById("q8");
            // q1.classList.toggle("block");
            q8.style.display = "none";

            var view2 = document. querySelector(".view2");
            if (view2.style.display === "block") {
                view2.style.display = "none";
            } else {
                view2.style.display = "block";
            }

            break;

            
            case "third_Option_Q8":
                if (timeleft <= 0) {
                    alert_ = alert("Time has Finsished");
    
                    let q8 = document.getElementById("q8");
                    q8.style.display = "none";
    
                    let finished = document.document.querySelector(".view2");
                    finished.style.display = "block";
                } else {
                    score += 10;
    
                    var q8 = document.getElementById("q8");
                    // q5.classList.toggle("block");
                    q8.style.display = "none";
    
                    var view2 = document. querySelector(".view2");
                    if (view2.style.display === "block") {
                        view2.style.display = "none";
                    } else {
                        view2.style.display = "block";
                    }
                    console.log("final score", score);
                    document.getElementById("totalScore").innerHTML = score
                    // score = 0;
                }
    
                break;

        case "fourth_Option_Q8":

            text = "Wrong Attempt";

            if (timeleft <= 0) {
                alert_ = alert("Time has Finsished");

                let q8 = document.getElementById("q8");
                q8.style.display = "none";

                let finished = document.document.querySelector(".view2");
                finished.style.display = "block";
            }
            if (timeleft > 0) {
                alert_ = alert(text + ": 5 seconds will be deducted");
                timeleft = timeleft - 5;
            }
            var q8 = document.getElementById("q8");
            // q1.classList.toggle("block");
            q8.style.display = "none";

            var view2 = document. querySelector(".view2");
            if (view2.style.display === "block") {
                view2.style.display = "none";
            } else {
                view2.style.display = "block";
            }



            break;


        // -------------------------------------------------------------------

        case "view2_submit_btn":
            var view2 = document. querySelector(".view2");
            // q1.classList.toggle("block");
            view2.style.display = "none";

            var view3 = document.getElementById("view3");
            if (view3.style.display === "block") {
                view3.style.display = "none";
            } else {
                view3.style.display = "block";
            }

            var inputName = document.getElementById("corey").value
            document.getElementById("passedName").innerHTML = inputName
            document.getElementById("scoreAndName").innerHTML = score
            console.log(inputName)


            break;

        // -------------------------------------------------------------------

        case "view3_goBack_btn":
            score = 0;

            var view3 = document.querySelector("view3");
            // q1.classList.toggle("block");
            view3.style.display = "none";

            var view1 = document.querySelector("view1");
            if (view1.style.display === "block") {
                view1.style.display = "none";
            } else {
                view1.style.display = "block";
            }

            location.reload();

            


            break;

        // -------------------------------------------------------------------


        case "view3_clearScore_btn":
            var view4 = document.getElementById("pepsi");
            // q1.classList.toggle("block");
            view4.style.display = "none";

            const element = document.getElementById("pepsi");
            element.remove(); // Removes the div with the 'div-02' id



            break;

        // -------------------------------------------------------------------



        default:
            text = "No value found";
    }


}

