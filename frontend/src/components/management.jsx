import React, { useState } from 'react'
import Cards from './cards'





const Managment = () => {

    const projects = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Hubble_Ultra_Deep_Field_part_d.jpg",
            title: 'Card 2',
            description: 'Description for Card 2',
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Hubble_Ultra_Deep_Field_part_d.jpg",
          title: 'Card 2',
          description: 'Description for Card 2',
        },
        // Add more card data as needed
      ];


    return (
        <div>
            <div className='flex justify-center py-10'>
                <p className='font-bold text-4xl'>Projects</p>

            </div>
            <div className="py-16">
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]'>
                    {projects.map((card, index) => (
          <Cards prod={card} />
          ))}
                        
                        

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Managment;