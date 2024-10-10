import React from 'react';
import { useNavigate } from 'react-router-dom';


const PricingCard = ({ title, price, description, features, bannerColor, noFreeTrial}) => {
  const navigate = useNavigate();
  const goToCheckoutPage = () => {
    navigate('/payment'); // Navigate to the checkout page
  };
  return (
    <div className="min-h-[300px] md:min-h-[650px] font-poppins bg-white border rounded-lg shadow-lg text-center overflow-hidden max-w-[250px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[350px] 2xl:max-w-[500px]">
      <div className={`${bannerColor} h-16 flex justify-center items-center`}>
        <span className="text-lg font-semibold text-gray-700 mb-2 md:text-[13px] lg:text-[17px]">{title}</span>
      </div> {/* Banner color at the top */}
      <div className="p-6">
        <div className="text-2xl font-semibold text-gray-800 mb-1 md:text-[25px]">{price}</div>
        <p className="text-gray-500">{description}</p>
        <button onClick={goToCheckoutPage} className="bg-transparent border-[1px] border-gray-800 text-gray-800 font-semibold py-2 px-4 rounded-sm mt-6 mb-4 hover:bg-black hover:text-white lg:px-[70px]">
          {noFreeTrial ? "Start Now" : "Start Trial"}
        </button>
        <ul className='w-full flex flex-col items-center justify-center'>
              {features.map((feature, index) => (
                <li key={index} className="flex justify-center w-full text-gray-700 text-[14px]">
                  <span className="text-black mr-[2px]">&#8226;</span>
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
      price: '$32,499/qtr',
      description: 'Turn your website or app idea into a reality.',
      features: [
        { label: 'Dedicated Trello task board', included: true },
        { label: 'Access to 1-1 slack channel', included: false },
        { label: 'Website and app launch to any store', included: false },
      ],
      bannerColor: 'bg-gradient-to-r from-gray-100 to-white', // Light gray for free plan
    },
    {
      title: 'Custom Software Builder',
      price: '$64,999/qtr',
      description: 'Solve unique problems with custom built software.',
      features: [
        { label: 'Everything in MVP Kickstarter', included: true },
        { label: '1-1 zoom consultation over 50% faster development', included: true },
        { label: 'Custom integration to best fit your organisation and team', included: true },
      ],
      bannerColor: 'bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100', // Light purple for lite plan
    },
    {
      noFreeTrial: true,
      title: 'Customer Software Deluxe',
      price: '$77,988/qtr',
      description: 'Expand functionality of existing software.',
      features: [
        { label: 'Everything in Custom Software', included: true },
        { label: 'Bug fixes of existing code', included: true },
        { label: 'Improve existing code base', included: true },
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
         No need for any technical expertise. Eliminate hassle of building a technical team
      </h12>
      <div className=" mb-4 font-poppins flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 mt-12">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            {...plan}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferCards;


