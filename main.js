let score = +prompt("Введите ваш балл");

if (score >= 90 && score <= 100) {
    console.log("Ваша оценка A");
} else if (score >= 80 && score < 90) {
    console.log("Ваша оценка B");
} else if (score >= 70 && score < 80) {
    console.log("Ваша оценка C");
} else if (score >= 60 && score < 70) {
    console.log("Ваша оценка D");
} else if (score <= 60) {
    console.log("Ваша оценка F");
} else {
    console.log("Не существует такой оценки");
}


let day = +prompt("Введите день недели");

if (day > 0 && day < 6) {
    console.log("Невезуха, у тебя рабочий день");
} else if  (day > 5 && day <= 7) {
    console.log("Ура, выходней день");
} else {
    console.log("Не существует такого дня недели");
}


let month = prompt("В какой месяц вы родились?");

if (month == "Январь") {
    console.log("Ваш знак зодиака - Козерог либо Водолей");
} else if (month == "Февраль") {
    console.log("Ваш знак зодиака - Водолей либо Рыбы");
} else if (month == "Март") {
    console.log("Ваш знак зодиака - Рыбы либо Овен");
} else if (month == "Апрель") {
    console.log("Ваш знак зодиака - Овен либо Телец");
} else if (month == "Май") {
    console.log("Ваш знак зодиака - Телец либо Близнецы");
} else if (month == "Июнь") {
    console.log("Ваш знак зодиака - Близнецы либо Рак");
} else if (month == "Июль") {
    console.log("Ваш знак зодиака - Рак либо Лев");
} else if (month == "Август") {
    console.log("Ваш знак зодиака - Лев либо Дева");
} else if (month == "Сентябрь") {
    console.log("Ваш знак зодиака - Дева либо Весы");
} else if (month == "Октябрь") {
    console.log("Ваш знак зодиака - Весы либо Скорпион");
} else if (month == "Ноябрь") {
    console.log("Ваш знак зодиака - Скорпион либо Стрелец");
} else if (month == "Ноябрь") {
    console.log("Ваш знак зодиака - Стрелец либо Козерог");
} else {
    console.log("Данные введены не верно, попробуйте ввести, пример: Январь, Март, Август");
}


