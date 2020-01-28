var score = 0;
var auto = 0;
var s1 = 10;
var cost1 = 300;
function updText() {
  document.getElementsByTagName("p")[0].firstChild.data = "Money: " + score;
  document.getElementsByTagName("p")[1].firstChild.data = "Auto: " + auto;
  document.getElementsByTagName("s1")[0].firstChild.data = cost1;
  document.getElementsByTagName("s2")[0].firstChild.data = cost2;
  document.getElementsByTagName("s3")[0].firstChild.data = cost3;
  document.getElementsByTagName("s4")[0].firstChild.data = cost4;
  document.getElementsByTagName("s5")[0].firstChild.data = cost5;
}
function clickBtn() {
  score++;
  console.log(score);
  updText();
}
function cps() {
  score = score + auto;
  updText();
}
function S1() {
  if (cost1 < score ){
    score = score - cost1;
    cost1 = cost1 + 10;
    auto = auto + s1;
    updText()
}
}

setInterval(cps, 1000);

function loadPage() {
  updText();
  $("#background").animate({}, 800, function() {
    $("#clickbtn").animate({height: "250px", width: "250px"}, 850, function() {
      $("#clickbtn").animate({fontSize: "45px"}, 850, function() {
      $("#score").animate({fontSize: "40px"}, 850, function() {
      })
      })
    })
  })
}