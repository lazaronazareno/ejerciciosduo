function daysleft () {
  date = new Date();
  prevmonth = 31
let day = date.getDate() + prevmonth; 
const year = 366;
console.log (year-day)

}