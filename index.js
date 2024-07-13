let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const tabBtn = document.getElementById('tab-btn');
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById('ul-el');

const leadsFromLocalStorage = JSON.parse ( localStorage. getItem("myLeads") );

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems = '';
    for(let i=0 ; i<leads.length ; i++){
        listItems +=`<li>
                        <a href="${leads[i]}" target="_blank">
                            ${leads[i]}
                        </a>
                    </li>`;
        // target="_blank" -> opens in new tab
        // another method
        // const li = document.createElement('li');
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener('click',function(){
    myLeads.push(inputEl.value);
    inputEl.value='';
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
});

tabBtn.addEventListener('click',function(){
    chrome.tabs.query( {active: true, currentWindow: true}, function (tabs) {
        myLeads.push(tabs[0].url); 
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads)
    });
})

deleteBtn.addEventListener('click',function(){
    myLeads=[];
    localStorage.clear();
    render(myLeads);
});










// Local Storage - json - works with only string 
// JSON. stringify() - to string
// JSON.parse() - to array
// localStorage.getItem()
// localStorage.setItem()
// localStorage.clear()

// False values -> false,0,"",undefined,null,NaN
// []->true
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness