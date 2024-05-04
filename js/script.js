// Задание 1
// Реализовать класс PrintMachine, которой состоит из: размера шрифта; цвета шрифта; семейства шрифта; метода print(), который принимает текст и печатает его 
// соответствующим шрифтомс помощью .
// Создать объект такого класса и продемонстрировать работу 
// метода. , ,

class PrintMachine {
    constructor(size, color, famyli) {
        this.size = size;
        this.color = color;
        this.famyli = famyli;
    }
    print(text) {
        document.write(`<h1 style = "font-size:${this.size}px; color: ${this.color}; font-family: ${this.famyli}">${text}</h1>`);
    }
}

// let test = new PrintMachine(30, 'red', 'sans-serif')
// test.print(2345678775432)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Реализовать класс, описывающий новость (заголовок, текст, 
//     массив тегов, дата публикации). В классе необходимо реализовать 
//     один метод print, который выводит всю информацию в таком 
//     виде, как на рисунке 1.
//     Обратите внимание на то, как выводится дата:
//      ■ если с даты публикации прошло менее дня, то выводится 
//     «сегодня»;
//     ■ если с даты публикации прошло менее недели, то выво-
// дится «N дней назад»;
//  ■ в остальных случаях, полная дата в формате «дд.мм.гггг»

class News extends PrintMachine {
    constructor(size, color, famyli, title, tags, text) {
        super(size, color, famyli) 
        this.title = title;
        this.tags = tags;
        this.text = text;
    }
    print() {
        let time = new Date()  // тут именно время вызова метода print
        document.write(`<section style = "font-size:${this.size}px; color: ${this.color}; font-family: ${this.famyli} ">
            <h2 style = "font-size:${this.size * 2.3}px;">${this.title}</h2>
            <br>
            <p style = "font-size:inherit;">${time}</p>
            <br>
            <p style = "font-size:inherit;">${this.text}</p>
            <br>
            <p style = "font-size:inherit;">${this.tags}</p>
        </section>`);
    }
    // пока не знаю как работать с датами. поэтому просто вставил. и еще иомент с выведением разницы. как это все обновляется . ведь метод вызовем или обновим страницу соответственно метод вызовется в настоящее время и от чего откладывать тогда это время.
}
let articleText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quisquam ab laborum, deleniti dicta fugiat adipisci dolore debitis consequatur, veniam ratione corrupti sunt modi et voluptatum, saepe quae deserunt sit?'
let test2 = new News(15, 'red', 'sans-serif', 'Заголовок','#тег1 тег2 тег3', articleText)  
test2.print()