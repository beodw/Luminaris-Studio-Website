import React from 'react';
import { useNavigate } from 'react-router-dom';


const PricingCard = ({ title, price, description, features, bannerColor }) => {
  const navigate = useNavigate();
  const goToCheckoutPage = () => {
    navigate('/payment'); // Navigate to the checkout page
  };
  return (
    <div className="bg-white border rounded-lg shadow-lg text-center overflow-hidden max-w-[250px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[350px] 2xl:max-w-[500px]">
      <div className={`${bannerColor} h-16 flex justify-center items-center`}>
        <span className="text-lg font-semibold text-gray-700 mb-2 md:text-[13px] lg:text-[17px]">{title}</span>
      </div> {/* Banner color at the top */}
      <div className="p-6">
        <div className="text-4xl font-semibold text-gray-800 mb-1 md:text-[17px]">{price}</div>
        <p className="text-gray-500">{description}</p>
        <button onClick={goToCheckoutPage} className="bg-transparent border-[2px] border-gray-800 text-gray-800 font-semibold py-2 px-4 rounded-sm mt-6 mb-4 hover:bg-black hover:text-white lg:px-[80px]">
          GET STARTED
        </button>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex justify-center items-center text-gray-700 text-[14px]">
              {feature.included ? (
                <span className="text-green-500 mr-2">✔</span>
              ) : (
                <span className="text-red-500 mr-2">✖</span>
              )}
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const OfferCards = () => {
  const plans = [
    {
      title: 'MVP Kickstarter',
      price: '$0',
      description: 'FOR PLANNED PROJECTS\nBring your designs to the next level and export them.',
      features: [
        { label: '3 new projects / month', included: true },
        { label: 'Basic interaction', included: false },
        { label: 'Assets library', included: false },
      ],
      bannerColor: 'bg-gradient-to-r from-gray-100 to-white', // Light gray for free plan
    },
    {
      title: 'Custom Software',
      price: '$7/mo',
      description: 'FOR PLANNED PROJECTS\nBring your designs to the next level and export them.',
      features: [
        { label: '3 new projects / month', included: true },
        { label: 'Basic interaction', included: true },
        { label: 'Assets library', included: true },
      ],
      bannerColor: 'bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100', // Light purple for lite plan
    },
    {
      title: 'Premimum',
      price: '$12/mo',
      description: 'FOR PROFESSIONAL USE\nEnjoy limitless use with interactive export options.',
      features: [
        { label: '3 new projects / month', included: true },
        { label: 'Basic interaction', included: true },
        { label: 'Assets library', included: true },
      ],
      bannerColor: 'bg-gradient-to-r from-yellow-300 via-yellow-200 to-orange-200', // Light yellow for pro plan
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center 2xl:justify-start 2xl:h-full 2xl:mt-4'>
      <h1 className='font-poppins text-center text-blue-500 text-lg  text-wrap w-[250px] md:w-[500px] md:text-2xl'>
        LIGHTENING QUICK SOFTWARE
      </h1>
      <h12 className='-my-4 font-poppins font-lg text-center text-wrap w-[250px] md:w-[350px] lg:w-[450px]'>
        Slack, Trello and Guidance to help you succeed
      </h12>
      <div className=" mb-4 font-poppins flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 mt-12">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            bannerColor={plan.bannerColor}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferCards;


