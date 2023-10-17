let form = document.getElementById('form')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let age =document.getElementById('age')
let Submit = document.getElementById('button')
let data = {};
let div = document.getElementById('div')
let count = 0;
// let SecondDiv = document.getElementById('div2')
let tableContainer = document.getElementById('table')

Submit.addEventListener('click', (event) =>{
    let firstname = fname.value
    let lastname = lname.value
    let years = age.value

    // update the data object
    let data = {firstname:firstname, lastname:lastname, age:years}
    console.log(data)

    // retrieve the previous count from the local storage
    if(localStorage.getItem('count')){
        count = Number(localStorage.getItem('count'));
    }else{
        count = 0
    }
    // update the localStorage with the data and count
    localStorage.setItem(`data${count}`, JSON.stringify(data))

    count++
    localStorage.setItem('count',count)

    event.preventDefault()
});

let trow1 = document.createElement('tr');

let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th')


th1.innerHTML = 'Firstname';
th2.innerHTML = 'Lastname';
th3.innerHTML = 'Age';

trow1.append(th1, th2, th3)

tableContainer.append(trow1)

console.log(tableContainer)

for(let a = 0; a < localStorage.length; a++){
    // retrieve data from local storage
    let retrievedData = JSON.parse(localStorage.getItem(`data${a}`));

    
    let trow2 = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')

    console.log(retrievedData.firstname)

    // populate the paragraphs with the data
    td1.innerText = `${retrievedData.firstname}`;
    td2.innerText = `${retrievedData.lastname}`;
    td3.innerText = `${retrievedData.age}`;

    // append the paragraph to the div
    // trow1.append(paragraph1)
    // trow2.append(paragraph2)
    // trow3.append(paragraph3)
    // tableContainer.append(trow1, trow2, trow3)
    

    trow2.append(td1, td2, td3)
    tableContainer.append(trow2)
}







