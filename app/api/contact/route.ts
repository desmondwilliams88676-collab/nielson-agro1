import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  quantity: z.string().min(1),
  product: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // ====================================================
    // INTEGRATION OPTIONS — uncomment and configure one:
    // ====================================================

    // 1. SendGrid Email
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'sales@nielsonagro.com',
    //   from: 'noreply@nielsonagro.com',
    //   subject: `New Bulk Quote Request: ${data.product} — ${data.company}`,
    //   html: `
    //     <h2>New Fertilizer Quote Request</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Company:</strong> ${data.company}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Phone:</strong> ${data.phone}</p>
    //     <p><strong>Product:</strong> ${data.product}</p>
    //     <p><strong>Quantity:</strong> ${data.quantity}</p>
    //     <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
    //   `,
    // });

    // 2. HubSpot CRM
    // await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     properties: {
    //       email: data.email,
    //       firstname: data.name.split(' ')[0],
    //       lastname: data.name.split(' ').slice(1).join(' '),
    //       phone: data.phone,
    //       company: data.company,
    //     },
    //   }),
    // });

    // 3. Slack webhook notification
    // await fetch(process.env.SLACK_WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     text: `🌱 New fertilizer lead!\n*${data.name}* from *${data.company}*\nProduct: ${data.product} | Qty: ${data.quantity}\n📧 ${data.email} | 📞 ${data.phone}`,
    //   }),
    // });

    // 4. Spreadsheet / Airtable
    // await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Leads`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     fields: {
    //       Name: data.name,
    //       Company: data.company,
    //       Email: data.email,
    //       Phone: data.phone,
    //       Product: data.product,
    //       Quantity: data.quantity,
    //       Message: data.message,
    //       Status: 'New',
    //       Source: 'Website',
    //     },
    //   }),
    // });

    // For now, log to console (replace with real integration above)
    console.log('New lead:', {
      ...data,
      timestamp: new Date().toISOString(),
      source: req.headers.get('referer') || 'website',
    });

    return NextResponse.json(
      { success: true, message: 'Quote request received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try WhatsApp.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Contact API is running.' });
}
