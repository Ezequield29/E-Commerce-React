const products =[
    {
        "id": 1,
        "title": "Laptop HP Pavilion",
        "description": "Potente laptop con procesador Intel Core i7 y pantalla Full HD de 15.6 pulgadas.",
        "price": 899.99,
        "category": "Laptops",
        "thumbnail": "https://store.hp.com/SwitzerlandStore/Html/Merch/Images/c06250100_1750x1285.jpg",
        "code": "HP001",
        "stock": 20
      },
      {
        "id": 2,
        "title": "Monitor Samsung 27 pulgadas",
        "description": "Monitor LED de alta definición con resolución 4K y tecnología HDR.",
        "price": 349.99,
        "category": "Monitores",
        "thumbnail": "https://images.samsung.com/is/image/samsung/p6pim/ar/lf27t350fhlczb/gallery/ar-t35f-388813-lf27t350fhlczb-456992076?$650_519_PNG$",
        "code": "SAM002",
        "stock": 15
      },
      {
        "id": 3,
        "title": "Teclado mecánico Corsair K70 RGB",
        "description": "Teclado mecánico gaming con retroiluminación RGB y teclas Cherry MX Red.",
        "price": 149.99,
        "category": "Perifericos",
        "thumbnail": "https://techgage.com/wp-content/uploads/2018/10/Corsair-K70-RGB-MK2-Low-Profile-Mechanical-Keyboard-RGB-Keys-1.jpg",
        "code": "COR003",
        "stock": 30
      }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
},500)
    })
}
export const getProductById=(productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}
export default products