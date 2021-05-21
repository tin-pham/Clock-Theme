const button = document.querySelector('.button');
const body = document.body;
button.addEventListener('click', (e) => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    button.innerHTML = 'Dark Theme';
  } else {
    body.classList.add('dark');
    button.innerHTML = 'Light Theme';
  }
});

const hourEle = document.querySelector('.tick--hour');
const minuteEle = document.querySelector('.tick--minute');
const secondEle = document.querySelector('.tick--second');

function setNumber(hour, minute) {
  const hourNumber = document.querySelector('.number__hour');

  const minuteNumber = document.querySelector('.number__minute');

  const AMPM = document.querySelector('.number__ampm');
  hourNumber.textContent = hour;
  minuteNumber.textContent = minute;

  let ampm;
  if (0 <= hour && hour <= 11) {
    ampm = 'AM';
  } else {
    ampm = 'PM';
  }

  AMPM.textContent = ampm;
}

function setDate(day, month, date) {
  const dayArray = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
  ];
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayEle = document.querySelector('.date__day');
  const monthEle = document.querySelector('.date__month');
  const dateEle = document.querySelector('.date__date');

  dayEle.textContent = dayArray[day];
  monthEle.textContent = monthArray[month];

  date = date < 10 ? '0' + date : date;

  dateEle.textContent = date;
}

function setClock(hour, minute, second) {
  const hourTick = document.querySelector('.tick--hour');
  const minuteTick = document.querySelector('.tick--minute');
  const secondTick = document.querySelector('.tick--second');

  hourTick.style.transform = ` translate(-50%,-100%) rotate(${scaleRange(
    hour,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteTick.style.transform = `translate(-50%, -100%) rotate(${scaleRange(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;

  secondTick.style.transform = `translate(-50%, -100%) rotate(${scaleRange(
    second,
    0,
    59,
    0,
    360
  )}deg)`;
}

function scaleRange(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function setTime() {
  const dateObj = new Date();

  let hour = dateObj.getHours();
  let minute = dateObj.getMinutes();
  let second = dateObj.getSeconds();
  let date = dateObj.getDate();
  let month = dateObj.getMonth();
  let day = dateObj.getDay();
  setNumber(hour, minute);
  setDate(day, month, date);
  setClock(hour, minute, second);
}

setTime();

setInterval(setTime, 1000);
