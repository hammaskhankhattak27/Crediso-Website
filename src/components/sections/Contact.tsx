import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface Person {
  first: string;
  last: string;
  role: string;
  email: string;
  phone: string;
  photo: string;
}

const SARA: Person = {
  first: "Sara Caroline",
  last: "Friedrich",
  role: "Gründerin & CEO",
  email: "hallo@crediso.io",
  phone: "+43 664 889 82395",
  photo: "/assets/images/contact-sara.png",
};

const FRANK: Person = {
  first: "Frank",
  last: "Jesinger",
  role: "Projekt Manager",
  email: "frank@crediso.io",
  phone: "+43 664 237 2902",
  photo: "/assets/images/contact-frank.png",
};

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="w-[260px] max-w-full">
      <img
        src={person.photo}
        alt={`${person.first} ${person.last}`}
        className="aspect-square w-full rounded-full object-cover"
        loading="lazy"
      />
      <h3 className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] text-ink">
        {person.first}
        <br />
        {person.last}
      </h3>
      <div className="mt-3 font-body text-[17px] font-light leading-[30px] text-ink">
        <p>{person.role}</p>
        <p>
          <a href={`mailto:${person.email}`} className="hover:text-teal-deep">
            {person.email}
          </a>
        </p>
        <p>
          <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="hover:text-teal-deep">
            {person.phone}
          </a>
        </p>
      </div>
    </div>
  );
}

export function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="bg-paper-warm section-y">
      <div className="section-shell">
        {/* Heading + form share the left column so the avatars centre against the
            full section height (heading included), like the Figma. */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="lg:max-w-[760px]">
            <h2 className="h-display text-ink">
              Melde dich jetzt!
              <br />
              Wir freuen uns auf dich!
            </h2>

            <form
              className="mt-12 flex flex-col gap-8 lg:max-w-[640px]"
              onSubmit={(e) => e.preventDefault()}
            >
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "E-Mail", type: "email" },
            ].map((field) => (
              <label key={field.id} className="flex flex-col gap-2">
                <span className="font-body text-xl font-medium text-ink">{field.label}</span>
                <input
                  id={field.id}
                  type={field.type}
                  className="border-0 border-b border-ink bg-transparent pb-2 font-body text-lg text-ink focus:border-teal-deep focus:outline-none"
                />
              </label>
            ))}

            <label className="flex flex-col gap-2">
              <span className="font-body text-xl font-medium text-ink">Nachricht</span>
              <textarea
                rows={3}
                className="resize-none border-0 border-b border-ink bg-transparent pb-2 font-body text-lg text-ink focus:border-teal-deep focus:outline-none"
              />
            </label>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-[18px] w-[18px] shrink-0 rounded-[4px] border border-mute accent-teal-deep"
              />
              <span className="font-body text-base leading-relaxed text-ink">
                Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine
                Angaben zur Kontaktaufnahme und für Rückfragen gespeichert werden.
              </span>
            </label>

              <div>
                <Button type="submit" variant="outline">
                  Anfrage senden
                </Button>
              </div>
            </form>
          </div>

          {/* Contact people — staggered circular photos (Figma), group centred horizontally */}
          <div className="flex flex-col items-center gap-12 sm:flex-row sm:items-start sm:justify-center lg:relative lg:ml-auto lg:block lg:h-[580px] lg:w-[510px]">
            {/* Sara — upper left */}
            <div className="lg:absolute lg:left-0 lg:top-0">
              <PersonCard person={SARA} />
            </div>
            {/* Frank — lower right, overlapping */}
            <div className="lg:absolute lg:left-[245px] lg:top-[120px]">
              <PersonCard person={FRANK} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
