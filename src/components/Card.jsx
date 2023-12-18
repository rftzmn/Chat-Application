import React from 'react'

const Card = (props) => {
// const {title} = cardData;
  return (
    <div className="card card-compact w-60 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">SHo</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-warning bg-slate-100 px-6 py-4">Add to Cart</button>
    </div>
  </div>
</div>
    
  )
}

export default Card