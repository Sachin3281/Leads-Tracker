

let myLeads = []

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.awesome.com")
// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)


const inputEL = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


const lendsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

let check = Boolean(lendsFromLocalStorage)
if(check){
    myLeads = lendsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url:"https://www.linkedin.com/in/sachin-arora"}
// ]
function render(leads){
    let listItems = ""
    for(let i=0;i<leads.length;i++){
        listItems += `
            <li>
                <a target='_blank' href= ' ${leads[i]} '>
                ${leads[i]}
                </a>
            </li>  
        `
    }
    ulEL.innerHTML = listItems
    }

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // let activeTab = tabs[0]
        // let activeTabId = activeTab.id
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    }) 
})    

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    // console.log(myLeads)
    // console.log( localStorage.getItem("myLeads"))
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

// function renderLeads(){
// let listItems = ""
// for(let i=0;i<myLeads.length;i++){
//     // listItems += "<li><a target='_blank' href='" + myLeads[i] + " '>" + myLeads[i] + "</a></li>"

//     listItems += `
//         <li>
//             <a target='_blank' href= ' ${myLeads[i]} '>
//             ${myLeads[i]}
//             </a>
//         </li>  
//     `
    
    // ulEL.innerHTML += "<li>" + myLeads[i] + "</li>"

    // Another method 
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEL.append(li)
// }
// ulEL.innerHTML = listItems
// }

// let grab = document.getElementById("box")

// grab.addEventListener("click" , function(){
//     console.log("I want to open the box")
// })


// let fruits = ["🍎","🍊","🍎","🍎","🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function puts(){
//     for(let i=0;i<fruits.length;i++){
//         if(fruits[i] === "🍎"){
//             appleShelf.textContent += "🍎"
//         }
//         else {
//             orangeShelf.textContent += "🍊"
//         }
//     }
// }

// puts()

// const hold = document.getElementById("container")

// hold.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy(){
//     hold.innerHTML += "<p>Thank you for buying</p>"
// }


//Template String
// const recipient = "Sachin"
// const sender = "karan"

// // Can break text in multiple lines in template Strings
// const email = `Hey ${recipient}
//  How is it going?
//   ${sender}`

// console.log(email)