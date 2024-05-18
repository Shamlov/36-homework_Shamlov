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
// let test2 = new News(15, 'red', 'sans-serif', 'Заголовок','#тег1 тег2 тег3', articleText)  
// test2.print()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Реализовать класс, описывающий новостную ленту. 
// Класс должен содержать:
//  ■ массив новостей;
//  ■ свойство, которое возвращает количество новостей;
//  ■ метод для вывода на экран всех новостей;
//  ■ метод для добавления новости;
//  ■ метод для удаления новости;
//  ■ метод для сортировки новостей по дате (от последних но-
// востей до старых);
//  ■ метод для поиска новостей по тегу (возвращает массив 
// новостей, в которых указан переданный в метод тег).
// Продемонстрировать работу написанных методов.

class Newsline {
    constructor() {
        this.newsArr = new Array();
    }
    showNumberNews() {  
        return newsArr.length
    }
    showNewsText() {
        this.newsArr.forEach(el => {
            console.log(el)
        });
    }
    addNewsText (text, teg) {
        let time = new Date() 
        this.newsArr.push({text, teg, time})
    }
    tagSearch(teg) {
        this.newsArr.forEach(function (el) {
            if(el.teg == teg) {
                console.log(el)
            }
        })
    }

    
}
// с датами и временем сложно пока для понимания
// соответственно сортировка по дате и времени не сделал
// не сделам метод удаления  не понял как 
let testNewsLine = new Newsline
// console.log(testNewsLine)
testNewsLine.addNewsText('Я новый текст1', 'тег 1')
testNewsLine.addNewsText('Я новый текст2', 'тег 2')
testNewsLine.showNewsText()
// console.log(newsArr)
testNewsLine.tagSearch('тег 2')  // работает
