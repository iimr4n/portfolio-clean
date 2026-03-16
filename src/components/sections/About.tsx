import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            About
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-8 max-w-lg">
            Building the Future,<br />One Line at a Time.
          </h3>

          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            <p>
              I'm a BTech student in AI & Data Science at MEA Engineering College, Kerala. I spend most of my time building real projects — things that actually work, not just coursework exercises.
            </p>
            <p>
              I got into coding because I wanted to create, not just study. Since then I've built a finance education platform, a scheduling app, and this portfolio — all from scratch. I'm comfortable with React and TypeScript on the frontend, and I'm always picking up something new on the backend and AI side.
            </p>
            <p>
              I care about clean code, simple design, and shipping things that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-border pt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">2+</span>
              <span className="text-sm text-muted-foreground mt-1">Years of Coding</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">15+</span>
              <span className="text-sm text-muted-foreground mt-1">Technologies Mastered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">5+</span>
              <span className="text-sm text-muted-foreground mt-1">Projects Built</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
