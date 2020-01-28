var score = 0;
var auto = 0;
  var s1 = 10;
  var cost1 = 300;
function clickBtn() {
  score++;
  console.log(score);
  document.getElementsByTagName("p")[0].firstChild.data = "Clicks: " + score;
}
function clickBtn1() {
  auto++;
  console.log(auto);
  document.getElementsByTagName("p")[1].firstChild.data = "Clicks: " + auto;
}
function cps() {
  score = score + auto;
  document.getElementsByTagName("p")[0].firstChild.data = "Clicks: " + score;
}
function S1() {

  score = score - s1;
  cost1 = cost1 + 10;
  document.getElementsByTagName("s1")[0].firstChild.data = cost1;
}
function S2() {
  var s2 = 1000;
  score = score - s2;
  document.getElementsByTagName("p")[0].firstChild.data = "Clicks: " + score;
}
function S3() {
  var s3 = 10000;
  score = score - s3;
  document.getElementsByTagName("p")[0].firstChild.data = "Clicks: " + score;
}
function S4() {
  var s4 = 100000;
  score = score - s4;
  document.getElementsByTagName("p")[0].firstChild.data = "Clicks: " + score;
}
function S5() {
  var s5 = 500000;
  score = score - s5;
  document.getElementsByTagName("p")[0].firstChild.data = "Clicks: " + score;
}

setInterval(cps, 1000);

function loadPage() {
  $("#background").animate({}, 800, function() {
    $("#clickbtn").animate({height: "250px", width: "250px"}, 850, function() {
      $("#clickbtn").animate({fontSize: "45px"}, 850, function() {
      $("#score").animate({fontSize: "40px"}, 850, function() {
      })
      })
    })
  })
}