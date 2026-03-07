

// 3 toggle button Control

const buttonControl = (id, id2) => {

    const searchContainer = document.getElementById('search-container');
    searchContainer.classList.add('hidden');
    const container = document.getElementById('container');
    container.classList.add('hidden');

    const allTap = document.getElementById('all-tap');
    allTap.classList.remove('btnActive')
    const containerOpen = document.getElementById('container-open-issues');
    containerOpen.classList.add('hidden');
    const OpenTap = document.getElementById('open-tap');
    OpenTap.classList.remove('btnActive')
    const containerClosed = document.getElementById('container-closed-issues');
    containerClosed.classList.add('hidden');
    const ClosedTap = document.getElementById('Closed-tap');
    ClosedTap.classList.remove('btnActive')


    const select = document.getElementById(id);
    select.classList.remove('hidden');
    const addColor = document.getElementById(id2)
    addColor.classList.add('btnActive');
}



// count control section
const countControl = (id) => {
    const totalControl = document.getElementById('total-count');
    totalControl.classList.add('hidden');

    const openControl = document.getElementById('open-count');
    openControl.classList.add('hidden');

    const closedControl = document.getElementById('Closed-count');
    closedControl.classList.add('hidden');

    const searchCount = document.getElementById('search-count');
    searchCount.classList.add('hidden');

    const selectOf = document.getElementById(id);
    selectOf.classList.remove('hidden');
}

