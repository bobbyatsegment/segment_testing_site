import './Pricing.css';
import { useContext } from 'react';
import { CustomContext } from '../../state-management/app-context';
import { useNavigate } from 'react-router-dom';

const plans = [
  { name: "Basic", price: 9.99, description: "Perfect for individuals getting started." },
  { name: "Pro", price: 19.99, description: "Great for small teams and businesses." },
  { name: "Enterprise", price: 49.99, description: "For large-scale businesses and enterprises." }
];

const Pricing = () => {
  const { state } = useContext(CustomContext);
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    window.analytics?.track("Plan Selected", {
      plan_name: plan.name,
      price: plan.price,
      selected_by: state.currentUser?.userId || "anonymous",
      timestamp: new Date().toISOString(),
    });

    navigate(`/contact?plan=${plan.name.toLowerCase()}`);
  };

  return (
    <div className="pricing-container">
      <h1>Choose Your Plan</h1>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h2>{plan.name}</h2>
            <p className="price">${plan.price}/month</p>
            <p>{plan.description}</p>
            <button onClick={() => handleSelectPlan(plan)}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
