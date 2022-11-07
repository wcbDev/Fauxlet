//sign up 
//log in
//pull question from the questions collection(next level of difficulty is to have difficulty buttons to select diffenent questions)
//if correct increase players score today and players scoore all time in user collection
//display all users scores all time


//what do the collections look like
//questions
//questionText
//questionAnswer
//questionDifficulty


//users
//userName
//userIcon(after I figure out how to do this. maybe just set a default and give people the chance to update)
//totalScore
//totalOfEachDifficultyCorrect(array in the array [...[Easy,Medium,Hard]])


var newQuestion = document.getElementById("newQuestion").addEventListener('click', nextQuestion);
var submit = document.getElementById("submit").addEventListener('click', submitAnswer);


 function nextQuestion() {
      window.location.reload(true)
  }

  function submitAnswer() {
    window.location.reload(true)
}
// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
//     fetch('thumbDown', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbDown':thumbDown
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
