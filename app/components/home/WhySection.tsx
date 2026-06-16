// app/components/home/WhySection.tsx

import { Section } from "../core/Section"

import { SectionTitle } from "../typography/SectionTitle"
import { BodyText } from "../typography/BodyText"

import { Card } from "../surface/Card"

export function WhySection() {
  return (
    <Section className="fade-in">

      {/* TITLE */}
      <SectionTitle>
        Why Florida Homeowners
        <br />
        Request A Water
        <br />
        Analysis
      </SectionTitle>

      {/* DESCRIPTION */}
      <BodyText>
        Many Florida families experience hard water buildup,
        chlorine exposure, appliance wear, dry skin,
        mineral staining, sulfur odor, and poor-tasting water
        without fully understanding how water quality impacts
        daily life throughout the home.
      </BodyText>

      {/* ISSUE GRID */}
      <div className="issuesGrid">

        <Card className="issueCard">
          ✓ White buildup around faucets and shower glass
        </Card>

        <Card className="issueCard">
          ✓ Dry skin and dull hair after showering
        </Card>

        <Card className="issueCard">
          ✓ Chlorine smell or unpleasant water taste
        </Card>

        <Card className="issueCard">
          ✓ Appliance wear and water heater stress
        </Card>

        <Card className="issueCard">
          ✓ Spots on dishes, sinks, and countertops
        </Card>

        <Card className="issueCard">
          ✓ Well water sulfur, iron, or sediment concerns
        </Card>

      </div>

    </Section>
  )
}