import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'Iqra AI is running',
    timestamp: new Date().toISOString()
  })
}
