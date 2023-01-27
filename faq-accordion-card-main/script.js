const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
const arrows = document.querySelectorAll('.arrow');
console.log(answer);

question.forEach(que => {
  que.addEventListener('click', function (e) {
    const targetQuestion = e.target;
    console.log(question);
    const ans = targetQuestion.nextElementSibling;
    if (!ans) return;
    ans.classList.toggle('hidden');
    const arrow = targetQuestion.querySelector('.arrow');
    arrow.classList.toggle('flip');
  });
});
