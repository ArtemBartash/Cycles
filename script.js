var data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
 ];

 username = prompt('Введите фамилию', '');
 var user = 0;
 for(var prop of data)
{
    if(prop.lastName === username)
    {
        user = prop;
    }
}

if(user) {
    alert("user name: " + user.firstName + " " + user.lastName +  "\n" +  "user age: " + user.age);
} else {
    alert("No results found for your request");
}
