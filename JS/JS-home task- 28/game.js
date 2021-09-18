// Task 03
/* Игра русско-английский словарь;
   двухмерный массив с парами слов (всего пять пар)
   спрашивать пользователя перевод английского слова из массива,
если ответ правильный - выводить "Отлично!", если не - 
правильный перевод слова.   
*/

let words = [                   //words[1][0] -> engl index ->ru index=1
    ['apple', 'яблоко', 'Apfel'],
    ['orange', 'апельсин', 'Orange'],
    ['cherry', 'вишня', 'Kirsche'],
    ['kiwi', 'киви', 'Kiwi'],
    ['strawberry', 'клубника', 'Erdbeere'],
],
    ru = 1;
eng = 0;
de = 2;

levels = [easyWords, complexWords],
languages = ['eng', 'ru', 'de'];

startGame(levels, languages);

function startGame(arrLevels, arrLangs){
    alert('Welcome to the word-memories game!');
    const langFrom = chooseLanguage(arrLangs, 'for the word!');
    if(langFrom == null){
        finaleMessage(langFrom);
    }else{
        arrLangs.splice(langFrom, 1)
        let langTo = chooseLanguage(arrLangs, 'on which you want to translate');
        //langTo == null ? finaleMessage(langTo) : game(arrLevels, langFrom, langTo);
        if(langTo == null){
            finaleMessage(langTo);
        }else{
            game(arrLevels, langFrom, langTo);
        }
    }
}

function game(gameLevels, langWord, langTranslate){
     for (let i= 0; )
}

function checkUserTranslation() {
    let errorCount = 0;
    while (words.length) {
        const index = getRandomArrayIndex(words.length);
        const getUserTranslation = getUserTranslation(index);
        if (userTranslation === words[index][ru]) {
            alert('Correct!');
            words.splice(index, 1);
        } else {
            alert(`wrong, correct answer is ${words[index][ru]}`);
            errorCount++;
        }
    }
    return errorCount;
}

function getUserTranslation(index) {
    return prompt(`how do you translate the world ${words[index][eng]}?`).toLocaleLowerCase();
}

function getRandomArrayIndex(range) {
    return Math.floor(Math.random() * range);
}

function finaleMessage(count){
    if (count == 0) alert('Great job!');
    else{
        if(count)
        alert(`you were wrong ${count} times`);
    }
    if(count == null){
        alert('you don\'t like continue...');
        return null
    }
    return count == null ? null : confirm('One more time?');
}