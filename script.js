const goods_container = document.querySelector('.goods_container')

const render = json => {
    let json_array = json.products
    const goods_cards = json_array.map(({title, price, images, rating}) => {
        const card = document.createElement('div')
        card.classList.add('goods_card')
        const title_p = document.createElement('p')
        const price_p = document.createElement('p')
        const image_img = document.createElement('img')
        
        title_p.innerText = `Title: ${title}`
        price_p.innerText = `Price: ${price}`

        image_img.setAttribute('src', images[0])

        card.append(image_img, title_p, price_p, rate(rating))
        return card;
    })
    goods_container.append(...goods_cards)
}

function rate(n){
    const div_stars = document.createElement('div')
    const full_stars = Math.round(n)
    const empty_stars = 5 - full_stars

    for(let i = 0; i < full_stars; i++){
        const full_star = document.createElement('span')
        full_star.classList.add('fa', 'fa-star', 'active')
        div_stars.append(full_star)
    }

    for(let i = 0; i < empty_stars; i++){
        const empty_star = document.createElement('span')
        empty_star.classList.add('fa', 'fa-star')
        div_stars.append(empty_star)
    }
    
    return div_stars;
}

const getGoods = () => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then(json => render(json))
  }

getGoods();