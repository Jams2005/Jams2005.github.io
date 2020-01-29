var score = 0;
var auto = 0;
var cost1 = 300;
var cost2 = 1000;
var cost3 = 3000;
var cost4 = 10000;
var cost5 = 50000;
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
  updText();
}
function cps() {
  score = score + auto;
  updText();

}
function shop(s) {
    if (s == 1){
      if (cost1<score || score == cost1){
      auto = 10 + auto;
      score = score - cost1;
      cost1 = cost1 + 20;
      updText();
      }
    }
    if (s == 2){
      if (cost2<score || score == cost2){
      auto = 30 + auto;
      score = score - cost2;
      cost3 = cost3 + 60;
      updText();
      }
    }    
    if (s == 3){
      if (cost4<score || score == cost4){
      auto = 100 + auto;
      score = score - cost4;
      cost4 = cost4 + 200;
      updText();
      }
    }    
    if (s == 4){
      if (cost4<score || score == cost4){
      auto = 300 + auto;
      score = score - cost4;;
      cost4 = cost4 + 600;
      updText();
      }
    }    
    if (s == 5){
      if (cost5<score || score == cost5){
      auto = 1000 + auto;
      score = score - cost5;
      cost5 = cost5 + 2000;
      updText();
      }
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