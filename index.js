const state = {
    freelancers: [
        {
            name: 'Alice',
            occupation: 'Writer',
            price: 30,
        },
        {
            name: 'Bob',
            occupation: 'Teacher',
            price: 50,
        },
        {
            name: 'Carol',
            occupation: 'Programmer',
            price: 70,
        },
    ]
}

// const p = document.querySelector("p")
//     p.textContent ="Hello World"
//         p.style.backgroundColor = "black"
//         p["style"].color = "white" 

//     const body = document.querySelector("body")
//     const title = document.createElement("h1")
//     title.textContent = "Hello Header"
//     body.append(title)





function updateAvgPrice(){
    let total = 0

    for (let i = 0; i < state.freelancers.length; ++i) {
        const currentFreelancer = state.freelancers[i]

        total += currentFreelancer.price
    }
    state.averagePrice = Math.round(total / state.freelancers.length)
}

function addFreelancerRow(freelancer){
    state.freelancers.push(freelancer)
    
}

function createFreelancerTableRow(freelancer){
    const tr = document.createElement('tr')

    const nameData = document.createElement('td')
    const occupationData = document.createElement('td')
    const priceData = document.createElement('td')

    nameData.textContent = freelancer.name
    occupationData.textContent = freelancer.occupation
    priceData.textContent = freelancer.price

    tr.append(nameData, occupationData, priceData)

    return tr
}

function createTableHeaders() {
    const tr = document.createElement('tr')

    const nameData = document.createElement('th')
    const occupationData = document.createElement('th')
    const priceData = document.createElement('th')

    nameData.textContent = 'Name'
    occupationData.textContent = 'Occupation'
    priceData.textContent = 'Starting Price'

    tr.append(nameData, occupationData, priceData)

    return tr
}

function clearTable() {
    const table = document.getElementById('freelancer_table')

    while (table.childNodes.length) {
        table.removeChild(table.childNodes[0])
    }
}

function render(){
    clearTable()

    const table = document.getElementById('freelancer_table')

    table.appendChild(createTableHeaders())

    for (let i = 0; i < state.freelancers.length; ++i) {
        const currentFreelancer = state.freelancers[i]
        
        const row = createFreelancerTableRow(currentFreelancer)

        table.appendChild(row)
        
    }

    updateAvgPrice()

        const priceText = document.getElementById('average_price_text')

        priceText.textContent = `The average starting price is $${state.averagePrice}`
    } 

render()

const randomNames = ["Alice", "Bob", "Charlie", "David"]
const randomJobs = ["Developer", "UX", "QA", "Designer"]

function createRandomFreelancer() {
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)]
    const randomJob = randomJobs[Math.floor(Math.random() * randomJobs.length)]

    const randomPrice = Math.round(Math.random() * 150)

    const freelancer = {
        name: randomName,
        occupation: randomJob,
        price: randomPrice
    }

    return freelancer
    
}

setInterval(function() {
    const newFreeLancer = createRandomFreelancer()
    addFreelancerRow(newFreeLancer)

    render()
}, 5000);




