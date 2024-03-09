import { HoverEffect } from "./card-hover-effect";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "AEENI",
    description:
      "The ENI Student Association advocates for student interests and community at the National School of Computer Science. It fosters student well-being and engagement through events, academic support, and professional development opportunities.",
    link: "https://web.facebook.com/groups/162416697294083",
  },
  {
    title: "C2E",
    description:
      "The mission of the members and participants at C2E is to collaborate on discovering new technologies and supporting each other in mastering them.",
    link: "https://web.facebook.com/groups/706965416092464",
  },
  {
    title: "C3LF",
    description:
      "The 'Club Linux et Logiciels Libres de Fianarantsoa' is a dynamic space where students can explore, learn, and collaborate in the field of free software and Linux, while also contributing to the spread of these technologies within their community.",
    link: "https://web.facebook.com/groups/46262023721",
  },
  {
    title: "Cyber security",
    description:
      "A cybersecurity club provides an environment conducive to learning, practicing, and exchanging ideas in the field of computer security, while also contributing to enhancing resilience against cyber threats.",
    link: "https://meta.com",
  },
  {
    title: "GBUF",
    description:
      "The GBUF provides students in Fianarantsoa with a space where they can cultivate their faith, develop friendships, and engage in spiritual and social activities that enrich their university experience and encourage them in their spiritual journey.",
    link: "https://web.facebook.com/profile.php?id=100093498289880",
  },
  {
    title: "ENI Dance",
    description:
      "A dance club unites students who share a passion for dance, catering to both novices and experienced dancers. It provides a vibrant setting for self-expression, experimentation with diverse dance styles and routines, and fosters social connections within the university community.",
    link: "https://web.facebook.com/profile.php?id=100084811088902",
  },
];
