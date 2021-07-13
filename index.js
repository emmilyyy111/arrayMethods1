const bikes =[
    {
    type: 'road',
    make: 'trek',
    model: 'diamonte',
    year: 2020,
},{
    type: 'road',
    make: 'shimano',
    model: 'diamond',
    year: 2019,

},{
    type: 'bmx',
    make: 'ross',
    model: 'smoker',
    year: 2021,

},{
    type: 'mountain',
    make: 'trek',
    model: 'backbuster',
    year: 2018
    },
]

// const newBikes = bikes.filter(bike => bike.year === 2021)
// console.log(newBikes)

// const trekBikes = bikes.filter(bike => bike.make === 'trek')
// console.log(trekBikes)

// const trekBike = bikes.find(bike => bike.make === 'trek')
// console.log(trekBike)

const updatedBikes = bikes.map(bike => {
    return {
        catagory: bike.type, 
        brand: bike.make,
        model: bike.model,
        year: bike.year,
        age: 2021 - bike.year,
        used: bike.year < 2021,
    }
})
console.log(updatedBikes)