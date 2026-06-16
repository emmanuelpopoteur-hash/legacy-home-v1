// app/components/home/Hero.tsx

import { Display } from "../typography/Display"
import { BodyText } from "../typography/BodyText"
import { Eyebrow } from "../typography/Eyebrow"

export function Hero() {
  return (
    <section className="hero fade-in">

      {/* LOGO */}
      <div className="logoWrapper">
        <img
          src="/logo.png"
          alt="Legacy Water USA"
          className="logo"
        />
      </div>

      {/* EYEBROW */}
      <Eyebrow>
        LEGACY WATER USA
      </Eyebrow>

      {/* TITLE */}
      <Display>
        Florida Water
        <br />
        Analysis
      </Display>

      {/* DESCRIPTION */}
      <BodyText>
        Professional complimentary water evaluation
        for Florida homeowners.

        Understand your water quality, appliance impact,
        chlorine exposure, hard water conditions,
        and whole-home treatment options powered
        by premium Ecoverse technology.
      </BodyText>

      {/* SUBTEXT */}
      <div className="subtext">
        CALM • PROFESSIONAL • NO-PRESSURE CONSULTATION
      </div>

      {/* TAGS */}
      <div className="tags">

        <div className="tag">
          ✓ Florida Homeowners
        </div>

        <div className="tag">
          ✓ Complimentary Evaluation
        </div>

        <div className="tag">
          ✓ Ecoverse Technology
        </div>

        <div className="tag">
          ✓ Whole-Home Solutions
        </div>

      </div>

    </section>
  )
}