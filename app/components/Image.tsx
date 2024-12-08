import Image from 'next/image'

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
       
      <h3 className="text-[20px] font-semibold text-center mb-4 text-[#616161]">
        Share your setup with 
      </h3>
      <h1 className='font-bold text-[40px] text-center'>#FuniroFurniture</h1>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        <div className="relative">
          <Image
            src="/g1.svg"
            alt="Image 1"
            width={451}
            height={300}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/g2.svg"
            alt="Image 2"
            width={295}
            height={392}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/g3.svg"
            alt="Image 3"
            width={290}
            height={348}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/g4.svg"
            alt="Image 4"
            width={212}
            height={433}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/g5.svg"
            alt="Image 5"
            width={170}
            height={323}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/g6.svg"
            alt="Image 6"
            width={344}
            height={242}
            className="w-full rounded-lg object-cover"
          />
        </div>
        
      </div>
    </section>
  )
}

export default Gallery
