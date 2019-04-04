
//1 task
function showArguments () {
    for ( var arg of arguments ) {
        console.log ( arg )
    }
}
showArguments(10, false, "google");
//2 task
var obj = {
    name: "Vasya",
    registered: true,
    data: "14.01.1234",
    prop: userInfo
};
var obj1 = {
    name: "Petya",
    registered: false,
    data: "11.05.6734",
    prop: userInfo
};
function userInfo() {
       this.registered == true ? console.log("Дата регистрации: " + this.data) :
           console.log("Незарегистрированный пользователь: " + this.name)
}
obj.prop();
obj1.prop();

//3 task
var users = {
    14587: {
        name: "Ivan",
        email: "ivan78@gmail.com"
    },
    28419: {
        name: "Georg",
        email: "georg.klep@gmail.com"
    },
    41457: {
        name: "Stephan",
        email: "stephan.borg@gmail.com"
    }
}
var posts = {
    7891451: {
        author: 14587,
        text: "Imagine we can encapsulate these secondary responsibilities in functions"
    },
    7891452: {
        author: 28419,
        text: `В конструкторе ключевое слово super используется как функция, вызывающая родительский конструктор.
                        Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора.
                        Ключевое слово super также может быть использовано для вызова функций родительского объекта`
    },
    7891453: {
        author: 28419,
        text: `DOM не обрабатывает или не вынуждает проверять пространство имен как таковое.
                        Префикс пространства имен, когда он связан с конкретным узлом, не может быть изменен`
    },
    7891454: {
        author: 14587,
        text: "Ключевое слово super используется для вызова функций, принадлежащих родителю объекта"
    }
}
var comments = {
    91078454: {
        postId: 7891451,
        author: 28419,
        text: `The static String.fromCharCode() method returns a string created
                        from the specified sequence of UTF-16 code units`
    },
    91078455: {
        postId: 7891451,
        author: 41457,
        text: `HTML элемент <template> — это механизм для отложенного рендера клиентского контента,
                        который не отображается во время загрузки, но может быть инициализирован при помощи JavaScript`
    },
    91078457: {
        postId: 7891452,
        author: 41457,
        text: "Глобальный объект String является конструктором строк, или, последовательностей символов"
    },
    91078458: {
        postId: 7891452,
        author: 14587,
        text: `The Element.namespaceURI read-only property returns the namespace URI of the element,
                        or null if the element is not in a namespace`
    }
};


function getCurrentPostComments (postId){
    var res = []
    for (var comment in comments){
        if (comments[comment].postId == postId){
            res.push({
                author: users[comments[comment]['author']].name,
                comments: comments[comment]['text']
            })
        }
    }
    return res
}
console.log ( getCurrentPostComments ( 7891451 ) );