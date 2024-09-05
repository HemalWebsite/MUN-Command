// //get delegates test for hompage
// const database = firebase.database();

//         // Reference to the 'delegates' node
//         const delegatesRef = database.ref('delegates');

//         // Get all delegates from the database
//         delegatesRef.once('value', (snapshot) => {
//             snapshot.forEach((delegateSnapshot) => {
//                 // Get delegate data
//                 const delegate = delegateSnapshot.val();
//                 const delegateKey = delegateSnapshot.key;

//                 // Log delegate's information
//                 console.log("Delegate Name:", delegate.firstName);
//                 console.log("Country:", delegate.country);
//                 console.log("Key:", delegateKey);

//                 // Separator for better readability
//                 console.log("-------------------");
//             });
//         });


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAR4U60XWS8cwDVspszxmE4xdWjIfENDCs",
    authDomain: "muntest-8e5d7.firebaseapp.com",
    projectId: "muntest-8e5d7",
    storageBucket: "muntest-8e5d7.appspot.com",
    messagingSenderId: "644505644686",
    appId: "1:644505644686:web:813ac71b3630aad45963df",
    measurementId: "G-D1ENZ6FBFB"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to add a new delegate
// function addNewDelegate() {
//     const firstName = document.getElementById("name-textfield").value;
//     const middleName = document.getElementById("middlename-textfield").value;
//     const lastName = document.getElementById("lastname-textfield").value;
//     const email = document.getElementById("email-textfield").value;
//     const grade = document.getElementById("grade-dropdown").value;
//     const committee = document.getElementById('committee-dropdown').value;
//     const school = document.getElementById('school-dropdown').value;
//     const country = document.getElementById("country-textfield").value;

//     if (firstName === "" || lastName === "" || school === "" || committee === "" || country === "") {
//         alert("All fields except middle name must be filled out!");
//         return;
//     }

//     db.collection(committee).add({
//         firstName,
//         middleName,
//         lastName,
//         school,
//         email,
//         grade,
//         committee,
//         country,
//         points: 0,
//         POI: 0,
//         speech: 0
//     }).then(docRef => {
//         console.log("Document written with ID: ", docRef.id);
//     }).catch(error => {
//         console.error("Error adding document: ", error);
//     });
function addNewDelegate() {
    const firstName = document.getElementById("name-textfield").value;
    const middleName = document.getElementById("middlename-textfield").value;
    const lastName = document.getElementById("lastname-textfield").value;
    const email = document.getElementById("email-textfield").value;
    const grade = document.getElementById("grade-dropdown").value;
    const committee = document.getElementById('committee-dropdown').value;
    const school = document.getElementById('school-dropdown').value;
    const country = document.getElementById("country-textfield").value;

    if (firstName === "" || lastName === "" || school === "" || committee === "" || country === "") {
        alert("All fields except middle name must be filled out!");
        return;
    }

    // Check if there's already a delegate from the same country in the selected committee
    db.collection(committee)
        .where('country', '==', country)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                alert(`A delegate from ${country} already exists in the ${committee} committee.`);
                document.getElementById("country-textfield").value = ""; // Clear only the country input field
            } else {
                // If no delegate exists from the same country, add the new delegate
                db.collection(committee).add({
                    firstName,
                    middleName,
                    lastName,
                    school,
                    email,
                    grade,
                    committee,
                    country,
                    points: 0,
                    POI: 0,
                    speech: 0
                }).then(docRef => {
                    console.log("Document written with ID: ", docRef.id);
                }).catch(error => {
                    console.error("Error adding document: ", error);
                });
                
                // Reset form fields after successful submission
                document.getElementById("name-textfield").value = "";
                document.getElementById("middlename-textfield").value = "";
                document.getElementById("lastname-textfield").value = "";
                document.getElementById("email-textfield").value = "";
                document.getElementById("grade-dropdown").value = "";
                document.getElementById("committee-dropdown").value = "";
                document.getElementById("school-dropdown").value = "";
                document.getElementById("country-textfield").value = "";
            }
        }).catch(error => {
            console.error("Error checking for existing delegate: ", error);
        });
}


// Function to display delegates in a table
// function displayDelegates() {
//     const allCommittees = ['ICJ', 'GA3', 'GA2']; // Add more committees as needed
//     const listTableBody = document.getElementById("list-table-body");
//     listTableBody.innerHTML = ""; // Clear the table

//     allCommittees.forEach(committee => {
//         db.collection(committee).onSnapshot(snapshot => {
//             snapshot.forEach((doc, index) => {
//                 let delegate = doc.data();
//                 let delegateKey = doc.id;
//                 let row = document.createElement("tr");
//                 row.innerHTML = `<td>${index + 1}</td><td>${delegate.firstName} ${delegate.middleName} ${delegate.lastName}</td>
//                                  <td>${delegate.school}</td><td>${delegate.email}</td><td>${delegate.grade}</td>
//                                  <td>${delegate.committee}</td><td>${delegate.country}</td><td>${delegate.points}</td>
//                                  <td>${delegate.POI}</td><td>${delegate.speech}</td>
//                                  <td><button onclick='deleteDelegate("${delegateKey}")'>Delete</button></td>`;
//                 listTableBody.appendChild(row);
//             });
//         });
//     });
//     // Attach event listener to delete buttons
//     document.querySelectorAll('.delete-button').forEach(button => {
//         button.addEventListener('click', function() {
//             const committee = this.getAttribute('data-committee');
//             const key = this.getAttribute('data-key');
//             deleteDelegate(committee, key);
//         });
//     });

// }
function displayDelegates() {
    const allCommittees = ['ICJ', 'GA3', 'GA2']; // Adjust as needed for your committees
    const listTableBody = document.getElementById("list-table-body");
    listTableBody.innerHTML = ""; // Clear the table
    let index = 1;  // Initialize row counter outside of the committee loop

    allCommittees.forEach(committee => {
        db.collection(committee).onSnapshot(snapshot => {
            snapshot.forEach(doc => {
                let delegate = doc.data();
                let delegateKey = doc.id;
                let row = document.createElement("tr");
                row.innerHTML = `<td>${index++}</td><td>${delegate.firstName}</td><td>${delegate.lastName}</td>
                                 <td>${delegate.school}</td><td>${delegate.email}</td><td>${delegate.grade}</td>
                                 <td>${delegate.committee}</td><td>${delegate.country}</td><td>${delegate.points}</td>
                                 <td><button class="btn btn-danger delete-button" onclick='deleteDelegate("${committee}", "${delegateKey}")'>Delete</button></td>`;
                listTableBody.appendChild(row);
            });
        });
    });
}

// Call the function initially to display delegates based on the initial value of the committee dropdown
displayDelegates();

// Event listener for changes in the committee dropdown
document.getElementById('committee-dropdown').addEventListener('change', displayDelegates);


// Function to delete a delegate
// function deleteDelegate(committee, key) {
//     console.log("Deleting delegate:", key);
//     db.collection(committee).doc(key).delete().then(() => {
//         console.log("Delegate successfully deleted");
//     }).catch(error => {
//         console.error("Error removing document: ", error);
//     });
// }


// function deleteDelegate(committee, key) {
//     console.log("Deleting delegate:", key);
//     db.collection(committee).doc(key).delete().then(() => {
//         console.log("Delegate successfully deleted");
//         displayDelegates();  // Refresh the list after deletion
//     }).catch(error => {
//         console.error("Error removing document: ", error);
//     });
// }

// Function to load delegates based on the selected committee
function loadDelegates(committee) {
    const delegatesRef = firebase.firestore().collection(committee);
    delegatesRef.get().then((querySnapshot) => {
        const tableBody = document.getElementById('list-table-body');
        tableBody.innerHTML = ''; // Clear previous rows
        let rowIndex = 1; // Initialize row index for sequential numbering
        querySnapshot.forEach((doc) => {
            const delegate = doc.data();
            const row = `<tr>
                <td>${rowIndex++}</td> <!-- Sequential numbering -->
                <td>${delegate.firstName}</td> <!-- Assuming 'firstName' is the field name -->
                <td>${delegate.lastName}</td>
                <td>${delegate.school}</td>
                <td>${delegate.email}</td>
                <td>${delegate.grade}</td>
                <td>${delegate.committee}</td>
                <td>${delegate.country}</td>
                <td>${delegate.points}</td>
                <td><button onclick="deleteDelegate('${doc.id}', '${committee}')">Delete</button></td>
            </tr>`;
            tableBody.innerHTML += row; // Append row to table
        });
    });
}


// Attach event listeners to navbar links
document.querySelectorAll('.committee-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const committee = this.getAttribute('data-committee');
        loadDelegates(committee);
    });
});

function deleteDelegate(docId, committee) {
    // Function to delete a delegate
    firebase.firestore().collection(committee).doc(docId).delete().then(() => {
        console.log('Delegate successfully deleted');
        loadDelegates(committee); // Reload delegates after deletion
    }).catch(error => {
        console.error('Error removing document: ', error);
    });
}


