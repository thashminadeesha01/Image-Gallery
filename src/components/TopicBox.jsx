import React from 'react';
import './topicbox.css';

function TopicBox(props) {
    return (
        <div className='container'>
         <div className="topic">
                <h1>Discover the beauty<br /> around the world</h1>
                <p>Explore stunning designs and inspirations from across the globe. Let us bring the world’s beauty to your space with unique, creative solutions.</p>

                    <button className='button'>Explore</button>
                
            </div>
        
    
           <div className='imageStyle'>
                <img src="/images/A.jpg" alt="01" />
                <img src="/images/B.jpg" alt="02" />
                <img src="/images/C.jpg"  alt="03" />
                <img src="/images/D.jpg"  alt="04" />
                <img src="/images/E.jpg" alt="05" />
                <img src="/images/F.jpg" alt="06" />
                <img src="/images/G.jpg"  alt="07" />
                <img src="/images/H.jpg"  alt="08" />               
            </div>
       </div>
        
    );
}

export default TopicBox;
