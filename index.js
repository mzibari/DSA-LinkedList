const LinkedList = require('./LinkedList')

class index {
    main() {
        let SLL = new LinkedList
        SLL.insertFirst('Apollo')
        SLL.insertFirst('Boomer')
        SLL.insertFirst('Helo')
        SLL.insertFirst('Husker')
        SLL.insertFirst('Starbuck')
        SLL.insertFirst('Tauhida')
        SLL.remove('Husker')
        SLL.insertBefore('Athena', 'Boomer')
        SLL.insertAfter('Hotdog', 'Helo')
        SLL.insertAt('Kat', 3)
        SLL.remove('Tauhida')
        SLL.displayAll()
    }
}