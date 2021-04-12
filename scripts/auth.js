//Listen for auth status change
auth.onAuthStateChanged(function (user) {
    if (user) {
        //Get Data From Firestore
        db.collection('guides').onSnapshot(function (snapshot) {
            setupGuides(snapshot.docs);
            setupUI(user);
        }, err => {
            console.log(err.message);
        });//Listen for auth status change
auth.onAuthStateChanged(function (user) {
    if (user) {
        //Get Data From Firestore
        db.collection('guides').onSnapshot(function (snapshot) {
            setupGuides(snapshot.docs);
            setupUI(user);
        }, err => {
            console.log(err.message);
        });
    } else {
        setupUI();
        setupGuides([]);
    };
});

// Contact Us
const contactForm = document.querySelector('#contact-form');
const cname = document.getElementById("contact-name");
const cemail = document.getElementById("contact-email");
const cmessage = document.getElementById("contact-message");
const csend = document.getElementById("contactBtn");

csend.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.database().ref('/contact/' + cname.value).set({
        c_name: cname.value,
        c_email: cemail.value,
        c_message: cmessage.value
    }).then(function() {
        const modal = document.querySelector("#modal-contact");
        M.Modal.getInstance(modal).close();
        contactForm.reset();
    });
});

//Create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('guides').add({
        title: createForm['title'].value,
        content: createForm['content'].value
    }).then(function () {
        //Close the Modal and reset the form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(function (err) {
        console.log(err.message);
    });
});

//Sign Up
const signUpForm = document.querySelector('#signup-form');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get User Info
    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;

    //Sign Up the Users
    auth.createUserWithEmailAndPassword(email, password).then(function (resp) {
        return db.collection('users').doc(resp.user.uid).set({
            bio: signUpForm['signup-bio'].value
        });
    }).then(function () {
        //Close the Modal and reset the form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signUpForm.reset();        
    });
});

//Logout
// const logout = document.querySelector('.logout');
// logout.addEventListener('click', (e) => {
//     e.preventDefault();
//     auth.signOut();
// });

function logOutUser(e) {
    auth.signOut();
};

//LogIn
const logInForm = document.querySelector('#login-form');
logInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get User Info
    const email = logInForm['login-email'].value;
    const password = logInForm['login-password'].value;

    //Log In the Users
    auth.signInWithEmailAndPassword(email, password).then(function (resp) {
        //Close the Modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        logInForm.reset();
    });
});

    } else {
        setupUI();
        setupGuides([]);
    };
});

//Create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('guides').add({
        title: createForm['title'].value,
        content: createForm['content'].value
    }).then(function () {
        //Close the Modal and reset the form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        signUpForm.reset();
    }).catch(function (err) {
        console.log(err.message);
    });
});

//Sign Up
const signUpForm = document.querySelector('#signup-form');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get User Info
    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;

    //Sign Up the Users
    auth.createUserWithEmailAndPassword(email, password).then(function (resp) {
        return db.collection('users').doc(resp.user.uid).set({
            bio: signUpForm['signup-bio'].value
        });
    }).then(function () {
        //Close the Modal and reset the form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signUpForm.reset();        
    });
});

//Logout
// const logout = document.querySelector('.logout');
// logout.addEventListener('click', (e) => {
//     e.preventDefault();
//     auth.signOut();
// });

function logOutUser(e) {
    auth.signOut();
};

//LogIn
const logInForm = document.querySelector('#login-form');
logInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get User Info
    const email = logInForm['login-email'].value;
    const password = logInForm['login-password'].value;

    //Log In the Users
    auth.signInWithEmailAndPassword(email, password).then(function (resp) {
        //Close the Modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        logInForm.reset();
    });
});
