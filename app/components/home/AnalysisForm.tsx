// app/components/home/AnalysisForm.tsx

import { Section } from "../core/Section"
import { Card } from "../surface/Card"

import { SectionTitle } from "../typography/SectionTitle"
import { BodyText } from "../typography/BodyText"

import { Button } from "../interactive/Button"
import { Input } from "../interactive/Input"
import { Select } from "../interactive/Select"

export function AnalysisForm() {
  return (
    <Section className="fade-in">

      <SectionTitle>
        Schedule Your
        <br />
        Complimentary
        <br />
        Analysis
      </SectionTitle>

      <BodyText>
        No-pressure consultation designed to help homeowners
        better understand their water.
      </BodyText>

      <Card className="formCard">

        <Input
          type="text"
          placeholder="Full Name"
        />

        <Input
          type="text"
          placeholder="Phone Number"
        />

        <Input
          type="email"
          placeholder="Email Address"
        />

        <Input
          type="text"
          placeholder="City"
        />

        <Select>
          <option>Select Water Type</option>
          <option>City Water</option>
          <option>Well Water</option>
        </Select>

        <Button>
          Schedule My Complimentary Analysis
        </Button>

      </Card>

    </Section>
  )
}