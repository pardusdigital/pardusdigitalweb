import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  ExternalLink,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  Plus,
  Quote,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

const WHATSAPP_NUMBER = '';
const EMAIL = 'pardusdigital@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/pardus.digital?stkn=eTlzMnRuNmZ4dXM0';
const HERO_MESSAGE = 'Hi Shivank, I want to grow my business with Pardus Digital';
const WHATSAPP_ORIGIN = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}`
  : 'https://wa.me/';

const whatsappLink = (message: string) =>
  `${WHATSAPP_ORIGIN}?text=${encodeURIComponent(message)}`;

const services = [
  {
    number: '01',
    title: 'Professional Website Development',
    price: '₹5,000',
    cadence: 'One-time',
    description: 'Dynamic digital menu, multi-page layout, fast WhatsApp ordering.',
    accent: 'amber',
  },
  {
    number: '02',
    title: 'Basic Website Development',
    price: '₹3,500',
    cadence: 'One-time',
    description: 'Single-page clean landing page, mobile responsive.',
    accent: 'slate',
  },
  {
    number: '03',
    title: 'Google Business Profile Set-up',
    price: '₹1,500',
    cadence: 'One-time',
    description: '100% verified Maps pin, Local SEO ranking, review QR code setup.',
    note: 'Optional maintenance @ ₹200/mo.',
    accent: 'slate',
  },
  {
    number: '04',
    title: 'Social Media Suite & E-Manager',
    price: '₹5,000',
    cadence: 'Monthly',
    description: '10 cinematic reels, promotional offer posters, daily account handling & Meta Ads setup.',
    accent: 'slate',
  },
];

const reviews = [
  {
    initials: 'AV',
    name: 'Aman Verma',
    role: 'Cafe Owner',
    quote: 'Pardus Digital optimized our Google Maps and shot 10 reels. Hamare weekend walk-ins seedhe double ho gaye.',
  },
  {
    initials: 'RS',
    name: 'Rahul Sharma',
    role: 'Restaurant Manager',
    quote: 'Professional website aur WhatsApp ordering system setup karwaya. Order lena aur menu update karna bohot simple ho gaya.',
  },
  {
    initials: 'PS',
    name: 'Priya Singh',
    role: 'Boutique Owner',
    quote: 'Instagram ads aur reels management se local reach kafi badh gayi. Shivank aur unki team ka support ekdam prompt hai.',
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d49c3a]">
      <span className="h-px w-8 bg-[#d49c3a]" />
      {children}
    </div>
  );
}

function WhatsAppButton({ children, className = '', message = HERO_MESSAGE }: { children: ReactNode; className?: string; message?: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      data-testid="link-whatsapp-primary"
      className={`button-lift inline-flex items-center justify-center gap-3 rounded-full bg-[#d49c3a] px-5 py-3 text-sm font-bold text-[#171b24] shadow-[0_12px_30px_rgba(212,156,58,0.16)] hover:bg-[#e7b45b] ${className}`}
    >
      {children}
      <ArrowUpRight size={16} strokeWidth={2.5} />
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    service: '',
  });
  const [formError, setFormError] = useState('');
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const updateForm = (key: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setFormError('');
    setFormSent(false);
  };

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.business || !form.phone || !form.service) {
      setFormError('Please fill every field so Shivank can follow up with the right plan.');
      return;
    }
    const bookingMessage = [
      'Hi Shivank, I want to book a growth slot with Pardus Digital.',
      '',
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Phone: ${form.phone}`,
      `Selected service: ${form.service}`,
    ].join('\n');
    setFormSent(true);
    window.open(whatsappLink(bookingMessage), '_blank', 'noopener,noreferrer');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="pardus-page grain min-h-[100dvh]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.07] bg-[#171b24]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <a href="#top" onClick={closeMenu} data-testid="link-brand" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[11px] border border-[#d49c3a]/60 bg-[#d49c3a] text-[#171b24]">
              <span className="display-face text-xl font-bold leading-none">P</span>
            </span>
            <span className="display-face text-[15px] font-bold tracking-[0.18em] text-[#f4f0e7]">PARDUS<span className="text-[#d49c3a]">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.13em] text-[#a8adb5] md:flex" aria-label="Main navigation">
            <a href="#services" data-testid="link-nav-services" className="transition-colors hover:text-[#f4f0e7]">Services</a>
            <a href="#bundle" data-testid="link-nav-bundle" className="transition-colors hover:text-[#f4f0e7]">Kickstart</a>
            <a href="#booking" data-testid="link-nav-booking" className="transition-colors hover:text-[#f4f0e7]">Booking</a>
            <a href="#proof" data-testid="link-nav-proof" className="transition-colors hover:text-[#f4f0e7]">Proof</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" data-testid="link-nav-contact" className="hidden rounded-full border border-white/15 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#f4f0e7] transition-colors hover:border-[#d49c3a] hover:text-[#d49c3a] sm:inline-flex">Talk to us</a>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} data-testid="button-mobile-menu" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[#f4f0e7] md:hidden">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/[0.07] bg-[#1c212b] px-5 py-5 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {[
                ['Services', '#services'],
                ['Kickstart', '#bundle'],
                ['Booking', '#booking'],
                ['Proof', '#proof'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu} data-testid={`link-mobile-${label.toLowerCase()}`} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#d8d3c8] hover:bg-white/5 hover:text-[#d49c3a]">{label}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-48">
          <div className="hero-grid absolute inset-x-0 top-0 -z-10 h-[760px]" />
          <div className="absolute right-[-11rem] top-[10rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[#b9782c]/10 blur-[100px]" />
          <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
            <div data-reveal className="is-visible">
              <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a8adb5]">
                <span className="h-2 w-2 rounded-full bg-[#d49c3a] shadow-[0_0_0_5px_rgba(212,156,58,.12)]" />
                Creative & Digital Marketing Agency
              </div>
              <h1 className="display-face max-w-[760px] text-[clamp(3.7rem,8.5vw,7.8rem)] font-semibold leading-[0.87] tracking-[-0.075em] text-[#f4f0e7]">
                Make ur<br /><span className="text-[#d49c3a]">competitors</span><br />sweat online<span className="text-[#d49c3a]">.</span>
              </h1>
              <p className="mt-8 max-w-[550px] text-base leading-7 text-[#a8adb5] sm:text-lg sm:leading-8">
                From cinematic reels to top Google Maps rankings—we turn local screens into daily paying walk-ins.
              </p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton className="w-full sm:w-auto"><MessageCircle size={17} />Chat on WhatsApp</WhatsAppButton>
                <a href="#services" data-testid="link-hero-services" className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#d8d3c8] hover:text-[#d49c3a]">
                  See what we do <ArrowDownRight size={17} className="transition-transform group-hover:translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
              <div className="mt-14 flex items-center gap-5 text-xs text-[#777f8b]">
                <span className="h-px w-16 bg-[#d49c3a]" />
                Built for cafes, restaurants & local businesses
              </div>
            </div>

            <div data-reveal className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
              <div className="relative aspect-square">
                <div className="absolute inset-[8%] rounded-full border border-[#d49c3a]/30" />
                <div className="ring-orbit absolute inset-[1%] rounded-full border border-dashed border-[#d49c3a]/35">
                  <span className="absolute left-[8%] top-[14%] h-3 w-3 rounded-full bg-[#d49c3a]" />
                </div>
                <div className="absolute inset-[17%] rotate-[-9deg] border border-white/10 bg-[#20252f]/75 p-5 backdrop-blur-sm sm:p-7">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="mono-face text-[10px] uppercase tracking-[0.16em] text-[#8e96a3]">local / growth</span>
                    <Sparkles size={15} className="text-[#d49c3a]" />
                  </div>
                  <div className="pt-10">
                    <div className="mono-face text-[10px] uppercase tracking-[0.16em] text-[#8e96a3]">visibility index</div>
                    <div className="display-face mt-2 text-6xl font-semibold tracking-[-0.08em] text-[#f4f0e7] sm:text-8xl">↑ 2.8<span className="text-2xl text-[#d49c3a]">x</span></div>
                    <div className="mt-7 h-24 border-b border-l border-white/10">
                      <svg viewBox="0 0 360 100" className="h-full w-full overflow-visible" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0 88 C 36 82, 42 78, 72 82 S 108 69, 135 70 S 167 51, 190 57 S 214 39, 242 44 S 274 26, 300 34 S 333 12, 360 16" fill="none" stroke="#d49c3a" strokeWidth="2.5" />
                        <path d="M0 88 C 36 82, 42 78, 72 82 S 108 69, 135 70 S 167 51, 190 57 S 214 39, 242 44 S 274 26, 300 34 S 333 12, 360 16 V100 H0Z" fill="url(#area)" opacity=".17" />
                        <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#d49c3a" /><stop offset="1" stopColor="#d49c3a" stopOpacity="0" /></linearGradient></defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="float-slow absolute -right-2 top-[12%] rounded-2xl border border-[#d49c3a]/45 bg-[#292f39] px-4 py-3 shadow-xl sm:-right-7" data-testid="text-hero-signal">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#d49c3a]"><span className="h-1.5 w-1.5 rounded-full bg-[#d49c3a]" />Signal found</div>
                  <div className="mt-1 text-sm font-semibold text-[#f4f0e7]">Your next customer</div>
                </div>
                <div className="absolute -bottom-1 left-0 rounded-2xl border border-white/10 bg-[#20252f] px-4 py-3 shadow-xl sm:-left-8" data-testid="text-hero-location">
                  <div className="mono-face text-[10px] uppercase tracking-[0.15em] text-[#8e96a3]">everyday reach</div>
                  <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#f4f0e7]"><span className="h-2 w-2 rounded-full bg-[#8bc29b]" />Maps · Meta · WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-y border-white/[0.08] bg-[#1c212b]">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
            <span className="mono-face text-[10px] uppercase tracking-[0.18em] text-[#d49c3a]">Pardus playbook</span>
            {['Get found', 'Look sharp', 'Stay top of mind', 'Convert nearby'].map((item, index) => (
              <div key={item} className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.12em] text-[#a8adb5]">
                <span>{item}</span>{index < 3 && <Plus size={12} className="text-[#d49c3a]" />}
              </div>
            ))}
          </div>
        </div>

        <section id="services" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div data-reveal className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
              <div>
                <SectionLabel>What we do</SectionLabel>
                <h2 className="display-face max-w-[410px] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#f4f0e7] sm:text-6xl">No fluff.<br /><span className="text-[#d49c3a]">Just traction.</span></h2>
                <p className="mt-7 max-w-[360px] text-sm leading-7 text-[#8e96a3]">The internet is the busiest street in your city. We make sure your business has the best storefront on it.</p>
                <a href="#booking" data-testid="link-services-booking" className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#f4f0e7] hover:text-[#d49c3a]">Build my growth plan <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service, index) => (
                  <article key={service.number} data-reveal className={`service-card rounded-2xl border p-6 ${service.accent === 'amber' ? 'border-[#d49c3a]/55 bg-[#28251f]' : 'border-white/10 bg-[#1c212b]'} ${index === 0 ? 'sm:translate-y-8' : ''}`}>
                    <div className="flex items-start justify-between">
                      <span className="mono-face text-[11px] text-[#d49c3a]">{service.number}</span>
                      <ArrowUpRight size={17} className="text-[#777f8b]" />
                    </div>
                    <h3 className="display-face mt-12 max-w-[235px] text-2xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#f4f0e7]">{service.title}</h3>
                    <div className="mt-7 flex items-baseline gap-2"><span className="display-face text-2xl font-semibold text-[#d49c3a]">{service.price}</span><span className="text-xs text-[#8e96a3]">{service.cadence}</span></div>
                    <p className="mt-3 text-sm leading-6 text-[#9ca3ae]">{service.description}</p>
                    {service.note && <p className="mt-3 border-t border-white/10 pt-3 text-xs font-semibold text-[#d49c3a]">{service.note}</p>}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="bundle" className="scroll-mt-24 px-5 pb-24 sm:px-8 sm:pb-32">
          <div data-reveal className="mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] border border-[#d49c3a]/50 bg-[#d49c3a] text-[#171b24]">
            <div className="grid lg:grid-cols-[.9fr_1.1fr]">
              <div className="relative overflow-hidden p-7 sm:p-12 lg:p-16">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#171b24]/15" />
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#171b24]/15" />
                <div className="relative">
                  <div className="mono-face text-[11px] font-medium uppercase tracking-[0.2em] opacity-70">Best first move</div>
                  <h2 className="display-face mt-7 max-w-[440px] text-5xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-7xl">Digital<br />Kickstart<br /><span className="opacity-60">Bundle.</span></h2>
                  <p className="mt-8 max-w-[310px] text-sm font-semibold leading-6 opacity-75">Everything your local business needs to look credible, get found and start showing up daily.</p>
                  <WhatsAppButton message="Hi Shivank, I want to claim the Digital Kickstart Bundle for my business." className="mt-9 bg-[#171b24] text-[#f4f0e7] shadow-none hover:bg-[#292f39]"><MessageCircle size={17} />Claim Kickstart Bundle</WhatsAppButton>
                </div>
              </div>
              <div className="border-t border-[#171b24]/15 bg-[#e2aa4d] p-7 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
                <div className="flex items-end justify-between gap-5 border-b border-[#171b24]/20 pb-7">
                  <div><div className="mono-face text-[10px] uppercase tracking-[0.16em] opacity-65">One focused launch</div><div className="display-face mt-2 text-5xl font-semibold tracking-[-0.07em]">₹8,999 <span className="text-sm tracking-normal opacity-60">Only</span></div></div>
                  <div className="text-right text-sm opacity-65"><div className="line-through">₹11,500 value</div><div className="font-bold">save ₹2,501</div></div>
                </div>
                <div className="space-y-5 pt-7">
                  {[
                    ['01', 'Professional Website Build', '₹5,000 value'],
                    ['02', 'Google Business Profile Setup', '₹1,500 value'],
                    ['03', '1st Month Complete Social Media Suite & E-Manager', '₹5,000 value'],
                  ].map(([number, title, value]) => (
                    <div key={number} className="flex gap-4">
                      <span className="mono-face mt-1 text-xs opacity-60">{number}</span>
                      <div className="flex flex-1 items-start justify-between gap-5"><span className="max-w-[310px] text-sm font-bold leading-5">{title}</span><span className="whitespace-nowrap text-xs opacity-60">{value}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="scroll-mt-24 border-y border-white/[0.08] bg-[#1c212b] px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
            <div data-reveal>
              <SectionLabel>Secure Slot & Advance Payment</SectionLabel>
              <h2 className="display-face max-w-[480px] text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#f4f0e7] sm:text-6xl">Good growth starts with a <span className="text-[#d49c3a]">yes.</span></h2>
              <p className="mt-7 max-w-[430px] text-sm leading-7 text-[#8e96a3]">Tell us what you run and where you want to go. Shivank will come back with the clearest next step—no drawn-out sales call.</p>
              <div className="mt-10 space-y-5">
                <div className="flex gap-4"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d49c3a]/50 text-[#d49c3a]"><CircleCheck size={16} /></div><div><div className="text-sm font-bold text-[#f4f0e7]">Direct UPI support</div><div className="mt-1 text-xs leading-5 text-[#8e96a3]">Google Pay, PhonePe, Paytm QR code integration.</div></div></div>
                <div className="flex gap-4"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d49c3a]/50 text-[#d49c3a]"><CircleCheck size={16} /></div><div><div className="text-sm font-bold text-[#f4f0e7]">Bank transfer accepted</div><div className="mt-1 text-xs leading-5 text-[#8e96a3]">Choose the payment route that suits your business.</div></div></div>
              </div>
              <div className="mt-10 border-l-2 border-[#d49c3a] pl-5 text-xs leading-6 text-[#bfc1c2]">50% Advance allocation to initiate website & shoot production. Balance 50% payable upon final delivery and review.</div>
            </div>
            <form onSubmit={submitBooking} data-reveal className="rounded-2xl border border-white/10 bg-[#20252f] p-6 sm:p-9">
              <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5"><h3 className="display-face text-2xl font-semibold tracking-[-0.04em] text-[#f4f0e7]">Booking inquiry</h3><span className="mono-face text-[10px] uppercase tracking-[0.16em] text-[#d49c3a]">01 / 01</span></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block"><span className="mb-2 block text-xs font-semibold text-[#bfc1c2]">Name</span><input required value={form.name} onChange={(event) => updateForm('name', event.target.value)} data-testid="input-booking-name" placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-[#171b24] px-4 py-3.5 text-sm text-[#f4f0e7] outline-none transition-colors placeholder:text-[#6f7783] focus:border-[#d49c3a]" /></label>
                <label className="block"><span className="mb-2 block text-xs font-semibold text-[#bfc1c2]">Business Name</span><input required value={form.business} onChange={(event) => updateForm('business', event.target.value)} data-testid="input-booking-business" placeholder="Your business" className="w-full rounded-xl border border-white/10 bg-[#171b24] px-4 py-3.5 text-sm text-[#f4f0e7] outline-none transition-colors placeholder:text-[#6f7783] focus:border-[#d49c3a]" /></label>
                <label className="block"><span className="mb-2 block text-xs font-semibold text-[#bfc1c2]">Phone Number</span><input required type="tel" value={form.phone} onChange={(event) => updateForm('phone', event.target.value)} data-testid="input-booking-phone" placeholder="Best number to reach you" className="w-full rounded-xl border border-white/10 bg-[#171b24] px-4 py-3.5 text-sm text-[#f4f0e7] outline-none transition-colors placeholder:text-[#6f7783] focus:border-[#d49c3a]" /></label>
                <label className="block"><span className="mb-2 block text-xs font-semibold text-[#bfc1c2]">Selected Service</span><div className="relative"><select required value={form.service} onChange={(event) => updateForm('service', event.target.value)} data-testid="select-booking-service" className="w-full appearance-none rounded-xl border border-white/10 bg-[#171b24] px-4 py-3.5 text-sm text-[#f4f0e7] outline-none transition-colors focus:border-[#d49c3a]"><option value="" disabled>Choose a service</option><option>Digital Kickstart Bundle</option><option>Professional Website Development</option><option>Basic Website Development</option><option>Google Business Profile Set-up</option><option>Social Media Suite & E-Manager</option></select><ChevronDown size={16} className="pointer-events-none absolute right-4 top-4 text-[#8e96a3]" /></div></label>
              </div>
              {formError && <p role="alert" data-testid="status-booking-error" className="mt-5 text-xs font-semibold text-[#ef9a83]">{formError}</p>}
              {formSent && <p role="status" data-testid="status-booking-sent" className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#8bc29b]"><Check size={15} />Your WhatsApp draft is ready.</p>}
              <button type="submit" data-testid="button-confirm-booking" className="button-lift mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d49c3a] px-5 py-4 text-sm font-bold text-[#171b24] hover:bg-[#e7b45b]">Confirm Booking via WhatsApp <ArrowUpRight size={16} /></button>
              <p className="mt-4 text-center text-[11px] leading-5 text-[#6f7783]">Your details are composed into a WhatsApp message. Nothing is stored here.</p>
            </form>
          </div>
        </section>

        <section id="proof" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div data-reveal className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
              <div><SectionLabel>Local proof</SectionLabel><h2 className="display-face max-w-[570px] text-4xl font-semibold leading-[.95] tracking-[-.06em] text-[#f4f0e7] sm:text-6xl">The kind of support your <span className="text-[#d49c3a]">neighbourhood</span> notices.</h2></div>
              <div className="shrink-0 sm:pb-1"><div className="flex items-center gap-1" aria-label="Four star rating"><Star size={18} fill="#d49c3a" className="text-[#d49c3a]" /><Star size={18} fill="#d49c3a" className="text-[#d49c3a]" /><Star size={18} fill="#d49c3a" className="text-[#d49c3a]" /><Star size={18} fill="#d49c3a" className="text-[#d49c3a]" /><Star size={18} className="text-[#727a85]" /></div><div data-testid="text-rating-badge" className="mt-2 text-xs font-semibold text-[#8e96a3]">4.0/5 Rating from Local Businesses, Cafes & Retail Brands</div></div>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <article key={review.name} data-reveal className={`rounded-2xl border border-white/10 bg-[#1c212b] p-6 ${index === 1 ? 'lg:translate-y-8' : ''}`}>
                  <Quote size={24} className="text-[#d49c3a]" />
                  <p className="mt-8 min-h-[112px] text-sm leading-7 text-[#d8d3c8]">“{review.quote}”</p>
                  <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5"><div className="grid h-10 w-10 place-items-center rounded-full bg-[#d49c3a] text-xs font-bold text-[#171b24]">{review.initials}</div><div><div className="text-sm font-bold text-[#f4f0e7]">{review.name}</div><div className="mt-1 text-xs text-[#8e96a3]">{review.role}</div></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-white/[0.08] bg-[#20252f] px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div data-reveal className="grid gap-12 lg:grid-cols-[1fr_.75fr] lg:gap-24">
              <div><SectionLabel>Open channel</SectionLabel><h2 className="display-face max-w-[650px] text-5xl font-semibold leading-[.9] tracking-[-.07em] text-[#f4f0e7] sm:text-8xl">Let's make<br /><span className="text-[#d49c3a]">noise.</span></h2><p className="mt-8 max-w-[420px] text-sm leading-7 text-[#8e96a3]">Your next customer is already scrolling. Give them a reason to stop.</p><WhatsAppButton className="mt-8"><MessageCircle size={17} />Chat on WhatsApp</WhatsAppButton></div>
              <div className="lg:pt-10">
                <div className="space-y-1 border-y border-white/10 py-2">
                  <a href={`mailto:${EMAIL}`} data-testid="link-email" className="group flex items-center justify-between border-b border-white/10 py-5 text-sm font-semibold text-[#d8d3c8] transition-colors hover:text-[#d49c3a]"><span>{EMAIL}</span><ArrowUpRight size={17} className="text-[#d49c3a] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" data-testid="link-instagram" className="group flex items-center justify-between border-b border-white/10 py-5 text-sm font-semibold text-[#d8d3c8] transition-colors hover:text-[#d49c3a]"><span className="flex items-center gap-3"><Instagram size={17} />@pardus.digital</span><ExternalLink size={16} className="text-[#d49c3a]" /></a>
                  <a href={`mailto:${EMAIL}?subject=Call request for Pardus Digital`} data-testid="link-call-request" className="group flex items-center justify-between py-5 text-sm font-semibold text-[#d8d3c8] transition-colors hover:text-[#d49c3a]"><span className="flex items-center gap-3"><Phone size={17} />Request a direct call</span><ArrowUpRight size={17} className="text-[#d49c3a] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
                </div>
                <div className="mt-8 flex items-center gap-3 text-xs text-[#777f8b]"><span className="h-2 w-2 rounded-full bg-[#8bc29b]" />Founder-led by Shivank · Response via WhatsApp</div>
              </div>
            </div>
            <div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-[11px] text-[#777f8b] sm:flex-row"><div className="display-face font-bold tracking-[0.16em] text-[#f4f0e7]">PARDUS<span className="text-[#d49c3a]">.</span> DIGITAL</div><div>© 2026 Pardus Digital. All rights reserved. | Simple. Scalable. Effective.</div></div>
          </div>
        </section>
      </main>

      <a href={whatsappLink(HERO_MESSAGE)} target="_blank" rel="noreferrer" data-testid="link-whatsapp-sticky" className="button-lift fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full border border-[#d49c3a]/50 bg-[#d49c3a] px-4 py-3 text-xs font-bold text-[#171b24] shadow-[0_10px_30px_rgba(0,0,0,.3)] sm:hidden"><MessageCircle size={16} />WhatsApp</a>
    </div>
  );
}

export default App;
