import Logo from "./components/icons/logo";
import Button from "./components/ui/button";

const works = [
  {
    name: "Salience Labs",
    work: ["Brand Identity", "Pitch Deck"],
  },
  {
    name: "Cardboard Spaceship",
    work: ["Branded Template", "Sales Deck", "Social Media Template"],
  },
];

const footerLinks: { M: string[]; S: string[]; L: string[] } = {
  M: ["Home", "Services", "Our work", "About us", "Insights", "Contact us"],
  S: ["Instagram", "Behance", "Facebook", "Linkedin"],
  L: ["202-1965 W 4th Ave Vancouver, Canada", "30 Chukarina St. Lviv, Ukraine"],
};

type FooterLinkKey = keyof typeof footerLinks;

const review = {
  company: "Karman Ventures",
  name: "William Barnes",
  review:
    "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
  services: ["Investor deck", "Sales deck"],
};

const App = () => {
  return (
    <main>
      {/* HEADER */}
      <header className="h-[10vh] px-4 py-4">
        <nav className="flex items-center">
          <a href="#">
            <Logo />
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="h-[90vh]">
        <div className="h-13/20 border-b px-4">
          <h1 className="font-founders mt-6 text-7xl leading-[0.8] font-semibold uppercase">
            We create eye-opening presentations
          </h1>
        </div>
        <div className="mt-6 space-y-6 px-4">
          <p>For public and private companies</p>
          <p>From the first pitch to IPO</p>
          <Button>Start the project</Button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="rounded-xl bg-lime-300">
        <h1 className="border-b px-4 py-14 text-3xl">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          {[
            "raise funds",
            "sell products",
            "explain complex ideas",
            "hire great people",
          ].map((item, index) => (
            <span key={item}>{index !== 3 ? `${item}, ` : `and ${item}.`}</span>
          ))}
        </h1>
        <div className="pt-4 pb-16">
          <div className="w-3/5 space-y-8 px-4">
            <p>What you can expect:</p>
            <p>
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
            <p>S:</p>
            <div className="space-y-1">
              {footerLinks.S.map((link) => (
                <a
                  key={link}
                  className="block underline underline-offset-2"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section>
        <h1 className="border-b px-4 py-10 text-3xl">Featured Works</h1>
        <div className="px-4 py-10">
          {works.map((work) => (
            <div key={work.name} className="mb-6">
              <div className="flex items-center gap-x-2">
                <span className="size-3 rounded-full bg-black" />
                <h4 className="uppercase">{work.name}</h4>
              </div>
              <div className="mt-2 h-72 w-full rounded-md bg-purple-600"></div>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {work.work.map((item) => (
                  <Button key={item}>{item}</Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section>
        <h1 className="border-b px-4 py-6 text-3xl">Client&#39;s Reviews</h1>
        <div className="mt-6 flex items-center justify-between px-4">
          <h4 className="underline underline-offset-2">{review.company}</h4>
          <a href="#">Read</a>
        </div>
        <div className="mt-10 px-4">
          <h6>Services:</h6>
          <div className="mt-3 space-x-2.5">
            {review.services.map((service) => (
              <Button key={service}>{service}</Button>
            ))}
          </div>
        </div>
        <div className="mt-8 space-y-4 px-4">
          <h6>{review.name}</h6>
          <div className="size-18 rounded-lg bg-black">
            {/* IMAGE GOES HERE */}
          </div>
          <p>{review.review}</p>
        </div>
        <div className="mt-10 flex flex-col *:border-t last:border-b">
          {[
            "Planetly",
            "Workiz Easy",
            "Premium Blend",
            "Hypercare",
            "Officevibe",
            "Orderlion",
            "Black Book",
            "Trawa Energy",
          ].map((work) => (
            <div
              key={work}
              className="flex items-center justify-between px-4 py-4 underline underline-offset-2"
            >
              <a href="#">{work}</a>
              <a href="#" className="uppercase">
                Read
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20">
        <h1 className="font-founders w-1/2 px-4 text-7xl leading-[0.75] font-semibold uppercase">
          eye-opening presentations
        </h1>
        <div className="mt-16 grid grid-cols-2 gap-y-12 px-4">
          {Object.keys(footerLinks).map((key, pidx) => (
            <div key={key}>
              <p>{`${key}:`}</p>
              <div className="mt-6">
                {footerLinks[key as FooterLinkKey].map((link, cidx) => (
                  <a
                    key={link}
                    className={`block underline underline-offset-2 ${pidx === Object.keys(footerLinks).length - 1 && cidx === 1 ? "my-4" : ""}`}
                    href="#"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 px-4">
          <Logo />
          <small className="mt-14 block text-base">
            © ochi design 2025. Legal Terms
          </small>
        </div>
      </footer>
    </main>
  );
};

export default App;
