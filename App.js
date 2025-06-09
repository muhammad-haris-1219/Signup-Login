let signBtn = document.getElementById('signup');
let loginBtn = document.getElementById('login');
let dataFields = document.getElementsByTagName('input');
let main = document.getElementById('main');
let container = document.getElementById('container');
let loginEmail, loginPassword, loginAdmin;
let empty = 0;
let gettingValue = true;

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

let creatingElement = () => {
    loginEmail = Object.assign(document.createElement('input'), {
        type: 'email', name: 'Email', placeholder: 'Enter Your Email'
    });
    loginPassword = Object.assign(document.createElement('input'), {
        type: 'password', name: 'Password', placeholder: 'Enter Your Password'
    });
    loginAdmin = Object.assign(document.createElement('input'), {
        type: 'password', name: 'Password', placeholder: 'For only Admin'
    });
    container.classList.add('container');
    container.append(loginEmail, loginPassword, loginAdmin);
};

let getConsumerData = localStorage.getItem('consumerData');
let users = getConsumerData ? JSON.parse(getConsumerData) : [];
signBtn.addEventListener('click', () => {
    let consumer = new user(...[...dataFields].map(field => field.value));
    let adminData = new admin(...[...dataFields].map(field => field.value), dataFields[5].value);
    [...dataFields].slice(0, -1).forEach((element) => element.value != "" ? empty++ : 0);
    if (empty == 5) {
        users.push(adminData ? adminData : consumer);
        localStorage.setItem("consumerData", JSON.stringify(users));
        for (let field of dataFields) { field.style.display = 'none' };
        creatingElement();
    } else {
        alert('do fill-up form');
        window.location.reload(true);
    };
});

loginBtn.addEventListener('click', () => {

    if (gettingValue) {
        for (let field of dataFields) { field.style.display = 'none' };
        creatingElement();
        gettingValue = false;
    };


    users.find((user) => {
        if (user.userEmailing != "" && user.userEmailing === loginEmail.value && user.userPasswording === loginPassword.value) {
            if (loginAdmin.value != '' && user.adminCode == loginAdmin.value) {
               window.location.href ='https://github.com/muhammad-haris-1219/Signup-Login';
                console.log(user, loginAdmin.value, 'admin');
            } else {
                window.location.pathname!='./signup.html'?
                window.location.href='https://github.com/muhammad-haris-1219/Upwork-Clone':
                console.log(user, 'user');
            };
        };
    });

});







// let loginEmail, loginPassword, loginAdmin;
// let getConsumerData = localStorage.getItem("consumerData");
// let users = getConsumerData ? JSON.parse(getConsumerData) : [];
// let empty = false;
// let displayed = true;
// signBtn.addEventListener('click', () => {
//     console.warn(empty)
//     // let consumer = new user(
//     //     dataFields[0].value, dataFields[1].value,
//     //     dataFields[2].value, dataFields[3].value,
//     //     dataFields[4].value
//     // );
//     let consumer = new user(...[...dataFields].map(field => field.value));
//     let adminData = new admin(...[...dataFields].map(field => field.value), dataFields[5].value);
//     for (let getfiled = 0; getfiled < [...[...dataFields]].length - 1; getfiled++) {
//         if ([...[...dataFields]][getfiled].value != "") { empty = true };
//     };
//     if (empty) {
//         users.push(adminData ? adminData : consumer);
//         localStorage.setItem("consumerData", JSON.stringify(users));
//         for (let i = 0; i < dataFields.length; i++) { dataFields[i].style.display = 'none'; displayed = false; };
//         creatingElement();empty = false;
//     }
//     else { alert('Do Fill-up Form'); displayed = true; }


//     // Fields of signup pages blanked
//     [...[...dataFields].map(field => field.value = '')];
// });

// let switched = true;
// loginBtn.addEventListener('click', () => {
//     if (displayed) {
//         for (let inputField of dataFields) {
//             inputField.style.display = 'none';
//         }
//         creatingElement();
//         displayed = false;
//     } else {

//         for (let j = 0; j < users.length; j++) {
//             // console.log(loginEmail.value)
//             if (loginEmail.value != "" && loginEmail.value == users[j].userEmailing && loginPassword.value == users[j].userPasswording) {
//                 if (loginAdmin.value != "" && loginAdmin.value == users[j].adminCode) {
//                     console.log('admin portal', users[j].adminCode)
//                     switched = false;
//                     break;
//                 };
//                 console.log('Registration Succesfully', users[j].userEmailing)
//                 alert('Registration Succesfully')
//                 // window.location.href = 'https://github.com/muhammad-haris-1219/Signup-Login';
//                 switched = false;
//                 break;
//             };
//         };
//         if (switched) {
//             alert('Do Signup Before Login')
//             for (let i = 0; i < dataFields.length; i++) { dataFields[i].style.display = 'grid'; }
//             loginEmail.remove(); loginPassword.remove(); loginAdmin.remove();
//             container.classList.remove('container');
//             switched = true;
//         };
//     };
// });





