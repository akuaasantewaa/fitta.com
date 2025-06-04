import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutFounderSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  return (
    <section className="py-20 bg-neutral-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Large Rounded Image */}
            <div 
              className={`
                relative transition-all duration-1000
                ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
              `}
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Main Image Container */}
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-red-900/20">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                    alt="Michael Karter - Founder & CEO"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Quote Content */}
            <div 
              className={`
                space-y-8 transition-all duration-1000 delay-300
                ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
              `}
            >
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                  The success of any organization doesn't just come from its products or services; 
                  it comes from its people, their dedication, and their ability to build meaningful 
                  connections with customers. A great company starts with a great culture, one that 
                  prioritizes trust, relationships, and a shared vision for the future.
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-1">
                  Michael Karter
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-base mb-6">
                  Founder of FITTA
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 hover:bg-primary-500 dark:hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 hover:bg-primary-500 dark:hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection;