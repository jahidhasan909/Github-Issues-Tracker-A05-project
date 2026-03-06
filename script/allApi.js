// all section issues




const loadAllIssues = async () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const issues = await res.json();
    displayAllIssues(issues.data);

}


const issuesLevel = (arr) => {
    const eleMake = arr.map(el => `<span class="badge ${el == 'bug' ? 'bg-red-100 text-red-400 text-[0.70rem]' : el == 'help wanted' ? 'bg-amber-100 text-yellow-700 text-[0.70rem]' : el == 'enhancement' ? 'bg-green-100 text-green-800 text-[0.70rem]' : 'bg-purple-200 text-purple-900 text-[0.70rem]'}">${el == 'bug' ? '<i class="fa-brands fa-android"></i>' : el == 'help wanted' ? '<i class="fa-regular fa-futbol"></i>' : el == 'enhancement' ? '<i class="fa-solid fa-star-of-david"></i>' : '<i class="fa-solid fa-align-right"></i>'}${el}</span>`);
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
                     <p>${iss.createdAt}</p>
                     </div>
                     </div>
                     </div>
                  `;
        container.appendChild(div);
    });

}

loadAllIssues();



// let openAndClosed = [];









