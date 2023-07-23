import DetailsTop from '@/components/details/DetailsTop'
import Image from 'next/image'

export default function Home() {

  const data = {
    name:"New Long Sleeve Casual Shirt for Men",
    description:"",
    price:399,
    totalrating:4,
    category:  ["Men", "Women", "Baby"],
    colors: ["Red", "Blue", "Green"],
    sizes: ["Small", "Medium", "Large"],
    image:["image/1.webp","image/2.webp","image/3.webp","image/4.webp","image/2.webp"],
    reviews: [
      {
        username: "User1",
        rating: 4,
        comment: "Great product! Highly recommended."
      },
      {
        username: "User2",
        rating: 5,
        comment: "Excellent quality and fast shipping."
      },
      {
        username: "User3",
        rating: 3,
        comment: "Average product. Could be better."
      }
    ]
  
  }


  const product = [
    {
      title:"Full-Sleeved Navy Tartan Shirt for men",
      reating:4,
      price:200,
      image:"image/3.webp"
    },
    {
      title:"Full-Sleeved Navy Tartan Shirt for men",
      reating:3,
      price:180,
      image:"image/1.webp"
    },
    {
      title:"Full-Sleeved Navy Tartan Shirt for men",
      reating:"5",
      price:250,
      image:"image/6.webp"
    },
    {
      title:"Full-Sleeved Navy Tartan Shirt for men",
      reating:2,
      price:230,
      image:"image/7.webp"
    },
    {
      title:"Full-Sleeved Navy Tartan Shirt for men",
      reating:4,
      price:200,
      image:"image/8.webp"
    },
  ]


  return (
    <main className="">
        <div>
            <DetailsTop data = {data} product={product}/>
        </div>
    </main>
  )
}
