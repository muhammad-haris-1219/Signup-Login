let signBtn = document.getElementById('signup');
let loginBtn = document.getElementById('login');
let dataFields = document.getElementsByTagName('input');
let main = document.getElementById('main')
let container = document.getElementById('container')



class user {
    constructor(named, emailed, contacted, countrty, code) {
        this.userNaming = named;
        this.userEmailing = emailed;
        this.userContacting = contacted;
        this.userAddressing = countrty;
        this.userPasswording = code;
    };
};

class admin extends user {
    constructor(named, emailed, contacted, country, code, coded) {
        super(...[...dataFields].map(field => field.value));
        this.adminCode = coded;
    };
};

let loginEmail, loginPassword, loginAdmin;
let getConsumerData = localStorage.getItem("consumerData");
let users = getConsumerData ? JSON.parse(getConsumerData) : [];
let empty = false;
signBtn.addEventListener('click', () => {
    // let consumer = new user(
    //     dataFields[0].value, dataFields[1].value,
    //     dataFields[2].value, dataFields[3].value,
    //     dataFields[4].value
    // );
    let consumer = new user(...[...dataFields].map(field => field.value));
    let adminData = new admin(...[...dataFields].map(field => field.value), dataFields[5].value);
    for (let k = 0; k < [...[...dataFields]].length - 1; k++) {
        if ([...[...dataFields]][k].value != "") { empty = true };
    };
    if (empty) {
        users.push(adminData ? adminData : consumer);
        localStorage.setItem("consumerData", JSON.stringify(users));
    }
    else { alert('Do Fill-up Form') }
        for (let i = 0; i < dataFields.length; i++) { dataFields[i].style.display = 'none' };

        // Login Page Creating
        loginEmail = document.createElement('input');
        loginEmail.setAttribute('type', 'email');
        loginPassword = document.createElement('input');
        loginPassword.setAttribute('type', 'password')
        loginAdmin = document.createElement('input');
        loginAdmin.setAttribute('type', 'password');
        loginPassword.type = loginAdmin.type = 'Password';
        loginPassword.type = loginAdmin.placeholder = 'Password';
        loginEmail.placeholder = 'Email';
        loginPassword.placeholder = 'Password';
        loginAdmin.placeholder = 'Admin Code';
        container.classList.add('container');
        container.append(loginEmail, loginPassword, loginAdmin);
        empty = false;


    // Fields of signup pages blanked
    [...[...dataFields].map(field => field.value = '')]
});

let switched = true;
loginBtn.addEventListener('click', () => {
  
    for (let j = 0; j < users.length; j++) {
        if (loginEmail.value != "" && loginEmail.value == users[j].userEmailing && loginPassword.value == users[j].userPasswording) {
            if (loginAdmin.value != "" && loginAdmin.value == users[j].adminCode) {
                console.log('admin portal', users[j].adminCode)
                switched = false;
                break;
            };
            console.log('Registration Succesfully', users[j].userEmailing)
            alert('Registration Succesfully')
            switched = false;
            break;
        };
    };
    if (switched) {
        alert('Do Signup Before Login')
        for (let i = 0; i < dataFields.length; i++) { dataFields[i].style.display = 'grid'; }
        loginEmail.remove(); loginPassword.remove(); loginAdmin.remove();
        container.classList.remove('container');
        switched = true;
    };
});





