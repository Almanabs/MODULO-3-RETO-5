function createUserDictionary(name, id, yearOfBirth){

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const password = yearOfBirth.toString(16) + randomNumber;
    const user = {
        name: name,
        id: id,
        yearOfBirth: yearOfBirth,
        password: password,
      };
    
      return user;
    }
    const users = [];
    const numUsers = 5;
    for (let i = 1; i < numUsers; i++) {
    const user = createUserDictionary("User" + i, i, 1991 + i);    
    users.push(user);
    }
    console.log(users);

