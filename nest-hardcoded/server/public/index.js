import { render, html } from 'https://cdn.jsdelivr.net/npm/lit-html@3.1.0/+esm';

const root = document.querySelector('#root');

renderHome();

function homeTemplate(users) {
    return html`
    <ul>
        ${users.map(u => html`<li>${u.username}</li>`)}
    </ul>
`}

function errorTemplate() {
    return html`<p>error...</p>`
}

function loadingTemplate () {
    return html`<p>loading...</p>`
} 

async function renderHome() {
    render(loadingTemplate(), root);
    try {
        const users = await getUsers();
        render(homeTemplate(users), root)
    } catch (error) {
        render(errorTemplate(), root);
    }
}

async function getUsers() {
    const res = await fetch('http://localhost:3000/api/users');
    const users = await res.json();

    return users;
}