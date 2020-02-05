const love = /love/g;

const sentence =
	'Love is the best thing in this world. Some found their love and some are still looking for their love.';

sentence.toLowerCase().match(love);

const because = /because/g;

'You cannot end a sentence with because because because is a conjunction'.match(because);

const mess =
	'%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

mess.replace(/[^\w\s\.\?]/gi, '');

const annualIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.split(
	' '
);

const salary = parseInt(annualIncome[2]) * 12;
const annualBonus = parseInt(annualIncome[8]);
const courseIncome = parseInt(annualIncome[12]) * 12;

console.log(salary);
console.log(annualBonus);
console.log(courseIncome);

const totalAnnualIncome = salary + annualBonus + courseIncome;

console.log(totalAnnualIncome);
