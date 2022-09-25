Vue.createApp({
    data() {
        return {
            goals: [],
            goalDescription: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.goalDescription);
            this.goalDescription = '';
        },
        resetGoals() {
            this.goals = [];
        }
    }
}).mount('#app');

// window.addEventListener('load', () => {
//     renderGoalsList();

//     document.querySelector('#goal-form').addEventListener('submit', (e) => {
//         formEvent(e);
//     })

//     document.querySelector('#reset-goals-list').addEventListener('click', () => {
//         resetGoalsList();
//     })
// });

// function formEvent(event) {
//     event.preventDefault();

//     let formInputEl = document.querySelector('#goal-description');
//     let goalDescription = formInputEl.value;

//     addNewGoal(goalDescription);
//     renderGoalsList();
// }

// function validateGoalDescription(goalDescription) {
//     if (goalDescription.length <= 0 || goalDescription.length > 50) {
//         alert('invalid description');
//         return false
//     }

//     return true;
// }

// function addNewGoal(goalDescription) {
//     if (validateGoalDescription(goalDescription)) {
//         let goals = window.goals ?? [];

//         goals.push(goalDescription);
//         window.goals = goals;

//         document.querySelector('#goal-description').value = "";
//     }
// }

// function renderGoalsList() {
//     let goals = window.goals ?? [];

//     resetGoalsList();

//     goals.forEach(goal => {
//         let li = document.createElement('li');
//         li.classList.add('list-group-item');
//         li.innerHTML = goal;

//         document.querySelector('#goals-list').appendChild(li);
//     });
// }

// function resetGoalsList() {
//     document.querySelector('#goals-list').innerHTML = "";
// }