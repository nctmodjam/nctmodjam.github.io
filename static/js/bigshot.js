// BIGSHOT MENU

const cheatMenu = document.querySelector('.cheat_menu');
const minimizeBtn = document.querySelector('#minimizeBtn');

minimizeBtn.addEventListener('click', () => {
    cheatMenu.classList.toggle('minimized');
});

$("#bigshotSkipBtn").click((e) => {
    e.preventDefault();

    let question_count = campaignTrail_temp.global_parameter_json[0].fields.question_count;
    let requested_question = Number(document.getElementById('skiptoquestion').value);

    // error handling in case the user is stupid
    if (requested_question > question_count - 1) {
        let a = confirm("You are trying to go over the question limit. This will likely break unless the mod maker specifically made questions for this (possibly for CYOA). Are you sure?");
        if (!a) return
    }
    if (requested_question < 0) {
        let a = confirm("You are trying to go below question 1. This will almost certainly break. Are you sure?");
        if (!a) return
    }

    campaignTrail_temp.question_number = requested_question;

    let sfx = $('#sfxMeme')[0];
    sfx.volume = 0.1;
    sfx.play();
});

duplicate_globals = {}

$("#disableRNG").change((a) => {
    a.preventDefault();

    let checkbox = a.target;
    let checked = checkbox.checked;

    if (!checked) {
        duplicate_globals = JSON.parse(JSON.stringify(campaignTrail_temp.global_parameter_json[0]));
        campaignTrail_temp.global_parameter_json[0].fields.global_variance = 0;
        campaignTrail_temp.global_parameter_json[0].fields.state_variance = 0;
        campaignTrail_temp.global_parameter_json[0].fields.max_swing = 0;
    } else {
        campaignTrail_temp.global_parameter_json[0] = JSON.parse(JSON.stringify(duplicate_globals));
    }
})

$("#skiptoquestion").keydown((e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        $("#bigshotSkipBtn").click();
    }
});