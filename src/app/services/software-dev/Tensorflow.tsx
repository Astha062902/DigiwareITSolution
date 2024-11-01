import React from 'react';
import CenteredTitleAndContent from '@/components/CenteredTitleandContent';

const Tensorflow: React.FC = () => {
  const content = (
    <p>
     TensorFlow is an open-source machine learning framework that automates the whole process. It features a large, flexible ecosystem of tools, libraries and community resources that enable academics to push the boundaries of machine learning and developers to quickly build and deploy ML-powered apps. TensorFlow is a single paradigm that incorporates a number of machine learning and deep learning (also known as neural networking) models and methods.
    </p>
  );

  return (
    <section id ="tensorflow">
    <div>
      <CenteredTitleAndContent title="Tensorflow" content={content} contentAlignment='left' />
    </div>
    </section>
  );
};

export default Tensorflow;