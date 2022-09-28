var checkbox = document.querySelectorAll('input[type=checkbox]');
var getList = document.querySelectorAll('li');
/* TO add the line through and animation after the checklist is checked*/
for (let i of checkbox) {
    i.addEventListener('change', function () {

        let overlay = this.parentElement.getElementsByClassName('overlay')[0];

        if (this.checked) {


            this.parentElement.classList.add('check_list');
            setTimeout(function () {
                overlay.classList.add('hidden');
            }, 1000)
            overlay.classList.remove('hidden');
        } else {
            this.parentElement.classList.remove('check_list');

        }
    });
}
/* to delete the selected tasks*/
function getIdforList() {

    let arr = [];
    let lst = document.getElementsByTagName('li');

    for (let i of lst) {
        console.log(i);
        if (i.classList.contains('check_list')) {

            arr.push(i);

        }

    }

    let atagdel = [];//anchor tag delete
    for (let x of arr) {

        atagdel.push(x.getElementsByClassName('delete-btn')[0].getElementsByClassName('dlt-btn')[0]);
        console.log(x.getElementsByClassName('delete-btn')[0].getElementsByClassName('dlt-btn')[0]);
    }
   //get and press the specific list delete so that the selected task get deleted

    for (let j = 0; j <= atagdel.length; j++) {
        console.log(atagdel[j].click());
    }

}

