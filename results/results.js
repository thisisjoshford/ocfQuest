const results = document.getElementById('results');

const joy = parseInt(localStorage.getItem('joy'));
const selfEsteem = parseInt(localStorage.getItem('selfEsteem'));
const insight = parseInt(localStorage.getItem('insight'));

const totalScore = (joy + selfEsteem + insight);

const highScore = 'Wooooahh! What an exuberant experience you\'ve had!  You leave the fair filled with love and float away in bliss.  Can\'t wait to see you again next year!!!';
const mediumScore = 'You leave the fair feeling fairly good... there were a lot of ups and downs, but you certainly learned a lot...  Even thought it didn\'t turn out like you expected... you\'ll certainly return next year.';
const lowScore = 'Shit... this year wasn\'t the greatest year for you... You certainly made your fair share of mistakes, but learned a lot. Time to go home, reflect, and see if you want to make the journey again next year.';
const hadToLeave = 'Fuck!  Never forget your ID!!! They are so strict about that shit... maybe you can drive home and make the journey back down.... this super sucks!';

if (totalScore >= 200) {results.textContent = highScore;}
if (totalScore >= 100 && totalScore <= 199) {results.textContent = mediumScore;}
if (totalScore <= 99) {results.textContent = lowScore;}


