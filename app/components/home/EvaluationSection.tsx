// app/components/home/EvaluationSection.tsx

import { Section } from "../core/Section"
import { Card } from "../surface/Card"

import { SectionTitle } from "../typography/SectionTitle"
import { BodyText } from "../typography/BodyText"

export function EvaluationSection() {
  return (
    <Section className="fade-in">

      <SectionTitle>
        What We Evaluate
      </SectionTitle>

      <BodyText>
        Our complimentary evaluation helps homeowners better understand
        water quality conditions throughout the home.
      </BodyText>

      <div className="cardsGrid">

        <Card className="infoCard">
          <h3>Hard Water</h3>

          <p>
            Understand mineral buildup affecting appliances,
            plumbing and daily comfort.
          </p>
        </Card>

        <Card className="infoCard">
          <h3>Chlorine</h3>

          <p>
            Evaluate common city-water chlorine exposure
            throughout the home.
          </p>
        </Card>

        <Card className="infoCard">
          <h3>Well Water</h3>

          <p>
            Identify sulfur, iron, sediment and other
            well-water concerns.
          </p>
        </Card>

        <Card className="infoCard">
          <h3>Drinking Water</h3>

          <p>
            Explore healthier, better-tasting water
            solutions for everyday use.
          </p>
        </Card>

      </div>

    </Section>
  )
}