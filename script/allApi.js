// all section api call ,data load and display


// all issues api call and display
const loadAllIssues = async () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const issues = await res.json();
    displayAllIssues(issues.data);


    let allTotal = issues.data;
    if (allTotal) {
        let allLength = allTotal.length;
        const totalCount = document.getElementById('total-count');
        totalCount.innerText = allLength;

    }

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
                     <h2 onclick="detailsLoad('${iss.id}')" class="card-title hover:shadow hover:cursor-pointer text-[0.90rem] line-clamp-1 mt-1 px-3">${iss.title}</h2>
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
    spinnerLoading(false);

}


// openIssues api call and display
const openIssues = async () => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    const res = await fetch(url);
    const opens = await res.json();
    openIssuesDisplay(opens.data);


    let openTotal = opens.data.filter(issue => issue.status === 'open');
    if (openTotal) {
        let openLength = openTotal.length;
        const totalCount = document.getElementById('open-count');
        totalCount.innerText = openLength;

    }
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
                     <h2 onclick="detailsLoad('${op.id}')" class="card-title hover:shadow hover:cursor-pointer text-[0.90rem] line-clamp-1 mt-1 px-3">${op.title}</h2>
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

    spinnerLoading(false);

}




// closedIssues api call and display
const closedIssues = async () => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    const res = await fetch(url);
    const closed = await res.json();
    closedIssuesDisplay(closed.data);


    let closedTotal = closed.data.filter(issue => issue.status === 'closed');
    if (closedTotal) {
        let closedLength = closedTotal.length;
        const totalCount = document.getElementById('Closed-count');
        totalCount.innerText = closedLength;
    }
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
                     <h2 onclick="detailsLoad('${clo.id}')" class="card-title hover:shadow hover:cursor-pointer text-[0.90rem] line-clamp-1 mt-1 px-3">${clo.title}</h2>
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
    spinnerLoading(false);

}




// search functionality 
document.getElementById('search-issues').addEventListener('click', () => {
    const input = document.getElementById('input-value');
    const inputValue = input.value.trim().toLowerCase();

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const allIssues = data.data;
            searchDisplay(allIssues);
            const issueData = data.data;
            if (issueData) {
                const issueCount = issueData.length;
                const searchCount = document.getElementById('search-count');
                searchCount.innerText = issueCount;
            }
            countControl('search-count');
        })


});



const searchDisplay = (iss) => {
    const container = document.getElementById('search-container');
    container.innerHTML = ''

    iss.forEach(issue => {
        const div = document.createElement('div');
        div.innerHTML = `
                    <div class="card bg-base-100 card-xs shadow-sm w-72 h-64 ${issue.status == 'open' ? "border-t-4 border-green-400" : "border-t-4 border-purple-400"}">
                     <div class="space-y-3">
                     <div class="flex justify-between px-3 mt-5">
                     <div>${issue.status == 'open' ? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}</div>
                     <div class="badge ${issue.priority == 'high' ? 'bg-red-100 text-red-500' : issue.priority == 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-500'}">${issue.priority}</div>
                     </div>
                     <h2 onclick="detailsLoad('${issue.id}')" class="card-title hover:shadow hover:cursor-pointer text-[0.90rem] line-clamp-1 mt-1 px-3">${issue.title}</h2>
                     <p class="line-clamp-2 overflow-hidden px-3 text-[0.70rem] text-neutral/60">${issue.description}</p>
                     <div class="px-3 space-x-2">
                     ${issuesLevel(issue.labels)}
                     </div>
                     <hr class="text-gray-300">
                     <div class="text-[0.70rem] space-y-2 mb-1 text-neutral/60 px-2">
                     <p><span>#${issue.id}</span> ${issue.author}</p>
                     <p>${new Date(issue.createdAt).toLocaleDateString("en-US")}</p>
                     </div>
                     </div>
                     </div>
                  `;
        container.appendChild(div);
    });
    spinnerLoading(false);

}





// issues card title click open details of modal functionality

const detailsLoad = async (id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    const res = await fetch(url);
    const detail = await res.json();
    displayDetails(detail.data);
}

const displayDetails = (detail) => {
    const container = document.getElementById('details-container');
    container.innerHTML = `
                
      <div class="space-y-4 ">
                    <h2 class="text-lg font-bold">${detail.title}</h3>
                        <div class="text-[0.75rem]">
                            <span class="badge ${detail.status == 'open' ? 'bg-green-200 text-green-900' : 'bg-purple-200 text-purple-900'}">${detail.status}</span> • <span>Opened
                                by<span> ${detail.assignee}</span></span>  •    
                                <span>CreatedAt: ${new Date(detail.createdAt).toLocaleDateString("en-US")}</span> • <span>updatedAt: ${new Date(detail.updatedAt).toLocaleDateString("en-US")}</span>

                        </div>
                        <div class="">
                             ${issuesLevel(detail.labels)}
                        </div>
                        <p>${detail.description}</p>

                        <div class="bg-base-200 rounded-md flex gap-24 p-5">
                            <div>
                                <p>Assignee:</p>
                                <h4 class="font-semibold text-black">${detail.assignee}</h4>
                            </div>
                            <div>
                                <p>Priority:</p>
                                <span class="badge ${detail.priority == 'high' ? 'bg-red-100 text-red-500' : detail.priority == 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-500'}">${detail.priority}</span>
                            </div>

                        </div>
                </div>
                  `;
    document.getElementById('trees_modal').showModal();

    spinnerLoading(false);
}



// page reload than loading spinner work 
const spinnerLoading = (status) => {
    if (status == true) {
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('container').classList.add('hidden');
    } else {
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('container').classList.remove('hidden');
    }
}



closedIssues();

openIssues();

loadAllIssues();










