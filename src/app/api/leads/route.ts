import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { naam, email, telefoon } = body
    if (!naam || !email || !telefoon) {
      return NextResponse.json(
        { error: 'Naam, email en telefoon zijn verplicht' },
        { status: 400 }
      )
    }

    // For now, just log the lead (later: save to Payload CMS)
    console.log('New lead received:', {
      naam: body.naam,
      bedrijf: body.bedrijf,
      email: body.email,
      telefoon: body.telefoon,
      eventType: body.eventType,
      eventDatum: body.eventDatum,
      schermformaat: body.schermformaat,
      locatie: body.locatie,
      bericht: body.bericht,
      bron: {
        pagina: body.pagina,
        utmSource: body.utmSource,
        utmMedium: body.utmMedium,
        utmCampaign: body.utmCampaign,
      },
      createdAt: new Date().toISOString(),
    })

    // TODO: Save to Payload CMS when database is connected
    // const payload = await getPayload({ config })
    // await payload.create({
    //   collection: 'leads',
    //   data: { ... }
    // })

    // TODO: Send email notifications
    // await sendAdminNotification(body)
    // await sendClientConfirmation(body)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Er ging iets mis bij het verwerken van je aanvraag' },
      { status: 500 }
    )
  }
}
