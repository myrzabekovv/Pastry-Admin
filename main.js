// const API = 'http://localhost:1717/pastry'


// const getPastry = () => {

// const container = document.querySelector('.container')
// const h1 = document.createElement('h1')
// h1.textContent = 'Pastry Catalog'
// h1.className = 'title'
// container.prepend(h1)

// }

// getPastry()
// fetch(`${API}`)
// .then((response) => {
//   return response.json()
// })
// .then((pastrys) => {
//   pastrys.forEach((pastry) => {
//     const boxes = document.querySelector('.boxes')
//     //РЕНДЕРИМ ДАННЫЕ
//     const box = document.createElement('div')
//     box.className = 'box'
//     boxes.append(box)
//     // РЕНДЕРИМ ИМЯ
//     const h2 = document.createElement('h2')
//     h2.textContent = pastry.name
//     box.append(h2)
//     //РЕНДЕРИМ ИЗОБРОЖЕНИЕ
//     const img = document.createElement('img')
//     img.setAttribute('src', pastry.image)
//     img.className = 'box-img'
//     box.append(img)
//     //РЕНДЕРИМ  КОНТЕЙНЕР ДЛЯ ИНПУТОВ
//     const fieldset = document.createElement('fieldset')
//     box.append(fieldset)
//     const inputLabelStock = document.createElement('div')
//     inputLabelStock.className = 'input-label-stock'
//     fieldset.append(inputLabelStock) 
//     //РЕНДЕРИМ ИНПУТ STOCK
//     const labelStock = document.createElement('label')
//     labelStock.textContent = 'inStock:'
//     inputLabelStock.append(labelStock)
//     const inputStock = document.createElement('input')
//     inputStock.className = 'input-stock'
//     inputStock.setAttribute('type', 'number')
//     inputStock.value = pastry.inStock
//     inputLabelStock.append(inputStock)
//     //РЕНДЕРИМ ИМПУТ COST
//     const inputLabelCost = document.createElement('div')
//     inputLabelCost.className = 'input-label-cost'
//     fieldset.append(inputLabelCost)
//     const labelCost = document.createElement('label')
//     labelCost.textContent = 'Cost:'
//     inputLabelCost.append(labelCost)
//     const inputCost = document.createElement('input')
//     inputCost.setAttribute('type', 'number')
//     inputCost.className = 'input-cost'
//     inputCost.value = pastry.cost
//     inputLabelCost.append(inputCost)
//     //РЕНДЕРИМ КНОПКИ
//     const buttonSave = document.createElement('button')
//     buttonSave.className = 'save-changes'
//     buttonSave.id = pastry.id

//     buttonSave.textContent = 'Save changes'
//     box.append(buttonSave)

//     const buttonRemove = document.createElement('button')
//     buttonRemove.className = 'remove'
//     buttonRemove.textContent = 'Remove'
//     box.append(buttonRemove)

//     const buttonGroup = document.createElement('div')
//     box.append(buttonGroup)

//     const buttonDelivery = document.createElement('button')
//     buttonDelivery.className = 'delivery'
//     buttonDelivery.textContent = 'Has delivery'
//     buttonGroup.append(buttonDelivery)
//     //РЕНДЕРИМ СТАТУС ДОСТАВКИ
//     const buttonStatus = document.createElement('span')
//     buttonStatus.className= 'btn-status'
//     buttonStatus.textContent = 'Unknown'
//     buttonGroup.append(buttonStatus)
//   })

//   //ВЕЩАЕМ СЛУШАНИЕ НА КНОПКУ ИЗМЕНИТЬ
//   const save = document.querySelector('.save-changes')
//   const stock = document.querySelectorAll('.input-stock')
//   const cost = document.querySelectorAll('.input-cost')

// })

const API = 'http://localhost:1717/pastry'

const getPastry = async () => {
  const response = await fetch(API)
  const pastry = await response.json()
  createPastry(pastry)
}

getPastry()

const createPastry = async (data) => {

  const container = document.querySelector('.container')
  const h1 = document.createElement('h1')
  h1.textContent = 'Pastry catalog'
  h1.className = 'title'
  container.prepend(h1)

  data.forEach((value) => {
    //  СОЗДАЕМ КАРТОЧКИ СЛАДОСТЕЙ
    const cards = document.querySelector('.cards')
    const card = document.createElement('div')
    card.className = 'card'

    cards.append(card)

    //РЕНДЕРИМ НАЗВАНИЕ
    const title = document.createElement('h2')
    title.textContent = value.name 

    card.append(title)

    //рендерим картинки
    const image = document.createElement('img')
    image.setAttribute('src', value.image)
    image.className = 'card-image'

    card.append(image)

    //рендерим инпут inStock
    const fieldset = document.createElement('fieldset')
    card.append(fieldset)

    const stockBox = document.createElement('div')
    stockBox.className = 'input-label-stock'
    fieldset.append(stockBox)

    const stockLabel = document.createElement('label')
    stockLabel.textContent = 'In Stock: '
    stockBox.append(stockLabel)

    const stockInput = document.createElement('input')
    stockInput.setAttribute('type', 'number')
    stockInput.setAttribute('value', value.inStock)
    stockBox.append(stockInput)

        //рендерим инпут cost  
        const costBox = document.createElement('div')
        costBox.className = 'input-label-cost'
        fieldset.append(costBox)

        const costLabel = document.createElement('label')
        costLabel.textContent = 'Cost: '
        costBox.append(costLabel)
    
        const costInput = document.createElement('input')
        costInput.setAttribute('type', 'number')
        costInput.setAttribute('value', value.cost)
        costBox.append(costInput)

        //кнопка изменить
        const saveBtn = document.createElement('button')
        saveBtn.textContent = 'Save changes'
        saveBtn.className = 'btn-save'

        card.append(saveBtn)

         //кнопка удалить
        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Remove'
        removeBtn.className = 'btn-remove'

        card.append(removeBtn)

        //кнопка доставки
        const deliverGroup = document.createElement('div')
        card.append(deliverGroup)

        const deliverBtn = document.createElement('button')
        deliverBtn.className = 'btn-deliver'
        deliverBtn.textContent = 'Has delivery?'
        deliverGroup.append(deliverBtn)

        const deliverStatus = document.createElement('span')
        deliverStatus.className = 'btn-status'
        deliverStatus.textContent = 'Unknown'
        deliverGroup.append(deliverStatus)

        const newBtnSave = async (id, data) => {
          const response = await fetch(`${API}/update/${id}`, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          console.log(response)
        }
      
        const removeCard = async (id) => {
          const response = await fetch(`${API}/delete/${id}`, {
            method: 'DELETE'
          })
          console.log(response)
        }

        const showDeliver = async (id, deliverStatus) => {
          const response = await fetch(`${API}/detail/${id}`)
          const data = await response.json()

          data.hasDelivery === false 
          ?  deliverStatus.textContent = 'No'
          :  deliverStatus.textContent = 'Yes'
        }

        saveBtn.addEventListener('click', () => {
          newBtnSave(value.id, {
            inStock: Number(stockInput.value),
            cost: Number(costInput.value),
        })
  })

  removeBtn.addEventListener('click', () => {
    removeCard(value.id)
  })

  deliverBtn.addEventListener('click', () => {
    showDeliver(value.id, deliverStatus)
  })
  })
}