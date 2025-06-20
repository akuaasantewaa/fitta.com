import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CareersPage = () => {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [heroRef, heroVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  const [jobsRef, jobsVisible] = useScrollAnimation();
  const [perksRef, perksVisible] = useScrollAnimation();

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'operations', name: 'Operations' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'sales', name: 'Sales' },
    { id: 'support', name: 'Customer Support' }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'Accra, Ghana',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build and scale our platform to serve millions of users across Africa.'
    },
    {
      id: 2,
      title: 'Garage Partnership Manager',
      department: 'operations',
      location: 'Kumasi, Ghana',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Grow and manage relationships with our network of garage partners.'
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Drive our digital marketing strategy and grow our online presence.'
    },
    {
      id: 4,
      title: 'Customer Success Representative',
      department: 'support',
      location: 'Accra, Ghana',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Provide exceptional support to our users and garage partners.'
    },
    {
      id: 5,
      title: 'Business Development Executive',
      department: 'sales',
      location: 'Takoradi, Ghana',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Identify and pursue new business opportunities across Ghana.'
    },
    {
      id: 6,
      title: 'Mobile App Developer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build beautiful and performant mobile apps for iOS and Android.'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace new ideas and technologies to transform vehicle services.',
      icon: '💡'
    },
    {
      title: 'Customer Obsessed',
      description: 'Every decision we make starts with our customers in mind.',
      icon: '❤️'
    },
    {
      title: 'Impact Driven',
      description: 'We measure success by the positive change we create in communities.',
      icon: '🎯'
    },
    {
      title: 'Collaborative Spirit',
      description: 'We win together through teamwork and mutual support.',
      icon: '🤝'
    }
  ];

  const perks = [
    { name: 'Competitive Salary', icon: '💰', description: 'Industry-leading compensation packages' },
    { name: 'Health Insurance', icon: '🏥', description: 'Comprehensive health coverage for you and family' },
    { name: 'Flexible Work', icon: '🏡', description: 'Remote and hybrid work options available' },
    { name: 'Learning Budget', icon: '📚', description: 'Annual budget for courses and conferences' },
    { name: 'Stock Options', icon: '📈', description: 'Own a piece of the company you help build' },
    { name: 'Paid Time Off', icon: '🏖️', description: 'Generous vacation and personal days' },
    { name: 'Modern Equipment', icon: '💻', description: 'Latest tools and technology to do your best work' },
    { name: 'Team Events', icon: '🎉', description: 'Regular team building and social activities' }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(job => job.department === selectedDepartment);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-500 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className={`text-5xl md:text-6xl font-black mb-6 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join the FITTA Team
          </h1>
          <p className={`text-xl opacity-90 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Help us revolutionize vehicle services across Africa. Build your career while making a real impact.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('open-positions').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 hover:bg-neutral-100"
            >
              View Open Positions
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => navigate('/about')}
              className="text-white border-white hover:bg-white/10"
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section ref={valuesRef} className="py-20 bg-neutral-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Our Values Define Us
            </h2>
            <p className={`text-xl text-secondary-600 dark:text-neutral-300 transition-all duration-1000 delay-200 ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              These principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center transition-all duration-500 delay-${index * 100} ${
                  valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-secondary-600 dark:text-neutral-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" ref={jobsRef} className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
              jobsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Open Positions
            </h2>
            <p className={`text-xl text-secondary-600 dark:text-neutral-300 mb-8 transition-all duration-1000 delay-200 ${
              jobsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Find your next opportunity with us
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 dark:bg-secondary-800 text-secondary-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-secondary-700'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredPositions.map((job, index) => (
              <div
                key={job.id}
                className={`bg-white dark:bg-secondary-800 border border-neutral-200 dark:border-secondary-700 rounded-xl p-6 hover:shadow-lg transition-all duration-500 delay-${index * 50} ${
                  jobsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-secondary-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-neutral-300 mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <span>📍</span>
                        <span className="text-secondary-700 dark:text-neutral-300">{job.location}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span>💼</span>
                        <span className="text-secondary-700 dark:text-neutral-300">{job.type}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span>🎯</span>
                        <span className="text-secondary-700 dark:text-neutral-300">{job.experience}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span>🏢</span>
                        <span className="text-secondary-700 dark:text-neutral-300 capitalize">{job.department}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Button
                      variant="primary"
                      onClick={() => window.location.href = `mailto:careers@fitta.com?subject=Application for ${job.title}`}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-secondary-600 dark:text-neutral-300">
                No positions available in this department at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Perks & Benefits */}
      <section ref={perksRef} className="py-20 bg-gradient-to-br from-primary-50 to-white dark:from-secondary-800 dark:to-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
              perksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Perks & Benefits
            </h2>
            <p className={`text-xl text-secondary-600 dark:text-neutral-300 transition-all duration-1000 delay-200 ${
              perksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              We take care of our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <div
                key={perk.name}
                className={`bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 delay-${index * 50} ${
                  perksVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <div className="text-3xl mb-3">{perk.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-secondary-900 dark:text-white">
                  {perk.name}
                </h3>
                <p className="text-sm text-secondary-600 dark:text-neutral-300">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.href = 'mailto:careers@fitta.com?subject=General Application'}
            className="bg-white text-secondary-900 hover:bg-neutral-100"
          >
            Send Your Resume
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;