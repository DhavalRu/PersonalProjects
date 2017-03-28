$(document).ready(function() {
  var quoteArray = [["Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.", "Arnold Schwarzenegger"], ["If you are not willing to risk the usual you will have to settle for the ordinary.", "Jim Rohn"], ["Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.", "Swami Vivekananda"], ["All our dreams can come true if we have the courage to pursue them.", "Walt Disney"], ["Success is walking from failure to failure with no loss of enthusiasm.", "Winston Churchill"], ["Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.", "Vaibhav Shah"], ["Try not to become a person of success, but rather try to become a person of value.", "Albert Einstein"], ["Great minds discuss ideas; average minds discuss events; small minds discuss people.", "Eleanor Roosevelt"], ["If you don't value your time, neither will others. Stop giving away your time and talents--start charging for it.", "Kim Garst"], ["A successful man is one who can lay a firm foundation with the bricks others have thrown at him.", "David Brinkley"], ["When you stop chasing the wrong things, you give the right things a chance to catch you.", "Lolly Daskal"], ["If you can't explain it simply, you don't understand it well enough.", "Albert Einstein"], ["There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.", "Ray Goforth"], ["I find that the harder I work, the more luck I seem to have.", "Thomas Jefferson"], ["Success is the sum of small efforts, repeated day-in and day-out.", "Robert Collier"], ["If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.", "Thomas J. Watson"], ["All progress takes place outside the comfort zone.", "Michael John Bobak"], ["Only put off until tomorrow what you are willing to die having left undone.", "Pablo Picasso"], ["People often say that motivation doesn't last. Well, neither does bathing--that's why we recommend it daily.", "Zig Ziglar"], ["The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.", "Mark Caine"], ["The successful warrior is the average man, with laser-like focus.", "Bruce Lee"], ["If you genuinely want something, don't wait for it--teach yourself to be impatient.", "Gurbaksh Chahal"], ["The reason most people never reach their goals is that they don't define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.", "Denis Waitley"]];
  var counter;
  function getNewQuote() {
      counter = Math.floor(Math.random()*quoteArray.length);
  $("#quote").text(quoteArray[counter][0]);
  $(".author").text(quoteArray[counter][1]);
  }
  
  getNewQuote();
  $(".newQuote").on("click", function(){
      getNewQuote();
    });
  
  /*https://dev.twitter.com/web/tweet-button*/
  $(".tweet").on("click", function(){
    $(".tweet").attr("href", "https://twitter.com/intent/tweet?text="+$("#quote").text()+"--"+$(".author").text());
  });
  
  /* Copyright year */
  var today = new Date();
  var year = today.getFullYear();
  var copyright = document.getElementById("copyyear");
  copyright.innerHTML = year;
});