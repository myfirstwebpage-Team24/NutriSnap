var daysEL = document.getElementById('days')
var hoursEL = document.getElementById('hours')
var minutesEL = document.getElementById('minutes')
var secondsEL = document.getElementById('seconds')

function Timer() {
    const countDownDate = new Date('1/1/2024').getTime()

    //Get milisecond
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const interval = setInterval(() => {

        //Get current date
        const now = new Date().getTime()
        const distance = countDownDate - now

        daysEL.innerText = formatNumber(Math.floor(distance / day))
        hoursEL.innerText = formatNumber(Math.floor((distance % day) / hour))
        minutesEL.innerText = formatNumber(Math.floor((distance % hour) / minute))
        secondsEL.innerText = formatNumber(Math.floor((distance % minute) / second))

        if (distance < 0) {
            document.getElementById('headline').innerText = 'The Sale is over :('
            document.getElementById('countdown').style.display = 'none'

            clearInterval(interval)
        }
    }, 1000)
}

function formatNumber(number) {
    if (number < 10) {
        return ( '0' + number)
    }

    return number
}

const text = '__Sign in Here__';
let index = 0;
const typingEffectElement = document.getElementById('typingEffect');

function type() {
  if (index < text.length) {
    typingEffectElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50); // Adjust the typing speed as needed
  }
}

type();

function validateForm() {
    var x = document.getElementById('femail').value;
    var y = document.getElementById('fpassword').value;
    if (x == "" || y == "") {
      alert("Email and Password must be filled out");
      return false;
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }