// all section api call ,data load and display

const loadAllIssues = async () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const issues = await res.json();
    displayAllIssues(issues.data);

}


const issuesLevel = (arr) => {
    const eleMake = arr.map(el => `<span class="badge ${el == 'bug' ? 'bg-red-200 text-red-500 text-[0.70rem]' : el == 'help wanted' ? 'bg-amber-200 text-yellow-800 text-[0.70rem]' : el == 'enhancement' ? 'bg-green-200 text-green-900 text-[0.70rem]' : 'bg-purple-200 text-purple-900 text-[0.70rem]'}">${el == 'bug' ? '<i class="fa-brands fa-android"></i>' : el == 'help wanted' ? '<i class="fa-regular fa-futbol"></i>' : el == 'enhancement' ? '<i class="fa-solid fa-star-of-david"></i>' : '<i class="fa-solid fa-align-right"></i>'}${el}</span>`);
    return eleMake.join(' ');
}


const displayAllIssues = (issue) => {
    const container = document.getElementById('container');

    issue.forEach(iss => {
        const div = document.createElement('div');
        div.innerHTML = `
                    <div class="card bg-base-100 card-xs shadow-sm w-72 h-64 ${iss.status == 'open' ? "border-t-4 border-green-400" : "border-t-4 border-purple-400"}">
                     <div class="space-y-3">
                     <div class="flex justify-between px-3 mt-5">
                     <div>${iss.status == 'open' ? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}</div>
                     <div class="badge ${iss.priority == 'high' ? 'bg-red-100 text-red-500' : iss.priority == 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-500'}">${iss.priority}</div>
                     </div>
                     <h2 class="card-title text-[0.90rem] line-clamp-1 mt-1 px-3">${iss.title}</h2>
                     <p class="line-clamp-2 overflow-hidden px-3 text-[0.70rem] text-neutral/60">${iss.description}</p>
                     <div class="px-3 space-x-2">
                     ${issuesLevel(iss.labels)}
                     </div>
                     <hr class="text-gray-300">
                     <div class="text-[0.70rem] space-y-2 mb-1 text-neutral/60 px-2">
                     <p><span>#${iss.id}</span> ${iss.author}</p>
                     <p>${new Date(iss.createdAt).toLocaleDateString("en-US")}</p>
                     </div>
                     </div>
                     </div>
                  `;
        container.appendChild(div);
    });

}


const openIssues = async () => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    const res = await fetch(url);
    const open = await res.json();
    openIssuesDisplay(open.data);
}

const openIssuesDisplay = (open) => {
    const containerOpen = document.getElementById('container-open-issues');

    open.forEach(op => {
        const div = document.createElement('div');

        div.innerHTML = `
                    <div class="card bg-base-100 card-xs shadow-sm w-72 h-64 ${op.status == 'open' ? "border-t-4 border-green-400" : "border-t-4 border-purple-400"}">
                     <div class="space-y-3">
                     <div class="flex justify-between px-3 mt-5">
                     <div>${op.status == 'open' ? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}</div>
                     <div class="badge ${op.priority == 'high' ? 'bg-red-100 text-red-500' : op.priority == 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-500'}">${op.priority}</div>
                     </div>
                     <h2 class="card-title text-[0.90rem] line-clamp-1 mt-1 px-3">${op.title}</h2>
                     <p class="line-clamp-2 overflow-hidden px-3 text-[0.70rem] text-neutral/60">${op.description}</p>
                     <div class="px-3 space-x-2">
                     ${issuesLevel(op.labels)}
                     </div>
                     <hr class="text-gray-300">
                     <div class="text-[0.70rem] space-y-2 mb-1 text-neutral/60 px-2">
                     <p><span>#${op.id}</span> ${op.author}</p>
                     <p>${new Date(op.createdAt).toLocaleDateString("en-US")}</p>
                     </div>
                     </div>
                     </div>
                  `;

        if (op.status == 'open') {
            containerOpen.appendChild(div);
        }

    })

}



const closedIssues = async () => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    const res = await fetch(url);
    const closed = await res.json();
    closedIssuesDisplay(closed.data);
}

const closedIssuesDisplay = (closed) => {
    const containerOpen = document.getElementById('container-closed-issues');
    closed.forEach(clo => {
        const div = document.createElement('div');

        div.innerHTML = `
                    <div class="card bg-base-100 card-xs shadow-sm w-72 h-64 ${clo.status == 'open' ? "border-t-4 border-green-400" : "border-t-4 border-purple-400"}">
                     <div class="space-y-3">
                     <div class="flex justify-between px-3 mt-5">
                     <div>${clo.status == 'open' ? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}</div>
                     <div class="badge ${clo.priority == 'high' ? 'bg-red-100 text-red-500' : clo.priority == 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-500'}">${clo.priority}</div>
                     </div>
                     <h2 class="card-title text-[0.90rem] line-clamp-1 mt-1 px-3">${clo.title}</h2>
                     <p class="line-clamp-2 overflow-hidden px-3 text-[0.70rem] text-neutral/60">${clo.description}</p>
                     <div class="px-3 space-x-2">
                     ${issuesLevel(clo.labels)}
                     </div>
                     <hr class="text-gray-300">
                     <div class="text-[0.70rem] space-y-2 mb-1 text-neutral/60 px-2">
                     <p><span>#${clo.id}</span> ${clo.author}</p>
                     <p>${new Date(clo.createdAt).toLocaleDateString("en-US")}</p>
                     </div>
                     </div>
                     </div>
                  `;

        if (clo.status == 'closed') {
            containerOpen.appendChild(div);
        }

    })

}

closedIssues();

openIssues();

loadAllIssues();










