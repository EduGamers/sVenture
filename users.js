var usersArray = [];

usersArray.push({
    firstName: 'Pesho',
    achievementPoints: 20
});

usersArray.push({
    firstName: 'Yulia',
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

    console.log(usersArray);
    console.log(usersArray[0].firstName);
    console.log(JSON.stringify(usersArray[0].firstName));
    console.log(JSON.stringify(usersArray[0].achievementPoints));

    var names = document.getElementsByClassName('userName');
    var points = document.getElementsByClassName('userPoints');

    for (var i = 0; i < 3; i+=1) {
        names[i].innerHTML = usersArray[i].firstName;
        points[i].innerHTML = usersArray[i].achievementPoints;
    }

}

Sort();

var btn = document.getElementById('push');
var nie = usersArray[1];
btn.addEventListener('click', function () {
    nie.achievementPoints += 5;
    //usersArray[nie.firstName].achievementPoints += 5;
    Sort();
});