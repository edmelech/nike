const ShoeCard = (imgURL, changeBigShoeImage, bigShoeImg) => {
  
  const handleClick = () => {
    if(bigShoeImg !== imgURL.bigShoe) 
    {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  
  return (
    <div>
      <div className={`border-2 rounded-xl
        ${bigShoeImg === imgURL ? 'border-x-coral-red' : 'border-transparent'}
        cursor-pointer max-sm:flex-1 
      `}
      onClick={handleClick}
      >
        
      </div>
      <div>
        <img 
          src={imgURL.thumbnail}
        />
      </div>
    </div>
  )
}

export default ShoeCard