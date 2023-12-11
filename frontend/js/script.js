// declare globally used DOM elements
const table = document.getElementById('info')
const sec = document.getElementById('sec')
const loading = document.getElementById('loading')


// function to get the list of SECs from the database and populate the dropdown menu.
async function getList(filter) {
  const response = await fetch('https://claycountymap.onrender.com/api/filter/' + filter, { method: 'GET' })
    .then((res) => {
      return res.json();
    })
    .then((data) => {

      sec.removeChild(loading)

      for (item of data) {
        if (item["SEC"] !== "") {
          let opt = document.createElement('option')
          opt.value = item["SEC"]
          opt.textContent = item["SEC"]

          sec.appendChild(opt)
        }
      }
    })
    .catch((error) => console.error('Error:', error))
}

getList('sec')

// function to get the data from the database and populate the table based on the selected filter value
async function getData(filter, param) {
  const response = await fetch('https://claycountymap.onrender.com/api/' + filter + '/' + param, { method: 'GET' })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (item of data) {
        let row = document.createElement('tr')
        let date = document.createElement('td')
        let type = document.createElement('td')
        let bk = document.createElement('td')
        let page = document.createElement('td')
        let qtr = document.createElement('td')
        let sec = document.createElement('td')
        let tsp = document.createElement('td')
        let rge = document.createElement('td')
        let lot = document.createElement('td')
        let blk = document.createElement('td')

        date.textContent = item["DATE"]
        type.textContent = item["TYPE"]
        bk.textContent = item["BK"]
        page.textContent = item["PAGE"]
        qtr.textContent = item["QTR"]
        sec.textContent = item["SEC"]
        tsp.textContent = item["TSP"]
        rge.textContent = item["RGE"]
        lot.textContent = item["LOT"]
        blk.textContent = item["BLK"]

        row.appendChild(date)
        row.appendChild(type)
        row.appendChild(bk)
        row.appendChild(page)
        row.appendChild(qtr)
        row.appendChild(sec)
        row.appendChild(tsp)
        row.appendChild(rge)
        row.appendChild(lot)
        row.appendChild(blk)
        table.appendChild(row)
      }
    })
    .catch((error) => console.error('Error:', error))


}

// event listener for the dropdown menu. When the value is changed, the table is cleared and the new data is fetched.
sec.addEventListener('change', (e) => {
  table.innerHTML = ''
  getData('sec', e.target.value)
})


