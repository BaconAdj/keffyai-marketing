import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    // Send notification to general@keffyai.com
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Keffy <onboarding@resend.dev>',
        to: 'general@keffyai.com',
        subject: 'New Waitlist Signup',
        html: `
          <h2>New Waitlist Signup</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p><em>Note: User confirmation emails disabled until domain verified</em></p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      throw new Error(`Failed to send email: ${JSON.stringify(errorData)}`);
    }

    // TODO: Re-enable user confirmation after verifying keffyai.com domain in Resend

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}
