export const SAMPLE_POSTS = [
  {
    id: "post-1",
    category: "LOCAL NEWS",
    headline: "Major flooding reported after heavy rainfall",
    shortDescription: "Streets submerged across city districts as emergency services respond to severe monsoon water accumulation.",
    imageUrl: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1200&q=80",
    source: "Regional News Desk • Yesterday",
    claim: "This image shows flooding in Hyderabad on 18 September 2026.",
    isSampleContent: true,
    verification: {
      status: "NOT SUPPORTED",
      statusVariant: "warning",
      summary: "The image is an authentic photograph depicting real urban flooding, but archival records demonstrate this photograph was taken in September 2018, not during current 2026 rainfall.",
      reasons: [
        "Image content is visually consistent with urban floodwater accumulation.",
        "No strong synthetic-image indicators were detected.",
        "The supplied image does not independently establish the claimed date of 18 September 2026.",
        "Available evidence supports the visual claim, but does not fully establish the stated context."
      ],
      findings: [
        {
          title: "Media authenticity",
          status: "Likely authentic",
          statusType: "positive",
          explanation: "The image does not show strong indicators of AI-generated content."
        },
        {
          title: "Claim/image consistency",
          status: "Low consistency",
          statusType: "negative",
          explanation: "The visual content depicts flood conditions, but archival checks refute the asserted date."
        },
        {
          title: "Available contextual evidence",
          status: "Insufficient evidence",
          statusType: "neutral",
          explanation: "No reliable contextual information was available to confirm the stated date."
        },
        {
          title: "Manipulation indicators",
          status: "Low indicators",
          statusType: "positive",
          explanation: "No localized compression variance or image splicing detected."
        }
      ],
      breakdown: {
        what: { label: "Flooding", supported: true, note: "Visual content clearly depicts submerged urban streets" },
        where: { label: "Hyderabad", supported: true, note: "Street furniture and regional landmarks align with Hyderabad" },
        when: { label: "18 September 2026", supported: false, note: "Archive index dates this capture to September 2018" }
      },
      suggestions: [
        "Original source link or initial photographer publication",
        "Capture date and camera timestamp",
        "Official municipal water management logs for 18 September 2026",
        "Independent local news reports from the same day"
      ]
    }
  },
  {
    id: "post-2",
    category: "WORLD",
    headline: "Airport closure leaves thousands stranded",
    shortDescription: "Travel disruptions cascade across passenger terminals following reports of unexpected flight control issues.",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    source: "Global Travel Wire • 3 hours ago",
    claim: "Airport closure leaves thousands stranded due to emergency terminal shutdown today.",
    isSampleContent: true,
    verification: {
      status: "NOT SUPPORTED",
      statusVariant: "warning",
      summary: "While the photo shows a crowded terminal, it was captured during a winter blizzard in 2022 rather than today's alleged operational shutdown.",
      reasons: [
        "The photograph exhibits authentic camera optics with natural lighting and depth.",
        "Passenger attire (heavy winter coats, knit scarves) conflicts with current late-summer conditions.",
        "Airport operational authorities and live flight departure feeds report normal operating capacity today.",
        "Available evidence supports the visual scene of crowding, but contradicts the stated event and date."
      ],
      findings: [
        {
          title: "Media authenticity",
          status: "Likely authentic",
          statusType: "positive",
          explanation: "The image does not show strong indicators of AI-generated content."
        },
        {
          title: "Claim/image consistency",
          status: "Low consistency",
          statusType: "negative",
          explanation: "Seasonal environmental markers contradict the asserted breaking event."
        },
        {
          title: "Available contextual evidence",
          status: "Insufficient evidence",
          statusType: "neutral",
          explanation: "Live civil aviation bulletins indicate regular scheduled flight movements."
        },
        {
          title: "Manipulation indicators",
          status: "Low indicators",
          statusType: "positive",
          explanation: "No digital tampering or artificial composite layers identified."
        }
      ],
      breakdown: {
        what: { label: "Airport closure / crowding", supported: true, note: "Terminal crowd concentration is visible" },
        where: { label: "Airport Terminal", supported: true, note: "Terminal layout matches major international hub" },
        when: { label: "Today (Shutdown)", supported: false, note: "Disproved by live flight tracking and seasonal weather" }
      },
      suggestions: [
        "Official aviation authority operational status bulletin",
        "Live flight tracker telemetry from FlightRadar24 or FlightAware",
        "High-resolution file with intact EXIF capture timestamp",
        "Original source link from primary reporting agency"
      ]
    }
  },
  {
    id: "post-3",
    category: "ENVIRONMENT",
    headline: "Massive wildfire spreads across the region",
    shortDescription: "Dense plumes of smoke rise above mountain ridges as dry conditions fuel fast-moving forest blazes.",
    imageUrl: "https://images.unsplash.com/photo-1602980085566-4c28f0003058?auto=format&fit=crop&w=1200&q=80",
    source: "Climate Incident Desk • 5 hours ago",
    claim: "Massive wildfire spreads across Northern California this morning.",
    isSampleContent: true,
    verification: {
      status: "INSUFFICIENT EVIDENCE",
      statusVariant: "neutral",
      summary: "The image displays authentic smoke over a coniferous ridge, but lacks distinctive geographical landmarks or metadata to independently corroborate the specific California location.",
      reasons: [
        "The photograph appears authentic with no synthetic generation signatures detected.",
        "The visual depicts smoke over forested mountain ridges, but contains no unique terrain markers.",
        "Web-uploaded file metadata has been stripped, precluding automated GPS coordinate extraction.",
        "Available evidence supports the visual claim of wildfire smoke, but does not independently establish the location or date."
      ],
      findings: [
        {
          title: "Media authenticity",
          status: "Likely authentic",
          statusType: "positive",
          explanation: "The image does not show strong indicators of AI-generated content."
        },
        {
          title: "Claim/image consistency",
          status: "Moderate consistency",
          statusType: "neutral",
          explanation: "Wildfire smoke is visually present, but specific regional anchors cannot be corroborated."
        },
        {
          title: "Available contextual evidence",
          status: "Insufficient evidence",
          statusType: "neutral",
          explanation: "No reliable contextual information was available to confirm the stated location or date."
        },
        {
          title: "Manipulation indicators",
          status: "Low indicators",
          statusType: "positive",
          explanation: "Continuous optical exposure and uniform compression across the image."
        }
      ],
      breakdown: {
        what: { label: "Wildfire smoke", supported: true, note: "Smoke plume rising above mountain terrain is verified" },
        where: { label: "Northern California", supported: null, note: "Generic ridge without verifiable geographic landmark" },
        when: { label: "This morning", supported: null, note: "No verifiable timestamp available in image file" }
      },
      suggestions: [
        "CAL FIRE or state emergency agency incident incident boundary coordinate",
        "Satellite thermal hotspot sensor telemetry (MODIS / VIIRS)",
        "Original uncompressed image with intact EXIF GPS tags",
        "Secondary camera angle or ground-level reference photo"
      ]
    }
  },
  {
    id: "post-4",
    category: "CURRENT AFFAIRS",
    headline: "Thousands gather at weekend rally",
    shortDescription: "Crowd perspectives capture dense civic concentrations extending through metropolitan avenues.",
    imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80",
    source: "Civic Watch • Weekend Edition",
    claim: "Thousands gather at weekend rally surrounding the Eiffel Tower in Paris.",
    isSampleContent: true,
    verification: {
      status: "LIKELY MANIPULATED",
      statusVariant: "negative",
      summary: "Detailed inspection reveals strong indicators of synthetic generative AI generation, including distorted facial morphology and pseudo-alphabetic characters on crowd placards.",
      reasons: [
        "High synthetic generation indicators detected across crowd members and background structures.",
        "Peripheral placards and banners display simulated glyphs rather than readable text.",
        "Municipal surveillance cameras and municipal authorities record no authorized gathering at this location on the specified date.",
        "The underlying media is artificial; visual correlation with the claim is procedurally synthesized."
      ],
      findings: [
        {
          title: "Media authenticity",
          status: "Likely synthetic",
          statusType: "negative",
          explanation: "Image exhibits generative diffusion smoothing and anatomical warping characteristic of AI generators."
        },
        {
          title: "Claim/image consistency",
          status: "Thematic match only",
          statusType: "neutral",
          explanation: "The visual scene illustrates the prompt theme, but the media itself is synthetic."
        },
        {
          title: "Available contextual evidence",
          status: "Contradiction detected",
          statusType: "negative",
          explanation: "Official public records confirm no mass gathering occurred at the asserted site."
        },
        {
          title: "Manipulation indicators",
          status: "High indicators",
          statusType: "negative",
          explanation: "Frequency spectrum irregularities and micro-warping indicate synthetic image generation."
        }
      ],
      breakdown: {
        what: { label: "Mass rally", supported: false, note: "Synthesized crowd representation, not authentic assembly" },
        where: { label: "Eiffel Tower, Paris", supported: false, note: "AI-rendered architectural backdrop" },
        when: { label: "Weekend", supported: false, note: "No corresponding real-world event registered" }
      },
      suggestions: [
        "Verified news wire photo agencies (Reuters, AP, AFP)",
        "Municipal police department official crowd estimates and event logs",
        "Raw camera sensor file with original cryptographic provenance",
        "Independent broadcast television coverage from the scene"
      ]
    }
  }
];
