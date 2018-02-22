const HYF = {
    studentClasses:[
        {
            name:"class14",students:["lulu","saly"],mentors:[12,13]
        }
    ]

};
console.log(HYF.studentClasses[0].students[1]);



//declare a function
function addNewClass(classObject) {
HYF.studentClasses.push(classObject);
}
addNewClass({name:"class15",students:["lala","samy"],mentors:[11,14]});
console.log(HYF.studentClasses[1]);
console.log(HYF.studentClasses.length-1);


for(let i=0;i<1000;i++){
    addNewClass({name:`class ${i+1}`,students:[],mentors:[]})
};
console.log(HYF.addNewClass[HYF.studentClasses.length-1].name);
const studentsForOdd=['lana','hiba','hala'];
const studentsForEven=['tofi','michel','harut'];
for(let i%2){
    HYF.addNewClass[i].students.concat(studentsForEven);
}else{
    HYF.addNewClass[i].students.concat(studentsForOdd);
}
}
console.log((HYF.addNewClass[HYF.studentClasses.length-1].students);//1001
console.log((HYF.addNewClass[HYF.studentClasses.length-2].students);//1000





