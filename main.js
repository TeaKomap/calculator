function calculator(userInput) {
    userInput.question('Введите значения и оператор через пробел (например 2 + 3): ',
        (input) => {
            inputHandler(input, (number1, operator, number2) => {

                let result;
                switch (operator) {
                    case '+':
                        result = add(number1, number2)
                        
                        break;
                    default:

                        console.log ("Неверная операция");
                        userInput.close();
                        return;
                }
                console.log('Результат' + result);                                                             
            });        
        });
}

calculator(userInput);
