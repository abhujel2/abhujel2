import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate the data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically send an email
    // For example, using a service like SendGrid, Mailgun, etc.
    // For now, we'll just log the data and return a success response

    console.log("Contact form submission:", { name, email, subject, message })

    // In a real application, you would add code like:
    // await sendEmail({ name, email, subject, message })

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

