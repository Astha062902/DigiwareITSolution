import React from 'react';
import SectionWithImage from '@/components/SectionWithImage';



const Big_data: React.FC = () => {
  const content = "Data is the lifeblood of every business, and how companies see it is crucial. The capacity to correctly interpret, process, extract, value, visualise, and, most crucially, communicate data would be the secret to a successful corporation. With big data analysis, firms can maximise the value of their data and fulfil their business objectives. To assist clients in profit from the big data environment, Digiware offers a variety of big data services, including consultancy, installation, support, and big data as a service. Big data enables businesses to better their operations and make faster, more informed choices. We assist our clients in establishing a suitable record for size and application accessibility while developing big data technological capabilities to generate persuasion and value.";

  return (
    <section id="big-data">
    <div>
      <SectionWithImage 
        imageSrc="/assets/big_data.jpg"
        imageAlt="Big Data Services"
        title="Big Data Services"
        content={content}
         imagePosition="right"
      />
    </div>
    </section>
  );
};

export default Big_data;