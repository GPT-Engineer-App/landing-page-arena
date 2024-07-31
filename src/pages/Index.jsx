import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const features = [
    "Advanced analytics",
    "24/7 customer support",
    "Custom integrations",
    "Unlimited users"
  ];

  const plans = [
    { name: "Basic", monthlyPrice: 29, yearlyPrice: 290, features: features.slice(0, 2) },
    { name: "Pro", monthlyPrice: 59, yearlyPrice: 590, features: features.slice(0, 3) },
    { name: "Enterprise", monthlyPrice: 99, yearlyPrice: 990, features: features }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Streamline Your Workflow</h1>
          <p className="text-xl mb-8">Boost productivity and collaboration with our all-in-one SaaS solution.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get Started Free</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle>{feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CheckCircle2 className="w-12 h-12 mx-auto text-green-500" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="flex justify-center mb-8">
            <Button
              variant={selectedPlan === 'monthly' ? 'default' : 'outline'}
              onClick={() => setSelectedPlan('monthly')}
              className="mr-2"
            >
              Monthly
            </Button>
            <Button
              variant={selectedPlan === 'yearly' ? 'default' : 'outline'}
              onClick={() => setSelectedPlan('yearly')}
            >
              Yearly (Save 20%)
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold mb-4">
                    ${selectedPlan === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    <span className="text-sm font-normal">/{selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
                  </p>
                  <ul className="mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center mb-2">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers and transform your workflow today.</p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Your Free Trial <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
