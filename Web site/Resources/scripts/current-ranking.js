
var usersArray = [];

usersArray.push({
    firstName: 'Pesho',
    achievementPoints: 20
});

usersArray.push({
    firstName: 'Teodor',
    achievementPoints: 30
});

usersArray.push({
    firstName: 'Yana',
    achievementPoints: 40
});

function Sort() {
    function Sorter(a, b) {
        if (a.achievementPoints < b.achievementPoints) {
            return 1;
        }
        if (a.achievementPoints > b.achievementPoints) {
            return -1;
        }
        return 0;
    }

    usersArray.sort(Sorter);
}

function PushToHTML() {
    var names = document.getElementsByClassName('userName');
    var points = document.getElementsByClassName('userPoints');

    for (var i = 0; i < 3; i += 1) {
        names[i].innerHTML = usersArray[i].firstName;
        points[i].innerHTML = usersArray[i].achievementPoints + ' Points';
    }
}

Sort();
PushToHTML();

var btn = document.getElementById('push');
var nie = usersArray[1];

btn.addEventListener('click', function () {
    nie.achievementPoints += 5;
    Sort();
    PushToHTML();

    if (usersArray[0].firstName === nie.firstName) {
        var listItems = document.querySelectorAll('.current-ranking li');
        listItems[0].className = 'user';
        listItems[1].className = '';
    }
});