/**
 * @author Jonathas Rocha de Souza
 */


/*
TO DO LIST:

VALIDATION ERROR
*/
this

// list
const books = new Book(
    "A", "B", "C", "D"
)

// console.log(books.title);

function Book(title) {
    this.title = title
}

function Book(title, author) {
    this.title = title
    this.author = author
}

function Book(title, author, subtitle) {
    this.title = title
    this.author = author
    this.subtitle = subtitle
}

/**
 * 
 * @param {*} title 
 * @param {*} author 
 * @param {*} subtitle 
 * @param {*} release_year 
 * @param {*} category 
 */
function Book(title, author, subtitle, release_year, category) {
    this.title = title
    this.author = author
    this.subtitle = subtitle
    this.release_year = release_year
    this.category = category
}

/**
 * 
 * @param {*} name text/string
 * @param {*} indentity numbers and string
 * @param {*} birth_date date
 * @param {*} librarySubscriber boolean
 */
function User(name, indentity, birth_date, librarySubscriber) {
    this.name = name
    this.indentity = indentity
    this.birth_date = birth_date
    this.librarySubscriber = librarySubscriber

}

/**
 * 
 * @param {*} user User object
 * @param {*} book Book object
 * @param {*} price decimal value
 * @param {*} period date
 */
function RentBook(user, book, price, period) {
    
}

/**
 * category list
 * 
 * INDEXS:
 * 
 * Studies (0),
 * Geography (1),
 * Comedy (2),
 * Comics (3),
 * Newspaper (4)
 */
const category = [
    {   // 1
        _name: 'Studies',
        _description:
        'Books for study.'
    },

    {   // 2
        _name: 'Geography',
        _description:
        'Geography, cultures and languages books.'
    },

    {   // 3
        _name: 'Comedy',
        _description:
        'Comedy books'
    },

    {   // 4
        _name: 'Comics',
        _description:
        'Marvel and DC comics'
    },

    {   // 5
        _name: 'Newspaper',
        _description:
        'Newspapers: The New York Times, USA Today, Detroid Free Press, Newsday, Thenews, Chicago Tribune...'
    }
]

/**
 * 
 * @param {*} user User object
 * @param {*} book Book object
 * 
 * @returns decimal value price - monetary
 */
function calcPriceByObj(user, book) {
    if (user.librarySubscriber === true) {
        return 0.0
    }

    if (book.category._name === category[0]._name) {
        return 1.5
    } else if (book.category._name === category[1]._name) {
        return 2.5
    } else if (book.category._name === category[2]._name) {
        return 2.
    } else if (book.category._name === category[3]._name) {
        return 1.
    } else {
        return .60
    }
}

/**
 * 
 * @param {*} userSubscribBool boolean
 * @param {*} bookCategory category list obj
 * 
 * @returns decimal value price - monetary
 */
function calcPricebyReferences(userSubscribBool, bookCategory) {
    if (userSubscribBool === true) {
        return 0.0
    }

    if (bookCategory._name === category[0]._name) {
        return 1.5
    } else if (bookCategory._name === category[1]._name) {
        return 2.5
    } else if (bookCategory._name === category[2]._name) {
        return 2.
    } else if (bookCategory._name === category[3]._name) {
        return 1.
    } else {
        return .60
    }
}

/**
 * propertie '_name', enum category
 * 
 * @param number (index arg, to list category)
 * @returns String
 */
 function getCategoryName(number) {
    return 'Category: ' + category[number]._name;
}

/**
 * propertie '_description', enum category
 * 
 * @param number (index arg, to list category)
 * @returns String
 */
 function getCategoryDescription(number) {
    return 'Description: ' +  category[number]._description
}

/**
 * properties '_name' and '_description', enum category
 * 
 * @param number (index arg, to list category)
 * @returns String
 */
function getCategoryNameDescription(number) {
    
    textNameDecription = 
      'Category: '    + category[number]._name + '. ' +
      'Description: ' + category[number]._description;

    return textNameDecription;
}

/**
 * 
 */
const PERSON_EXAMPLE_DEFAULT = {
    _name: '',
    _birth_date: '04-08-2020'

}

/**
 * 
 */
const BOOK_EXAMPLE_DEFAULT = {
    _author_name: ''
}


console.log(`
    ${JSON.stringify(PERSON_EXAMPLE_DEFAULT)} \n
    ${BOOK_EXAMPLE_DEFAULT._author_name} \n
`)

console.log(category[1]._name)

console.log('Rental simulation: ' + '\n' +
    calcPriceByObj(
        new User(``, ``, ``, true),
        new Book(``, ``, ``, ``, category[2])
    )
    + `\n` +
    `${ 1 + 1 }`
)