const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

import { profilesData } from "./profiles.js";
import { logs } from "./profiles.js";

const profileData = profilesData.find(p => p.id === id);

console.log(profileData.id);

// Heading Text Setter:
const profileHeader = document.getElementById("profileName");
const profileHeader2 = document.getElementById("profileID");
profileHeader.innerText = profileData.name;
profileHeader2.innerText = `Profile ID: ${id}`;


// Location Card Text Setter:
const currLocation = document.getElementById("currentLocation");
currLocation.innerHTML = `<b>Current Location:</b> ${profileData.currentLocation}`;

const currResidence = document.getElementById("residence");
currResidence.innerHTML = `<b>Current Residence:</b> ${profileData.currentResidence}`;

const currWorkplace = document.getElementById("workplace");
currWorkplace.innerHTML = `<b>Current Workplace:</b> ${profileData.currentWorkplace}`;


// Finance Card Text Setter:
const accountBalance = document.getElementById("accBalance");
accountBalance.innerHTML = `<b>Account Balance:</b> ${profileData.currentBalance}`;

const lastPurchase = document.getElementById("lastPurchase");
lastPurchase.innerHTML = `<b>Last Purchase:</b> ${profileData.lastpurchase}`;

const income = document.getElementById("income");
income.innerHTML = `<b>Income:</b> ${profileData.income}`;

// Social Card Text Setter:
const socialAccount = document.getElementById("socialAccount");
socialAccount.innerHTML = `<b>Social Account:</b> ${profileData.socialAccount}`;

const lastPost = document.getElementById("lastPost");
lastPost.innerHTML = `<b>Last Post:</b> ${profileData.lastPost}`;

const lastMessage = document.getElementById("lastMessage");
lastMessage.innerHTML = `<b>Last Message:</b> ${profileData.lastMessage}`

// Live Tracking Logic:
    const liveContainer = document.getElementById("liveContainer");

    setInterval(addLog, 5000) // Repeats the logging every 10 seconds

    function addLog() {
        let date = new Date();
        let time = date.toLocaleTimeString();

        const randomLog = logs[Math.floor(Math.random() * logs.length)];

        const log = document.createElement("div");
        log.className = "data-body";
        log.innerHTML = `[${time}] ${randomLog}`;

        liveContainer.appendChild(log);

        if (liveContainer.children.length > 20) {
            liveContainer.removeChild(liveContainer.firstChild);
        }

        liveContainer.scrollTop = liveContainer.scrollHeight;
    }