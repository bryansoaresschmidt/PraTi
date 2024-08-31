class Cellphone {
  constructor(brand, year, model, ram, hd, price){
      this.brand = brand
      this.year = year
      this.model = model
      this.ram = ram
      this.hd = hd
      this.price = price
  }

  validateData(){
      for (let i in this){
          if(this[i] === undefined || this[i] === ""){
              return false
          }
      }
      return true
  }
}

class Database {

  constructor(){
      const id = localStorage.getItem('id')

      if(id === null){
          localStorage.setItem('id', 0)
      }
  }

  loadCellphones() {
      const cellphones = Array()
      
      const id = localStorage.getItem('id')

      for(let i = 1; i <= id; i++){
          const cellphone = JSON.parse(localStorage.getItem(i))

          if(cellphone === null){
              continue
          }

          cellphone.id = i
          cellphones.push(cellphone)
      }
      return cellphones
  }

  createCellphone(cellphone) {
      const id = getNextId()
      localStorage.setItem(id, JSON.stringify(cellphone))
      localStorage.setItem('id', id)
  }

  removeCellphone(id) {
      localStorage.removeItem(id)
  }

  searchCellphones(cellphone) {
      let filteredCellphones = Array()

      filteredCellphones = this.loadCellphones()

      if(cellphone.brand !== '') {
          filteredCellphones = filteredCellphones.filter(t => t.brand === cellphone.brand)
      }

      if(cellphone.year !== '') {
          filteredCellphones = filteredCellphones.filter(t => t.year === cellphone.year)
      }

      if(cellphone.model !== '') {
        filteredCellphones = filteredCellphones.filter(t => t.model === cellphone.model)
      }

      if(cellphone.ram !== '') {
        filteredCellphones = filteredCellphones.filter(t => t.ram === cellphone.ram)
      }

      if(cellphone.hd !== '') {
        filteredCellphones = filteredCellphones.filter(t => t.hd === cellphone.hd)
      }

      if(cellphone.price !== '') {
        filteredCellphones = filteredCellphones.filter(t => t.price === cellphone.price)
      }

      return filteredCellphones
  }
}

const database = new Database()

function getNextId() {
  const nextId = localStorage.getItem('id')
  return parseInt(nextId) + 1;
}

function registercellphone() {
  const brand       = document.getElementById('brand').value
  const year        = document.getElementById('year').value
  const model       = document.getElementById('model').value
  const ram         = document.getElementById('ram').value
  const hd          = document.getElementById('hd').value
  const price       = document.getElementById('price').value

  const cellphone = new Cellphone(brand, year, model, ram, hd, price)

  if(cellphone.validateData()){
      database.createCellphone(cellphone)
  }
}

function loadCellphones(cellphones) {

  if(cellphones === undefined){
      cellphones = database.loadCellphones()
  }

  const listCellphones = document.getElementById('listCellphones')
  listCellphones.innerHTML = ''

  cellphones.forEach((t) => {
      const row = listCellphones.insertRow()

      row.insertCell(0).innerHTML = `${t.brand}/${t.model}/${t.year}`

      switch(t.brand) {
          case '1': t.brand = 'Xiaomi'
              break
          case '2': t.brand = 'Motorola'
              break
          case '3': t.brand = 'Samsung'
              break
          case '4': t.brand = 'Iphone'
              break
          case '5': t.brand = 'LG'
              break
          case '6': t.brand = 'Nokia'
              break
      }

      row.insertCell(1).innerHTML  = t.brand
      row.insertCell(2).innerHTML = t.price

      const btn = document.createElement('button')

      btn.className = 'btn btn-danger'
      btn.id = t.id
      btn.innerHTML = 'Delete'
      btn.onclick = () => {
          const id = t.id
          database.removeCellphone(id)
          window.location.reload()
      }

      row.insertCell(3).append(btn)
  })
}

function searchCellphones() {
  const brand       = document.getElementById('brand').value
  const year        = document.getElementById('year').value
  const model       = document.getElementById('model').value
  const ram         = document.getElementById('ram').value
  const hd          = document.getElementById('hd').value
  const price       = document.getElementById('price').value

  const cellphone = new Cellphone(brand, year, model, ram, hd, price)

  const cellphones = database.searchCellphones(cellphone)

  loadCellphones(cellphones)
}

document.addEventListener('DOMContentLoaded', () => {
  if(document.body.contains(document.getElementById('listTasks'))){
      loadCellphones()
  }
})