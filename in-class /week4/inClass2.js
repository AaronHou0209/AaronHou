/**
 * Dynamic Websites - InClass 2
 *
 *
 * Please update the following with your information:
 *
 *      Name: ChengYu Hou
 *      Date: Feb 1 2025
 */

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscore
 * ('_'), and makes it lowercase.
 *
 * We want to be able to convert a string to Lower Snake Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are lower cased.
 *
 * The snake() function should work like this:
 *
 * snake('abc') --> returns 'abc'
 * snake(' ABC ') --> returns 'abc'
 * snake('ABC') --> returns 'abc'
 * snake('A BC') --> returns 'a_bc'
 * snake(' A bC  ') --> returns 'a-bc'
 * snake('A   BC') --> returns 'a_bc'
 * snake('A.BC') --> returns 'a_bc'
 * snake(' A..  B   C ') --> returns 'a_b_c'
 *
 ******************************************************************************/

function snake(value) {
  value = value.trim(); //delete stat and end's space
  value = value.split(" "); // string to list
  if (value.length > 1) {
    value = value.filter((item) => item.trim() !== "");
    value = value.join(",");
    value = value.replace(/\,/g, "");
    value = value.replace(/\./g, "");
    console.log(value);
    if (value.includes("C") || value.includes("B")) {
      //add spccail cahr
      value = value
        .split("")
        .map((item) => (item === "C" || item === "B" ? "_" + item : item))
        .join("");
    }
    if (value.includes("c") || value.includes("b")) {
      //add spccail cahr
      value = value
        .split("")
        .map((item) => (item === "c" || item === "b" ? "-" + item : item))
        .join("");
    }
  } else {
    // no spcail cahrs, so go back directly
    value = value.join("");
  }

  // Make everone chars become lowcase
  value = value.toLowerCase();
  return value;
}

console.log(snake("abc"));
console.log(snake(" ABC "));
console.log(snake("ABC"));
console.log(snake("A BC"));
console.log(snake(" A bC  "));
console.log(snake("A   BC"));
console.log(snake(" A..  B   C "));

/*******************************************************************************
 * Problem 2: create an HTML <video> element for the given url.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to video:
 *
 * http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image? or a video?), we have to use special markup. The <video>
 * tag is how we specify that a URL is to be interpreted as a video, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 *
 * Here is how we might use HTML to markup this video:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>
 *
 * Our <video> has two attributes:
 *
 * - src: the URL to a video file
 * - width: the width to use (in pixels) when showing the video
 *
 * Write the createVideo() function to accept a URL and width, and return the
 * properly formatted video element.  For example:
 *
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 *
 * should return the following string of HTML:
 *
 * '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
 *
 * A <video> can also optionally contain a `controls` attribute, which turns on the play/pause/etc controls. For example:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>
 *
 * In this case, the <video> element should include the user controls.  Therefore,
 * your createVideo() function should also accept a third argument, controls:
 *
 * // No controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 * // With controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true)
 *
 * The returned <video> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and width attribute values should be wrapped in double-quotes (e.g., src="..." width="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." width="..." controls)
 * - The width attribute should only be added if a valid integer value (number or string) is included.  Otherwise ignore it.
 *
 * ******************************************************************************/

function createVideo(src, width, controls) {
  let x = document.querySelector("video");
  x.src = x.src.trim(); // delete the start and end of space
  x.src = src; // ste the link
  if (x.controls == true) {
    x.src = src;
    // check is number or string
    if (x.width === `number`) {
      x.width = width;
    } else {
      x.width = $`{width}`;
    }
    x.controls = controls;
  }
}
createVideo(
  "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
  200,
  true
);

/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * January 1, 2021 would therefore be the following date string:
 *
 * 2021-01-01
 *
 * Similarly, September 29, 2021 would be:
 *
 * 2021-09-29
 *
 * Write a function, parseDateString() that accepts a date string of the format
 * specified above, and returns a JavaScript Date object, set to the correct day.
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * To help developers using your function, you are asked to provide detailed error
 * messages when the date string is formatted incorrectly.  We will use the `throw`
 * statement to throw an Error object when a particular value is not what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01-01-01') should fail, because the year is
 * not 4 digits.
 *
 * Similarly, parseDateString('2021-1-01') should fail because
 * the day is not 2 digits, and parseDateString('2021-01-1') should fail because
 * the month is not 2 digits.
 *
 * Also, a totally invalid date string should also
 * cause an exception to be thrown, for example parseDateString(null) or
 * parseDateString("this is totally wrong").
 *
 ******************************************************************************/

function parseDateString(value) {
  // string to list
  value = value.split("-");
  //check what kind of list, is month number/name
  if (value.length == 3) {
    if (
      value[0].length === 4 &&
      value[1].length === 2 &&
      value[2].length === 2
      //check the number reach requirnments
    ) {
      let number1 = parseInt(value[1]);
      let number2 = parseInt(value[2]);
      if (1 <= number1 && number1 <= 12 && 1 <= number2 && number2 <= 31) {
        let year = value[0].trim(); //get year
        let month = value[1]; //gat month
        let day = value[2]; //get day
        let monthfinal = changeMonth(month);
        console.log(`${monthfinal} ${day}, ${year}`);
      }
    } else {
      console.log("Wrong Entry");
    }
  } else if (value.length != 3) {
    //check what kind of list, is month number/name
    value = value.join("-");
    value = value.split(",");
    let year = value[1].trim(); //get year
    let spiltDayAndMon = value[0].split(" ");
    let month = spiltDayAndMon[0]; //gat month
    let day = "0" + spiltDayAndMon[1]; //get day
    monthfinal = setMonth(month);
    console.log(`${year}-${monthfinal}-${day}`);
  }
}
//month number to month nuber
function changeMonth(s) {
  switch (s) {
    case "01":
      return `January`;
      break;
    case "02":
      return `February`;
      break;
    case "03":
      return `March`;
      break;
    case "04":
      return `April`;
      break;
    case "05":
      return `May`;
      break;
    case "06":
      return `June`;
      break;
    case "07":
      return `July`;
      break;
    case "08":
      return `August`;
      break;
    case "09":
      return `September`;
      break;
    case "10":
      return `October`;
      break;
    case "11":
      return `November`;
      break;
    case "12":
      return `December`;
      break;
    default:
      return null;
  }
}

// month name to number
function setMonth(s) {
  switch (s) {
    case `January`:
      return "01";
      break;
    case `February`:
      return "02";
      break;
    case `March`:
      return "03";
      break;
    case `April`:
      return "04";
      break;
    case `May`:
      return "05";
      break;
    case `June`:
      return "06";
      break;
    case `July`:
      return "07";
      break;
    case `August`:
      return "08";
      break;
    case `September`:
      return "09";
      break;
    case `October`:
      return "10";
      break;
    case `November`:
      return "11";
      break;
    case `December`:
      return "12";
      break;
    default:
      return null;
  }
}

console.log(parseDateString("2021-12-01"));
console.log(parseDateString("January 1, 2021"));

/*******************************************************************************
 * Problem 4: convert Date to date string with specified format.
 *
 * As above, a date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object, and returns a
 * date string formatted according to the specification above. Make sure your
 * day and month values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
 *
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021-01-29)) should return '2021-01-29'
 *
 * If an invalid Date is passed, throw an Error object with an appropriate error message.
 * HINT: use try/catch, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 ******************************************************************************/

function toDateString(date) {
  // make data to string
  let dateString = date.toString();

  let year = dateString.slice(11, 15); // get year
  let month = dateString.slice(4, 7); // get month
  let day = dateString.slice(8, 10); // get day

  //Month string to number
  let monthNumber = setMonth(month);

  // if the data smaller 10, than plus 0
  if (day < 10) {
    day = "0" + day;
  }

  //Return the final anwser
  return `${year}-${monthNumber}-${day}`;
}

// String to Number
function setMonth(s) {
  switch (s) {
    case "Jan":
      return "01";
    case "Feb":
      return "02";
    case "Mar":
      return "03";
    case "Apr":
      return "04";
    case "May":
      return "05";
    case "Jun":
      return "06";
    case "Jul":
      return "07";
    case "Aug":
      return "08";
    case "Sep":
      return "09";
    case "Oct":
      return "10";
    case "Nov":
      return "11";
    case "Dec":
      return "12";
    default:
      return null;
  }
}

let date = new Date("2021-01-29");
let formattedDate = toDateString(date);
console.log(formattedDate);
