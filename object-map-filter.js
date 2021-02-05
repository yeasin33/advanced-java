const Staff = [
    {id: 34, name:'mohammad'},
    {id: 91, name:'Yeasin'},
    {id: 14, name:'Rashedd'},
    {id: 40, name:'farhan'},
    {id: 35, name:'Kawsir'}
];
const ids = Staff.map(s => s.id);
console.log(ids);
const names = Staff.map(s => s.name);
const biggerName = Staff.find(s => s.id>40);
const bigger = Staff.filter(s => s.id>40);
console.log(bigger);