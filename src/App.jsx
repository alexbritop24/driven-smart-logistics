import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  CircleHelp,
  LayoutGrid,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Star,
  Truck,
} from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SectionHeader from './components/SectionHeader'
import {
  audiences,
  benefits,
  faqs,
  processSteps,
  reviews,
  services,
  trustClients,
} from './data/siteContent'

function App() {
  return (
    <div className="min-h-screen bg-dsl-black text-dsl-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-hero-glow">
          <div className="container-shell section-padding">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="tag-pill">Premium Dispatch Support</span>

                <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Keep your truck moving with a dispatch partner built for speed, clarity, and
                  consistency.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-dsl-gray sm:text-xl">
                  Driven Smart Logistics helps hotshot drivers, owner operators, semi truck
                  drivers, and small fleets stay loaded, reduce downtime, and operate with more
                  confidence.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href="#contact" className="primary-btn">
                    Get Started
                  </a>
                  <a href="#pricing" className="secondary-btn">
                    View Pricing
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-dsl-gray">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Hotshot Dispatching
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Semi Truck Dispatching
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Driver-Focused Support
                  </span>
                </div>
              </div>

              <div className="section-card p-6 sm:p-8">
                <div className="grid gap-5">
                  <div className="rounded-3xl border border-dsl-orange/20 bg-dsl-orange/10 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-dsl-orangeSoft">
                          DSL
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">
                          Dispatch built to keep you moving
                        </h3>
                      </div>
                      <Truck className="text-dsl-orange" size={30} />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid-card">
                      <BadgeDollarSign className="text-dsl-orange" size={22} />
                      <h4 className="mt-4 text-lg font-semibold">Simple Pricing</h4>
                      <p className="mt-2 text-sm leading-7 text-dsl-gray">
                        Hotshot dispatching at 7% and semi truck dispatching at 5%.
                      </p>
                    </div>

                    <div className="grid-card">
                      <MessageSquare className="text-dsl-orange" size={22} />
                      <h4 className="mt-4 text-lg font-semibold">Fast Communication</h4>
                      <p className="mt-2 text-sm leading-7 text-dsl-gray">
                        Cleaner coordination so drivers spend less time chasing updates.
                      </p>
                    </div>
                  </div>

                  <div className="grid-card">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-dsl-orangeSoft">
                          Built for
                        </p>
                        <h4 className="mt-2 text-xl font-semibold">
                          Hotshot drivers, semis, owner operators, and small fleets
                        </h4>
                      </div>
                      <ShieldCheck className="text-dsl-orange" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 py-8">
          <div className="container-shell">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
              {trustClients.map((client) => (
                <span
                  key={client}
                  className="text-sm font-medium uppercase tracking-[0.18em] text-dsl-gray"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-padding">
          <div className="container-shell">
            <SectionHeader
              tag="Services"
              title="Dispatch services built around real carrier needs"
              description="DSL is designed to help carriers reduce friction, improve communication, and stay focused on moving freight."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="grid-card">
                  <LayoutGrid className="text-dsl-orange" size={22} />
                  <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-dsl-gray">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section-padding pt-0">
          <div className="container-shell">
            <div className="section-card p-8 sm:p-10">
              <SectionHeader
                tag="Pricing"
                title="Clear, simple pricing"
                description="No complicated structure. Just straightforward dispatch pricing designed to stay transparent."
              />

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <div className="grid-card">
                  <p className="text-sm uppercase tracking-[0.2em] text-dsl-orangeSoft">
                    Hotshot Dispatching
                  </p>
                  <p className="mt-4 text-5xl font-semibold text-white">7%</p>
                  <p className="mt-4 text-sm leading-7 text-dsl-gray">
                    Performance-based dispatch support for hotshot drivers who need consistency,
                    communication, and speed.
                  </p>
                </div>

                <div className="grid-card">
                  <p className="text-sm uppercase tracking-[0.2em] text-dsl-orangeSoft">
                    Semi Truck Dispatching
                  </p>
                  <p className="mt-4 text-5xl font-semibold text-white">5%</p>
                  <p className="mt-4 text-sm leading-7 text-dsl-gray">
                    Clean and reliable dispatch coordination for semi truck operations focused on
                    reducing downtime and keeping trucks active.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-shell">
            <SectionHeader
              tag="Why Choose DSL"
              title="Focused on what actually matters to drivers"
              description="The right dispatch partner should reduce friction, protect your time, and help you stay operational without unnecessary chaos."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-dsl-line bg-dsl-panel px-5 py-4"
                >
                  <CheckCircle2 className="text-dsl-orange" size={18} />
                  <span className="text-sm font-medium text-dsl-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-shell">
            <SectionHeader
              tag="How It Works"
              title="A clean process from first contact to active dispatch"
              description="DSL keeps the workflow simple so carriers know what to expect at every stage."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-4">
              {processSteps.map((item) => (
                <div key={item.step} className="grid-card">
                  <p className="text-sm font-semibold tracking-[0.2em] text-dsl-orangeSoft">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-dsl-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-padding pt-0">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="section-card p-8">
                <span className="tag-pill">About Us</span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Driven Smart Logistics is built to support carriers with stronger coordination
                  and cleaner communication.
                </h2>
              </div>

              <div className="section-card p-8">
                <p className="text-base leading-8 text-dsl-gray sm:text-lg">
                  DSL is focused on helping drivers and fleets operate with more structure,
                  better communication, and less unnecessary friction. The goal is simple: help
                  carriers stay loaded, reduce downtime, and move with more confidence.
                </p>
                <p className="mt-6 text-base leading-8 text-dsl-gray sm:text-lg">
                  Whether you run a hotshot setup, semi truck, or small fleet, Driven Smart
                  Logistics is positioned as a dispatch partner that values responsiveness,
                  clarity, and dependable support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-shell">
            <SectionHeader
              tag="Who We Work With"
              title="Built for growing carriers and serious drivers"
              description="DSL supports operations that need consistency, strong communication, and a dispatch partner that respects time and movement."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {audiences.map((audience) => (
                <div key={audience} className="grid-card">
                  <Truck className="text-dsl-orange" size={20} />
                  <h3 className="mt-4 text-lg font-semibold">{audience}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section-padding pt-0">
          <div className="container-shell">
            <SectionHeader
              tag="Client Reviews"
              title="Trusted by active clients"
              description="A premium dispatch brand still needs proof. These client names are already part of the DSL network."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {reviews.map((review) => (
                <div key={review.company} className="grid-card">
                  <div className="flex items-center gap-2 text-dsl-orange">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-8 text-dsl-gray">“{review.quote}”</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-dsl-white">
                    {review.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-padding pt-0">
          <div className="container-shell">
            <SectionHeader
              tag="FAQ"
              title="Common questions"
              description="A few quick answers to the questions carriers usually want to clarify first."
            />

            <div className="mt-14 grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-dsl-line bg-dsl-panel p-6">
                  <div className="flex items-start gap-4">
                    <CircleHelp className="mt-1 text-dsl-orange" size={20} />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-dsl-gray">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding pt-0">
          <div className="container-shell">
            <div className="section-card overflow-hidden p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <span className="tag-pill">Ready to Move?</span>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Let DSL handle dispatch while you focus on the road.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-dsl-gray sm:text-lg">
                    Reach out to Driven Smart Logistics if you want premium dispatch support
                    built around consistency, communication, and keeping your truck active.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a href="mailto:your@email.com" className="primary-btn">
                      Email Us
                    </a>
                    <a href="tel:0000000000" className="secondary-btn">
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="grid-card">
                    <PhoneCall className="text-dsl-orange" size={20} />
                    <h3 className="mt-4 text-lg font-semibold">Contact</h3>
                    <p className="mt-3 text-sm leading-7 text-dsl-gray">
                      Phone: (000) 000-0000
                      <br />
                      Email: your@email.com
                    </p>
                  </div>

                  <div className="grid-card">
                    <ArrowRight className="text-dsl-orange" size={20} />
                    <h3 className="mt-4 text-lg font-semibold">Next Step</h3>
                    <p className="mt-3 text-sm leading-7 text-dsl-gray">
                      Share your truck type, setup, and dispatch needs so DSL can guide you
                      through qualification and onboarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App